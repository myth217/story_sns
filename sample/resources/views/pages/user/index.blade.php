@extends('layouts.app')

@section('content')
<div class="p-user-index">
<div class="tname">フレンドのお気に入り曲をランダムに出したい</div>
<div class="tname">{{$user->name}}さんのお気に入り</div>

  <div class="tphoto">
    <!-- <img src="" title="tphoto" alt="Tinder Photo" /> -->
    <div><audio src=""></audio></div>
    <p>ここは曲を表示</p>
    <p>問題はどんな曲を何を基準に表示するか?</p>
    <audio controls autoplay muted src="water.mp3" type="audio/mp3">水が流れる音</audio>
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