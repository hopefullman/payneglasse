
$(document).ready(function(){
$(".header_nav_ul").find("a").bind("mouseenter",function(){
    $(".shadow").css("height",$(document).height());
      $(".shadow").css("width",$(document).width());
       $(".header_nav").css("z-index","9999");
        $(".shadow").css({"position":"absolute","top":"-100px","background-color":"rgba(0,0,0,0.7)","z-index":"999"});
          $(".shadow").show();
})

 $(".header_nav_ul").find("a").bind("mouseleave",function(){
    $(".shadow").css("height","0px");
      $(".shadow").css("width","0px");
        $(".shadow").css({"position":"absolute","top":"0px","background-color":"rgba(0,0,0,0.7)","z-index":"0"});
          $(".shadow").css("display","none");
})



$(".header_div_m_left").find("b").bind("touchstart",function(){
        $(this).hide()
        $(this).next("i").show(800)
        $(".header_div_m_left_show_shop").fadeOut(1000)
        $(".header_div_m_left_show").css("height",$(window).height())
        $("body").css({"height":$(window).height(),"overflow":"hidden"})
        $(this).next("i").bind("touchstart",function(){
        $(this).hide()
        $(this).prev("b").show()
        $("body").css({"height":"auto","overflow":"hidden"})
        $(".header_div_m_left_show").hide(1000)
        })
      $(".header_div_m_left_show").fadeToggle(1000)
      })
    $(".header_div_m_left_show_search").find("i").bind("touchstart",function(){
      $(".header_div_m_left_show_search_s").fadeToggle(1000).css("margin-left","15%")
  })






 $(".header_div_m_shop").find("b").bind("touchstart",function(){
       $(".header_div_m_left_show_shop").slideToggle()
       $(".header_div_m_left").find("b").fadeIn()
       $(".header_div_m_left").find("i").fadeOut()
       $(".header_div_m_left_show").fadeOut()
        $("body").css("overflow","auto")
      })
        $(".header_div_m_left_show_shop_close").find("b").bind("touchstart",function(){
      $(".header_div_m_left_show_shop").fadeToggle(1000)
      })







 $(".header_shop_car").find("i").click(function(){
        $(".header_shop_car_message").toggle(300)
        $(".iconfont_div").hide(200)


       })
       $(".header_shop_car_message_i").click(function(){
        $(".header_shop_car_message").toggle(400)



       })





 $(".header_search_ul").find("i").click(function(){
        $(this).css("color","#f90")
        $(".iconfont_div").toggle(200)
        $(".header_shop_car_message").hide(200)
       })
       $(".header_search_ul").find("i").mouseleave(function(){
        $(this).css("color","#fff")

       })





$(".header_your_first_ul").children("li").bind(
          {mouseenter:function(){$(this).children("h1").children("a").css({"background-color":"#f90","border-bottom":"1px solid #ffba61"});$(this).find("div").toggle();$(".iconfont_div").hide(200)},
          mouseleave:function(){$(this).children("h1").children("a").css({"background-color":"","border-bottom":"0px"});$(this).find("div").toggle();$(".iconfont_div").hide(200)}
          })










})




































