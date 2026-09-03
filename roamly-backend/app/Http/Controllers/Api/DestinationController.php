<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreDestinationRequest;
use App\Http\Requests\UpdateDestinationRequest;
use App\Http\Resources\DestinationResource;
use App\Models\Destination;

class DestinationController extends Controller
{
    /**
     * Display a listing of destinations.
     */
    public function index()
    {
        $destinations = Destination::latest()->get();

        return DestinationResource::collection($destinations);
    }


    /**
     * Store a newly created destination.
     */
    public function store(StoreDestinationRequest $request)
    {
        $destination = Destination::create(
            $request->validated()
        );

        return (new DestinationResource($destination))
            ->additional([
                'message' => 'Destination created successfully.',
            ])
            ->response()
            ->setStatusCode(201);
    }


    /**
     * Display the specified destination.
     */
    public function show(Destination $destination)
    {
        $destination->load('trips');

        return new DestinationResource($destination);
    }


    /**
     * Update the specified destination.
     */
    public function update(
        UpdateDestinationRequest $request,
        Destination $destination
    ) {
        $destination->update(
            $request->validated()
        );

        return (new DestinationResource($destination))
            ->additional([
                'message' => 'Destination updated successfully.',
            ]);
    }


    /**
     * Remove the specified destination.
     */
    public function destroy(Destination $destination)
    {
        $destination->delete();

         return response()->json([
        'success' => true,
        'message' => 'Destination deleted successfully.',
    ]);
    }
}
