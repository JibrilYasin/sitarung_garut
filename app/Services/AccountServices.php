<?php
namespace App\Services;
use Illuminate\Validation\Rule;

class AccountServices{
  public static function validation($request){
    $validate = \Validator::make($request->all(), [
      'nameProfileInput' => 'required|min:2',
      'addressProfileInput' => 'required|min:5',
      'email' => ['required','email',Rule::unique('users')->ignore($request->user()->id)],
      //'email' => 'required|email|unique:users,email',
      'phone' => ['required','min:10',Rule::unique('users')->ignore($request->user()->id)],
      'ktp_no' => ['required','min:16',Rule::unique('users')->ignore($request->user()->id)],
      'npwp_no' => ['required','min:16',Rule::unique('users')->ignore($request->user()->id)],
      'ktpProfileInput' => 'nullable|sometimes|image|max:1000|mimes:jpeg,jpg,png',
      'npwpProfileInput' => 'nullable|sometimes|image|max:1000|mimes:jpeg,jpg,png',
    ]);
    return $validate;
  }
  public static function validationCMS($request){
    $validate = \Validator::make($request->all(), [
      'nameProfileInput' => 'required|min:2',
      'addressProfileInput' => 'nullable|min:5',
      'email' => ['required','email',Rule::unique('users')->ignore($request->user()->id)],
      'phone' => ['required','min:10',Rule::unique('users')->ignore($request->user()->id)],
    ]);
    return $validate;
  }
}
