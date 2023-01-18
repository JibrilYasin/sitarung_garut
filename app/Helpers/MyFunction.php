<?php
namespace App\Helpers;

use Illuminate\Http\Request;
use DB;

class MyFunction
{
  public static function id($table, $field)
  {
    $data = DB::table($table)->max($field);
    return $data + 1;
  }
  public static function getResponse($status,$message,$data=null){
    $resp = ['status'=>$status,'message'=>$message,'data'=>$data];
    return $resp;
  }
  public static function getUserIpAddr(){
    $ipaddress = '';
    if (isset($_SERVER['HTTP_CLIENT_IP']))
        $ipaddress = $_SERVER['HTTP_CLIENT_IP'];
    else if(isset($_SERVER['HTTP_X_FORWARDED_FOR']))
        $ipaddress = $_SERVER['HTTP_X_FORWARDED_FOR'];
    else if(isset($_SERVER['HTTP_X_FORWARDED']))
        $ipaddress = $_SERVER['HTTP_X_FORWARDED'];
    else if(isset($_SERVER['HTTP_FORWARDED_FOR']))
        $ipaddress = $_SERVER['HTTP_FORWARDED_FOR'];
    else if(isset($_SERVER['HTTP_FORWARDED']))
        $ipaddress = $_SERVER['HTTP_FORWARDED'];
    else if(isset($_SERVER['REMOTE_ADDR']))
        $ipaddress = $_SERVER['REMOTE_ADDR'];
    else
        $ipaddress = 'UNKNOWN';
    return $ipaddress;
  }
  public static function getLocation(){
    $ip = MyFunction::getUserIpAddr();
    $ipdat = json_decode(file_get_contents("http://www.geoplugin.net/json.gp?ip=" . $ip));
    return ['country'=>$ipdat->geoplugin_countryName,'city'=>$ipdat->geoplugin_city,'timezone'=>$ipdat->geoplugin_timezone];
  }
  public static function pathAsset()
  {
    // if (\Request::getHttpHost() == 'localhost:8000') {
    //   $path = realpath(dirname('../../../')) . "/public/assets/images/";
    // } else {
    //   $path = realpath(dirname('../../')) . "/public/assets/images/";
    // }
    $path = public_path()."/images/";
    return $path;
  }
  public static function pathAssetGeneral()
  {
    $path = public_path();
    return $path;
  }
}
