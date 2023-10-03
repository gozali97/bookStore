<?php

use App\Http\Controllers\CartController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProductController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\InvoiceController;
use App\Http\Controllers\PaymentNotificatiionController;

Route::get('/', HomeController::class)->name('home');

Route::middleware('auth')->group(function () {
    Route::post('invoice', [InvoiceController::class, 'store'])->name('invoice.store');
    Route::get('invoice/{invoice:order_id}', [InvoiceController::class, 'show'])->name('invoice.show');

    Route::get('carts', [CartController::class, 'index'])->name('carts.index');
    Route::delete('carts/delete/{cart}', [CartController::class, 'destroy'])->name('carts.destroy');
    Route::post('carts/add-to-cart/{product:slug}', [CartController::class, 'store'])->name('cart.store');
    Route::resource('products', ProductController::class);

    Route::get('/dashboard', DashboardController::class)->name('dashboard');
});

Route::post('/api/notification/handling', [PaymentNotificatiionController::class, 'hit']);

require __DIR__ . '/auth.php';
