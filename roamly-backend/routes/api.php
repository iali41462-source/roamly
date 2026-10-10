<?php

use App\Http\Controllers\Api\DestinationController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\TripController;
use App\Http\Controllers\Api\BookingController;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\PaymentController;

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::post('/forgot-password', [AuthController::class, 'forgotPassword']);
Route::post('/reset-password', [AuthController::class, 'resetPassword']);

Route::apiResource('destinations', DestinationController::class);
Route::apiResource('trips', TripController::class);
// protected routes for bookings
Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::patch('/bookings/{booking}/status', [BookingController::class, 'changeStatus'])
        ->name('bookings.changeStatus');
    Route::apiResource('bookings', BookingController::class);
    Route::post('/bookings/{booking}/payment',[PaymentController::class, 'createPayment']);
    Route::post('/safepay/webhook',[PaymentController::class, 'webhook']);
});
