<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Storage;

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

Route::get('/image', function () {
    $path = Storage::disk('public')->path('OpenSans-Regular.ttf');
    return \App\ImageTextWriter::TextToImage("sasds1124152asaaaaaaaaaaaaaaaaaasssssss", 40, $path);
});
