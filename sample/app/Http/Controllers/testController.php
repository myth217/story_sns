<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Illuminate\Support\Facades\DB;
use App\Models\test;


class testController extends Controller
{

//     DB::table('モデル名')->first();
// //Eloquent ORM
// モデル名::first();

    public function index ()
    {
        $test = test::first();
        return view('test',compact('test'));
    }

}
