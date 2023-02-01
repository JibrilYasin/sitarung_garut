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
  public function store(Request $request){
    $validate = \Validator::make($request->all(), [
      'pengaduanNameInput' => 'required|min:2',
      'pengaduanPhoneInput' => 'required|min:10',
      'pengaduanTitleInput' => 'required|min:3',
      'pengaduanContentInput' => 'required|min:10',
      'pengaduanFileInput' => 'required|image|max:1000|mimes:jpeg,jpg,png',
    ]);
    if ($validate->fails()) {
      $response = [
        'status' => 'error',
        'message' => 'Validator error',
        'errors' => $validate->errors(),
      ];
      return response()->json($response, 422);
    }else{
      if(\App\Models\Pengaduan::storeData($request)){
        $response = [
          'status' => 'success',
          'message' => 'Pengaduan berhasil dikirim.',
        ];
      }else{
        $response = [
          'status' => 'error',
          'message' => 'Mohon maaf terjadi kesalahan, silahkan coba lagi.',
        ];
      }
      return response()->json($response, 200);
    }
  }
}
