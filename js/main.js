/*
window.addEventListener('scroll',function(){
    
   const parallax = document.querySelector('#video');
    let scrollPosition = parallax.offsetTop;
    console.log(scrollPosition);
    
    parallax.style.transform="translateY(50px)"; 
    
});
*/




$(document).ready(function () {

    $('.banner').parallax('70%', 0.3);

    /*$("#wrap").smoothWheel();
    $("#wrap").scrollStopped(function(){
                console.log("스크롤끝확인!");
	// 부드러운 스크롤 세로 스크롤값에 현재 스크롤위치값 넣기!
	// 부호는 반대임!
                currentY = -$(this).scrollTop();
            });
*/

    $('.menu_toggle').on('click', function () {

       
        $('.gnbarea').fadeIn();

    });
    
    $('.gnbclose').click(function(){
       
        $('.gnbarea').fadeOut();
        
    });
    
    
    
/* 고 탑 버튼 */
    $(window).scroll(function () {

        $('.gotop').click(function () {

            $('html, body').animate({
                scrollTop: 0
            }, 500);

            return false;

        }); // click /////////////////

    }); // scroll ////////////


}); //// jQB ///////////////







$.fn.scrollStopped = function (callback) { //제이쿼리플러그인 만드는방식.
    var _this = this,
        $this = $(_this);
    $this.scroll(function (event) {
        clearTimeout($this.data('scrollTimeout'));
        $this.data('scrollTimeout', setTimeout(callback.bind(_this), 250, event));
    });
}; //////////// 스크롤멈춤 이벤트 함수 ////////////////////
