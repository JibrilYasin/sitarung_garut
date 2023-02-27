<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class NotifController extends Controller
{
  public function index(Request $request){
    $param = $request->all();
    try {
      $data = \App\Services\NotifServices::getData()
        ->where(function ($result) use ($request,$param) {
          if ($request->user()->user_access == 'Front') {
            $result->where('user_id',$request->user()->id)->where('user_target','Member');
          }
          if ($request->user()->user_access == 'CMS') {
            $result->where('user_target','Admin');
          }
          if (!empty($param['nameNotifCMSColumn'])) {
            $result->where('users.name', 'LIKE', '%' . $param['nameNotifCMSColumn'] . '%');
          }
          if (!empty($param['readNotifColumn']) && $param['readNotifColumn'] != '') {
            $result->where('notif_read', $param['readNotifColumn']);
          }
        })
        ->orderBy('notif.id', 'desc')
        ->paginate(10);
      return $data;
    } catch (\Exception $e) {
      \Debugbar::addThrowable($e);
      return false;
    }
  }
  public function postTotalUnread(Request $request){
    try {
      $data = \App\Services\NotifServices::getData()
        ->where('notif_read','N')
        ->where(function ($result) use ($request) {
          if ($request->user()->user_access == 'Front') {
            $result->where('user_id',$request->user()->id)->where('user_target','Member');
          }
          if ($request->user()->user_access == 'CMS') {
            $result->where('user_target','Admin');
          }
        })
        ->count();
      return $data;
    } catch (\Exception $e) {
      \Debugbar::addThrowable($e);
      return false;
    }
  }
  public function show($id)
  {
    try {
      $data = \App\Services\NotifServices::getData()->where('id',$id)->first();
      return $data;
    } catch (\Exception $e) {
      \Debugbar::addThrowable($e);
      return false;
    }
  }
  public function update(Request $request)
  {
    if (\App\Models\Notif::updateData($request)) {
      $response = [
        'status' => 'success',
        'message' => 'Proses berhasil.',
      ];
    } else {
      $response = [
        'status' => 'error',
        'message' => 'Mohon maaf terjadi kesalahan, silahkan coba beberapa saat lagi.',
      ];
    }
    return response()->json($response, 200);
  }
}
