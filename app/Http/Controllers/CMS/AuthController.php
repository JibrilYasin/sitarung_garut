<?php

namespace App\Http\Controllers\CMS;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use Carbon\Carbon;

class AuthController extends Controller
{
  public function postLogin(Request $request){
    $validate = \Validator::make($request->all(), [
      'emailCMSLoginInput' => 'required|email',
      'passwordCMSLoginInput' => 'required|min:5',
    ]);
    if ($validate->fails()) {
      $response = [
        'status' => 'error',
        'message' => 'Validator error',
        'errors' => $validate->errors(),
      ];
      return response()->json($response, 422);
    }else{
      $credentials = ['email'=>$request->emailCMSLoginInput, 'password'=>$request->passwordCMSLoginInput];
      $credentials = \Arr::add($credentials, 'user_access', 'CMS');
      if (!\Auth::attempt($credentials)) {
        $response = [
          'status' => 'error',
          'message' => 'Mohon periksa kembali Email atau Password anda.',
        ];
      }else{
        $user = \App\Models\User::where('email', $request->emailCMSLoginInput)->first();
        $tokenResult = $user->createToken('token-auth')->plainTextToken;
        $response = [
          'status' => 'success',
          'message' => 'Proses login berhasil.',
          'content' => [
            'access_token' => $tokenResult
          ],
        ];
        // if($user['user_block'] == 'T'){
        //   $response = [
        //     'status' => 'warning',
        //     'message' => 'Maaf akun anda ditangguhkan, silahkan hubungi Contact Center.',
        //   ];
        // }else{
        //
        // }
      }
      return response()->json($response, 200);
    }
  }
  public function postForgot(Request $request){
    $validate = \Validator::make($request->all(), [
      'emailCMSForgotInput' => 'required|email',
    ]);
    if ($validate->fails()) {
      $response = [
        'status' => 'error',
        'message' => 'Validator error',
        'errors' => $validate->errors(),
      ];
      return response()->json($response, 422);
    }else{
      $user = \App\Models\User::where('email', $request->emailCMSForgotInput)->where('user_access','CMS')->first();
      if(!empty($user)){
        if($user['user_block'] == 'T'){
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
      'CMSOTPInput' => 'required|min:6',
    ]);
    if ($validate->fails()) {
      $response = [
        'status' => 'error',
        'message' => 'Validator error',
        'errors' => $validate->errors(),
      ];
      return response()->json($response, 422);
    }else{
      $checkotp = \App\Models\OTP::where('otp_email',$request->emailOTPCMS)->orderby('id','desc')->first();
      if($checkotp['otp_code'] == $request->CMSOTPInput && $checkotp['otp_expired'] >= date('Y-m-d H:i:s')){
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
}
