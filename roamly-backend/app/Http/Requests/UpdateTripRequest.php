<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateTripRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'destination_id' => [
                'sometimes',
                'required',
                'integer',
                'exists:destinations,id',
            ],

            'title' => [
                'sometimes',
                'required',
                'string',
                'max:255',
            ],

            'location' => [
                'sometimes',
                'required',
                'string',
                'max:255',
            ],

            'duration' => [
                'sometimes',
                'required',
                'string',
                'max:100',
            ],

            'price' => [
                'sometimes',
                'required',
                'numeric',
                'min:0',
            ],

            'description' => [
                'sometimes',
                'nullable',
                'string',
                'max:5000',
            ],

            'image' => [
                'sometimes',
                'nullable',
                'string',
                'max:255',
            ],
        ];
    }
}
