<?php

namespace App\Traits;

use App\Models\Cart;

trait hasManyCarts
{

    public function carts()
    {
        return $this->hasMany(Cart::class);
    }
}
