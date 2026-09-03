<?php

use App\Http\Controllers\Api\DestinationController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\TripController;
use App\Http\Controllers\Api\BookingController;
use App\Http\Controllers\Api\AuthController;
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

Route::apiResource('destinations', DestinationController::class);
Route::apiResource('trips', TripController::class);
// protected routes for bookings
Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);
        Route::patch('/bookings/{booking}/status', [BookingController::class, 'changeStatus'])
        ->name('bookings.changeStatus');
    Route::apiResource('bookings', BookingController::class);

});

