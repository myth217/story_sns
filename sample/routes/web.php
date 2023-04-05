<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\testController;

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

// 例: localhost::8000/ に　sample\resources\views\welcome.blade.php を表示(view)させる
Route::get('/', function () {
    return view('welcome');
});

// 例: localhost::8000/test  に　sample\resources\views\test.blade.php を表示(view)させる
// Route::get('test', function () {
//     return view('test');
// });

	

Route::get('test', [testController::class, 'index']);

