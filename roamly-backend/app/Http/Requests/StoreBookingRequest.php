<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreBookingRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'trip_id' => [
                'required',
                'integer',
                'exists:trips,id',
            ],

            'travel_date' => [
                'required',
                'date',
                'after_or_equal:today',
            ],

            'travelers' => [
                'required',
                'integer',
                'min:1',
                'max:20',
            ],

            'message' => [
                'nullable',
                'string',
                'max:1000',
            ],
        ];
    }
}
