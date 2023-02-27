<?php

namespace App\Http\Controllers\Permohonan;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class DistrictsController extends Controller
{
  public function postListDistricts(Request $request)
  {
    $query = \App\Models\Kecamatan::select('id', 'nama_kecamatan', 'luas_kecamatan')->get();
    return $query;
  }
  public function postDistrict(Request $request)
  {
    $query = \App\Models\PolaRuang::select('kecamatan', \DB::raw("(ST_AsGeoJSON(ogc_geom)) as geom_json"))
      ->where('kecamatan', $request->districtsInput)
      ->first();
    $json = json_decode($query->geom_json);
    $data = $json->coordinates[0][0];
    $coordinates = [];
    foreach ($data as $key => $value) {
      $coordinates[] = [$value[1], $value[0]];
    }
    $center_point = \App\Helpers\MyData::getCenterPoint($coordinates);
    return ['center' => $center_point, 'coordinates' => $coordinates];
  }
}
