<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        collect([
            [
                'nama_kategori' => $name = 'IT',
                'slug' => str($name)->slug(),
            ],
            [
                'nama_kategori' => $name = 'Manajemen',
                'slug' => str($name)->slug(),
            ],
            [
                'nama_kategori' => $name = 'Akutansi',
                'slug' => str($name)->slug(),
            ],
            [
                'nama_kategori' => $name = 'English',
                'slug' => str($name)->slug(),
            ],
            [
                'nama_kategori' => $name = 'SI',
                'slug' => str($name)->slug(),
            ],
        ])->each(fn ($q) => Category::create($q));
    }
}
