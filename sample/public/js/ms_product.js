
/******************************************
 * アラートオブジェクト
 ******************************************/
let _swal;

/******************************************
 * 商品コード
 ******************************************/
let _product_code;

/******************************************
 * アレルギーデータ
 ******************************************/
let _allergen_array;

/******************************************
 * 画像データ
 ******************************************/
let _image_base64;

let _picture_input_id   = 'picture_input';
let _picture_preview_id = 'picture_preview';

/******************************************
 * LOAD
 ******************************************/
document.addEventListener( 'DOMContentLoaded', async function() {
// window.addEventListener( 'load', async function() {

    _swal = new cSwal;

    // 画面関係
    document.onselectstart = () => false;
    document.addEventListener( 'dblclick', function( e ) { e.preventDefault(); }, { passive: false } );
    document.getElementById( 'registration' ).onclick = ( e ) => { click_registration( e ); };
    // document.getElementById( 'product_code' ).value      = '';
    // document.getElementById( 'product_name' ).value      = '';
    // document.getElementById( 'product_name_kana' ).value = '';
    // document.getElementById( 'unit_price' ).value        = 0;
    // document.getElementById( 'stock' ).value             = 0;
    // document.getElementById( 'product_name_kana' ).value = '';

    // 基本データ関係
    await get_data();
    // await set_data();

} );

/******************************************
 * 写真ボタン押下の処理
 ******************************************/
const picture_input = ( e ) => {

    try {

        // 発火
        $( '#' + _picture_input_id ).click();

        // 選択後 ( 重複実行防止対策付き )
        $( '#' + _picture_input_id ).off( 'change' );
        $( '#' + _picture_input_id ).on( 'change', function( e ) {
            // 画像表示
            picture_preview( this );
            // ファイル自体は削除しておく
            $( this ).val( '' );
        });
    }
    catch ( ex ) {
        // 個別のdone内部で発生した例外の対処

        // Modal (Error)
        // swal_msg_error.title = 'error';
        // swal_msg_error.text  = 'click_btn_picture<BR>' + ex.message;
        // fnc_modal_error_keep();
    };
    // 終了
    return true;
};

/******************************************
 * 画像を表示する
 ******************************************/
const picture_preview = ( obj ) => {

    console.log( 'picture_preview' );

    try {

        var fileReader = new FileReader();
        fileReader.onload = (function() {

            var canvas = document.getElementById( _picture_preview_id );
            var ctx    = canvas.getContext('2d');

            var image = new Image();
            image.src = fileReader.result;
            image.onload = ( function () {
                canvas.width  = image.width;
                canvas.height = image.height;
                ctx.drawImage( image, 0, 0 );
            } );

            let separetedDate =  image.src.split( ',' );
        });

        fileReader.readAsDataURL( obj.files[ 0 ] );

        $( obj ).val( '' );
    }
    catch ( ex ) {
    };
};

/******************************************
 * [非同期]商品情報を取得する
 * @param {object} post
 * @returns new Promise
 ******************************************/
const get_product_code = ( post ) => {
    return new Promise( ( resolve, reject ) => {
        const RES = {
                status  : '1'
            ,   message : ''
            ,   data    : '001'
        };
        // setTimeout( () => {
        //     $.ajax( {
        //         url         : './api/update_kafun_jisseki.ashx',
        //         type        : 'POST',
        //         async       : false,
        //         cache       : false,
        //         data        : { 'json' : JSON.stringify( post ) },
        //         dataType    : 'json',
        //         traditional : true,
        //     } )
        //     .then (
        //         // 正常終了
        //         function( result ) {

        //             let res;
        //             res.status = 1;
        //             res.message = '';
        //             res.data = "001"
        //             resolve( res );
        //         },
        //         // エラー
        //         function( jqXHR ) {
        //             reject( jqXHR );
        //         }
        //     )
        // }, 1000 );
        setTimeout(() => {
            return resolve( RES )
        }, 500, )
    } )
};

/******************************************
 * [非同期]アレルギー情報を取得する
 * @param {object} post
 * @returns new Promise
 ******************************************/
const get_allergen = ( post ) => {
    return new Promise( ( resolve, reject ) => {
        const RES = {
                status  : '1'
            ,   message : ''
            ,   data    : [
                    { allergen_no :  1, allergen_category_no : 1, allergen_name : 'えび', }
                ,   { allergen_no :  2, allergen_category_no : 1, allergen_name : 'かに', }
                ,   { allergen_no :  3, allergen_category_no : 1, allergen_name : '小麦', }
                ,   { allergen_no :  4, allergen_category_no : 1, allergen_name : 'そば', }
                ,   { allergen_no :  5, allergen_category_no : 1, allergen_name : '卵', }
                ,   { allergen_no :  6, allergen_category_no : 1, allergen_name : '乳', }
                ,   { allergen_no :  7, allergen_category_no : 1, allergen_name : '落花生', }
                ,   { allergen_no :  8, allergen_category_no : 2, allergen_name : 'アーモンド', }
                ,   { allergen_no :  9, allergen_category_no : 2, allergen_name : 'あわび', }
                ,   { allergen_no : 10, allergen_category_no : 2, allergen_name : 'いか', }
                ,   { allergen_no : 11, allergen_category_no : 2, allergen_name : 'いくら', }
                ,   { allergen_no : 12, allergen_category_no : 2, allergen_name : 'オレンジ', }
                ,   { allergen_no : 13, allergen_category_no : 2, allergen_name : 'カシューナッツ', }
                ,   { allergen_no : 14, allergen_category_no : 2, allergen_name : 'キウイフルーツ', }
                ,   { allergen_no : 15, allergen_category_no : 2, allergen_name : '牛肉', }
                ,   { allergen_no : 16, allergen_category_no : 2, allergen_name : 'くるみ', }
                ,   { allergen_no : 17, allergen_category_no : 2, allergen_name : 'ごま', }
                ,   { allergen_no : 18, allergen_category_no : 2, allergen_name : 'さけ', }
                ,   { allergen_no : 19, allergen_category_no : 2, allergen_name : 'さば', }
                ,   { allergen_no : 20, allergen_category_no : 2, allergen_name : '大豆', }
                ,   { allergen_no : 21, allergen_category_no : 2, allergen_name : '鶏肉', }
                ,   { allergen_no : 22, allergen_category_no : 2, allergen_name : 'バナナ', }
                ,   { allergen_no : 23, allergen_category_no : 2, allergen_name : '豚肉', }
                ,   { allergen_no : 24, allergen_category_no : 2, allergen_name : 'まつたけ', }
                ,   { allergen_no : 25, allergen_category_no : 2, allergen_name : 'もも', }
                ,   { allergen_no : 26, allergen_category_no : 2, allergen_name : 'やまいも', }
                ,   { allergen_no : 27, allergen_category_no : 2, allergen_name : 'りんご', }
                ,   { allergen_no : 28, allergen_category_no : 2, allergen_name : 'ゼラチン', }
                ]
        };
        // let res     = {};
        // res.status  = '1';
        // res.message = '';
        // res.data    = '';
        // setTimeout( () => {
        //     $.ajax( {
        //         url         : './api/update_kafun_jisseki.ashx',
        //         type        : 'POST',
        //         async       : false,
        //         cache       : false,
        //         data        : { 'json' : JSON.stringify( post ) },
        //         dataType    : 'json',
        //         traditional : true,
        //     } )
        //     .then (
        //         // 正常終了
        //         function( result ) {

        //             let res;
        //             res.status = 1;
        //             res.message = '';
        //             res.data = "001"
        //             resolve( res );
        //         },
        //         // エラー
        //         function( jqXHR ) {
        //             reject( jqXHR );
        //         }
        //     )
        // }, 1000 );
        setTimeout(() => {
            return resolve( RES )
        }, 500, )
    } )
};

/******************************************
 * 必要な情報を取得する
 ******************************************/
const get_data = async () => {

    try {

        let res;

        // 商品情報
        res = '';
        res = await get_product_code();

        // レスポンス格納
        _product_code = '';
        _product_code = res.data;

        // アレルギー情報
        res = '';
        res = await get_allergen();

        // レスポンス格納
        _allergen_array = '';
        _allergen_array = res.data;

    }
    catch {

    }
    finally {

    };

    // END
    return;
};

/******************************************
 * 必要な情報を設定する
 ******************************************/
const set_data = async () => {

    try {

        // 画面反映 ( 商品コード )
        // document.getElementById( 'product_code' ).value  = '';
        // document.getElementById( 'product_code' ).value  = '' + _product_code;

        // 画面反映 ( アレルギー関係 )
        for( let allergen of _allergen_array ) {

            // 取得 ( アレルギーカテゴリー )
            let all_cat_no   = allergen.allergen_category_no - 0;
            let all_cat_name = '';

            // 取得 ( アレルギー )
            let all_no   = '' + allergen.allergen_no;
            let all_name = '' + allergen.allergen_name.trim().substr( 0, 4 ); // ※4文字で切り捨て

            // 判定 ( カテゴリー分け )
            switch ( all_cat_no ) {
                case 1  : all_cat_name = 'main'; break;
                case 2  : all_cat_name = 'semi'; break;
                default : all_cat_name = 'main'; break;
            };

            // HTML構築
            let html;
            html = '<div id="allergen_' + all_no + '" class="btn_' + all_cat_name + '_allergen mt-1 mr-1 mb-1 " onclick="click_' + all_cat_name + '_allergen( this );">' + all_name + '</div>'

            // 格納
            document.getElementById( '' + all_cat_name + '_allergen_data' ).insertAdjacentHTML( 'beforeend', html );
        };
    }
    catch {

    }
    finally {

    };
};

/******************************************
 * 注文確定ボタン押下時の処理
 ******************************************/
const click_registration = ( e ) => {

    // // 非活性の場合
    // if( document.getElementById( 'order' ).classList.contains( 'disabled' ) ) {
    //     // 抜ける
    //     return;
    // };

    // // 本来の SweetAlert2 の書き方になります

    // const t_lot   = document.getElementById( 'total' + '_lot' ).textContent;
    // const t_price = document.getElementById( 'total' + '_price' ).textContent;

    // if( t_lot < 1 ) {
    //     Swal.fire( '', '注文がありません', 'warning' );
    //     return;
    // };

    let html = '';

    html += '<div>商品の新規登録を行います' + '</div>';
    html += '<div>よろしいでしょうか？' + '</div>';
    // html += '<BR>';
    // html += '<div>────────────────' + '</div>';
    // html += '<div class="d-flex flex-column">';
    // html += '  <div >';
    // html += '    <div class="float-left"            style="min-width:15%; min-height:1px;">' + '</div>';
    // html += '    <div class="float-left text-right" style="min-width:35%; min-height:1px;">ご注文数：' + '</div>';
    // html += '    <div class="float-left text-right" style="min-width:30%; min-height:1px;">' + t_lot + ' 点' + '</div>';
    // html += '    <div class="float-left"            style="min-width:20%; min-height:1px;">' + '</div>';
    // html += '  </div>';
    // html += '  <div >';
    // html += '    <div class="float-left"            style="min-width:15%; min-height:1px;">' + '</div>';
    // html += '    <div class="float-left text-right" style="min-width:35%; min-height:1px;">合計金額：' + '</div>';
    // html += '    <div class="float-left text-right" style="min-width:30%; min-height:1px;">' + t_price + ' 円' + '</div>';
    // html += '    <div class="float-left"            style="min-width:20%; min-height:1px;">' + '</div>';
    // html += '  </div>';
    // html += '</div>';
    // html += '<div>────────────────' + '</div>';

    Swal
    .fire( {
        // icon                : 'question'
    // ,   title              : '注文を確定しますか？'
    // ,   html               : 'ログアウトを行うとすると<BR>入力中のデータは消えます<BR>よろしいですか？'
        cancelButtonText    : 'いいえ'
    ,   cancelButtonColor   : '#d33'
    ,   confirmButtonText   : 'はい'
    ,   confirmButtonColor  : '#3085D6'
    ,   focusCancel         : true
    ,   html                : html
    ,   reverseButtons      : true
    ,   showCancelButton    : true
    ,   showLoaderOnConfirm : true
    ,   preConfirm          : function( inputStr ) {

            console.log('preConfirm起動');

            //バリデーションを入れたりしても良い
            // if (inputStr !== 'aaa') {
            //     return Swal.showValidationMessage('aaaを入力してね');
            // };

            //ローディングを表示させるために3秒スリープ
            var sleep = function(sec) {
                return new Promise(resolve => {
                setTimeout(resolve, sec * 750);
                });
            };

            return sleep(3);

        }
    } )
    .then( ( result ) => {

        // どっちが押されたか
        if( result.isConfirmed ) {
            // はい押下

            // const t_wait = 1;

            // const order_no = 999;

            // document.getElementById( 'order' ).textContent = '注文済み';
            // document.getElementById( 'order' ).classList.add( 'disabled' );

            // // HTML構築
            // let html = '';
            // html += '<BR>';
            // html += '<div class="h3">注文を承りました' + '</div>';
            // html += '<div class="h6">以下の注文番号にて' + '</div>';
            // html += '<div class="h6">お呼びします' + '</div>';
            // // html += '<BR>';
            // html += '<div class="mt-5 mb-5" style="font-size:50px;">' + order_no + '</div>';
            // // html += '<BR>';
            // // html += '<div>───────────────────' + '</div>';
            // // html += '<div class="d-flex flex-column">';
            // // html += '  <div >';
            // // html += '    <div class="float-left"            style="min-width:15%; min-height:1px;">' + '</div>';
            // // html += '    <div class="float-left text-right" style="min-width:35%; min-height:1px;">ご注文数：' + '</div>';
            // // html += '    <div class="float-left text-right" style="min-width:30%; min-height:1px;">' + t_lot + ' 点' + '</div>';
            // // html += '    <div class="float-left"            style="min-width:20%; min-height:1px;">' + '</div>';
            // // html += '  </div>';
            // // html += '  <div >';
            // // html += '    <div class="float-left"            style="min-width:15%; min-height:1px;">' + '</div>';
            // // html += '    <div class="float-left text-right" style="min-width:35%; min-height:1px;">合計金額：' + '</div>';
            // // html += '    <div class="float-left text-right" style="min-width:30%; min-height:1px;">' + t_price + ' 円' + '</div>';
            // // html += '    <div class="float-left"            style="min-width:20%; min-height:1px;">' + '</div>';
            // // html += '  </div>';
            // // html += '  <div >';
            // // html += '    <div class="float-left"            style="min-width:15%; min-height:1px;">' + '</div>';
            // // html += '    <div class="float-left text-right" style="min-width:35%; min-height:1px;">待ち人数：' + '</div>';
            // // html += '    <div class="float-left text-right" style="min-width:30%; min-height:1px;">' + t_wait + ' 人' + '</div>';
            // // html += '    <div class="float-left"            style="min-width:20%; min-height:1px;">' + '</div>';
            // // html += '  </div>';
            // // html += '</div>';
            // // html += '<div>───────────────────' + '</div>';
            // html += '<div class="h6 text-danger">※再注文をされるお客様は' + '</div>';
            // html += '<div class="h6 text-danger">QRコードを再スキャンして下さい' + '</div>';

            // Swal
            // .fire( {
            //     // icon               : 'success'
            // // ,   title              : '注文を確定しますか？'
            // // ,   html               : 'ログアウトを行うとすると<BR>入力中のデータは消えます<BR>よろしいですか？'
            //     html               : html
            // ,   allowOutsideClick  : false
            // ,   showCancelButton   : false
            // ,   cancelButtonText   : 'いいえ'
            // ,   cancelButtonColor  : '#d33'
            // ,   confirmButtonText  : 'はい'
            // ,   confirmButtonColor : '#3085D6'
            // // ,   customClass        : 'swal-custom'
            // ,   reverseButtons     : false
            // ,   focusCancel        : false
            // ,   showConfirmButton  : false,
            // } )
        }
        else {
            // いいえ押下

            // Swal.fire( '(仮)', 'ログアウトを<BR>キャンセルしました', 'info' );
        }
    } );
};

/******************************************
 * アレルギーボタン押下時の処理 ( main部分 )
 ******************************************/
const click_main_allergen = ( me ) => {

    let id = me.id;

    let element = document.getElementById( id );

    var element1 = element.classList.contains( 'btn_main_allergen' );
    var element2 = element.classList.contains( 'btn_main_allergen_active' );

    if( element1 ) {
        element.classList.replace( 'btn_main_allergen', 'btn_main_allergen_active' );
    };

    if( element2 ) {
        element.classList.replace( 'btn_main_allergen_active', 'btn_main_allergen' );
    };

    return;
};

/******************************************
 * アレルギーボタン押下時の処理 ( semi部分 )
 ******************************************/
const click_semi_allergen = ( me ) => {

    let id = me.id;

    let element = document.getElementById( id );

    var element1 = element.classList.contains( 'btn_semi_allergen' );
    var element2 = element.classList.contains( 'btn_semi_allergen_active' );

    if( element1 ) {
        element.classList.replace( 'btn_semi_allergen', 'btn_semi_allergen_active' );
    };

    if( element2 ) {
        element.classList.replace( 'btn_semi_allergen_active', 'btn_semi_allergen' );
    };

    return;
};


