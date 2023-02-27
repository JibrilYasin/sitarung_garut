<?php
namespace App\Services;

class CompanyServices{
  public static function getData(){
    $query = \App\Models\Company::first();
    return $query;
  }
  public static function validation($request){
    $validate = \Validator::make($request->all(), [
      'companyNameInput' => 'required|min:2',
      'companyAppNameInput' => 'required|min:5',
      'companyAddressInput' => 'required|min:10',
      'companyPhoneInput' => 'required|min:8',
      'companyWAInput' => 'required|min:8',
      'companyEmailInput' => 'required|email',
      'companyEmailNotifInput' => 'required|email',
      'companyEmailSenderInput' => 'required|email',
      'companyLogoInput' => 'nullable|sometimes|image|max:1000|mimes:jpeg,jpg,png',
    ]);
    return $validate;
  }
}
