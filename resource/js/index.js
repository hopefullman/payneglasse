

		var index=0

			//-----------------------------------------click radiobutton chang img
		function imgchange(prefix,name,self){
			var obj = $("#"+prefix+name).children("li");
			var index1=$(self).index();
			var width=parseInt($(obj[0]).css("width").split("px")[0])+4;
			$("#"+prefix+"product"+name).text($(self).attr("productname"));
			$("#"+prefix+"price"+name).text("$"+$(self).attr("price"));
			$(self).css("border-color","#000").off("mouseenter").off("mouseleave").siblings().css("border-color","transparent").hover(function(){
					$(this).css("border-color","#000");
			},function(){
					$(this).css("border-color","transparent")
			});
			$(obj[0]).animate({"margin-left":-index1*width},300);
		}
		//-----------------------------------------swipe radiobutton chang img
		function imgchange(prefix,name,self){
			var obj = $("#"+prefix+name).children("li");
			var index1=$(self).index();
			var width=parseInt($(obj[0]).css("width").split("px")[0])+4;
			$("#"+prefix+"product"+name).text($(self).attr("productname"));
			$("#"+prefix+"price"+name).text("$"+$(self).attr("price"));
			$(self).css("border-color","#000").off("mouseenter").off("mouseleave").siblings().css("border-color","transparent").hover(function(){
					$(this).css("border-color","#000");
			},function(){
					$(this).css("border-color","transparent")
			});
			$(obj[0]).animate({"margin-left":-index1*width},300);
		}
		






		









	//     var timestamp = Date.parse(new Date());

	// //women
	// $.get("asset/json/plp.json?timestamp="+timestamp,function(data){
		
	// 	var women_li="";
	// 	$(data.women).each(function(index,item){

	// 		women_li="<li>"
	// 				+"<div style='overflow:hidden;height:1.1rem'>"
	// 				+"<ul  class='pg_PLP_women_in_ul' id='"+item.brandname+"'>";
	// 		var radio_button='';
	// 		$(item.list).each(function(list_index,list_item){
				
	// 			women_li+="<li class='pg_PLP_women_in_ul_li'>"
	// 			        +"<a href='"+list_item.url+"'>"
	// 					+"<img class='pg_PLP_women_in_ul_jpg' src='"+list_item.img+"''></img>"
	// 					+"</a>"
	// 					+"</li>";
	// 			var color=list_item.color.indexOf("/")>0 ? "url(\""+list_item.color+"\")" : list_item.color;

	// 			radio_button+="<div productname='"
	// 			            + list_item.productname
	// 			            +"' price='"
	// 			            + list_item.price
	// 			            +"' onclick=\"imgchange("+list_index+",'"+item.brandname+"',this)\" style='cursor: pointer;'>"
	// 					+"<span style='background:"+color+"'></span>"
	// 					+"</div>";

	// 		});
	// 		women_li+="</ul>";
	// 			var width=29*item.list.length;
	// 			women_li+="<div class='pg_PLP_women_in_ul_point' style='width:"+width+"px;'>"
	// 					+radio_button
	// 					+"</div>"
	// 					+"<p class='pg_PLP_women_in_ul_name' id='"
	// 					+"product"+item.brandname
	// 					+"'>"
	// 					+item.list[0].productname
	// 					+"</p>"
	// 					+"<p class='pg_PLP_women_in_ul_prices' style='font-weight:600'"
	// 					+"id='"+"price"+item.brandname+"'>"
	// 					+"$"+item.list[0].price
	// 					+"</p>";


	// 		 women_li+="</li>";

	// 		$(".pg_PLP_women_out_ul").append(women_li);

	// 		});

	// 	});



	// 	//man

	// 	$.get("asset/json/plp.json?timestamp="+timestamp,function(data){
		
	// 	var men_li="";
	// 	$(data.men).each(function(index,item){

	// 		men_li="<li>"
	// 				+"<div style='overflow:hidden;height:1.1rem'>"
	// 				+"<ul  class='pg_PLP_men_in_ul' id='"+item.brandname+"'>";
	// 		var radio_button='';
	// 		$(item.list).each(function(list_index,list_item){
				
	// 			men_li+="<li class='pg_PLP_men_in_ul_li'>"
	// 			        +"<a href='"+list_item.url+"'>"
	// 					+"<img class='pg_PLP_men_in_ul_jpg' src='"+list_item.img+"''></img>"
	// 					+"</a>"
	// 					+"</li>";
	// 			var color=list_item.color.indexOf("/")>0 ? "url(\""+list_item.color+"\")" : list_item.color;

	// 			radio_button+="<div productname='"
	// 			            + list_item.productname
	// 			            +"' price='"
	// 			            + list_item.price
	// 			            +"' onclick=\"imgchange("+list_index+",'"+item.brandname+"',this)\" style='cursor: pointer;'>"
	// 					+"<span style='background:"+color+"'></span>"
	// 					+"</div>";

	// 		});
	// 		men_li+="</ul>";
	// 			var width=29*item.list.length;
	// 			men_li+="<div class='pg_PLP_men_in_ul_point' style='width:"+width+"px;'>"
	// 					+radio_button
	// 					+"</div>"
	// 					+"<p class='pg_PLP_men_in_ul_name' id='"
	// 					+"product"+item.brandname
	// 					+"'>"
	// 					+item.list[0].productname
	// 					+"</p>"
	// 					+"<p class='pg_PLP_men_in_ul_prices' style='font-weight:600'"
	// 					+"id='"+"price"+item.brandname+"'>"
	// 					+"$"+item.list[0].price
	// 					+"</p>";


	// 		 men_li+="</li>";

	// 		$(".pg_PLP_men_out_ul").append(men_li);

	// 		});

	// 	});


	// //kids


	// 	$.get("asset/json/plp.json?timestamp="+timestamp,function(data){
		
	// 	var kids_li="";
	// 	$(data.kids).each(function(index,item){

	// 		kids_li="<li>"
	// 				+"<div style='overflow:hidden;height:1.1rem'>"
	// 				+"<ul  class='pg_PLP_kids_in_ul' id='"+item.brandname+"'>";
	// 		var radio_button='';
	// 		$(item.list).each(function(list_index,list_item){
				
	// 			kids_li+="<li class='pg_PLP_kids_in_ul_li'>"
	// 			        +"<a href='"+list_item.url+"'>"
	// 					+"<img class='pg_PLP_kids_in_ul_jpg' src='"+list_item.img+"''></img>"
	// 					+"</a>"
	// 					+"</li>";
	// 			var color=list_item.color.indexOf("/")>0 ? "url(\""+list_item.color+"\")" : list_item.color;

	// 			radio_button+="<div productname='"
	// 			            + list_item.productname
	// 			            +"' price='"
	// 			            + list_item.price
	// 			            +"' onclick=\"imgchange("+list_index+",'"+item.brandname+"',this)\" style='cursor: pointer;'>"
	// 					+"<span style='background:"+color+"'></span>"
	// 					+"</div>";

	// 		});
	// 		kids_li+="</ul>";
	// 			var width=29*item.list.length;
	// 			kids_li+="<div class='pg_PLP_kids_in_ul_point' style='width:"+width+"px;'>"
	// 					+radio_button
	// 					+"</div>"
	// 					+"<p class='pg_PLP_kids_in_ul_name' id='"
	// 					+"product"+item.brandname
	// 					+"'>"
	// 					+item.list[0].productname
	// 					+"</p>"
	// 					+"<p class='pg_PLP_kids_in_ul_prices' style='font-weight:600'"
	// 					+"id='"+"price"+item.brandname+"'>"
	// 					+"$"+item.list[0].price
	// 					+"</p>";


	// 		 kids_li+="</li>";

	// 		$(".pg_PLP_kids_out_ul").append(kids_li);

	// 		});

	// 	});



// 		//------------------------------------------------------------------tab change
		
// 	$(".pg_plp_up_tab_left p").css({"color":'#f90',"border-bottom":"3px solid #f90"})
	
// 	$(".pg_plp_up_tab_left p").mouseenter(function(){
		
// 		index=0
		
// 		$('.pg_PLP_women_out_ul>li').css('margin-left','17px')

// 		$(this).css({"color":'#f90',"border-bottom":"3px solid #f90"});
// 		$(this).parent().siblings().children().css({"color":'#ccc',"border-bottom":"3px solid #ccc"})
// 		$('.pg_PLP_button a').text('SHOP ALL WOMEN');
// 		$('.pg_PLP_button a').attr('href',"https://beta.payneglasses.com/eyeglasses/women.html");
// 		$(".pg_PLP_women").siblings().fadeOut("slow");
// 		$(".pg_PLP_women").fadeIn("slow")
// 		$('#pg_plp_down_all_left_icon').css("visibility",'hidden')

// 	});

// 	$(".pg_plp_up_tab_middle p").mouseenter(function(){
// 		index=0

// 		$('.pg_PLP_men_out_ul>li').css('margin-left','17px')

// 		$(this).css({"color":'#f90',"border-bottom":"3px solid #f90"});
// 		$(this).parent().siblings().children().css({"color":'#ccc',"border-bottom":"3px solid #ccc"})
// 		$('.pg_PLP_button a').text('SHOP ALL MEN');
// 		$('.pg_PLP_button a').attr('href',"https://beta.payneglasses.com/eyeglasses/men.html");
// 		$(".pg_PLP_men").siblings().fadeOut("slow");
// 		$(".pg_PLP_men").fadeIn("slow");
// 		$('#pg_plp_down_all_left_icon').css("visibility",'hidden')
// 	});

// 	$(".pg_plp_up_tab_right p").mouseenter(function(){
// 		index=0

// 		$('.pg_PLP_kids_out_ul>li').css('margin-left','17px')
// 		$(this).css({"color":'#f90',"border-bottom":"3px solid #f90"});
// 		$(this).parent().siblings().children().css({"color":'#ccc',"border-bottom":"3px solid #ccc"})
// 		$('.pg_PLP_button a').text('SHOP ALL KIDS');
// 		$('.pg_PLP_button a').attr('href',"https://beta.payneglasses.com/eyeglasses/kids.html");
// 		$(".pg_PLP_kids").fadeIn("slow").siblings().fadeOut("slow");
// 		$('#pg_plp_down_all_left_icon').css("visibility",'hidden')
// 	});



// //-----------------------------------------------click icon left and right chang big img
// 	$("#pg_plp_down_all_right_icon").on("click",function(){
// 		var new_text=$('.pg_PLP_button').text().trim();
		
// 		switch(new_text){
// 			case "SHOP ALL WOMEN":
// 				move_ul_right("pg_PLP_women_out_ul");
// 			break;
// 			case "SHOP ALL MEN":
// 				move_ul_right("pg_PLP_men_out_ul");
// 			break;
// 			case "SHOP ALL KIDS":
// 				move_ul_right("pg_PLP_kids_out_ul");
// 			break;
// 		}
// 	});

// 	function move_ul_right(name){


// 		var liQ=$("."+name).children("li").length;

// 		var obj=$("."+name).children("li")[0];
// 		var width_li=parseInt($(obj).css("width").split("px")[0]);
		
// 		var li_margin=parseInt($(obj).css("margin-right").split("px")[0])*2;
// 		var now_marginleft=parseInt($(obj).css('margin-left').split("px")[0]);


// 		if($(window).width()<=680){

// 			if(index<liQ-1){
// 			index++;
// 			$(obj).stop().animate({"margin-left":-index*(width_li+li_margin)+li_margin/2},50);
// 			}
// 		}else if(1199>=$(window).width()  && $(window).width()>681){

// 			if(index<liQ-2){
// 			index++;
// 			$(obj).stop().animate({"margin-left":-index*(width_li+li_margin)+li_margin/2},50);
// 			}
// 		}else if($(window).width()>1200){

// 			if(index<liQ-3){
// 			index++;
// 			$(obj).stop().animate({"margin-left":-index*(width_li+li_margin)+li_margin/2},50);
// 			}


// 		}


// 		 $("#pg_plp_down_all_left_icon").css("visibility","visible")


// 	}



// 	$("#pg_plp_down_all_left_icon").on("click",function(){
// 		var new_text=$('.pg_PLP_button').text().trim();
		
// 		switch(new_text){
// 			case "SHOP ALL WOMEN":
// 				move_ul_left("pg_PLP_women_out_ul");
// 			break;
// 			case "SHOP ALL MEN":
// 				move_ul_left("pg_PLP_men_out_ul");
// 			break;
// 			case "SHOP ALL KIDS":
// 				move_ul_left("pg_PLP_kids_out_ul");
// 			break;
// 		}
// 	});

// 	function move_ul_left(name){
// 		var obj=$("."+name).children("li")[0];
// 		var liQ=$("."+name).children("li").length;


// 		var width_li=parseInt($(obj).css("width").split("px")[0]);
		
// 		var li_margin=parseInt($(obj).css("margin-right").split("px")[0])*2;
// 		var now_marginleft=parseInt($(obj).css('margin-left').split("px")[0]);

// 		if(index>0){
// 			index--
// 			$(obj).stop().animate({"margin-left":-index*(width_li+li_margin)+li_margin/2},50);
// 		}




// 	}


// 	$(window).resize(function(){

//    			//var now_li=parseInt($(".pg_PLP_down div ul li")[0].css("width").split("px"))
//    			var now_li=$(".pg_PLP_down div ul li")[0];
//    			var now_li_width=parseInt($(now_li).css("width").split("px"));
//    			var now_li_margin=parseInt($(now_li).css("margin-right").split("px"));
   			
//    			// console.log($(now_li).css("margin-left"))
//    			// console.log(-index*(now_li_width+now_li_margin*2)+now_li_margin)
//    			$(now_li).css('margin-left',-index*(now_li_width+now_li_margin*2)+now_li_margin);

// });




	// footer_up


	// $(".footer_up_search_right").click(function(){
	// 	$(this).css("outline",'0')
	// 	var regex = /^([0-9A-Za-z\-_\.]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})?)$/g;
	// 	var input_value=$(".footer_up_search_left").val().trim()
	//
	// 	if(input_value==''){
	// 		$('#footer_up_search_result').text('This is a required field.');
	// 	}else if(regex.test(input_value)){
    //
	// 		$.ajax({
	// 			url:"https://beta.payneglasses.com/newsletter/subscriber/new/",
	// 			type:'post',
	// 			crossDomain:true,
	// 			data:{
	// 				"email":input_value
	// 			},
	// 			success:function(data){
	// 				$('#footer_up_search_result').text('');
	// 			}
    //
	// 		});
	// 	}else{
	// 		$('#footer_up_search_result').text('Please enter a valid email address (Ex: johndoe@domain.com).');
	// 	}
    //
    //
	// })


	// footer_down




