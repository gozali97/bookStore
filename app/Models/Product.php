<?php

namespace App\Models;

use App\Traits\hasManyCarts;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;
    use hasManyCarts;

    protected $guarded = [];

    public function category()
    {
        return $this->belongsTo(Category::class, 'kategori_id');
    }

    public function getRouteKeyName()
    {
        return 'slug';
    }
}
