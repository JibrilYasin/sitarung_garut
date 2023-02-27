<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class MainController extends Controller
{
  public function index(Request $request){
    $param = $request->all();
    if(empty($param['desa']) || $param['desa'] == ''){
      return $this->mapByKecamatan($request);
    }else{
      return $this->mapByDesa($request);
    }
  }
  public function mapByKecamatan($request){
    // $coordinates=\App\Helpers\MyData::defCor();
    // $center_point = ['-7.231207478444935', '107.91462003147488'];
    // return ['center' => $center_point, 'coordinates' => $coordinates];
    try {
      $query = \App\Models\Kecamatan::select('id', 'nama_kecamatan', 'luas_kecamatan', \DB::raw("(ST_AsGeoJSON(ogc_geom)) as geom_json"))
      ->where(function ($result) use ($request) {
          if ($request->has('kecamatan') && $request->kecamatan != '') {
            $result->where('nama_kecamatan', $request['kecamatan']);
          }
        })
        ->get();
      $geoJSON = array(
  			'type' => 'FeatureCollection',
  			'features' => array()
  		);
      $center_point = '';
      foreach ($query as $key => $value) {
        $json = json_decode($value->geom_json);
        $data = $json->coordinates[0][0];
        $new = [];
        foreach ($data as $v) {
          $new[] = [$v[1], $v[0]];
        }
        $center_point = \App\Helpers\MyData::getCenterPoint($new);

        $marker = array(
  				'type' => 'Feature',
  				'properties' => array(
  					'id' => $value['id'],
  					'nama_kecamatan' => $value['nama_kecamatan'],
            'luas' => $value['luas_kecamatan'],
            'center_point' => $center_point
  				),
  				'geometry' =>  $json
  			);
  			array_push($geoJSON['features'], $marker);
      }
      return $geoJSON;
      //return ['center' => $center_point, 'coordinates' => $coordinates];
    } catch (\Exception $e) {
      $response = [
        'status' => 'error',
        'message' => $e->getMessage(),
      ];
      return response()->json($response, 500);
    }
  }
  public function mapByDesa($request){
    try {
      $query = \App\Models\Desa::select('ID', 'KECAMATAN', 'DESA', \DB::raw("(ST_AsGeoJSON(ogc_geom)) as geom_json"))
        ->where('KECAMATAN',$request->kecamatan)
        ->where('DESA',$request->desa)
        ->get();
      $geoJSON = array(
  			'type' => 'FeatureCollection',
  			'features' => array()
  		);
      $center_point = '';
      foreach ($query as $key => $value) {
        $json = json_decode($value->geom_json);
        $data = $json->coordinates[0][0];
        $new = [];
        foreach ($data as $v) {
          $new[] = [$v[1], $v[0]];
        }
        $center_point = \App\Helpers\MyData::getCenterPoint($new);

        $marker = array(
  				'type' => 'Feature',
  				'properties' => array(
  					'id' => $value['ID'],
  					'nama_kecamatan' => $value['KECAMATAN'],
            'nama_desa' => $value['DESA'],
            'center_point' => $center_point
  				),
  				'geometry' =>  $json
  			);
  			array_push($geoJSON['features'], $marker);
      }
      return $geoJSON;
    } catch (\Exception $e) {
      $response = [
        'status' => 'error',
        'message' => $e->getMessage(),
      ];
      return response()->json($response, 500);
    }
  }
  public function postPolaRuang(Request $request){
    try {
      $query = \App\Models\PolaRuang::select('pola_ruang.ID', 'KELAS_III', 'KECAMATAN','DESA','kupz.title','kupz.description', \DB::raw("(ST_AsGeoJSON(ogc_geom)) as geom_json"))
      ->leftJoin('kupz','pola_ruang.KELAS_III','kupz.nama_obj')
      ->whereIn('KELAS_III',$request->type)
      ->where('kecamatan', $request->kecamatan)
      ->where('desa', $request->desa)
      // ->where(function ($result) use ($request) {
      //   if (!empty($request->kecamatan) && $request->kecamatan != '') {
      //     $result->where('kecamatan', $request->kecamatan);
      //   }
      //   if (!empty($request->desa) && $request->desa != '') {
      //     $result->where('desa', $request->desa);
      //   }
      // })
      ->get();
      $geoJSON = array(
  			'type' => 'FeatureCollection',
  			'features' => array()
  		);
      $center_point = '';
      foreach ($query as $key => $value) {
        $json = json_decode($value->geom_json);
        $marker = array(
  				'type' => 'Feature',
  				'properties' => array(
  					'keterangan' => $value['KELAS_III'],
            'kupz_title' => $value['title'],
            'kupz_description' => $value['description'],
  				),
  				'geometry' =>  $json
  			);
  			array_push($geoJSON['features'], $marker);
      }
      return $geoJSON;
    } catch (\Exception $e) {
      \Debugbar::addThrowable($e);
      return false;
    }
  }
  public function postPolaLSD(Request $request){
    try {
      $query = \App\Models\LSD::select('ID', 'LSD', 'KESIMPULAN','LUAS','KECAMATAN','DESA', \DB::raw("(ST_AsGeoJSON(ogc_geom)) as geom_json"))
      ->where('KECAMATAN', $request->kecamatan)
      ->where('DESA', $request->desa)
      ->get();
      $geoJSON = array(
        'type' => 'FeatureCollection',
        'features' => array()
      );
      $center_point = '';
      foreach ($query as $key => $value) {
        $json = json_decode($value->geom_json);
        $marker = array(
          'type' => 'Feature',
          'properties' => array(
            'keterangan' => $value['KESIMPULAN'],
            'luas' => $value['LUAS'],
          ),
          'geometry' =>  $json
        );
        array_push($geoJSON['features'], $marker);
      }
      return $geoJSON;
    } catch (\Exception $e) {
      \Debugbar::addThrowable($e);
      return false;
    }
  }
  public function getCompany(){
    try {
      $query = \App\Services\CompanyServices::getData();
      return $query;
    } catch (\Exception $e) {
      \Debugbar::addThrowable($e);
      return false;
    }
  }
}
