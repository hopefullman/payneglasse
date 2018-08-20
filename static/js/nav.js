// flowing PC js start
// this parts is about nav shadow js
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


}) 







