

$(document).ready(function(){
  var referer=$.base64.btoa(window.location.href);

  var base_url = $(".header_your_first_ul_div").find("h2").children("a").attr("base_url");
  var url = $(".header_your_first_ul_div").find("h2").children("a").attr("url");
  $(".header_your_first_ul_div").find("h2").children("a").attr("href",base_url + referer+"/")
  $(".header_div_m_left_show_shop_message_left_div_div").find("h2").children("a").attr("href", base_url+referer+"/")

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
                beforeSend: function() {

                },
                success:callback,
                complete: function() {
                    // console.log("end")
                  },
                error:function(error){

                }
            });
    }

     var persontrue="";
     var objcustomercustomerprofiles=[];

    var objcartinfotrue="";
    var objcartinfocartsummary_count="";
    var objcartinfocartsubtotal="";
    var objcartinfocartitems=[];
    function getlocal() {
         // have some API
      var objcustomer=localStorage.getItem("strcustomer");
      objcustomer = objcustomer==null||objcustomer==""||objcustomer==undefined ? "" : JSON.parse(localStorage.getItem("strcustomer"));
      var objcartinfo=localStorage.getItem("strcartinfo");
      objcartinfo = objcartinfo==null||objcartinfo==""||objcartinfo==undefined ? "" : JSON.parse(localStorage.getItem("strcartinfo"));



       if (objcustomer==""){
           persontrue=persontrue;
           objcustomercustomerprofiles=objcustomercustomerprofiles;
       } else{
            persontrue=objcustomer.customer.fullname;
            objcustomercustomerprofiles=objcustomer.customer.profiles;
       }

        if (objcartinfo==""){
            objcartinfotrue=objcartinfotrue;
            objcartinfocartsummary_count=objcartinfocartsummary_count;
            objcartinfocartsubtotal=objcartinfocartsubtotal;
            objcartinfocartitems=objcartinfocartitems;
         }else{
            objcartinfotrue=objcartinfo;
            objcartinfocartsummary_count=objcartinfo.cart.summary_count;
            objcartinfocartsubtotal=objcartinfo.cart.subtotal;
            objcartinfocartitems=objcartinfo.cart.items;
         }


       // pc and phone jq transform
        if (objcustomercustomerprofiles.length>0) {
          if(objcartinfocartitems.length==0){
            //  login but nothing
            $(".header_your_first_ul_div").css("display","none");
            $(".header_your_first_ul_h1two_div").css("display","none");

            $(".header_your_first_ul_h1two_div").css("display","none");
            $(".header_your_first_ul_div").css("display","none");
            $(".header_div_m_left_show_shop").css("display","none");
            $(".header_shop_car_message_hidden").css("display","none");
            $(".header_div_m_left_show_shop_message_left_x").css("display","none");

            $(".header_div_m_left_show_shop_message_detailes_login").css("display","none");
            $(".header_div_m_left_show_shop_message_detailes_pay_login").css("display","none");
            $(".header_div_m_left_show_shop_message_right_bottom_login_btn").css("display","none");

            $(".header_div_m_left_show_shop_message_right_bottomm").css("display","block");

             $(".header_div_m_left_show_shop_login").css("height","450px");

             // console.log(11);


            }else{
               //login  and cart have something  is right
               $(".header_your_first_ul_div").css("display","none");
               $(".header_your_first_ul_h1two_div").css("display","none");
               $(".header_shop_car_message").css("display","none");
               //$(".header_div_m_left_show_shop").css("display","none");
               $(".header_div_m_left_show_shop_message_left_x").css("display","none");
               $(".header_div_m_left_show_shop").css("display","none");
               $(".header_div_m_left_show_shop_message_right_bottomm").css("display","none");
               $(".header_div_m_left_show_shop_message_right_bottom_login_btn").css("display","block");

                var windowgaodu=window.screen.availHeight
                if(window.screen.availHeight>1000){
                $(".header_div_m_left_show_shop_login").css("height","741px")
                }else{
                 $(".header_div_m_left_show_shop_login").css("height",windowgaodu)
                }
                // console.log(22)

            }
        }else{
            //    no login and cart have nothing  is right
            if(objcartinfocartitems.length>=0){
                      $(".header_your_first_ul_div_hidden").css("display","none");
                $(".header_your_first_ul_h1two_div_hidden").css("display","none");
                $(".header_shop_car_message_hidden").css("display","none");

              $(".header_div_m_left_show_shop_login").css("display","none");
               $(".header_div_m_left_show_shop").css("display","none");

              $(".header_shop_car_message_hidden").css("display","none");
              $(".header_your_first_ul_h1two_div_hidden").css("display","none");
              $(".header_your_first_ul_div_hidden").css("display","none");
              $(".header_div_m_left_show_shop_message_login").css("display","none");
              $(".header_div_m_left_show_shop_message_detailes_login").css("display","none");
              $(".header_div_m_left_show_shop_message_detailes_pay_login").css("display","none");
              $(".header_div_m_left_show_shop_message_right_bottom_login_btn").css("display","none");
               // console.log(33);

            }else{
                //  no login and cart have  something

                $(".header_your_first_ul_div_hidden").css("display","none");
                $(".header_your_first_ul_h1two_div_hidden").css("display","none");
                $(".header_your_first_ul_div_hidden").css("display","none");
                $(".header_your_first_ul_h1two_div_hidden").css("display","none");
                $(".header_shop_car_message").css("display","none");
                $(".header_div_m_left_show_shop_message_left_login").css("display","none");
                $(".header_div_m_left_show_shop_message_login").css("display","none");
                $(".header_div_m_left_show_shop_login").css("display","none");
                $(".header_div_m_left_show_shop_message_right_bottom").css("display","none");
                 $(".header_div_m_left_show_shop_message_detailes_login").css("display","block");
                // header_div_m_left_show_shop_message_login

                var windowgaodu=window.screen.availHeight

                 $(".header_div_m_left_show_shop").css("height",windowgaodu);

                // console.log(44);
                // console.log("this is test part")

            }
        }


         // $(".header_your_first_ul_ul_sec_hidden").first().nextAll().empty()
        $(".header_your_first_ul_ul_sec_hidden").children("li:first-child").nextAll().remove();
        $(".header_div_m_left_show_shop_message_right_ul_login").children("li:nth-child(3)").nextAll().remove()
          for (var ci = 0; ci<objcustomercustomerprofiles.length;ci++) {
              if (objcustomercustomerprofiles[ci].iscurrent) {
                    $(".header_your_first_ul_h1two").children("a").text(objcustomercustomerprofiles[ci].nickname).append('<b class="iconfont">&#xe668;</b>');
                    $(".header_your_first_ul_ul_sec").remove();
                    $(".header_your_first_ul_ul_third").remove();
                    $(".header_your_first_ul_ul_sec_hidden").css("display",'block')
                    $(".header_your_first_ul_ul_sec_hidden").append("<li><a href='"+objcustomercustomerprofiles[ci].url+"'>"+objcustomercustomerprofiles[ci].nickname+"</a></li>").children("li:last-child").prepend("<i class='iconfont iconfont_yellow'>&#xe62f;</i>")
                    $(".header_div_m_left_show_shop_message_right_div_login").children("h2").find("a").empty();
                    $(".header_div_m_left_show_shop_message_right_div_login").children("h2").find("a").text(objcustomercustomerprofiles[ci].nickname).attr("href",objcustomercustomerprofiles[ci].url);

              }else{
                    $(".header_your_first_ul_ul_sec_hidden").children("li:first-child").after("<li><a href='"+objcustomercustomerprofiles[ci].url+"'>"+objcustomercustomerprofiles[ci].nickname+"</a></li>")
                    $(".header_div_m_left_show_shop_message_right_ul_login").children("li:nth-child(3)").after("<li><a href='"+objcustomercustomerprofiles[ci].url+"'>"+objcustomercustomerprofiles[ci].nickname+"</a></li>");

              }
              }
          // phone person

        //pc mincart ajax message
        if (objcartinfocartsummary_count==""){
            $(".header_shop_message").text(0);
            $(".header_shop_car_message_hidden_div_first").children("a").text("("+0+"items):");
        } else{
            $(".header_shop_message").text(objcartinfocartsummary_count);
            $(".header_shop_car_message_hidden_div_first").children("a").text("("+objcartinfocartsummary_count+"items):");
        }

       $datastr=objcartinfocartsubtotal;
       $datatotal=(($datastr.replace(/[^0-9]+/g, ''))/100);
       $(".header_shop_car_message_hidden_div_first").children("h2").text("$"+$datatotal)


       $(".header_shop_car_message_hidden_div").empty();
       $(".formessage").empty();
       var pcstr="";
       for (var i = 0; i < objcartinfocartitems.length; i++) {
           pcstr+="<div class='header_shop_car_message_hidden_div_details'>"
                   +"<div class='header_shop_car_message_hidden_div_details_img'>"
                   +"<a href='"+objcartinfocartitems[i].configure_url+"'>"
                   +"<img src='"+objcartinfocartitems[i].product_image.src+"'/>"
                   +"</a>"
                   +"</div>"
                 +"<div class='header_shop_car_message_hidden_div_details_message'>"
                   +"<div class='header_shop_car_message_hidden_div_details_message_left'>"
                   +"<a href='"+objcartinfocartitems[i].product_url+"'>"+objcartinfocartitems[i].product_name+"</a>"
                   +"<p>$"+objcartinfocartitems[i].product_price_value+"</p>"
                   +"<span>Qty :"+objcartinfocartitems[i].qty+"</span>"
                   +"</div>"
                  +"<div class='header_shop_car_message_hidden_div_details_message_rights'>"
                   +"<h1>see</h1>"
                   +"<h2>details ></h2>"
                   +"<div>"
                   +"<h3>color</h3>"
                   +"<h4>"+objcartinfocartitems[i].options[0].value+"</h4>"
                   +"</div>"
                   +"</div>"
                 +"</div>"
                 +"</div>";
         };
        $(".header_shop_car_message_hidden_div").append(pcstr);
        $(".formessage").append(phonestr);


        // phone mincart ajax message
        if(objcartinfocartsummary_count==""){
            $(".header_div_m_left_show_shop_message_detailes_login").children("a").text("("+0+"items)");
            $(".header_div_m_left_show_shop_message_detailes_login").children("h2").text("$"+$datatotal);
            $(".header_div_m_shop_message").text(0);
        }else{
            $(".header_div_m_left_show_shop_message_detailes_login").children("a").text("("+objcartinfocartsummary_count+"items)")
            $(".header_div_m_left_show_shop_message_detailes_login").children("h2").text("$"+$datatotal)
            $(".header_div_m_shop_message").text(objcartinfocartsummary_count)
        }


        $(".formessage").empty();
        $(".header_div_m_left_show_shop_message_right_bottom_nologin").empty();
        var phonestr="";
        for (var i = 0; i < objcartinfocartitems.length; i++) {
            phonestr+="<div class='header_div_m_left_show_shop_message_right_bottom_login'>"
                        +"<a href='"+objcartinfocartitems[i].product_url+"'>"
                        +"<img src='"+objcartinfocartitems[i].product_image.src+"'/>"
                        +"</a>"
                        +"<div class='header_div_m_left_show_shop_message_right_bottom_login_message'>"
                        +"<h1>"+objcartinfocartitems[i].product_name+"</h1>"
                        +"<h2>$"+objcartinfocartitems[i].product_price_value+"</h2>"

                        +"<h3>details ></h3>"
                        +"<div>"
                        +"<h4>color</h4>"
                        +"<h5>"+objcartinfocartitems[i].options[0].value+"</h5>"
                        +"</div>"
                     +"</div>"
                     +"</div>";
         };
        $(".formessage").append(phonestr);
        $(".header_div_m_left_show_shop_message_right_bottom_nologin").append(phonestr);

        var divs=document.getElementsByClassName("header_shop_car_message_hidden_div_details_message_rights");
        for(var ii=0;ii<divs.length;ii++){
            divs[ii].childNodes[1].onclick=function(){
            $(this).next("div").toggle(200)
          }
      }

      var divss=document.getElementsByClassName("header_div_m_left_show_shop_message_right_bottom_login_message");
        for(var sii=0;sii<divss.length;sii++){
            divss[sii].childNodes[2].onclick=function(){
            $(this).next("div").slideToggle(200)
          }
        }
  }
     // getlocal();


      // click search to controll cart show hide
         $(".header_search_ul").find("i").click(function(){
         $(".header_shop_car_message_hidden").css("display","none");
         $(".header_shop_car_message").css("display","none");
         
        })



      // pc youracount fisrt
       $(".header_your_first_ul").children("li:first-child").bind(
          {mouseenter:function(){
              if(objcustomercustomerprofiles.length>0) {
                  $(this).children("h1").children("a").css({
                      "background-color": "#f90",
                      "border-bottom": "1px solid #ffba61"
                  });
                   $(this).find(".header_your_first_ul_div_hidden").css("display","block");
                   $(this).find(".header_your_first_ul_div").css("display","none");
                   $(".iconfont_div").hide(200);
              }else{
                   $(this).children("h1").children("a").css({
                      "background-color": "#f90",
                      "border-bottom": "1px solid #ffba61"
                  });
                  $(".header_your_first_ul_div").css("display","block");
                  $(this).find(".header_your_first_ul_div_hidden").css("display","none");

                 }
              },
            mouseleave:function(){
                  $(this).children("h1").children("a").css({"background-color":"","border-bottom":"0px"});
                  $(this).find(".header_your_first_ul_div").css("display","none");
                  $(this).find(".header_your_first_ul_div_hidden").css("display","none");
                  $(".iconfont_div").hide(200);
              
              }
         })

          //pc youracount second
          $(".header_your_first_ul").children("li:last-child").bind(
          {mouseenter:function(){
              if(objcustomercustomerprofiles.length>0){
                      $(this).children("h1").children("a").css({"background-color":"#f90","border-bottom":"1px solid #ffba61"});
                      $(".header_your_first_ul_h1two_div").css("display","none");
                      $(".header_your_first_ul_ul_first").css("display","none");
                      $(".header_your_first_ul_ul_sec").css("display","none");
                      $(".header_your_first_ul_ul_third").css("display","none");
                      $(this).find(".header_your_first_ul_h1two_div_hidden").css("display","block")
                      $(".iconfont_div").hide(200);
                }else{
                        $(this).children("h1").children("a").css({"background-color":"#f90","border-bottom":"1px solid #ffba61"});
                        $(".header_your_first_ul_h1two_div").css("display","block");
                        $(".header_your_first_ul_ul_first").css("display","block");
                        $(".header_your_first_ul_ul_sec").css("display","block");
                        $(".header_your_first_ul_ul_third").css("display","block");
                        $(".header_your_first_ul_h1two_div_hidden").css("display","none");
                        $(".iconfont_div").hide(200);
                  }

              },
            mouseleave:function(){
                      $(this).children("h1").children("a").css({"background-color":"","border-bottom":"0px"});
                      $(".header_your_first_ul_h1two_div").css("display","none");
                      $(".header_your_first_ul_ul_first").css("display","none");
                      $(".header_your_first_ul_ul_sec").css("display","none");
                      $(".header_your_first_ul_ul_third").css("display","none");
                      $(".header_your_first_ul_h1two_div_hidden").css("display","none");
                      }
          })      



    // pc mincart click to controll search and youself and account show hide
        $(".header_shop_car").children("i").click(function(){
                if (objcustomercustomerprofiles.length>0) {
                  if(objcartinfocartitems.length==0){
                    $(".header_shop_car_message").toggle()
                    $(".header_shop_car_message_hidden").css("display","none");
                    $(".iconfont_div").css("display","none");

                    // console.log("first-pc")
                  }else{
                       $(".header_shop_car_message").css("display","none");
                       $(".header_shop_car_message_hidden").toggle(200);
                       $(".iconfont_div").css("display","none");
                       // console.log("second-pc")
                  }

                }else{
                  if(objcartinfocartitems.length==0){
                        $(".header_shop_car_message_hidden").css("display","none");
                        $(".header_shop_car_message").toggle(200);
                        $(".iconfont_div").css("display","none");
                        // console.log("third-pc")
                    }else{

                       $(".header_shop_car_message").css("display","none");
                       $(".header_shop_car_message_hidden").toggle(200);
                       $(".iconfont_div").css("display","none");
                      // console.log("forth-pc");
                  }

                }
           })



       // pc show nothing find b click close it
        $(".header_shop_car_message_i").click(function(){
        $(".header_shop_car_message").css("display","none");
        $(".iconfont_div").css("display","none");

         })
      // pc show some carts find b click close it
        $(".header_shop_car_message_hidden_b").children("b").click(function(){
        $(".header_shop_car_message_hidden").css("display","none");
        $(".iconfont_div").css("display","none");
        })

     // seacrh show hide
        $(".header_search_ul").find("i").click(function(){
             $(".iconfont_div").fadeToggle(200);
        })






// phone mincart show// phone mincart show // phone mincart show // phone mincart show // phone mincart show // phone mincart show
        $(".header_div_m_shop").find("b").bind("click",function(){

            $("body").removeClass("gd")
            $("html").removeClass("gd")
            if ($(".message").css("display")=="block"){
                $(".message").css("display","none")

            }else{
                $(".message").css("display","block")
            }

            if ($("header").css("position")=="relative"){
                $("header").css("position","fixed")
            }else{
                $("header").css("position","relative")
            }


          if(objcustomercustomerprofiles.length>=1){
               if(objcartinfocartitems.length<1){
                //login min cart nothing
                $(".header_div_m_left_show_shop").css("display",'none');
                $(".header_div_m_left_show_shop_login").slideToggle(400);
                $(".header_div_m_left_show_shop_message_left_x").css("display",'none');
                $(".formessage").css("display",'none');

                // console.log("first")
               }else if(objcartinfocartitems.length>=1){
                $(".header_div_m_left_show_shop").css("display",'none');
                //login min cart someting
                $(".header_div_m_left_show_shop_login").slideToggle(400);
                $(".header_div_m_left_show_shop_message_left_x").css("display",'none');
                $(".formessage").css("display",'block');
                    // console.log("second")
               }
           }else{
                if(objcartinfocartitems.length<1){
                  $(".header_div_m_left_show_shop_message_detailes_login").css("display",'none');
                  $(".header_div_m_left_show_shop_message_detailes_pay_login").css("display",'none');
                  //nologin min shop cart nothing
                  $(".header_div_m_left_show_shop").slideToggle(400);
                  $(".header_div_m_left_show_shop_message_right_bottom_login_btn").css("display",'none');
                  $(".formessage").css("display",'none');
                  // console.log("third")
                }else if(objcartinfocartitems.length>=1){
                  //nologin min shop cart something
                      $(".header_div_m_left_show_shop_login").css("display",'block');
                      $(".header_div_m_left_show_shop_message_login").css("display",'block');
                      $(".header_div_m_left_show_shop_message_left_login").css("display",'none');
                      $(".header_div_m_left_show_shop").slideToggle(400);
                      $(".header_div_m_left_show_shop_message_detailes_login").css("display",'block');
                      $(".header_div_m_left_show_shop_message_detailes_pay_login").css("display",'block');
                      $(".header_div_m_left_show_shop_message_detailes_pay_login").css("display",'block');
                      $(".header_div_m_left_show_shop_message_right_bottom").css("display",'none');
                      $(".header_div_m_left_show_shop_login").css("display",'none');
                      $(".formessage").css("display",'block');
                      $(".header_div_m_left_show_shop_message_right_bottom_login_btn").css("display",'block');

                          if (window.screen.availHeight>1000){

                             $(".header_div_m_left_show_shop").addClass("pmh");
                             $(".header_div_m_left_show_shop").css("overflow-x","hidden");

                         }
                        if (window.screen.availHeight<450) {

                              $(".header_div_m_left_show_shop").addClass("ph");
                              $(".header_div_m_left_show_shop").css("overflow-x","hidden");
                        }




                     // console.log("forth")
               }
           }

      })


            $(".header_div_m_left").find("b").click(function(){

                 $("body").toggleClass("bodymove")
                 $("body").toggleClass("gd")
                 $("html").toggleClass("gd")
                 $("header").css("position","relative")
                 // $(".header_div_m_left_show_shop").css("display","none")
                 $(".header_div_m_left_show_shop").slideUp(200)
                 $(".header_div_m_left_show_shop_login").css("display","none")
                 // $(".header_div_m_left_show").css("margin-left","70%")
                 $("body").css("overflow-y","hidden")
                 // $("window").unbind("scroll",function () {
                 //
                 // })

                 $(".message").css("display","block")

                 });




                $(".header_div_m_left_show_h1_h2").click(function(){
                     $("body").css("overflow-y","auto")
                 $("body").removeClass("bodymove")
                 $("body").removeClass("gd")
                 $("html").removeClass("gd")
                 $(".header_div_m_left_show_shop").css("display","none")
                 $(".header_div_m_left_show_shop_login").css("display","none")


                 });

             $(".header_div_m_left_show_search").children("h2").find("i").click(function(){
                 $(".header_div_m_left_show_search_s").fadeToggle(200);

             });

             $(".header_div_m_left_show_shop_close").click(function(){
                  $(".header_div_m_left_show_shop").css("display","none");

             });
              $(".header_div_m_left_show_shop_close_login").click(function(){
                 $(".header_div_m_left_show_shop_login").css("display","none");

             });

                 $(".header_div_m_left_show_shop_close").children("b").click(function(){
                 $("html").removeClass("gd")
                 $("body").removeClass("gd")
                 $("header").css("position","relative")
                 $(".message").css("display","block")

             });
              $(".header_div_m_left_show_shop_close_login").find("b").click(function(){
                 $("body").removeClass("gd")
                $("html").removeClass("gd")
                if ($(".message").css("display")=="block"){
                    $(".message").css("display","none")

                }else{
                    $(".message").css("display","block")
                }

                if ($("header").css("position")=="relative"){
                    $("header").css("position","fixed")
                }else{
                    $("header").css("position","relative")
                }
             });




 // phone mincart show // phone mincart show // phone mincart show // phone mincart show // phone mincart show // phone mincart show // phone mincart show


    getInfo(url+"/customer/Exchange/CustomerInfo",function(data){
        // localStorage.setItem("strcustomer", "")
        var  strcustomer = "";
        if (data.customer==null||data.customer==undefined||data.customer==""){
            strcustomer="";
        }else{
             strcustomer=JSON.stringify(data);
        }
        localStorage.setItem("strcustomer", strcustomer)


      getInfo(url+"/customer/Exchange/cartinfo",function(data){
          // localStorage.setItem("strcartinfo", "")
        var strcartinfo="";
        if (data.cart==null||data.cart==undefined||data.cart==""){
            strcartinfo="";
        }else{
            strcartinfo=JSON.stringify(data);
        }
        localStorage.setItem("strcartinfo", strcartinfo)

         getlocal();
       })

    });


    //save wishlist localstorage
    function getwishList(){
      var objwishList=JSON.parse(localStorage.getItem("strwishList"));
     // console.log(123)
      if(objwishList.wishlist.counter==null){
         $(".header_your_first_ul_ul_first_hidden").children('li:first-child').children("a").text("save frame("+objwishList.wishlist.items.length+")").css("text-transform","capitalize")
      }else{
        $(".header_your_first_ul_ul_first_hidden").children('li:first-child').children("a").text("save frame("+objwishList.wishlist.counter+")").css("text-transform","capitalize")
      }

      if(objwishList.wishlist.counter==null){
         $(".header_div_m_left_show_shop_message_right_ul_login").children('li:first-child').children("a").text("save frame("+objwishList.wishlist.items.length+")").css("text-transform","capitalize")
      }else{
         $(".header_div_m_left_show_shop_message_right_ul_login").children('li:first-child').children("a").text("save frame("+objwishList.wishlist.counter+")").css("text-transform","capitalize")
      }
    }

    getInfo(url+"/customer/Exchange/WishList",function(data){
       // console.log("WishList",data);
       //  localStorage.setItem("strwishList", "")
      var  strwishList = JSON.stringify(data);
      localStorage.setItem("strwishList", strwishList)
      getwishList()
      });


})
// document end








