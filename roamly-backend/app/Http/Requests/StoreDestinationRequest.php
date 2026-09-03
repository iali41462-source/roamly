<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreDestinationRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }


    public function rules(): array
    {
        return [
            'name' => ['required', 'string', 'max:255'],

            'location' => ['required', 'string', 'max:255'],

            'description' => ['required', 'string', 'max:5000'],

            'image' => ['nullable', 'string', 'max:255'],
        ];
    }
}
