// 페이지 이름 //
var pgnm = location.href;
pgnm = pgnm.split("/");
pgnm = pgnm[pgnm.length - 1].split(".")[0];
console.log("페이지이름:" + pgnm);


$(document).ready(function () {
	
	var vl = $('.vdul li');
	var index = 0;
	
	for(var i=0;i<4;i++){
		
	$('.lazy_wrap_v').eq(i).css({
		backgroundImage:"url(../images/thum"+(i+1)+".jpg)"
	});
	}
	

	$("#wrap").smoothWheel();

	$("#wrap").scrollStopped(function () {
		//console.log("스크롤끝확인!");
		// 부드러운 스크롤 세로 스크롤값에 현재 스크롤위치값 넣기!
		// 부호는 반대임!
		currentY = -$(this).scrollTop();
	});


	$('.menu_toggle').on('click', function () {
		$('.gnbarea').fadeIn();
	});

	$('.gnbclose').click(function () {
		$('.gnbarea').fadeOut();
	});

	$('.ytc').click(function () {
		$('#yto').fadeOut(300);
	}); /// 유튜브 뮤직비디오 창 닫기 //

	
	
	$('.vdul li').click(function () {

		//console.log(index);
		var vlurl = $(this, '.vdul li').attr("data-url");
		//console.log(vlurl);

		$('#yto').fadeIn(300);


		/*$('#ytv').attr("src","https://www.youtube.com/embed/" + vlurl);*/

		var viwevideo = function () {

			$('#screen').append('<iframe id="ytv" src="https://www.youtube.com/embed/' + vlurl + '" frameborder="0" allow="accelerometer; autoplay=0; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');

		}

		$('#screen').html("");

		setTimeout(viwevideo, 10);

	}); /// 유튜브 뮤직비디오 창 열기 //





	// 메인페이지에서만 스크롤액션함
	if (pgnm === "index") {

		// 스크롤 액션 ///

		var tg1 = $(".mpro");
		var tg2 = $(".video");
		var tgb = $("#video");
		var tg2pos = tg2.offset().top;
		//console.log("2번위치:" + tg2pos);

		var tg3 = $('#schedule');
		var tg3pos = tg3.offset().top;
		//console.log("스케쥴박스:" + tg3pos);
		var tg2bpos = tgb.offset().top;
		//console.log("비디오박스:" + tg2bpos);

		$("#wrap").scroll(function () {
			var scTop = $(this).scrollTop(); //스크롤이동값
			//console.log("scrollTop:" + scTop);

			// 1번 타겟: 배너이미지
			if (scTop <= 100) {
				tg1.css({
					top: "10%"
				});
			} else if (scTop > 100 && scTop < 300) {
				tg1.css({
					top: "15%"
				});
			} else if (scTop > 300 && scTop < 600) {
				tg1.css({
					top: "25%"
				});
			}



			if (scTop < tg3pos) {

				$('.menu_toggle span').css({
					backgroundColor: "#fff"
				});

				$('.toptit').css({
					color: "#fff"
				});
			} else if (scTop > tg3pos - 400 && scTop < tg2bpos) {

				$('.menu_toggle span').css({
					backgroundColor: "#000"
				});

				$('.toptit').css({
					color: "#000"
				});
			} else {

				$('.toptit').css({
					color: "#fff"
				});

			}

			if (scTop > 0 && scTop < 620) {

				$('.toptit').fadeOut(300);
			} else if (scTop > 621) {

				$('.toptit').fadeIn(300);
			}








		}); // scroll ////////////


		/* 고 탑 버튼 */
		$('.gotop, .toptit').click(function () {

			$("#wrap").animate({
				scrollTop: 0
			}, 500);

			return false;

		}); // click /////////////////




	} ////// if : 메인페이지만 ////////////////////////


	/// 인포페이지일때 ///////////////////
	if (pgnm === "info") {

		$(".content").delay(300).animate({
			marginTop: "0"
		}, 500, "easeOutSine");





	} /////////// if : 인포페이지만 ///////////////////////






}); //// jQB ///////////////






$.fn.scrollStopped = function (callback) { //제이쿼리플러그인 만드는방식.
	var _this = this,
		$this = $(_this);
	$this.scroll(function (event) {
		clearTimeout($this.data('scrollTimeout'));
		$this.data('scrollTimeout', setTimeout(callback.bind(_this), 250, event));
	});
}; //////////// 스크롤멈춤 이벤트 함수 ////////////////////
