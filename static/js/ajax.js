// $(document).ready(function () {
  
          
//                  $.ajax({
//                     url: "http://localhost:9090/student",
//                     type: "GET",
//                     data:'', 
//                     dataType: "jsonp", //指定服务器返回的数据类型
//          			jsonp:'callback',//指定服务器返回的回调函数
//                      success: function (data) {
//                          var result = JSON.stringify(data); //json对象转成字符串
//                          $("#text").val(result);
//                      },  
//                     timeout:3000  
//                  });
 
          
//          });

$(document).ready(function(){


      function getInfo(url,callback){
            $.ajax({
                type:"post",
                url:url,
                //dataType:'jsonp',
                crossDomain: true,
                contentType: "application/json",
                xhrFields: {
                withCredentials: true
            },
                success:callback,
                error:function(error){
                    console.log(error);
                }
            });
    }
    getInfo("https://test.kyoye.com/customer/Exchange/CustomerInfo",function(data){
    	console.log(data.customer.fullname)
        console.log("CustomerInfo",data);

        if(data.customer.fullname==undefined){
            $(".header_your_first_ul_div_hidden").remove()
            $(".header_your_first_ul_h1two_div_hidden").remove()
            
        }else{
        	// pc person
        	$(".header_your_first_ul_h1two a").text(data.customer.fullname).css("text-transform","uppercase");
        	$(".header_your_first_ul_ul_sec_hidden").children("li:nth-child(2)").children("a").text(data.customer.fullname)
        	
        	
             $(".header_your_first_ul_div").remove()
             $(".header_your_first_ul_h1two_div").remove()
             
             $(".header_your_first_ul").children("li:first-child").bind(
          {mouseenter:function(){$(this).children("h1").children("a").css({"background-color":"#f90","border-bottom":"1px solid #ffba61"});$(this).find(".header_your_first_ul_div_hidden").toggle();$(".iconfont_div").hide(200)},
          mouseleave:function(){$(this).children("h1").children("a").css({"background-color":"","border-bottom":"0px"});$(this).find(".header_your_first_ul_div_hidden").toggle();$(".iconfont_div").hide(200)}
          })
             $(".header_your_first_ul").children("li:last-child").bind(
          {mouseenter:function(){$(this).children("h1").children("a").css({"background-color":"#f90","border-bottom":"1px solid #ffba61"});$(this).find(".header_your_first_ul_h1two_div_hidden").toggle();$(".iconfont_div").hide(200)},
          mouseleave:function(){$(this).children("h1").children("a").css({"background-color":"","border-bottom":"0px"});$(this).find(".header_your_first_ul_h1two_div_hidden").toggle();$(".iconfont_div").hide(200)}
          })
            
          // phone person
          $(".header_div_m_left_show_shop_message_right_div_login").find("a").text(data.customer.fullname)
          $(".header_div_m_left_show_shop_message_right_ul_login").children("li:nth-child(4)").children("a").text(data.customer.fullname)
          

        }


    });
    getInfo("https://test.kyoye.com/customer/Exchange/WishList",function(data){
        console.log("WishList",data);
        $(".header_your_first_ul_ul_first_hidden").children('li:first-child').children("a").text("save frame("+data.wishlist.counter+")").css("text-transform","uppercase")
        
        
    });





    getInfo("https://test.kyoye.com/customer/Exchange/cartinfo",function(data){
    	// pc ajax message
        console.log("cartInfo",data);
       $(".header_shop_message").text(data.cart.summary_count)
       $(".header_shop_car_message_hidden_div_first").children("a").text("("+data.cart.summary_count+"items):")
       // this is a pulic price called $datastr in pc and phone
       $datastr=data.cart.subtotal;
       $datatotal=(($datastr.replace(/[^0-9]+/g, ''))/100);
       $(".header_shop_car_message_hidden_div_first").children("h2").text("$"+$datatotal)

       var pcstr="";
       for (var i = 0; i < data.cart.items.length; i++) {
        
    	 pcstr+="<div class='header_shop_car_message_hidden_div_details'>"
	             +"<div class='header_shop_car_message_hidden_div_details_img'>"
	             +"<a href='"+data.cart.items[i].configure_url+"'>"
	             +"<img src='"+data.cart.items[i].product_image.src+"'/>"
	             +"</a>"
	             +"</div>"
             +"<div class='header_shop_car_message_hidden_div_details_message'>"
	             +"<div class='header_shop_car_message_hidden_div_details_message_left'>"
	             +"<a href='"+data.cart.items[i].product_url+"'>"+data.cart.items[i].product_name+"</a>"
	             +"<p>$"+data.cart.items[i].product_price_value+"</p>"
	             +"<span>Qty :"+data.cart.items[i].qty+"</span>"
	             +"</div>"
             	+"<div class='header_shop_car_message_hidden_div_details_message_rights'>"                
	             +"<h1>see</h1>"
	             +"<h2>details<em class='iconfont'>&#xe698;</em></h2>"
	             +"<h3>color</h3>"
	             +"<h4>"+data.cart.items[i].options[0].value+"</h4>"
	             +"</div>"
             +"</div>"
             +"</div>";
         



       	};

       	$(".header_shop_car_message_hidden_div").append(pcstr);

       // phone ajax message
       	$(".header_div_m_left_show_shop_message_detailes_login").children("a").text("("+data.cart.summary_count+"items)")
       	$(".header_div_m_left_show_shop_message_detailes_login").children("h2").text("$"+$datatotal)
       	$(".header_div_m_shop_message").text(data.cart.summary_count)
        

        var phonestr="";
       for (var i = 0; i < data.cart.items.length; i++) {
        
    	  phonestr+="<div class='header_div_m_left_show_shop_message_right_bottom_login'>"
    	              +"<a href='"+data.cart.items[i].product_url+"'>"
	                  +"<img src='"+data.cart.items[i].product_image.src+"'/>"
	                  +"</a>"
	                  +"<div class='header_div_m_left_show_shop_message_right_bottom_login_message'>"
	                  +"<h1>"+data.cart.items[i].product_name+"</h1>"
             	      +"<h2>$"+data.cart.items[i].product_price_value+"</h2>"
             	      +"<h3>details</h3>"
             	      +"<h4>color</h4>"
             	      +"<h5>"+data.cart.items[i].options[0].value+"</h5>"
		             +"</div>"
		             +"</div>";
         



        	};
       	$(".formessage").append(phonestr);
        


      // pc and phone jq transform
       if (data.cart.summary_count==null || data.cart.summary_count=="") {
       	  $(".header_shop_car_message_hidden").remove()
       	  $(".header_div_m_left_show_shop_login").remove()
       	  
       }else{
       	$(".header_shop_car_message").remove()
       	$(".header_div_m_left_show_shop").remove()
         // pc
       	$(".header_shop_car").children("i").click(function(){
        $(".header_shop_car_message_hidden").toggle(300)
        $(".iconfont_div").hide(200)
         })
       	$(".header_shop_car_message_hidden_b").children("b").click(function(){
        $(".header_shop_car_message_hidden").hide(300)
        $(".iconfont_div").hide(200)
         })
         // phone
       $(".header_div_m_shop").find("b").bind("touchstart",function(){
       $(".header_div_m_left_show_shop_login").slideToggle()
       $(".header_div_m_left").find("b").fadeIn()
       $(".header_div_m_left").find("i").fadeOut()
       $(".header_div_m_left_show").fadeOut()
        
      })
       $(".header_div_m_left_show_shop_close_login").find("b").bind("touchstart",function(){
      $(".header_div_m_left_show_shop_login").fadeToggle(1000)
       
      })
      

       	 
       }


       


        
    });

    

})