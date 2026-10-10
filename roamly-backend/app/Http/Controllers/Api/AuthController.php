<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

use Illuminate\Support\Facades\Password;

use Illuminate\Validation\Rules\Password as PasswordRule;

class AuthController extends Controller
{
    /**
     * Register a new user.
     */
    public function register(RegisterRequest $request)
    {
        $user = User::create([
            'name' => $request->validated()['name'],
            'email' => $request->validated()['email'],
            'password' => Hash::make($request->validated()['password']),
        ]);

        $token = $user->createToken('roamly-app')->plainTextToken;

        return response()->json([
            'message' => 'Account created successfully.',
            'user' => $user,
            'token' => $token,
        ], 201);
    }


    /**
     * Login user.
     */
    public function login(LoginRequest $request)
    {
        $credentials = $request->validated();

        $user = User::where('email', $credentials['email'])->first();

        if (! $user || ! Hash::check($credentials['password'], $user->password)) {
            throw ValidationException::withMessages([
                'email' => ['The provided credentials are incorrect.'],
            ]);
        }

        $token = $user->createToken('roamly-app')->plainTextToken;

        return response()->json([
            'message' => 'Login successful.',
            'user' => $user,
            'token' => $token,
        ]);
    }


    /**
     * Logout user.
     */
    public function logout(Request $request)
    {
        $request->user()->currentAccessToken()->delete();

        return response()->json([
            'message' => 'Logged out successfully.',
        ]);
    }
    // Forgot password

    // Forgot password
    public function forgotPassword(Request $request)
    {
        $request->validate([
            'email' => ['required', 'email'],
        ]);

        try {
            $status = Password::sendResetLink(
                $request->only('email')
            );

            \Illuminate\Support\Facades\Log::info(
                'Forgot password broker status: ' . $status
            );

            if ($status === Password::RESET_LINK_SENT) {
                return response()->json([
                    'success' => true,
                    'message' => 'Password reset link has been sent to your email.',
                ]);
            }

            return response()->json([
                'success' => false,
                'message' => 'Unable to send password reset link.',
            ], 422);

        } catch (\Throwable $e) {
            \Illuminate\Support\Facades\Log::error(
                'Forgot password exception: ' . $e->getMessage()
            );

            return response()->json([
                'success' => false,
                'message' => 'Unable to send password reset link.',
            ], 500);
        }
    }

public function resetPassword(Request $request)
{
    $request->validate([
        'token' => ['required'],
        'email' => ['required', 'email'],
        'password' => [
            'required',
            'confirmed',
            PasswordRule::min(6),
        ],
    ]);

    $status = Password::reset(
        $request->only(
            'email',
            'password',
            'password_confirmation',
            'token'
        ),
        function ($user, $password) {

            $user->forceFill([
                'password' => Hash::make($password),
            ])->save();

            $user->tokens()->delete();
        }
    );

    if ($status === Password::PASSWORD_RESET) {
        return response()->json([
            'success' => true,
            'message' => 'Password has been reset successfully.',
        ]);
    }

    return response()->json([
        'success' => false,
        'message' => 'Invalid or expired password reset link.',
    ], 422);
}
}
