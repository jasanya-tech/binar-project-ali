<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use PHPOpenSourceSaver\JWTAuth\Facades\JWTAuth;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        try {
            $validator = Validator::make($request->all(), [
                'email'     => 'required|email',
                'password'  => 'required'
            ]);

            if ($validator->fails()) {
                return response()->json($validator->errors(), 422);
            }

            $credentials = $request->only('email', 'password');

            if (!$token = auth()->guard('api')->attempt($credentials)) {
                return response()->json([
                    'success' => false,
                    'message' => 'Incorrect email or password'
                ], 401);
            }

            return response()->json([
                'success' => true,
                'user' => auth()->guard('api')->user(),
                'token' => $token
            ], 200);
        } catch (\Throwable $error) {
            return response()->json([
                'success' => false,
                'error' => $error->getMessage(),
            ], 500);
        }
    }

    public function register(Request $request)
    {
        try {
            $validator = Validator::make($request->all(), [
                'firstName' => 'required',
                'lastName' => 'required',
                'email' => 'required|email|unique:users',
                'password' => 'required|min:5',
                'confirmPassword' => 'required|same:password'
            ]);

            if ($validator->fails()) {
                return response()->json($validator->errors(), 400);
            }

            $user = User::create([
                'first_name' => $request->firstName,
                'last_name' => $request->lastName,
                'email' => $request->email,
                'password' => bcrypt($request->password)
            ]);

            return response()->json([
                'success' => true,
                'user' => $user,
                'message' => 'Register Successfully'
            ], 201);
        } catch (\Throwable $error) {
            return response()->json([
                'success' => false,
                'error' => $error->getMessage(),
            ], 500);
        }
    }
}
