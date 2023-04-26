@extends('layouts.app')

@section('content')

<div class="p-user-index">


  <!-- 自身、フレンドもしくは、フレンドのフレンドあたりまでの気に入ってる曲をランダムに再生させたい -->
  <div class="tphoto">
    <!-- <img src="" title="tphoto" alt="Tinder Photo" /> -->
    <div><audio src=""></audio></div>
    <audio controls autoplay muted src="water.mp3" type="audio/mp3">水が流れる音</audio>
  </div>


  

    <!-- 誰の気に入っている曲なのかを表示し、
    その人物の概要に繋がる、もしくはチャットできるようにしたい
    -->
    <div class="popup_baner">
        <div class="_sumb">サムネ</div>
        <div class="_sumb">{{$user->name}}さんのfavorite song</div>
    </div>



  <div class="tcontrols">
    <div class="container">
      <div class="row">
          <div class="col-md-6 mb-1">
              <form action="" method="">
                <button class="tno" type="submit">
                  <i class="fa fa-times" aria-hidden="true"></i>
                </button>
              </form>
          </div>
          <div class="col-md-6 mb-1">
              <form action="" method="">

                <button class="tyes" type="submit">
                  <i class="fa fa-heart" aria-hidden="true"></i>
                </button>
              </form>
          </div>
      </div>
    </div>
  </div>
</div>


@endsection