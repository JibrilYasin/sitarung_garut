<?php
namespace App\Services;

class NotifServices{
  public static function getData(){
    $query = \App\Models\Notif::select(
        'notif.*',
        'users.name',
        'users.email'
      )
      ->leftJoin('users','notif.user_id','users.id');
    return $query;
  }
}
