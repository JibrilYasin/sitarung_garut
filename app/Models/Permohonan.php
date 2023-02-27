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

class Permohonan extends Model
{
  use HasFactory;
  protected $table = 'permohonan';

  public static function storeData($request,$geom)
  {
    try {
      DB::transaction(function () use ($request,$geom) {

        $id = \App\Helpers\MyFunction::id('permohonan', 'id');

        //Generate Invoice
        $userid = ($request->user()->id < 10)?'0'.$request->user()->id:$request->user()->id;
        $countuserpermohonan = Permohonan::select('id')->where('user_id',$request->user()->id)->count();
        $invoice = 'PM-'.$userid.'-'.sprintf("%03s", $countuserpermohonan+1);
        // End

        //Generate No Surat
        $nosurat = sprintf("%03s", $id).'/'.\App\Helpers\Date::getRomawi(date('m')).'/'.date('Y');
        // End

        // Upload Lokasi
        if ($request->hasFile('lokasiInput')) {
          $mainpath = \App\Helpers\MyFunction::pathAsset();
          $subpath = 'lokasi';
          $path = $mainpath . $subpath;

          $lokasifile = Image::make($_FILES['lokasiInput']['tmp_name']);
          $lokasiname = 'lokasi-' . $invoice;
          $lokasiextension = $request->file('lokasiInput')->getClientOriginalExtension();
          $lokasifile->save($path . '/' . $lokasiname . '.' . $lokasiextension);
          $lokasi = $subpath . '/' . $lokasiname . '.' . $lokasiextension;
          $attachfilelokasi = $path . '/' . $lokasiname . '.' . $lokasiextension;
        }else{
          $attachfilelokasi = '';
        }
        // End

        // Upload Sertifikat
        if ($request->hasFile('sertifikatInput')) {
          $mainpath = \App\Helpers\MyFunction::pathAsset();
          $subpath = 'sertifikat';
          $path = $mainpath . $subpath;

          $sertifikatfile = Image::make($_FILES['sertifikatInput']['tmp_name']);
          $sertifikatname = 'sertifikat-' . $invoice;
          $sertifikatextension = $request->file('sertifikatInput')->getClientOriginalExtension();
          $sertifikatfile->save($path . '/' . $sertifikatname . '.' . $sertifikatextension);
          $sertifikat = $subpath . '/' . $sertifikatname . '.' . $sertifikatextension;
          $attachfilesertifikat = $path . '/' . $sertifikatname . '.' . $sertifikatextension;
        }else{
          $attachfilesertifikat = '';
        }
        // End

        // Coordinates
        $coordinates = $request->coordinatesInput;
        // if($request->pengaduanVIA == 'Website'){
        //   $coordinates = $request->coordinatesInput;
        // }else{
        //   $generate = [];
        //   foreach(explode(' | ',$request->coordinatesInput) as $value){
        //     $lat = explode(",",$value)[1];
        //     $lng = explode(",",$value)[0];
        //     $generate[]=$lng.','.$lat;
        //   }
        //   $coordinates = json_encode($generate);
        // }
        // End

        $req = new Permohonan();
        $req->id = $id;
        $req->invoice = $invoice;
        $req->nosurat = $nosurat;
        $req->user_id = $request->user()->id;
        $req->kecamatan = $request->districtsInput;
        $req->desa = $request->desaInput;
        $req->status_permohonan_id = 1;
        $req->status_pemohon = $request->statusPemohonInput;
        $req->alamat_lahan = $request->alamatLahanInput;
        $req->luas_lahan_rencana = $request->luasLahanRencanaInput;
        $req->status_kepemilikan_lahan = $request->statusKepemilikanLahanInput;
        $req->nama_pemilik_lahan = $request->namaPemilikLahanInput;
        $req->peruntukan = $request->peruntukanInput;
        if ($request->hasFile('lokasiInput')) {
          $req->fotolokasi = $lokasi;
        }
        if ($request->hasFile('sertifikatInput')) {
          $req->sertifikat = $sertifikat;
        }
        $req->coordinates = $coordinates;
        $req->ogc_geom = $geom;
        $req->save();

        $notif = [
          'user_id'=>$request->user()->id,
          'user_target'=>'Admin',
          'notif_title'=>'Permohonan Baru : '.$invoice,
          'notif_message'=> 'Permohonan di Kecamatan '.$request->districtsInput.", Desa ".$request->desaInput.".Rencana kegiatan untuk ".$request->peruntukanInput
        ];
        if (\App\Models\Notif::storeData($notif))

        // Kirim Email Pemohon
        $disp = [
          'email' => $request->user()->email,
          'name' => $request->user()->name,
          'namapengirim' => "Sitarung - Noreply",
          'emailpengirim' => \App\Services\CompanyServices::getData()['company_email_sender'],
          'subject' => "( Sitarung ) Informasi Permohonan Baru ".$invoice,
        ];

        $content = [
          'datauser' => $request->user(),
          'invoice' => $invoice,
          'data' => $request->all(),
          'namapengirim' => "Sitarung - Noreply",
          'emailpengirim' => \App\Services\CompanyServices::getData()['company_email_sender'],
        ];

        Mail::send('email.permohonan_pemohon', $content, function ($message) use ($disp,$attachfilelokasi,$attachfilesertifikat,$request) {
          $message->from($disp['emailpengirim'], $disp['namapengirim']);
          $message->to($disp['email'], $disp['name'])->subject($disp['subject']);
          if ($request->hasFile('lokasiInput')) {
            $message->attach($attachfilelokasi);
          }
          if ($request->hasFile('sertifikatInput')) {
            $message->attach($attachfilesertifikat);
          }
        });
        // End

        // Kirim Email Petugas
        $disp = [
          'email' => \App\Services\CompanyServices::getData()['company_email_notif'],
          'name' => 'Admin Sitarung Kab.Garut',
          'namapengirim' => "Sitarung - Noreply",
          'emailpengirim' => \App\Services\CompanyServices::getData()['company_email_sender'],
          'subject' => "( Sitarung ) Informasi Permohonan Baru ".$invoice,
        ];

        $content = [
          'datauser' => $request->user(),
          'invoice' => $invoice,
          'data' => $request->all(),
          'namapengirim' => "Sitarung - Noreply",
          'emailpengirim' => \App\Services\CompanyServices::getData()['company_email_sender'],
        ];

        Mail::send('email.permohonan_petugas', $content, function ($message) use ($disp,$attachfilelokasi,$attachfilesertifikat,$request) {
          $message->from($disp['emailpengirim'], $disp['namapengirim']);
          $message->to($disp['email'], $disp['name'])->subject($disp['subject']);
          if ($request->hasFile('lokasiInput')) {
            $message->attach($attachfilelokasi);
          }
          if ($request->hasFile('sertifikatInput')) {
            $message->attach($attachfilesertifikat);
          }
        });
        // End

      });
    } catch (\Exception $e) {
      \Debugbar::addThrowable($e);
      return false;
    }
    return true;
  }
  public static function statusData($request)
  {
    try {
      DB::transaction(function () use ($request) {
        $param = $request->all();
        Permohonan::where('id', $param['id'])->update(['status_permohonan_id'=>$param['statusPermohonanInput']]);

        $data = \App\Services\PermohonanServices::getData($request)->where('permohonan.id', $param['id'])->first();

        $notif = [
          'user_id'=>$data['user_id'],
          'user_target'=>'Member',
          'notif_title'=>'Status menjadi '.$data['status_title'].' untuk : '.$data['invoice'],
          'notif_message'=> 'Permohonan di Kecamatan '.$data['kecamatan'].", Desa ".$data['desa'].".Rencana kegiatan untuk ".$data['peruntukan']
        ];
        if (\App\Models\Notif::storeData($notif))

        // Kirim Email Pemohon
        $disp = [
          'email' => $data['email'],
          'name' => $data['name'],
          'namapengirim' => "Sitarung - Noreply",
          'emailpengirim' => \App\Services\CompanyServices::getData()['company_email_sender'],
          'subject' => "( Sitarung ) Informasi Progress Permohonan ".$data['invoice'],
        ];

        $content = [
          'name' => $data['name'],
          'data' => $data,
          'namapengirim' => "Sitarung - Noreply",
          'emailpengirim' => \App\Services\CompanyServices::getData()['company_email_sender'],
        ];

        Mail::send('email.permohonan_status', $content, function ($message) use ($disp) {
          $message->from($disp['emailpengirim'], $disp['namapengirim']);
          $message->to($disp['email'], $disp['name'])->subject($disp['subject']);
        });
        // End

      });
    } catch (\Exception $e) {
      \Debugbar::addThrowable($e);
      return false;
    }
    return true;
  }
  public static function deleteData($request)
  {
    try {
      DB::transaction(function () use ($request) {
        $param = $request->all();

        $notif = [
          'user_id'=>$param['data']['user_id'],
          'user_target'=>'Member',
          'notif_title'=>'Penghapusan Permohonan : '.$param['data']['invoice'],
          'notif_message'=> 'Permohonan di Kecamatan '.$param['data']['kecamatan'].", Desa ".$param['data']['desa'].".Rencana kegiatan untuk ".$param['data']['peruntukan']
        ];
        if (\App\Models\Notif::storeData($notif))

        // Kirim Email Pemohon
        $disp = [
          'email' => $param['data']['email'],
          'name' => $param['data']['name'],
          'namapengirim' => "Sitarung - Noreply",
          'emailpengirim' => \App\Services\CompanyServices::getData()['company_email_sender'],
          'subject' => "( Sitarung ) Hapus Permohonan ".$param['data']['invoice'],
        ];

        $content = [
          'data' => $param,
          'namapengirim' => "Sitarung - Noreply",
          'emailpengirim' => \App\Services\CompanyServices::getData()['company_email_sender'],
        ];

        Mail::send('email.hapuspermohonan_pemohon', $content, function ($message) use ($disp) {
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
          'subject' => "( Sitarung ) Hapus Permohonan ".$param['data']['invoice'],
        ];

        $content = [
          'data' => $param,
          'namapengirim' => "Sitarung - Noreply",
          'emailpengirim' => \App\Services\CompanyServices::getData()['company_email_sender'],
        ];

        Mail::send('email.hapuspermohonan_petugas', $content, function ($message) use ($disp) {
          $message->from($disp['emailpengirim'], $disp['namapengirim']);
          $message->to($disp['email'], $disp['name'])->subject($disp['subject']);
        });
        // End

        $mainpath = \App\Helpers\MyFunction::pathAsset();
        $subpath = 'sertifikat';
        $path = $mainpath . $subpath;
        if (!empty($param['data']['sertifikat']) and File::exists($path . '/' . basename(parse_url($param['data']['sertifikat'])['path']))) {
          unlink($path . '/' . basename(parse_url($param['data']['sertifikat'])['path']));
        }

        $mainpath = \App\Helpers\MyFunction::pathAsset();
        $subpath = 'lokasi';
        $path = $mainpath . $subpath;
        if (!empty($param['data']['fotolokasi']) and File::exists($path . '/' . basename(parse_url($param['data']['fotolokasi'])['path']))) {
          unlink($path . '/' . basename(parse_url($param['data']['fotolokasi'])['path']));
        }
        Permohonan::where('id', $param['data']['id'])->delete();
      });
    } catch (\Exception $e) {
      \Debugbar::addThrowable($e);
      return false;
    }
    return true;
  }
}
