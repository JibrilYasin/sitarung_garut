<?php

namespace App\Http\Controllers\Front\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

use Carbon\Carbon;

class AuthController extends Controller
{
  public function postLogin(Request $request){
    if($request->has('loginVia')){
      $validate = \Validator::make($request->all(), [
        'emailLoginInput' => 'required|email',
        'passwordLoginInput' => 'required|min:5',
        'deviceIDInput' => 'required',
      ]);
    }else{
      $validate = \Validator::make($request->all(), [
        'emailLoginInput' => 'required|email',
        'passwordLoginInput' => 'required|min:5',
      ]);
    }
    if ($validate->fails()) {
      $response = [
        'status' => 'error',
        'message' => 'Validator error',
        'errors' => $validate->errors(),
      ];
      return response()->json($response, 422);
    }else{
      $credentials = ['email'=>$request->emailLoginInput, 'password'=>$request->passwordLoginInput];
      $credentials = \Arr::add($credentials, 'user_access', 'Front');
      if (!\Auth::attempt($credentials)) {
        $response = [
          'status' => 'error',
          'message' => 'Mohon periksa kembali Email atau Password anda.',
        ];
      }else{
        $user = \App\Models\User::where('email', $request->emailLoginInput)->first();
        if($user['status'] == 'Blokir'){
          $response = [
            'status' => 'warning',
            'message' => 'Maaf akun anda ditangguhkan, silahkan hubungi Contact Center.',
          ];
        }else{
          if(\App\Models\User::updateDeviceID($request));
          $tokenResult = $user->createToken('token-auth')->plainTextToken;
          $response = [
            'status' => 'success',
            'message' => 'Proses login berhasil.',
            'content' => [
              'access_token' => $tokenResult
            ],
          ];
        }
      }
      return response()->json($response, 200);
    }
  }
  public function postRegister(Request $request){
    $validate = \Validator::make($request->all(), [
      'nameRegisterInput' => 'required|min:2',
      'addressRegisterInput' => 'required|min:5',
      'emailRegisterInput' => 'required|email|unique:users,email',
      'phoneRegisterInput' => 'required|min:10|unique:users,phone',
      'passwordRegisterInput' => [
        'required',
        'string',
        'min:8',
        'regex:/[a-z]/',
        'regex:/[A-Z]/',
        'regex:/[0-9]/',
      ],
      'ktpRegisterInput' => 'nullable|sometimes|image|max:1000|mimes:jpeg,jpg,png',
      'npwpRegisterInput' => 'nullable|sometimes|image|max:1000|mimes:jpeg,jpg,png',
      'ktpNORegisterInput' => 'nullable|min:16|max:16|unique:users,ktp_no',
      'npwpNORegisterInput' => 'nullable|min:16|max:16|unique:users,npwp_no',
    ]);
    if ($validate->fails()) {
      $response = [
        'status' => 'error',
        'message' => 'Validator error',
        'errors' => $validate->errors(),
      ];
      return response()->json($response, 422);
    }else{
      if(\App\Models\User::registerData($request)){
        $response = [
          'status' => 'success',
          'message' => 'Silahkan cek email anda (inbox/spam).',
        ];
      }else{
        $response = [
          'status' => 'error',
          'message' => 'Mohon maaf terjadi kesalahan, silahkan coba lagi.',
        ];
      }
      return response()->json($response, 200);
    }
  }
  public function postActivation(Request $request){
    if(\App\Models\User::activationData($request)){
      $response = [
        'status' => 'success',
        'message' => 'Proses pendaftaran berhasil, silahkan cek email anda (inbox/spam).',
      ];
    }else{
      $response = [
        'status' => 'error',
        'message' => 'Mohon maaf terjadi kesalahan, silahkan coba lagi.',
      ];
    }
    return response()->json($response, 200);
  }
  public function postForgot(Request $request){
    $validate = \Validator::make($request->all(), [
      'emailForgotInput' => 'required|email',
    ]);
    if ($validate->fails()) {
      $response = [
        'status' => 'error',
        'message' => 'Validator error',
        'errors' => $validate->errors(),
      ];
      return response()->json($response, 422);
    }else{
      $user = \App\Models\User::where('email', $request->emailForgotInput)->first();
      if(!empty($user)){
        if($user['status'] == 'Blokir'){
          $response = [
            'status' => 'warning',
            'message' => 'Maaf akun anda ditangguhkan, silahkan hubungi Contact Center.',
          ];
        }else{
          if(\App\Models\User::forgotData($user)){
            $response = [
              'status' => 'success',
              'message' => 'Silahkan cek email anda (inbox/spam).',
            ];
          }else{
            $response = [
              'status' => 'error',
              'message' => 'Mohon maaf terjadi kesalahan, silahkan coba lagi.',
            ];
          }
          return response()->json($response, 200);
        }
      }else{
        $response = [
          'status' => 'error',
          'message' => 'Alamat email tidak ditemukan.',
        ];
      }
      return response()->json($response, 200);
    }
  }
  public function postOTP(Request $request){
    $validate = \Validator::make($request->all(), [
      'otpCodeInput' => 'required|min:6',
    ]);
    if ($validate->fails()) {
      $response = [
        'status' => 'error',
        'message' => 'Validator error',
        'errors' => $validate->errors(),
      ];
      return response()->json($response, 422);
    }else{
      $checkotp = \App\Models\OTP::where('otp_email',$request->emailOTPInput)->orderby('id','desc')->first();
      if($checkotp['otp_code'] == $request->otpCodeInput && $checkotp['otp_expired'] >= date('Y-m-d H:i:s')){
        $response = [
          'status' => 'success',
          'message' => 'Proses berhasil.',
        ];
      }else{
        $response = [
          'status' => 'error',
          'message' => 'Kode yang anda masukan tidak ditemukan.',
        ];
      }
      return response()->json($response, 200);
    }
  }
  public function postReset(Request $request){
    $validate = \Validator::make($request->all(), [
      'passwordResetInput' => [
        'required',
        'string',
        'min:8',
        'regex:/[a-z]/',
        'regex:/[A-Z]/',
        'regex:/[0-9]/',
      ],
    ]);
    if ($validate->fails()) {
      $response = [
        'status' => 'error',
        'message' => 'Validator error',
        'errors' => $validate->errors(),
      ];
      return response()->json($response, 422);
    }else{
      if(\App\Models\User::resetData($request)){
        $response = [
          'status' => 'success',
          'message' => 'Silahkan untuk login kembali.',
        ];
      }else{
        $response = [
          'status' => 'error',
          'message' => 'Mohon maaf terjadi kesalahan, silahkan coba lagi.',
        ];
      }
      return response()->json($response, 200);
    }
  }
  public function postLogout(Request $request){
    $user = $request->user();
    $user->currentAccessToken()->delete();
    $response = [
      'status' => 'success',
      'message' => 'Logout successfully',
    ];
    return response()->json($response, 200);
  }
}
