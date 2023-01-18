<?php

namespace App\Http\Controllers\Permohonan;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class DesaController extends Controller
{
  public function postListDesa(Request $request)
  {
    $query = \App\Models\Desa::select('ID', 'KECAMATAN', 'DESA')->where('KECAMATAN',$request->kecamatan)->get();
    return $query;
  }
}
