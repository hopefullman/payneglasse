$(document).ready(function () {

    $(window).scroll(function(){
		if(	$("body").width()>991 ) {
            if ($(window).scrollTop() > 50) {
                $("header").removeClass("relative");
                $("header").addClass("nav_nav");
                $(".header").addClass("pcminheight");
                $("header").addClass("pcminheight");
                $(".header_div").addClass("pcminheight");
                $(".header_content").addClass("pcminheight");

                $(".header_logo").addClass("pcminmargin");
                $(".header_nav").addClass("pcminmargin");
                $(".header_search").addClass("pcminmargin");
                $(".header_your").addClass("pcminmargin");
                $(".header_shop").addClass("pcmincartmargin");

                $(".header_logo").removeClass("pcmargin");
                $(".header_nav").removeClass("pcmargin");
                $(".header_search").removeClass("pcmargin");
                $(".header_your").removeClass("pcmargin");
                $(".header_shop").removeClass("pccartmargin");
			}else{
                $("header").addClass("relative");
                $("header").removeClass("nav_nav");
                $(".header").removeClass("pcminheight");
                $("header").removeClass("pcminheight");
                $(".header_div").removeClass("pcminheight");
                $(".header_content").removeClass("pcminheight");

                $(".header_logo").removeClass("pcminmargin");
                $(".header_nav").removeClass("pcminmargin");
                $(".header_search").removeClass("pcminmargin");
                $(".header_your").removeClass("pcminmargin");
                $(".header_shop").removeClass("pcmincartmargin");


            }
        }else{
		        $("header").removeClass("relative");
                $("header").removeClass("nav_nav");
                $(".header").removeClass("pcminheight");
                $("header").removeClass("pcminheight");
                $(".header_div").removeClass("pcminheight");
                $(".header_content").removeClass("pcminheight");

                $(".header_logo").removeClass("pcminmargin");
                $(".header_nav").removeClass("pcminmargin");
                $(".header_search").removeClass("pcminmargin");
                $(".header_your").removeClass("pcminmargin");
                $(".header_shop").removeClass("pcmincartmargin");

		}
    })
})




$(document).ready(function () {
    $(".iconfont_fontspan").click(function () {
        $(".field-tooltip-content").fadeToggle(200);
    })
    $(".header_shop_car_message_hidden").scroll(function () {
        $(".field-tooltip-content").fadeOut(200);
    })
    $(".header_div_m_left_show_shop_login").scroll(function () {
        $(".field-tooltip-content").fadeOut(200);
    })

})


$(document).ready(function () {
      $(".header_div_m_left_show").css("height",window.screen.availHeight);
       $(".header_div_m_left_show_search_s").focus(function () {
            $(".header_div_m_left_show_search_s").css("box-shadow","0px 0px 10px #79a5e5")
       })

})




