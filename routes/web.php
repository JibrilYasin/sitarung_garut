<?php

use Illuminate\Support\Facades\Route;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::get('/auth/login', function () {
  return view('cms');
});
Route::get('/auth/forgot', function () {
  return view('cms');
});
Route::get('/auth/otp', function () {
  return view('cms');
});
Route::get('/auth/reset', function () {
  return view('cms');
});
Route::get('/admin', function () {
  return view('cms');
});
Route::get('/admin/notifikasi', function () {
  return view('cms');
});
Route::get('/admin/pemohon', function () {
  return view('cms');
});
Route::get('/admin/informasistatus', function () {
  return view('cms');
});
Route::get('/admin/permohonan', function () {
  return view('cms');
});
Route::get('/admin/permohonan/detail/{id?}', function () {
  return view('cms');
});

Route::get('/genpdf', 'Permohonan\PermohonanController@generatePDF');
Route::get('/gendocs', 'Permohonan\PermohonanController@generateDocs');

Route::get('{any}', function () {
  return view('welcome');
})->where('any', '.*');
