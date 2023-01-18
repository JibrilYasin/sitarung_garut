<?php
namespace App\Services;

class PermohonanServices{
  public static function getData($request){
    $param = $request->all();
    $query = \App\Models\Permohonan::select(
        'permohonan.id',
        'permohonan.user_id',
        'invoice',
        'kecamatan',
        'desa',
        'status_permohonan_id',
        'status_pemohon',
        'alamat_lahan',
        'luas_lahan_rencana',
        'status_kepemilikan_lahan',
        'nama_pemilik_lahan',
        'fotolokasi',
        'sertifikat',
        'peruntukan',
        'coordinates',
        'permohonan.created_at',
        'status_permohonan.status_title',
        'status_permohonan.status_color',
        'users.name',
        'users.email',
        'users.phone'
      )
      ->leftJoin('status_permohonan','permohonan.status_permohonan_id','status_permohonan.id')
      ->leftJoin('users','permohonan.user_id','users.id')
      ->where(function ($result) use ($param) {
        if (!empty($param['startdate']) && !empty($param['enddate'])) {
          $result->whereDate('permohonan.created_at', '>=', $param['startdate'])->whereDate('permohonan.created_at', '<=', $param['enddate']);
        }
      });
    return $query;
  }
}
