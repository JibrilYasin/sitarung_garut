<?php

namespace App\Http\Controllers\CMS;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
  public function postDashboard(Request $request){
    $statistikpermohonan = \App\Models\StatusPermohonan::addSelect([
                'total_permohonan' => \App\Models\Permohonan::selectRaw('COUNT(*)')
                    ->whereColumn('status_permohonan_id', '=', 'status_permohonan.id')
                    ->whereDate('permohonan.created_at', '>=', $request->startdate)->whereDate('permohonan.created_at', '<=', $request->enddate)
                    ->take(1)
            ])
            ->get();
    $latestpermohonan = \App\Services\PermohonanServices::getData($request)->orderBy('permohonan.id','desc')->take(5)->get();
    $latestpemohon = \App\Models\User::where('user_access','Front')->orderBy('id','desc')->take(5)->get();
    $totalpermohonan = \App\Services\PermohonanServices::getData($request)->count();
    return ['statistikpermohonan'=>$statistikpermohonan,'latestpermohonan'=>$latestpermohonan,'latestpemohon'=>$latestpemohon,'totalpermohonan'=>$totalpermohonan];
  }
}
