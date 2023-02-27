<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use DB;
use Image;
use Input;
use File;
use Mail;
use Carbon\Carbon;

class Company extends Model
{
  use HasFactory;
  protected $table = 'company';

  public static function updateData($request){
    try {
      DB::transaction(function () use ($request) {
        // Upload Logo
        if ($request->hasFile('companyLogoInput')) {
          $mainpath = \App\Helpers\MyFunction::pathAsset();
          $subpath = '';
          $path = $mainpath . $subpath;

          if (!empty($request->companyLogo) and File::exists($path . '/' . basename(parse_url($request->companyLogo)['path']))) {
            unlink($path . '/' . basename(parse_url($request->companyLogo)['path']));
          }

          $logofile = Image::make($_FILES['companyLogoInput']['tmp_name']);
          $logoname = 'logo'.time();
          $logoextension = $request->file('companyLogoInput')->getClientOriginalExtension();
          $logofile->save($path . '/' . $logoname . '.' . $logoextension);
          $logo = $subpath . '/' . $logoname . '.' . $logoextension;
        }else{
          $logo = $request->companyLogo;
        }
        // End
        Company::where('id', $request->id)->update(
          [
            'company_name'=>$request->companyNameInput,
            'company_appname'=>$request->companyAppNameInput,
            'company_address'=>$request->companyAddressInput,
            'company_phone'=>$request->companyPhoneInput,
            'company_wa'=>$request->companyWAInput,
            'company_email'=>$request->companyEmailInput,
            'company_email_notif'=>$request->companyEmailNotifInput,
            'company_email_sender'=>$request->companyEmailSenderInput,
            'company_logo'=>$logo
          ]
        );
      });
    } catch (\Exception $e) {
      \Debugbar::addThrowable($e);
      return false;
    }
    return true;
  }
}
