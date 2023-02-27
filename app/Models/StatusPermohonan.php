<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use DB;

class StatusPermohonan extends Model
{
  use HasFactory;
  protected $table = 'status_permohonan';

  public static function storeData($request)
  {
    try {
      DB::transaction(function () use ($request) {
        $param = $request->all();

        $req = new StatusPermohonan();
        $req->status_title = $param['statusTitleInput'];
        $req->status_subtitle = $param['statusSubtitleInput'];
        $req->status_color = $param['statusColorInput'];
        $req->status_hex = $param['statusHexColorInput'];
        $req->save();
      });
    } catch (\Exception $e) {
      \Debugbar::addThrowable($e);
      return false;
    }
    return true;
  }
  public static function updateData($request)
  {
    try {
      DB::transaction(function () use ($request) {
        $param = $request->all();

        StatusPermohonan::where('id', $param['id'])->update([
            'status_title' => $param['statusTitleInput'],
            'status_subtitle' => $param['statusSubtitleInput'],
            'status_color' => $param['statusColorInput'],
            'status_hex' => $param['statusHexColorInput'],
        ]);
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
        StatusPermohonan::where('id', $param['data']['id'])->delete();
      });
    } catch (\Exception $e) {
      \Debugbar::addThrowable($e);
      return false;
    }
    return true;
  }
}
