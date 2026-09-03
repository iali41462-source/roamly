<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\DestinationResource;

class TripResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'destination_id' => $this->destination_id,
            'title' => $this->title,
            'location' => $this->location,
            'duration' => $this->duration,
            'price' => $this->price,
            'description' => $this->description,
            'image' => $this->image,

            'destination' => new DestinationResource(
                $this->whenLoaded('destination')
            ),

            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
            'deleted_at' => $this->deleted_at,
        ];
    }
}
