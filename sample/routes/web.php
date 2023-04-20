<?php

use App\Models\User as ModelsUser;
use Illuminate\Foundation\Auth\User;
use Illuminate\Support\Facades\Route;

use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;


use App\Http\Controllers\UserController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/


Route::get('test', function () {
    return view('test');
});

Auth::routes();

Route::get('/', [App\Http\Controllers\HomeController::class, 'index'])->name('home');


// ログインしている場合のroute
Route::group(['middleware' => 'auth'], function() {
    // /usersに接続し、UserControllerのindexを呼び出す  　　　　name() でルート名を設定
    Route::get('/users', [UserController::class, 'index']) -> name('users.index');
});