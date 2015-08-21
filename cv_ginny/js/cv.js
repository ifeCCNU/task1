$(document).ready(function(){
	var deviceHeight;
	var deviceWidth;
	var per;
	var next_left;
	var secondPage_bar;
	
	var touchEvents = {
        touchstart: "touchstart",
        touchmove: "touchmove",
        touchend: "touchend",
        initTouchEvents: function () {
            if (isPC()) {
                this.touchstart = "mousedown";
                this.touchmove = "mousemove";
                this.touchend = "mouseup";
            }
        }
    };

	if(isPC()){
		deviceWidth = window.screen.width;
		deviceHeight = window.screen.height;
		var temp_height = deviceHeight;
		var margin_left = (deviceWidth-640)/2;
		console.log(margin_left);
		$("body").css("marginLeft",margin_left);
		$(".Page").css("height",deviceHeight+"px");
		per = 1.2;
	}else{
		deviceHeight = document.documentElement.clientHeight;
		deviceWidth = document.documentElement.clientWidth;
		per = deviceHeight/568;
		$(".Page").css("height",568*per+"px");
	}

	next_left = (deviceWidth-40)/(deviceWidth*2);
	secondPage_bar = (deviceWidth-20)/(deviceWidth*2);

	$("html").css("font-size",10*per+"px");
	$(".next").css("left",next_left*100+"%");
	$(".second_vertical_bar").css("left",secondPage_bar*100+"%");
	$(".second_round").css("left",next_left*100+"%");
	console.log("@copyright ginny Guo");

	$(document).bind(touchEvents.touchstart, function (event) {
        event.preventDefault();           
    });
    
	var n;
    $(".Page").on("swipeUp",function(){
    	console.log("one");
        event.preventDefault();
        n = +$(this).attr("id");
        window.scrollTo(0,deviceHeight*n); 
        //Go_Up();    
    });

    $(".Page").on("swipeDown",function(){
        event.preventDefault();
        var n = +$(this).attr("id");
        var n_after = deviceHeight*(n-2);
        window.scrollTo(0,n_after);    
    });

    /*function Go_Up(){
    	timer=setInterval(runTo(deviceHeight*n),1000);
    }

    function runTo(pos){
    	window.scrollTo(0,pos);
    }*/

    $(document).bind(touchEvents.touchend, function (event) {
        event.preventDefault();            
     });
	$(".third_div").on("swipeRight",function(){
		var that = this;
		var third_id = $(that).attr("id");		
		if(third_id!="34"){
		$(that).animate(
			{"-webkit-transform":"translateX("+200+"%) rotate(15deg)",
			},500);
		}else{
			;
		}
	});
	$(".third_div").on("swipeLeft",function(){
		var that = this;
		var third_id = $(that).attr("id");
		if(third_id!="31"){
			var preid = "#"+(third_id-1); 
			$(preid).animate({"-webkit-transform":"translateX("+0+"%) rotate(-10deg)"},500);
		}else{
			;
		}
	});

	var a = new Audio();
    if(a.canPlayType("audio/mpeg")){
    	a.src = "music/aaa.mp3";
    	a.play();
    }else if(a.canPlayType("audio/ogg")){
    	a.src = "music/aaa.ogg";
    	a.play();
    }else{
    	;
    }

	$("#music_logo").tap(function(){
		var that = $("#music_logo");
		var play = +that.attr("data-play");
		if(play){
			that.removeClass("music");
			that.addClass("music_stop");
			that.attr("data-play","0");
			console.log(that);
			a.pause();
		}else{
			that.removeClass("music_stop");
			that.addClass("music");
			that.attr("data-play","1");
			a.play();
		}
	});

	$(".fifth_button").on("longTap",function(){
		$(".dmn").css("-webkit-transform","");
		$(".dmn").animate({"-webkit-transform":"rotate(40deg)"},500);
		$(".fifth_box").animate({
			"-webkit-transform":"translateY(-300%)"
		},300);
	});
});

function isPC(){ 
	var userAgentInfo = navigator.userAgent; 
	var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"); 
	var flag = true; 
	for (var v = 0; v < Agents.length; v++) { 
	if (userAgentInfo.indexOf(Agents[v]) > 0) { flag = false; break; } 
	} 
	return flag; 
}
