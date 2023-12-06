<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProductResource;
use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\Request;

class HomeController extends Controller
{

    public function __invoke(Request $request)
    {
        $products = Product::query()
            ->with('category')
            ->when($request->category, fn ($q, $v) => $q->whereBelongsTo(Category::where('slug', $v)->first()))
            ->select(
                'id',
                'nama_produk',
                'slug',
                'harga',
                'gambar_produk',
                'kategori_id'
            )
            ->paginate(12)
            ->withQueryString();

        return inertia('Home',[
            'products' => ProductResource::collection($products),
        ]);
    }
}
