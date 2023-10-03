<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class InvoiceController extends Controller
{
    public function store(Request $request){
        $total = (int) $request->total;
        $cart_ids = $request->collect('carts')->pluck('id');

        $order_id = 'order-'.now()->format('Y').$request->user()->id.$cart_ids->implode('');

        Auth::user()->invoices()->updateOrCreate(compact('order_id'), [
            'order_id' => $order_id,
            'gross_amount' => $total,
            'cart_ids' => $cart_ids,
            'payment_type' => $request->payment_type,
        ]);

        return back();
    }
}
