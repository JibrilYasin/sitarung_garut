<?php

namespace App\Http\Controllers\Permohonan;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class StatusPermohonanController extends Controller
{
  public function index(Request $request){
    $query = \App\Services\StatusPermohonanServices::getData($request)
    ->orderBy('id', 'asc')
    ->paginate(10);
    return $query;
  }
  public function postList(Request $request){
    $query = \App\Services\StatusPermohonanServices::getData($request)->get();
    return $query;
  }
  public function postNextStatus(Request $request){
    $query = \App\Services\StatusPermohonanServices::getData($request)->where('id','>',$request->currentStatusID)->first();
    return $query;
  }
  public function store(Request $request)
  {
    $validate = \App\Services\StatusPermohonanServices::validation($request);
    if ($validate->fails()) {
      $response = [
        'status' => 'error',
        'message' => 'Validator error',
        'errors' => $validate->errors(),
        'content' => null,
      ];
      return response()->json($response, 422);
    } else {
      if (\App\Models\StatusPermohonan::storeData($request)) {
        $response = \App\Helpers\MyFunction::getResponse('success', 'Proses berhasil, mohon tunggu...');
      } else {
        $response = \App\Helpers\MyFunction::getResponse('error', 'Mohon maaf, terjadi kesalahan...');
      }
      return response()->json($response, 200);
    }
  }
  public function update(Request $request)
  {
    $validate = \App\Services\StatusPermohonanServices::validation($request);
    if ($validate->fails()) {
      $response = [
        'status' => 'error',
        'message' => 'Validator error',
        'errors' => $validate->errors(),
        'content' => null,
      ];
      return response()->json($response, 422);
    } else {
      if (\App\Models\StatusPermohonan::updateData($request)) {
        $response = \App\Helpers\MyFunction::getResponse('success', 'Proses berhasil, mohon tunggu...');
      } else {
        $response = \App\Helpers\MyFunction::getResponse('error', 'Mohon maaf, terjadi kesalahan...');
      }
      return response()->json($response, 200);
    }
  }
  public function postDestroy(Request $request)
  {
    if (\App\Models\StatusPermohonan::deleteData($request)) {
      $response = \App\Helpers\MyFunction::getResponse('success', 'Proses berhasil, mohon tunggu...');
    } else {
      $response = \App\Helpers\MyFunction::getResponse('error', $request->data);
    }
    return response()->json($response, 200);
  }
}
