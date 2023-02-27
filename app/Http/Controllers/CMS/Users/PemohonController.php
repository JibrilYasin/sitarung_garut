<?php

namespace App\Http\Controllers\CMS\Users;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class PemohonController extends Controller
{
  public function index(Request $request){
    $param = $request->all();
    $data = \App\Models\User::where('user_access','Front')
      ->addSelect([
        'total_permohonan' => \App\Models\Permohonan::selectRaw('COUNT(*)')
                    ->whereColumn('user_id', '=', 'users.id')
                    ->take(1)
      ])
      ->where(function ($result) use ($request,$param) {
        if (!empty($param['registerViaColumn']) && $param['registerViaColumn'] != '') {
          $result->where('register_via', $param['registerViaColumn']);
        }
        if (!empty($param['userStatusColumn']) && $param['userStatusColumn'] != '') {
          $result->where('status', $param['userStatusColumn']);
        }
        if (!empty($param['namePemohonColumn'])) {
          $result->where('name', 'LIKE', '%' . $param['namePemohonColumn'] . '%');
        }
        if (!empty($param['emailPemohonColumn'])) {
          $result->where('email', 'LIKE', '%' . $param['emailPemohonColumn'] . '%');
        }
        if (!empty($param['phonePemohonColumn'])) {
          $result->where('phone', 'LIKE', '%' . $param['phonePemohonColumn'] . '%');
        }
        if (!empty($param['namaPemohonPermohonanColumn'])) {
          $result->where('phone', 'LIKE', '%' . $param['phonePemohonColumn'] . '%');
        }
      })
      ->orderBy('id', 'desc')
      ->paginate(10);
    return $data;
  }
  public function postApprove(Request $request){
    if (\App\Models\User::approveData($request)) {
      $response = \App\Helpers\MyFunction::getResponse('success', 'Proses berhasil.');
    } else {
      $response = \App\Helpers\MyFunction::getResponse('error', 'Mohon maaf terjadi kesalahan, silahkan coba beberapa saat lagi.');
    }
    return response()->json($response, 200);
  }
  public function postReject(Request $request){
    $validate = \Validator::make($request->all(), [
      'notesPemohonInput' => 'required',
    ]);
    if ($validate->fails()) {
      $response = [
        'status' => 'error',
        'message' => 'Validator error',
        'errors' => $validate->errors(),
      ];
      return response()->json($response, 422);
    }else{
      if (\App\Models\User::rejectData($request)) {
        $response = \App\Helpers\MyFunction::getResponse('success', 'Proses berhasil.');
      } else {
        $response = \App\Helpers\MyFunction::getResponse('error', 'Mohon maaf terjadi kesalahan, silahkan coba beberapa saat lagi.');
      }
      return response()->json($response, 200);
    }
  }
  public function postDestroy(Request $request)
  {
    if (\App\Models\User::deleteData($request)) {
      $response = \App\Helpers\MyFunction::getResponse('success', 'Proses berhasil.');
    } else {
      $response = \App\Helpers\MyFunction::getResponse('error', 'Mohon maaf terjadi kesalahan, silahkan coba beberapa saat lagi.');
    }
    return response()->json($response, 200);
  }
}
