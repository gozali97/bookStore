<?php

namespace App\Http\Controllers;

use App\Models\Invoice;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Http;

class InvoiceController extends Controller
{
    public function store(Request $request){
        $total = (int) $request->total;
        $cart_ids = $request->collect('carts')->pluck('id');

//        $order_id = 'order-'.'12415151'.$request->user()->id.$cart_ids->implode('');
        $order_id = 'order-'.now()->format('Y').$request->user()->id.$cart_ids->implode('');

        $invoiceExists = Invoice::where('order_id', $order_id)->firstOr(fn () => false);

        if($invoiceExists){
            return to_route('invoice.show', $invoiceExists);

        }else{
            $invoice =   Auth::user()->invoices()->updateOrCreate(compact('order_id'), [
                'order_id' => $order_id,
                'gross_amount' => $total,
                'cart_ids' => $cart_ids,
                'payment_type' => $request->payment_type,
            ]);

            if($request->payment_type == 'gopay'){
                $payment_type = $request->payment_type;
            }else {
                $payment_type = 'bank_transfer';
            }

            $data = [
                'payment_type' => $payment_type,
                'transaction_details' => [
                    'gross_amount' => $total,
                    'order_id' => $order_id,
                ],
                'customer_details' => [
                    'email' => $request->user()->email,
                    'first_name' => $request->user()->name,
                ],
                'item_details' => $request->collect('carts')->map(fn ($item)=>[
                    'id' => $item['id'],
                    'price' => (int) round((11/100) * $item['price'], 0) + $item['price'],
                    'quantity' => 1,
                    'name' => $item['product']['name'],
                ]),
            ];

            if ($payment_type == 'bank_transfer') {
                $data['bank_transfer'] = [
                    'bank' => $request->payment_type,
                    'va_number' => '12345678901',
                    'free_text' => [
                        'inquiry' => [
                            [
                                'id' => 'Segera lakukan pembayaran',
                                'en' => 'Make the payment promptly.',
                            ],
                        ],
                        'payment' => [
                            [
                                'id' => 'Pembayaran berhasil',
                                'en' => 'Your payment is successfull',
                            ],
                        ],
                    ],
                ];
            }

                    $response = Http::withBasicAuth(config('services.midtrans.server_key') . ':', '')
             ->post('https://api.sandbox.midtrans.com/v2/charge', $data);
            dd($response->json());


            $response->json();
        }

        return back();
    }

    public function show(Invoice $invoice){
        return $invoice;
    }
}
