<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Booking;
use Safepay\SafepayClient;
use Safepay\Checkout;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Http\Request;


class PaymentController extends Controller
{
    use AuthorizesRequests;
    public function createPayment(Booking $booking)
    {
        // Make sure this booking belongs to logged-in user
        $this->authorize('view', $booking);

        // Load trip
        $booking->load('trip');

        // Calculate total amount
        $totalAmount = $booking->trip->price * $booking->travelers;

        // Safepay uses lowest denomination
        $amount = (int) round($totalAmount * 100);

        // Create Safepay client
        $safepay = new SafepayClient([
            'api_key' => config('services.safepay.secret_key'),
            'api_base' => config('services.safepay.api_url'),
        ]);

        // Create payment session
        $tracker = $safepay->order->setup([
            'merchant_api_key' => config('services.safepay.public_key'),
            'intent' => 'CYBERSOURCE',
            'mode' => 'payment',
            'currency' => 'PKR',
            'amount' => $amount,
        ]);

        // Create authentication token
        $tbt = $safepay->passport->create();

        // Get tracker token
        $trackerToken = $tracker->tracker->token;

        // Generate Safepay checkout URL
        $checkoutUrl = Checkout::constructURL([
            'environment' => 'sandbox',
            'tracker' => $trackerToken,
            'tbt' => $tbt->token,
            'source' => 'hosted',
            'redirect_url' =>
                config('app.frontend_url') . '/payment/success',
            'cancel_url' =>
                config('app.frontend_url') . '/payment/cancel',
        ]);

        // Save payment information
        $booking->update([
            'payment_status' => 'pending',
            'payment_tracker' => $trackerToken,
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Payment session created successfully.',
            'checkout_url' => $checkoutUrl,
        ]);
    }
    public function webhook(Request $request)
{
    \Log::info('Safepay Webhook Received', [
        'payload' => $request->all(),
        'msg' => "log ban gaya",
    ]);

    return response()->json([
        'success' => true,
        'message' => 'Webhook received.',
    ]);
}
}
