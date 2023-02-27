<?php
namespace App\Services;

class StatusPermohonanServices{
  public static function getData($request){
    $param = $request->all();
    $query = \App\Models\StatusPermohonan::where(function ($result) use ($request,$param) {
      if (!empty($param['statusTitleColumn'])) {
        $result->where('status_title', 'LIKE', '%' . $param['statusTitleColumn'] . '%');
      }
      if (!empty($param['statusSubTitleColumn'])) {
        $result->where('status_subtitle', 'LIKE', '%' . $param['statusSubTitleColumn'] . '%');
      }
    });
    return $query;
  }
  public static function validation($request){
    $validate = \Validator::make($request->all(), [
      'statusTitleInput' => 'required|min:3',
      'statusSubtitleInput' => 'nullable|min:3',
      'statusHexColorInput' => 'required',
      'statusColorInput' => 'required',
    ]);
    return $validate;
  }
}
