<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;

class UserProductResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'nama_produk' => $this->nama_produk,
            'slug' => $this->slug,
            'harga' => $this->harga,
            'url' => $this->url,
            'gambar_produk' => $this->gambar_produk ? Storage::url($this->gambar_produk) : 'https://fakeimg.pl/200x200/?text=Image',
            'category' => $this->category
                ? [
                    'id' => $this->category->id,
                    'nama_kategori' => $this->category->nama_kategori,
                    'slug' => $this->category->slug
                ]
                : null,
        ];
    }
}
