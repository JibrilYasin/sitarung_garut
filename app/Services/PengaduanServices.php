<?php
namespace App\Services;

class PengaduanServices{
  public static function getData(){
    $query = \App\Models\Pengaduan::select(
        'pengaduan.*',
        'users.name',
        'users.email'
      )
      ->leftJoin('users','pengaduan.user_id','users.id');
    return $query;
  }
}
