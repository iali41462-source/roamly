<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreTripRequest;
use App\Http\Requests\UpdateTripRequest;
use App\Http\Resources\TripResource;
use App\Models\Trip;

class TripController extends Controller
{
    /**
     * Display a listing of trips.
     */
    public function index()
    {
        $trips = Trip::with('destination')
            ->latest()
            ->get();

        return TripResource::collection($trips);
    }


    /**
     * Store a newly created trip.
     */
    public function store(StoreTripRequest $request)
    {
        $trip = Trip::create(
            $request->validated()
        );

        $trip->load('destination');

        return (new TripResource($trip))
            ->additional([
                'message' => 'Trip created successfully.',
            ])
            ->response()
            ->setStatusCode(201);
    }


    /**
     * Display the specified trip.
     */
    public function show(Trip $trip)
    {
        $trip->load('destination');

        return new TripResource($trip);
    }


    /**
     * Update the specified trip.
     */
    public function update(
        UpdateTripRequest $request,
        Trip $trip
    ) {
        $trip->update(
            $request->validated()
        );

        $trip->load('destination');

        return (new TripResource($trip))
            ->additional([
                'message' => 'Trip updated successfully.',
            ]);
    }


    /**
     * Remove the specified trip.
     */
    public function destroy(Trip $trip)
    {
        $trip->delete();

        return response()->json([
            'success' => true,
            'message' => 'Trip deleted successfully.',
        ]);
    }
}
