<?php

namespace App\Http\Controllers\CMS;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class CompanyController extends Controller
{
  public function update(Request $request,$id)
  {
    $validate = \App\Services\CompanyServices::validation($request);
    if ($validate->fails()) {
      $response = [
        'status' => 'error',
        'message' => 'Validator error',
        'errors' => $validate->errors(),
      ];
      return response()->json($response, 422);
    } else {
      if (\App\Models\Company::updateData($request)) {
        $response = \App\Helpers\MyFunction::getResponse('success','Proses perubahan berhasil.');
      } else {
        $response = \App\Helpers\MyFunction::getResponse('error','Mohon maaf, terjadi kesalahan...');
      }
      return response()->json($response, 200);
    }
  }
}
