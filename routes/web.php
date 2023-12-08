<?php

use App\Http\Controllers\AboutController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\InvoiceController;
use App\Http\Controllers\PaymentNotificatiionController;
use App\Http\Controllers\HistoryController;

Route::get('/', HomeController::class)->name('home');
Route::get('/about', [AboutController::class, 'index'])->name('about');
Route::get('/contact', [ContactController::class, 'index'])->name('contact');


Route::get('/products/me', [ProductController::class, 'mine'])->middleware('auth')->name('products.mine');
Route::resource('products', ProductController::class);


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::post('invoice', [InvoiceController::class, 'store'])->name('invoice.store');
    Route::get('invoice/{invoice:order_id}', [InvoiceController::class, 'show'])->name('invoice.show');

    Route::get('history', HistoryController::class)->name('history');

    Route::get('carts', [CartController::class, 'index'])->name('carts.index');
    Route::delete('carts/delete/{cart}', [CartController::class, 'destroy'])->name('carts.destroy');
    Route::post('carts/add-to-cart/{product:slug}', [CartController::class, 'store'])->name('cart.store');

    Route::get('/dashboard', DashboardController::class)->name('dashboard');
});

Route::post('/api/notification/handling', [PaymentNotificatiionController::class, 'hit']);

require __DIR__ . '/auth.php';
