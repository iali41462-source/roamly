<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreBookingRequest;
use App\Http\Requests\UpdateBookingRequest;
use App\Http\Resources\BookingResource;
use App\Models\Booking;
use Illuminate\Http\Request;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use App\Http\Requests\UpdateBookingStatusRequest;


class BookingController extends Controller
{
    use AuthorizesRequests;
    /**
     * Display the authenticated user's bookings.
     */
    public function index(Request $request)
    {
        $bookings = Booking::where('user_id', $request->user()->id)
            ->with('trip.destination')
            ->latest()
            ->get();

        return BookingResource::collection($bookings);
    }


    /**
     * Store a newly created booking.
     */
    public function store(StoreBookingRequest $request)
    {
        $booking = Booking::create([
            'user_id' => $request->user()->id,
            'trip_id' => $request->validated()['trip_id'],
            'travel_date' => $request->validated()['travel_date'],
            'travelers' => $request->validated()['travelers'],
            'message' => $request->validated()['message'] ?? null,
        ]);

        $booking->load('trip.destination');

        return (new BookingResource($booking))
            ->additional([
                'message' => 'Booking created successfully.',
            ])
            ->response()
            ->setStatusCode(201);
    }


    /**
     * Display the specified booking.
     */
public function show(Booking $booking)
{
    $this->authorize('view', $booking);

    $booking->load('trip.destination');

    return new BookingResource($booking);
}


    /**
     * Update the specified booking.
     */
    public function update(
        UpdateBookingRequest $request,
        Booking $booking
    ) {


        $booking->update(
            $request->validated()
        );

        $booking->load('trip.destination');

        return (new BookingResource($booking))
            ->additional([
                'message' => 'Booking updated successfully.',
            ]);
    }
    // status change method
    public function changeStatus(
    UpdateBookingStatusRequest $request,
    Booking $booking
) {
    $this->authorize('changeStatus', $booking);

    $booking->update([
        'status' => $request->validated()['status'],
    ]);

    $booking->load('trip.destination');

    return (new BookingResource($booking))
        ->additional([
            'message' => 'Booking status updated successfully.',
        ]);
}


    /**
     * Remove the specified booking.
     */
    public function destroy(Request $request, Booking $booking)
    {

        $booking->delete();

        return response()->json([
            'success' => true,
            'message' => 'Booking deleted successfully.',
        ]);
    }
}
