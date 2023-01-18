<?php
namespace App\Helpers;

use Illuminate\Http\Request;
class MyData
{
  public static function getCenterPoint($data)
  {
    $newLat = [];
    $newLong = [];
    foreach ($data as $key => $value) {
      $newLat[] = $value[0];
      $newLong[] = $value[1];
    }

    $midLat = (max($newLat) + min($newLat)) / 2;
    $midLong = (max($newLong) + min($newLong)) / 2;
    return [$midLat, $midLong];
  }
  public static function defCor(){

    return $arr;
  }
}