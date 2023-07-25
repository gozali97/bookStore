<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'kategori_id' => rand(1, 5),
            'nama_produk' => $name = str($this->faker->sentence(4))->title(),
            'slug' => str($name)->slug(),
            'harga' => rand(1000, 10000),
            'url' => $this->faker->url(),
            'deskripsi' => $this->faker->sentence(10),
        ];
    }
}
