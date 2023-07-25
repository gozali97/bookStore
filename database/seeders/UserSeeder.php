<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        collect([
            [
                'name' => 'ahmad',
                'email' => 'ahmad@gmail.com',
                'email_verified_at' => now(),
                'password' => bcrypt('password'),
            ],
            [
                'name' => 'adi',
                'email' => 'adi@gmail.com',
                'email_verified_at' => now(),
                'password' => bcrypt('password'),
            ],
        ])->each(fn ($q) => User::create($q));
    }
}
