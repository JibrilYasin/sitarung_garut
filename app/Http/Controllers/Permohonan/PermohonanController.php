<?php

namespace App\Http\Controllers\Permohonan;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use Barryvdh\DomPDF\Facade\Pdf as PDF;

class PermohonanController extends Controller
{
  public function index(Request $request){
    $param = $request->all();
    $data = \App\Services\PermohonanServices::getData($request)
      ->where(function ($result) use ($request,$param) {
        if ($request->user()->user_access == 'Front') {
          $result->where('user_id',$request->user()->id);
        }
        if (!empty($param['statusPermohonanColumn']) && $param['statusPermohonanColumn'] != '') {
          $result->where('status_permohonan_id', $param['statusPermohonanColumn']);
        }
        if (!empty($param['kecamatanColumn']) && $param['kecamatanColumn'] != '') {
          $result->where('kecamatan', $param['kecamatanColumn']);
        }
        if (!empty($param['desaColumn']) && $param['desaColumn'] != '') {
          $result->where('desa', $param['desaColumn']);
        }
        if (!empty($param['invoicePermohonanColumn'])) {
          $result->where('invoice', 'LIKE', '%' . $param['invoicePermohonanColumn'] . '%');
        }
        if (!empty($param['alamatLahanColumn'])) {
          $result->where('alamat_lahan', 'LIKE', '%' . $param['alamatLahanColumn'] . '%');
        }
        if (!empty($param['peruntukanColumn'])) {
          $result->where('peruntukan', 'LIKE', '%' . $param['peruntukanColumn'] . '%');
        }
        if (!empty($param['namaPemohonPermohonanColumn'])) {
          $result->where('name', 'LIKE', '%' . $param['namaPemohonPermohonanColumn'] . '%');
        }
      })
      ->orderBy('permohonan.id', 'desc')
      ->paginate(10);
    return $data;
  }
  public function store(Request $request){
    if($request->pengaduanVIA == 'Website'){
      $geojson = json_decode($request->geojson,true);
      if(count($geojson['features']) < 1){
        $response = [
          'status' => 'warning',
          'message' => 'Anda belum menentukan titik lokasi.',
        ];
        return response()->json($response, 200);
      }
    }
    $validate = \Validator::make($request->all(), [
      'districtsInput' => 'required',
      'desaInput' => 'required',
      'statusPemohonInput' => 'required',
      'alamatLahanInput' => 'required|min:5',
      'luasLahanRencanaInput' => 'required|numeric',
      'statusKepemilikanLahanInput' => 'required',
      'namaPemilikLahanInput' => 'required',
      'peruntukanInput' => 'required|min:2',
      'lokasiInput' => 'nullable|sometimes|image|max:1000|mimes:jpeg,jpg,png',
      'sertifikatInput' => 'nullable|sometimes|image|max:1000|mimes:jpeg,jpg,png',
    ]);

    if ($validate->fails()) {
      $response = [
        'status' => 'error',
        'message' => 'Validator error',
        'errors' => $validate->errors(),
      ];
      return response()->json($response, 422);
    }else{

      $datacor = [];
      if($request->pengaduanVIA == 'Website'){
        $original_data = $geojson['features'][0]['geometry']['coordinates'][0];
        krsort($original_data);
        foreach($original_data as $key=>$v){
          $datacor[]=$v[0].' '.$v[1];
        }
      }else{
        $latitude = explode(',',$request->latitude);
        $gencoordinates = [];
        foreach (explode(',',$request->longitude) as $key => $value) {
          $datacor[] = $value . ' ' . $latitude[$key];
          $gencoordinates[] = 'lat : '.$latitude[$key].',lng : '.$value;
        }
        $request->merge(['coordinatesInput'=>json_encode($gencoordinates)]);
        // foreach(explode(' | ',$request->coordinatesInput) as $value){
        //   $lat = explode(",",$value)[1];
        //   $lng = explode(",",$value)[0];
        //   $datacor[]=explode(" : ",$lat)[1].' '.explode(" : ",$lng)[1];
        // }
      }
      $datacor = implode(',', $datacor);

      $sSQL = "SELECT ST_PolygonFromText('POLYGON((".$datacor."))',4326) as ST_GeomFromText";
      //$sSQL = "SELECT ST_PolygonFromText('POLYGON((-7.099155 107.939423,-7.114486 107.932896,-7.108694 107.947324,-7.099155 107.939423))') as ST_GeomFromText";
      $row = \DB::select($sSQL);

      foreach ($row as $row1) {
        $geom = $row1->ST_GeomFromText;
      }
      if (\App\Models\Permohonan::storeData($request,$geom)) {
        $response = \App\Helpers\MyFunction::getResponse('success', 'Proses berhasil.');
      } else {
        $response = \App\Helpers\MyFunction::getResponse('error', 'Mohon maaf terjadi kesalahan, silahkan coba beberapa saat lagi.');
      }
      return response()->json($response, 200);
    }
  }
  public function show($id){
    $query = \App\Services\PermohonanServices::getData()->where('permohonan.id',$id)->first();
    return $query;
  }
  public function postStatus(Request $request)
  {
    $validate = \Validator::make($request->all(), [
      'statusPermohonanInput' => 'required',
    ]);

    if ($validate->fails()) {
      $response = [
        'status' => 'error',
        'message' => 'Validator error',
        'errors' => $validate->errors(),
      ];
      return response()->json($response, 422);
    }else{
      if (\App\Models\Permohonan::statusData($request)) {

        // Generate Docs
        $maxstatus = \App\Models\StatusPermohonan::max('id');
        if($maxstatus == $request->statusPermohonanInput){
          $this->generateDocs($request->id);
        }
        // End

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
    }
    return response()->json($response, 200);
  }
  public function postDestroy(Request $request)
  {
    if (\App\Models\Permohonan::deleteData($request)) {
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
  public function postPolygon(Request $request)
  {
    $param = $request->all();
    $query = \App\Models\Permohonan::select(
      'permohonan.id',
      'invoice',
      'kecamatan',
      'status_permohonan_id',
      'status_pemohon',
      'alamat_lahan',
      'luas_lahan_rencana',
      'status_kepemilikan_lahan',
      'nama_pemilik_lahan',
      'sertifikat',
      'peruntukan',
      'permohonan.created_at',
      'status_permohonan.status_title',
      'status_permohonan.status_hex',
      'users.name',
      \DB::raw("(ST_AsGeoJSON(ogc_geom)) as geom_json")
    )
    ->leftJoin('status_permohonan','permohonan.status_permohonan_id','status_permohonan.id')
    ->leftJoin('users','permohonan.user_id','users.id')
    ->where(function ($result) use ($request,$param) {
        if ($request->has('invoice')) {
          $result->where('invoice', $request->invoice);
        }
        if (!empty($param['startdate']) && !empty($param['enddate'])) {
          $result->whereDate('permohonan.created_at', '>=', $param['startdate'])->whereDate('permohonan.created_at', '<=', $param['enddate']);
        }
        if (!empty($request->kecamatan) && $request->kecamatan != '') {
          $result->where('kecamatan', $request->kecamatan);
        }
        if (!empty($request->desa) && $request->desa != '') {
          $result->where('desa', $request->desa);
        }
    })
    ->get();
    $geoJSON = [];
    $center_point = '';
    foreach ($query as $key => $value) {
      $json = json_decode($value->geom_json);
      $data = $json->coordinates[0][0];
      // $new = [];
      // foreach ($data as $v) {
      //   $new[] = [$v[1], $v[0]];
      // }
      // $center_point = \App\Helpers\MyData::getCenterPoint($new);
      $geoJSON[] = array(
        'type' => 'Feature',
        'properties' => array(
          'invoice' => $value['invoice'],
          'status_hex' => $value['status_hex'],
          'center_point' => $data,
        ),
        'geometry' =>  $json
      );
    }
    return $geoJSON;
  }
  public function generatePDF()
  {
    $mainpath = \App\Helpers\MyFunction::pathAssetGeneral();
    $subpath = '/pdf';
    $path = $mainpath . $subpath;
    $fileName =  'PM-00000000001.pdf';
    $pdf = PDF::loadView('pdf.statuspermohonan');
    $pdf->save($path . '/' . $fileName);
  }
  public function generateDocs($id)
  {
    $mainpath = \App\Helpers\MyFunction::pathAssetGeneral();
    $subpath = '/docs/';
    $path = $mainpath . $subpath;

    $phpWord = new \PhpOffice\PhpWord\PhpWord();
    $section = $phpWord->addSection(['marginLeft' => 200, 'marginRight' => 200,'marginTop' => 200, 'marginBottom' => 200]);
    $data['permohonan'] = $this->polImpact($id)['permohonan'];
    $data['polaruang'] = $this->polImpact($id)['polaruang'];
    $data['sawah'] = $this->polImpact($id)['sawah'];
    \PhpOffice\PhpWord\Shared\Html::addHtml($section,\View::make('docs.statuspermohonan',$data)->render() , false, false);

    $objWriter = \PhpOffice\PhpWord\IOFactory::createWriter($phpWord, 'Word2007');
    $objWriter->save($path.$data['permohonan']['invoice'].'.docx');
    return view('docs.statuspermohonan',$data);
  }
  public function polImpact($id){
    $query = \App\Models\Permohonan::select(
      'permohonan.id',
      'permohonan.invoice',
      'permohonan.peruntukan',
      'permohonan.alamat_lahan',
      'permohonan.luas_lahan_rencana',
      'permohonan.coordinates',
      'permohonan.created_at',
      'users.name',
      \DB::raw("(ST_AsGeoJSON(ogc_geom)) as geom_json")
    )
    ->leftJoin('users','permohonan.user_id','users.id')
    ->where('permohonan.id',$id)
    ->first();
    $json = json_decode($query->geom_json);
    $data = $json->coordinates[0];
    $datacor = [];
    foreach($data as $v){
      $datacor[]=$v[0].' '.$v[1];
    }
    $datacor = implode(',', $datacor);
    //return $datacor;

    $polygon="POLYGON((".$datacor."))";
    $where = "ST_Intersects((ST_GeomFromText('".$polygon."')), ogc_geom)";
    // $where .= "AND KECAMATAN = '" . $kecamatan . "'";
    // $where .= "AND DESA = '" . $desa . "'";
    $polaruang = \DB::select("SELECT KELAS_III,luas FROM pola_ruang as pl WHERE {$where} GROUP BY keterangan");
    $valuepolaruang = [];
    foreach ($polaruang as $key => $v) {
      $kupz = \App\Models\KUPZ::where('nama_obj',$v->KELAS_III)->first();
      $valuepolaruang[]=['keterangan'=>$v->KELAS_III,'luas'=>$v->luas,'kupz_title'=>$kupz['title'],'kupz_description'=>$kupz['description']];
    }

    $sawah = \DB::select("SELECT LSD,KESIMPULAN,LUAS FROM lsd as sawah WHERE {$where}");
    $valuesawah = [];
    foreach ($sawah as $key => $v) {
      $valuesawah[]=['lsd'=>$v->LSD,'kesimpulan'=>$v->KESIMPULAN,'luas'=>$v->LUAS];
    }

    return ['permohonan'=>$query,'polaruang'=>$valuepolaruang,'sawah'=>$valuesawah];
  }
}
