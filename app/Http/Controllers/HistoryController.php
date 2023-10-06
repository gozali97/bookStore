<?php

namespace App\Http\Controllers;

use App\Http\Resources\CartResource;
use App\Http\Resources\HistoryResource;
use App\Models\Cart;
use Illuminate\Http\Request;

class HistoryController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        $carts = Cart::query()
            ->whereBelongsTo($request->user())
        ->latest()
            ->paginate()
        ->withQueryString();

        return inertia('History/Index',[
            'carts' => HistoryResource::collection($carts),
        ]);
    }
}
