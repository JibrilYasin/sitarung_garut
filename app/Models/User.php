<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

use DB;
use Hash;
use Image;
use Input;
use File;
use Mail;
use Carbon\Carbon;

class User extends Authenticatable
{
  use HasApiTokens, HasFactory, Notifiable;

  /**
   * The attributes that are mass assignable.
   *
   * @var array<int, string>
   */
  protected $fillable = ['name', 'email', 'password'];

  /**
   * The attributes that should be hidden for serialization.
   *
   * @var array<int, string>
   */
  protected $hidden = ['password', 'remember_token'];

  /**
   * The attributes that should be cast.
   *
   * @var array<string, string>
   */
  protected $casts = [
    'email_verified_at' => 'datetime',
  ];

  public function registerData($request)
  {
    try {
      DB::transaction(function () use ($request) {
        $param = $request->all();
        $id = \App\Helpers\MyFunction::id('users', 'id');

        $mainpath = \App\Helpers\MyFunction::pathAsset();
        $subpath = 'users';
        $path = $mainpath . $subpath;

        if ($request->hasFile('ktpRegisterInput')) {
          // Upload Image KTP
          $ktpfile = Image::make($_FILES['ktpRegisterInput']['tmp_name']);
          $ktpname = 'ktp-' . $id;
          $ktpextension = $request->file('ktpRegisterInput')->getClientOriginalExtension();
          $ktpfile->save($path . '/' . $ktpname . '.' . $ktpextension);
          $ktp = $subpath . '/' . $ktpname . '.' . $ktpextension;
          // End
        }

        if ($request->hasFile('npwpRegisterInput')) {
          // Upload Image npwp
          $npwpfile = Image::make($_FILES['npwpRegisterInput']['tmp_name']);
          $npwpname = 'npwp-' . $id;
          $npwpextension = $request->file('npwpRegisterInput')->getClientOriginalExtension();
          $npwpfile->save($path . '/' . $npwpname . '.' . $npwpextension);
          $npwp = $subpath . '/' . $npwpname . '.' . $npwpextension;
          // End
        }

        $req = new User();
        $req->id = $id;
        $req->name = trim($param['nameRegisterInput']);
        $req->address = trim($param['addressRegisterInput']);
        $req->password = Hash::make(trim($param['passwordRegisterInput']));
        $req->email = trim($param['emailRegisterInput']);
        $req->phone = trim($param['phoneRegisterInput']);
        if ($request->hasFile('ktpRegisterInput')) {
          $req->ktp = $ktp;
        }
        $req->ktp_no = trim($param['ktpNORegisterInput']);
        if ($request->hasFile('npwpRegisterInput')) {
          $req->npwp = $npwp;
        }
        $req->npwp_no = trim($param['npwpNORegisterInput']);
        $req->user_access = 'Front';
        $req->status = 'New';
        $req->register_via = $param['registerViaRegisterInput'];
        $req->save();

        // Notif
        $notif = [
          'user_id'=>$id,
          'user_target'=>'Admin',
          'notif_title'=>'Pendaftaran Baru : '.trim($param['emailRegisterInput']),
          'notif_message'=> "Pendaftaran baru atas nama ".$param['nameRegisterInput']." dengan email ".trim($param['emailRegisterInput'])
        ];
        if (\App\Models\Notif::storeData($notif))
        // End

        // Kirim Email
        $disp = [
          'email' => trim($param['emailRegisterInput']),
          'name' => trim($param['nameRegisterInput']),
          'namapengirim' => "Sitarung - Noreply",
          'emailpengirim' => \App\Services\CompanyServices::getData()['company_email_sender'],
          'subject' => "( Sitarung ) Informasi Pendaftaran Akun",
        ];

        $content = [
          'name' => trim($param['nameRegisterInput']),
          'token' => base64_encode($param['emailRegisterInput']),
          'namapengirim' => "Sitarung - Noreply",
          'emailpengirim' => \App\Services\CompanyServices::getData()['company_email_sender'],
        ];

        Mail::send('email.register', $content, function ($message) use ($disp) {
          $message->from($disp['emailpengirim'], $disp['namapengirim']);
          $message->to($disp['email'], $disp['name'])->subject($disp['subject']);
        });
        // End

        // Kirim Email Petugas
        $disp = [
          'email' => \App\Services\CompanyServices::getData()['company_email_notif'],
          'name' => 'Admin Sitarung Kab.Garut',
          'namapengirim' => "Sitarung - Noreply",
          'emailpengirim' => \App\Services\CompanyServices::getData()['company_email_sender'],
          'subject' => "( Sitarung ) Informasi Pendaftaran Akun ".trim($param['emailRegisterInput']),
        ];

        $content = [
          'data' => $param,
          'namapengirim' => "Sitarung - Noreply",
          'emailpengirim' => \App\Services\CompanyServices::getData()['company_email_sender'],
        ];

        Mail::send('email.register_petugas', $content, function ($message) use ($disp) {
          $message->from($disp['emailpengirim'], $disp['namapengirim']);
          $message->to($disp['email'], $disp['name'])->subject($disp['subject']);
        });
        // End
      });
    } catch (\Exception $e) {
      return false;
    }
    return true;
  }
  public function activationData($request)
  {
    try {
      DB::transaction(function () use ($request) {
        $param = $request->all();
        //User::where('email', base64_decode($param['emailActivationInput']))->update(['user_block' => 'F']);
      });
    } catch (\Exception $e) {
      return false;
    }
    return true;
  }
  public function forgotData($user)
  {
    try {
      DB::transaction(function () use ($user) {
        $otp = rand(100000, 999999);
        $expotp = Carbon::now()->addMinutes(30);

        $req = new \App\Models\OTP();
        $req->user_id = trim($user['id']);
        $req->otp_email = trim($user['email']);
        $req->otp_code = $otp;
        $req->otp_expired = $expotp;
        $req->save();

        // Kirim Email
        $disp = [
          'email' => trim($user['email']),
          'name' => trim($user['name']),
          'namapengirim' => "Sitarung - Noreply",
          'emailpengirim' => \App\Services\CompanyServices::getData()['company_email_sender'],
          'subject' => "( Sitarung ) Kode Sekali Pakai  - Reset Password - ".$expotp->format('d/m/Y H:i:s'),
        ];

        $content = [
          'name' => trim($user['name']),
          'otp' => $otp,
          'expotp' => $expotp->format('d/m/Y H:i:s'),
          'namapengirim' => "Sitarung - Noreply",
          'emailpengirim' => \App\Services\CompanyServices::getData()['company_email_sender'],
        ];

        Mail::send('email.forgot', $content, function ($message) use ($disp) {
          $message->from($disp['emailpengirim'], $disp['namapengirim']);
          $message->to($disp['email'], $disp['name'])->subject($disp['subject']);
        });
        // End
      });
    } catch (\Exception $e) {
      return false;
    }
    return true;
  }
  public function resetData($request)
  {
    try {
      DB::transaction(function () use ($request) {
        $param = $request->all();
        User::where('email', $param['emailResetInput'])->update(['password' => Hash::make(trim($param['passwordResetInput']))]);
      });
    } catch (\Exception $e) {
      return false;
    }
    return true;
  }
  public static function updateProfile($request)
  {
    try {
      DB::transaction(function () use ($request) {
        $param = $request->all();

        $mainpath = \App\Helpers\MyFunction::pathAsset();
        $subpath = 'users';
        $path = $mainpath . $subpath;

        // KTP
        if ($request->hasFile('ktpProfileInput')) {
          if (!empty($request->user()->ktp) and File::exists($path . '/' . basename(parse_url($request->user()->ktp)['path']))) {
            unlink($path . '/' . basename(parse_url($request->user()->ktp)['path']));
          }
          $ktpfile = Image::make($_FILES['ktpProfileInput']['tmp_name']);
          $ktpname = 'ktp-' . $param['id'];
          $ktpextension = $request->file('ktpProfileInput')->getClientOriginalExtension();
          $ktpfile->save($path . '/' . $ktpname . '.' . $ktpextension);
          $ktp = $subpath . '/' . $ktpname . '.' . $ktpextension;
        } else {
          $ktp = $request->user()->ktp;
        }
        // End

        // NPWP
        if ($request->hasFile('npwpProfileInput')) {
          if (!empty($request->user()->npwp) and File::exists($path . '/' . basename(parse_url($request->user()->npwp)['path']))) {
            unlink($path . '/' . basename(parse_url($request->user()->npwp)['path']));
          }
          $npwpfile = Image::make($_FILES['npwpProfileInput']['tmp_name']);
          $npwpname = 'npwp-' . $param['id'];
          $npwpextension = $request->file('npwpProfileInput')->getClientOriginalExtension();
          $npwpfile->save($path . '/' . $npwpname . '.' . $npwpextension);
          $npwp = $subpath . '/' . $npwpname . '.' . $npwpextension;
        } else {
          $npwp = $request->user()->npwp;
        }
        // End

        User::where('id', $param['id'])->update([
          'name' => trim($param['nameProfileInput']),
          'email' => trim($param['email']),
          'address' => trim($param['addressProfileInput']),
          'phone' => trim($param['phone']),
          'ktp_no' => trim($param['ktp_no']),
          'npwp_no' => trim($param['npwp_no']),
          'ktp' => $ktp,
          'npwp' => $npwp,
        ]);

        if($param['statusProfileInput'] == 'Reject'){
          User::where('id', $param['id'])->update([
            'status' => 'New',
          ]);
          // Kirim Email Petugas
          $disp = [
            'email' => \App\Services\CompanyServices::getData()['company_email_notif'],
            'name' => 'Admin Sitarung Kab.Garut',
            'namapengirim' => "Sitarung - Noreply",
            'emailpengirim' => \App\Services\CompanyServices::getData()['company_email_sender'],
            'subject' => "( Sitarung ) Informasi Perubahan Profil ".trim($param['email']),
          ];

          $content = [
            'data' => $param,
            'namapengirim' => "Sitarung - Noreply",
            'emailpengirim' => \App\Services\CompanyServices::getData()['company_email_sender'],
          ];

          Mail::send('email.profile_petugas', $content, function ($message) use ($disp) {
            $message->from($disp['emailpengirim'], $disp['namapengirim']);
            $message->to($disp['email'], $disp['name'])->subject($disp['subject']);
          });
          // End
        }

      });
    } catch (\Exception $e) {
      return false;
    }
    return true;
  }
  public static function updateProfileCMS($request)
  {
    try {
      DB::transaction(function () use ($request) {
        $param = $request->all();

        User::where('id', $param['id'])->update([
          'name' => trim($param['nameProfileInput']),
          'email' => trim($param['email']),
          'address' => trim($param['addressProfileInput']),
          'phone' => trim($param['phone']),
        ]);

      });
    } catch (\Exception $e) {
      return false;
    }
    return true;
  }
  public static function updatePassword($request)
  {
    try {
      DB::transaction(function () use ($request) {
        $param = $request->all();
        User::where('id', $param['id'])->update([
          'password' => Hash::make(trim($param['newPasswordInput'])),
          'updated_at' => Carbon::now(),
        ]);
      });
    } catch (\Exception $e) {
      return false;
    }
    return true;
  }
  public function approveData($request)
  {
    try {
      DB::transaction(function () use ($request) {
        $param = $request->all();
        User::where('id', $param['data']['id'])->update(['status' => $param['status']]);

        // Kirim Email
        $disp = [
          'email' => $param['data']['email'],
          'name' => $param['data']['name'],
          'namapengirim' => "Sitarung - Noreply",
          'emailpengirim' => \App\Services\CompanyServices::getData()['company_email_sender'],
          'subject' => "( Sitarung ) Approve Akun",
        ];

        $content = [
          'name' => $param['data']['name'],
          'namapengirim' => "Sitarung - Noreply",
          'emailpengirim' => \App\Services\CompanyServices::getData()['company_email_sender'],
        ];

        Mail::send('email.approve', $content, function ($message) use ($disp) {
          $message->from($disp['emailpengirim'], $disp['namapengirim']);
          $message->to($disp['email'], $disp['name'])->subject($disp['subject']);
        });
        // End
      });
    } catch (\Exception $e) {
      return false;
    }
    return true;
  }
  public function rejectData($request)
  {
    try {
      DB::transaction(function () use ($request) {
        $param = $request->all();
        User::where('id', $param['data']['id'])->update(['status' => $param['status'],'notes' => $param['notesPemohonInput']]);

        // Kirim Email
        $disp = [
          'email' => $param['data']['email'],
          'name' => $param['data']['name'],
          'namapengirim' => "Sitarung - Noreply",
          'emailpengirim' => \App\Services\CompanyServices::getData()['company_email_sender'],
          'subject' => "( Sitarung ) ".$param['status']." Akun",
        ];

        $content = [
          'name' => $param['data']['name'],
          'notes' => $param['notesPemohonInput'],
          'namapengirim' => "Sitarung - Noreply",
          'emailpengirim' => \App\Services\CompanyServices::getData()['company_email_sender'],
        ];

        Mail::send('email.reject', $content, function ($message) use ($disp) {
          $message->from($disp['emailpengirim'], $disp['namapengirim']);
          $message->to($disp['email'], $disp['name'])->subject($disp['subject']);
        });
        // End
      });
    } catch (\Exception $e) {
      return false;
    }
    return true;
  }
  public function updateDeviceID($request)
  {
    try {
      DB::transaction(function () use ($request) {
        User::where('email', $request->emailResetInput)->update(['device_id' => $request->deviceIDInput]);
      });
    } catch (\Exception $e) {
      return false;
    }
    return true;
  }
  public static function deleteData($request)
    {
      try {
        DB::transaction(function () use ($request) {
          $param = $request->all();
          $mainpath = \App\Helpers\MyFunction::pathAsset();
          $subpath = 'users';
          $path = $mainpath . $subpath;
          if (!empty($param['data']['ktp']) and File::exists($path . '/' . basename(parse_url($param['data']['ktp'])['path']))) {
            unlink($path . '/' . basename(parse_url($param['data']['ktp'])['path']));
          }
          if (!empty($param['data']['npwp']) and File::exists($path . '/' . basename(parse_url($param['data']['npwp'])['path']))) {
            unlink($path . '/' . basename(parse_url($param['data']['npwp'])['path']));
          }
          \App\Models\Notif::where('user_id',$param['data']['id'])->delete();
          User::where('id', $param['data']['id'])->delete();
        });
      } catch (\Exception $e) {
        \Debugbar::addThrowable($e);
        return false;
      }
      return true;
    }
}
