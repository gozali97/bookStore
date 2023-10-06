<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;

class ProductSingleResource extends JsonResource
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
            'deskripsi' => $this->deskripsi,
            'gambar_produk' => $this->gambar_produk ? Storage::url($this->gambar_produk) : 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Ym9va3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
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
