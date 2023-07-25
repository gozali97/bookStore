<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProductController;
use Illuminate\Support\Facades\Route;

Route::get('/', HomeController::class)->name('home');

Route::middleware('auth')->group(function () {
    Route::resource('products', ProductController::class);

    Route::get('/dashboard', DashboardController::class)->name('dashboard');
});

require __DIR__ . '/auth.php';
