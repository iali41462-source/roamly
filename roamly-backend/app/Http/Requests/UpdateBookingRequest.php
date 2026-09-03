<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateBookingRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'trip_id' => [
                'sometimes',
                'required',
                'integer',
                'exists:trips,id',
            ],

            'travel_date' => [
                'sometimes',
                'required',
                'date',
                'after_or_equal:today',
            ],

            'travelers' => [
                'sometimes',
                'required',
                'integer',
                'min:1',
                'max:20',
            ],

            'message' => [
                'sometimes',
                'nullable',
                'string',
                'max:1000',
            ],
        ];
    }
}
