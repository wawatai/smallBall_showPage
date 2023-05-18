    //header按鈕

$(function(){
    $('header button').click(function(){
        $(this).toggleClass('active');
        $(this).siblings().removeClass('active');
    })
    $('header .search,header .search input').blur(function(){
        $('header .search').removeClass('active');
    })
})

    //1100以下頁面拖動效果

$(function(){
    var drag = function(obj){  

        obj.bind("mousedown",start);  

        function start(event){  
            if(event.button == 0){//判斷是否點選滑鼠左鍵  
                gapX=event.clientX;
                startx = $(window).scrollLeft();  // scroll的初始位置

                //movemove事件必須繫結到$(document)上，滑鼠移動是在整個螢幕上的  
                $(document).bind("mousemove",move);  
                //此處的$(document)可以改為obj  
                $(document).bind("mouseup",stop);                           
            }  
            return false;//阻止預設事件或冒泡  
        }  
        function move(event){  
            var left = event.clientX-gapX; // 滑鼠移動的相對距離

            $(window).scrollLeft(startx - left );

            return false;//阻止預設事件或冒泡  
        }  
        function stop(){  
            //解繫結，這一步很必要，前面有解釋  
            $(document).unbind("mousemove",move);  
            $(document).unbind("mouseup",stop);  
        }  
    }  

    obj = $(".mainBox");  

    drag(obj);//傳入的必須是jQuery物件，否則不能呼叫jQuery的自定義函式 
})

    //左列點擊時頁面自動定位效果

$(function(){
    $('li').each(function(index){
        $('#btn'+index+'').click(function(){
            $('html,body').animate({
                scrollTop: $('#demo'+index+'').offset().top - 60
            }, 500)
        })
    })
})

    //回到頂端按鈕

$(function(){
    $(window).scroll(function () {
		var scrollVal = $(this).scrollTop();
		if(scrollVal > 1){
				$(".gotop").fadeIn('200');
		} else{
				$(".gotop").fadeOut('200');
		};
	})
	$(".gotop").click(function(){
		var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body'); //各瀏覽器相容性
		$body.delay('0').animate({
				scrollTop:0
		},500);
	})
})

    //disable時加入字樣

$(function(){
    var txt1 = "<span>can't pick</span>"; //命名
    if($('div').hasClass('disable')) { //設定條件
        $('div.disable').append(txt1);
        $('div.disable a').attr('data-lightbox','');
    }
})

    //checkbox label效果

$(function(){
    $('input[type="checkbox"]').change(function(){
        $(this).closest('p').toggleClass('active');
    })
})

    //html+css自動計算a herf+background

$(function(){
    $('li').each(function(index){
        $($('#demo'+index+'').children('a')).attr('href','./images/demo_'+index+'.webp');
        var myIndex = index + 1;
        $($('#demo'+index+'').children('a')).attr('data-title','DEMO_'+myIndex+'');
        $($('#demo'+index+'').children('a')).css('background','url(./images/demo_'+index+'.webp)');
        $($('#demo'+index+'').children('a')).css('background-size','cover');
    })
})

    //checkbox勾選判定

$(function(){
    $('li').each(function(index){
        var myIndex = index + 1;
        $('#demo'+index+' input[type="checkbox"]').click(function(){
            if($('#demo'+index+' input[type="checkbox"]').prop('checked')) {
                $('.shoppingWindow div:nth-of-type('+myIndex+')').addClass('display');
                $('.shoppingWindow div:nth-of-type('+myIndex+')').css('background','url(./images/demo_'+index+'.webp)');
                $('.shoppingWindow div:nth-of-type('+myIndex+')').css('background-size','cover');
            } else {
                $('.shoppingWindow div:nth-of-type('+myIndex+')').removeClass('display');
            }
        })
    })
    var n = $('.shoppingWindow').children('div');
    $('li').each(function(index){
        $(n).clone().appendTo('.shoppingWindow');
    })
    var s = $('.shoppingWindow').children('s');
    $('li').each(function(index){
        $(s).clone().appendTo('.shoppingWindow');
    })
})

    //shoppingcart

$(function(){
    $('.shoppingcartBtn').click(function(){
        $('.filter,.shoppingcart').fadeIn('500');
    })
    $('.shoppingcart .cancelBtn').click(function(){
        $('.filter,.shoppingcart').fadeOut('500');
        $('.shoppingcartBtn').removeClass('active');
    })
    $('.shoppingWindow div button').click(function(){
        var n = $(this).closest('div').index();
        var x = n - 1;
        $(this).closest('div').removeClass('display');
        $('#demo'+x+' p').removeClass('active');
        $('#demo'+x+' label input[type="checkbox"]').prop('checked',false);
        if(x == -1) {
            $('#demo0 p').removeClass('active');
            $('#demo0 label input[type="checkbox"]').prop('checked',false);
        }
    })

    var num = 0;
    $('label').mousedown(function(){
        if($(this).closest('p').hasClass('active')) {
            num --;
        } else {
            num ++;
        }
        $('.shoppingcartBtn span').text(num);

        if(num == 0) {
            $('.shoppingcartBtn span').removeClass('display');
        } else {
            $('.shoppingcartBtn span').addClass('display');
        }
    })
    $('.shoppingWindow div button').mousedown(function(){
        num --;
        $('.shoppingcartBtn span').text(num);

        if(num == 0) {
            $('.shoppingcartBtn span').removeClass('display');
        } else {
            $('.shoppingcartBtn span').addClass('display');
        }
    })
})