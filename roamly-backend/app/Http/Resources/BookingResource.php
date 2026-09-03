<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class BookingResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'user_id' => $this->user_id,
            'trip_id' => $this->trip_id,
            'travel_date' => $this->travel_date,
            'travelers' => $this->travelers,
            'message' => $this->message,
             'status' => $this->status,

            'trip' => new TripResource(
                $this->whenLoaded('trip')
            ),

            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
