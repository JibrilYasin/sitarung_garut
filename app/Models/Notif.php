<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use DB;

class Notif extends Model
{
  use HasFactory;
  protected $table = 'notif';

  public static function storeData($request){
    try {
      DB::transaction(function () use ($request) {
        $req = new Notif();
        $req->user_id = $request['user_id'];
        $req->user_target = $request['user_target'];
        $req->notif_title = $request['notif_title'];
        $req->notif_message = $request['notif_message'];
        $req->notif_read = 'N';
        $req->save();
      });
    } catch (\Exception $e) {
      \Debugbar::addThrowable($e);
      return false;
    }
    return true;
  }

  public static function updateData($request){
    try {
      DB::transaction(function () use ($request) {
        Notif::where('id', $request->id)->update(['notif_read'=>'Y']);
      });
    } catch (\Exception $e) {
      \Debugbar::addThrowable($e);
      return false;
    }
    return true;
  }
}
