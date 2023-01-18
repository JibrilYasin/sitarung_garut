<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PengaduanController extends Controller
{
  public function index(Request $request){
    $param = $request->all();
    try {
      $data = \App\Services\PengaduanServices::getData()
        ->where(function ($result) use ($request,$param) {
          if ($request->user()->user_access == 'Front') {
            $result->where('user_id',$request->user()->id)->where('user_target','Member');
          }
          if (!empty($param['titlePengaduanColumn'])) {
            $result->where('pengaduan_title', 'LIKE', '%' . $param['titlePengaduanColumn'] . '%');
          }
          if (!empty($param['namePengaduanColumn'])) {
            $result->where('users.name', 'LIKE', '%' . $param['namePengaduanColumn'] . '%');
          }
          if (!empty($param['readPengaduanColumn']) && $param['readPengaduanColumn'] != '') {
            $result->where('pengaduan_read', $param['readPengaduanColumn']);
          }
        })
        ->orderBy('pengaduan.id', 'desc')
        ->paginate(10);
      return $data;
    } catch (\Exception $e) {
      \Debugbar::addThrowable($e);
      return false;
    }
  }
}
