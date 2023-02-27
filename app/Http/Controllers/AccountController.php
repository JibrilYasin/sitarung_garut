<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use Hash;

class AccountController extends Controller
{
  public function getProfile(Request $request){
    try {
      $data = \App\Models\User::where('id',$request->user()->id)->where('user_access','Front')->first();
      return $data;
    } catch (\Exception $e) {
      \Debugbar::addThrowable($e);
      return false;
    }
  }
  public function getProfileCMS(Request $request){
    try {
      $data = \App\Models\User::where('id',$request->user()->id)->where('user_access','CMS')->first();
      return $data;
    } catch (\Exception $e) {
      \Debugbar::addThrowable($e);
      return false;
    }
  }
  public function postProfile(Request $request)
  {
    if($request->access == 'Front'){
      $validate = \App\Services\AccountServices::validation($request);
      $action = \App\Models\User::updateProfile($request);
    }else{
      $validate = \App\Services\AccountServices::validationCMS($request);
      $action = \App\Models\User::updateProfileCMS($request);
    }
    if ($validate->fails()) {
      $response = [
        'status' => 'error',
        'message' => 'Validator error',
        'errors' => $validate->errors(),
      ];
      return response()->json($response, 422);
    } else {
      if ($action) {
        $response = \App\Helpers\MyFunction::getResponse('success','Proses perubahan profil berhasil.');
      } else {
        $response = \App\Helpers\MyFunction::getResponse('error','Mohon maaf, terjadi kesalahan...');
      }
      return response()->json($response, 200);
    }
  }
  public function postPassword(Request $request)
  {
    $validate = \Validator::make($request->all(), [
      'oldPasswordInput' => 'required',
      'newPasswordInput' => [
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
    } else {
      $user = \App\Models\User::where('id',$request->user()->id)->first();
      if (Hash::check($request->oldPasswordInput, $user['password'])) {
        if (\App\Models\User::updatePassword($request))
        $response = [
          'status' => 'success',
          'message' => 'Proses berhasil, silahkan untuk login kembali.',
        ];
      } else {
        $response = [
          'status' => 'error',
          'message' => 'Maaf! password lama tidak sesuai dengan akun anda.',
        ];
      }
      return response()->json($response, 200);
    }
  }
}
