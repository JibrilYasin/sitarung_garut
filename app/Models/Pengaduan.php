<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use DB;
use Image;

class Pengaduan extends Model
{
  use HasFactory;
  protected $table = 'pengaduan';

  public function storeData($request)
  {
    try {
      DB::transaction(function () use ($request) {
        $param = $request->all();
        $id = \App\Helpers\MyFunction::id('pengaduan', 'id');

        $mainpath = \App\Helpers\MyFunction::pathAsset();
        $subpath = 'pengaduan';
        $path = $mainpath . $subpath;

        // Upload Image Pengaduan
        $pengaduanfile = Image::make($_FILES['pengaduanFileInput']['tmp_name']);
        $pengaduanname = 'pengaduan-' . $id;
        $pengaduanextension = $request->file('pengaduanFileInput')->getClientOriginalExtension();
        $pengaduanfile->save($path . '/' . $pengaduanname . '.' . $pengaduanextension);
        $pengaduan = $subpath . '/' . $pengaduanname . '.' . $pengaduanextension;
        // End

        $req = new Pengaduan();
        $req->id = $id;
        if(!empty($request->user()->id)){
          $req->user_id = trim($request->user()->id);
        }
        $req->pengaduan_name = trim($param['pengaduanNameInput']);
        $req->pengaduan_phone = trim($param['pengaduanPhoneInput']);
        $req->pengaduan_title = trim($param['pengaduanTitleInput']);
        $req->pengaduan_content = trim($param['pengaduanContentInput']);
        $req->pengaduan_image = $pengaduan;
        $req->pengaduan_read = 'N';
        $req->save();

        // Notif
        $notif = [
          'user_id'=>'',
          'user_target'=>'Admin',
          'notif_title'=>'Pengaduan Baru : '.trim($param['pengaduanNameInput']),
          'notif_message'=>$param['pengaduanTitleInput']
        ];
        if (\App\Models\Notif::storeData($notif));
        // End
      });
    } catch (\Exception $e) {
      return false;
    }
    return true;
  }
}
