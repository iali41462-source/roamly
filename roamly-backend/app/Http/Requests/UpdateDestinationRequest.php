<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateDestinationRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }


    public function rules(): array
    {
        return [
            'name' => ['sometimes', 'required', 'string', 'max:255'],

            'location' => ['sometimes', 'required', 'string', 'max:255'],

            'description' => ['sometimes', 'required', 'string', 'max:5000'],

            'image' => ['sometimes', 'nullable', 'string', 'max:255'],
        ];
    }
}
