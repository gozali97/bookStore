<?php

namespace App\Http\Controllers;

use App\Events\InvoicePaid;
use App\Models\Cart;
use App\Models\Invoice;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Carbon\Carbon;
use Illuminate\Support\Facades\Log;
use App\Enums\InvoiceStatus;

class PaymentNotificatiionController extends Controller
{
    public function hit(Request $request){

        try {
            $invoice = Invoice::where('order_id', $request->order_id)->first();
            //SHA512(order_id+status_code+gross_amount+ServerKey)
            $signature_key = hash('sha512', $request->order_id . $request->status_code . $invoice->gross_amount . '.00' . config('services.midtrans.server_key'));

            if ($request->signature_key == $signature_key) {
                if($request->transaction_status == 'settlement'){
                    $invoice->update([
                        'status' => $request->transaction_status,
                        'succeeded_at' => $request->settlement_time,
                    ]);

                    $cartIds = json_decode($invoice->cart_ids, true);

                    if (!is_array($cartIds)) {
                    } else {
                        $cartQuery = Cart::query()->whereIn('id', $cartIds);
//                    Cart::whereIn('id', $cartIds)->update([
//                        'paid_at' => Carbon::now()->toDateTimeString(),
//                    ]);
                        $cartQuery->update([
                            'paid_at' => Carbon::now()->toDateTimeString(),
                        ]);

                        $product_ids = $cartQuery->pluck('product_id');
                        $user = User::find($invoice->user_id);
                        $user->products()->attach($product_ids);
                    }
                    broadcast(new InvoicePaid($invoice));
                    Cache::flush();
                }
//               Cache::forget('carts_global_count');
            }
        }catch (\Exception $e) {
            Log::error('Error notif: ' . $e->getMessage());
        }

    }

}
