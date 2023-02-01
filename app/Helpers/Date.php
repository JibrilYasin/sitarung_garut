<?php
namespace App\Helpers;
class Date
{
  public static function myDate($date)
  {
    $mydate = substr($date, 8, 2);
    $month = Date::month(substr($date, 5, 2));
    $year = substr($date, 0, 4);
    return $mydate . '/' . substr($date, 5, 2) . '/' . $year;
  }
  public static function fullDate($date)
  {
    if ($date == null) {
      return "-";
    } else {
      $fulldate = explode(" ", $date);
      $mydate = substr($date, 8, 2);
      $month = Date::month(substr($date, 5, 2));
      $year = substr($date, 0, 4);
      return $mydate . ' ' . $month . ', ' . $year . ', ' . explode('.', $fulldate[1])[0];
    }
  }
  public static function shortDate($date)
  {
    if ($date == null) {
      return "-";
    } else {
      $fulldate = explode(" ", $date);
      $mydate = substr($date, 8, 2);
      $month = Date::month(substr($date, 5, 2));
      $year = substr($date, 0, 4);
      return $mydate . ' ' . $month . ' ' . $year;
    }
  }
  public static function countDown($date)
  {
    $fulldate = explode(" ", $date);
    $mydate = substr($date, 8, 2);
    $month = substr($date, 5, 2);
    $year = substr($date, 0, 4);
    return $month . '/' . $mydate . '/' . $year . ' ' . $fulldate[1];
  }
  //Bulan
  public static function month($month)
  {
    switch ($month) {
      case 1:
        return "Januari";
        break;
      case 2:
        return "Februari";
        break;
      case 3:
        return "Maret";
        break;
      case 4:
        return "April";
        break;
      case 5:
        return "Mei";
        break;
      case 6:
        return "Juni";
        break;
      case 7:
        return "Juli";
        break;
      case 8:
        return "Agustus";
        break;
      case 9:
        return "September";
        break;
      case 10:
        return "Oktober";
        break;
      case 11:
        return "November";
        break;
      case 12:
        return "Desember";
        break;
    }
  }

  //Hari
  public static function getDay($date)
  {
    $week = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jum'at", "Sabtu"];
    $day = date("w");
    $now = $week[$day];
    return $now;
  }

  public static function getMonth($mydate)
  {
    $var = explode(" ", $mydate);
    $full = $var[0];
    $mydate = explode("-", $full);
    return Date::month($mydate[1]);
  }
}
