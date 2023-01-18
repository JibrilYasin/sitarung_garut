<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
// Auth CMS
Route::group(['prefix'=>'auth'],function () {
  Route::post('/login','CMS\AuthController@postLogin');
  Route::post('/forgot','CMS\AuthController@postForgot');
  Route::post('/otp','CMS\AuthController@postOTP');
  Route::post('/reset','CMS\AuthController@postReset');
});
// End

Route::post('/login','Front\Auth\AuthController@postLogin');
Route::post('/register','Front\Auth\AuthController@postRegister');
Route::post('/activation','Front\Auth\AuthController@postActivation');
Route::post('/forgot','Front\Auth\AuthController@postForgot');
Route::post('/otp','Front\Auth\AuthController@postOTP');
Route::post('/reset','Front\Auth\AuthController@postReset');
Route::post('/map','MainController@index');
Route::post('/polaruang','MainController@postPolaRuang');
Route::get('/company','MainController@getCompany');

Route::group(['prefix'=>'permohonan'],function () {
  Route::post('/listdistrict','Permohonan\DistrictsController@postListDistricts');
  Route::post('/listdesa','Permohonan\DesaController@postListDesa');
});

Route::group(['middleware' => 'auth:sanctum'], function() {
  // Admin
  Route::group(['prefix'=>'admin'],function () {
    // Dashboard CMS
    Route::post('/dashboard','CMS\DashboardController@postDashboard');
    // End

    // Company
    Route::resource('company', 'CMS\CompanyController')->only([
      'update'
    ]);
    // End

    // Pemohon
    Route::resource('pemohon', 'CMS\Users\PemohonController')->except([
      'index','show','destroy'
    ]);
    Route::group(['prefix'=>'pemohon'],function () {
      Route::post('/list','CMS\Users\PemohonController@index');
      Route::post('/approve','CMS\Users\PemohonController@postApprove');
      Route::post('/reject','CMS\Users\PemohonController@postReject');
      Route::post('/destroy','CMS\Users\PemohonController@postDestroy');
    });
    // End

    // Informasi Status
    Route::resource('informasistatus', 'Permohonan\StatusPermohonanController')->except([
      'index','show','destroy'
    ]);
    Route::group(['prefix'=>'informasistatus'],function () {
      Route::post('/list','Permohonan\StatusPermohonanController@index');
      Route::post('/destroy','Permohonan\StatusPermohonanController@postDestroy');
    });
    // End
  });
  // End Admin

  // Account
  Route::group(['prefix'=>'account'],function () {
    Route::get('/getprofile','AccountController@getProfile');
    Route::get('/getprofilecms','AccountController@getProfileCMS');
    Route::post('/profile','AccountController@postProfile');
    Route::post('/password','AccountController@postPassword');
    // Route::post('/usermenu','AccountController@postUserMenu');
    //Route::post('/getpermission','AccountController@postGetPermission');
  });
  // End

  // Permohonan
  Route::resource('permohonan', 'Permohonan\PermohonanController')->except([
    'index','destroy'
  ]);
  Route::group(['prefix'=>'permohonan'],function () {
    Route::post('/list','Permohonan\PermohonanController@index');
    Route::post('/liststatus','Permohonan\StatusPermohonanController@postList');
    Route::post('/listnextstatus','Permohonan\StatusPermohonanController@postNextStatus');
    Route::post('/district','Permohonan\DistrictsController@postDistrict');
    Route::post('/polygon','Permohonan\PermohonanController@postPolygon');
    Route::post('/countstatus','Permohonan\PermohonanController@postCountPerStatus');
    Route::post('/status','Permohonan\PermohonanController@postStatus');
    Route::post('/destroy','Permohonan\PermohonanController@postDestroy');
    Route::get('/show/{id?}','Permohonan\PermohonanController@show');
  });
  // End

  // Notif
  Route::resource('notif', 'NotifController')->except([
    'index','destroy'
  ]);
  Route::group(['prefix'=>'notif'],function () {
    Route::post('/list','NotifController@index');
    Route::post('/totalunread','NotifController@postTotalUnread');
  });
  // End

  // Pengaduan
  Route::resource('Pengaduan', 'PengaduanController')->except([
    'index','destroy'
  ]);
  Route::group(['prefix'=>'Pengaduan'],function () {
    Route::post('/list','PengaduanController@index');
    Route::post('/totalunread','PengaduanController@postTotalUnread');
  });
  // End

  // Logout
  Route::post('/logout','Front\Auth\AuthController@postLogout');
  // End
});
