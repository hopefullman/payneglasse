
$(document).ready(function(){
    var startX=0;
    //  This is how to get data
    var url = $(".header_your_first_ul_div").find("h2").children("a").attr("url");
    var strmacsp = localStorage.getItem("mage-cache-storage-pg");
    var objmacsp = {"global_closed_message": []};
    if (strmacsp) {
        objmacsp = JSON.parse(strmacsp);
        if(typeof(objmacsp.global_closed_message)=="string")
            objmacsp.global_closed_message=JSON.parse(objmacsp.global_closed_message);
    }
    var count = 0;

  function getIn(url,callback){
            $.ajax({
                type:"post",
                url:url,
                crossDomain: true,
                contentType: "application/json",
                xhrFields: {
                withCredentials: true
            },
                beforeSend: function() {

                },
                success:callback,
                complete: function() {

                  },
                error:function(error){

                }
            });
    }

        getIn(url+"/customer/notice/noticeinfo",function(data){

            var s = "";
            var screenW = $(document.body).width() + 17 > 658? 1:0;

            count=data.notice.length-objmacsp.global_closed_message.length;
            var i=0;
            $(data.notice).each(function(index,item){
                var notice_id=item.notice_id;
                var html = $.parseHTML(item.notice_content);
                var href = $(html).attr("href");
                var text = $(html).text();
                var leftArrow = "<b class='iconfont message_row_left_b'>&#xe6a7;</b>";
                var rightArrow = "<b class='iconfont message_row_right_b'>&#xe697;</b>";
                var middleArrow = leftArrow+rightArrow;
                if(objmacsp.global_closed_message.indexOf(notice_id)<0) {
                    s += "<div class='message_row' index='"+i+"'>"
                        + "<a href='" + href + "' title='" + text + "'>" + text + "</a>";
                    if(count!=1)
                    switch (screenW){
                        case 0:
                            if(i==0)
                                s+=leftArrow;
                            else if(i==count-1)
                                s+=rightArrow;
                            else
                                s+=middleArrow;
                            break;
                    }

                    s+= "<span notice_id='"+notice_id+"'>x</span>"
                        + "</div>";
                    i++;
                }
            });
            // var screenW = $(document.body).width() + 17 > 658? 1:0;
            $(".message_two_child").empty().append(s);
            if(count>0) {
                $(".message").css({height: "52px"});
                switch (screenW) {
                    case 0:

                        break;
                    case 1:
                        $(".message_row").css("width", (100 / count) + "%");
                        break;
                }
            }
            $(".message_row span").click(function(){
                var notice_id = $(this).attr("notice_id");
                $(this).parent().remove();
                objmacsp.global_closed_message.push(notice_id);
                localStorage.setItem("mage-cache-storage-pg", JSON.stringify(objmacsp));
                if(count>1) {
                    $(".message_row").css("width", (100 / (--count)) + "%");
                    if(count==1){
                    $(".message_row").children("b").remove();
                   $(".message_row").css("display","block");
                }
                }
                else
                    $(".message").remove();
            });

            $(".message_row_left_b").click(function(){
                $(this).parent().css("display","none");
                $(this).parent().next().css("display","block");
            });
            $(".message_row_right_b").click(function(){
                $(this).parent().css("display","none");
                $(this).parent().prev().css("display","block");
            });



             //slide
             $('.message_row').bind('touchstart',function(e){
                e.cancelBubble = true;
                e.stopPropagation();
                startX = e.originalEvent.changedTouches[0].pageX;
                console.log(startX);

              });
             $('.message_row').bind('touchmove',function(e){

             var position=$(this).attr("index");
             e.cancelBubble = true;
             e.stopPropagation();
             var endX = e.originalEvent.changedTouches[0].pageX;
             var  distanceX = endX-startX;
             console.log(distanceX);

                 if (distanceX < 0&& position<count-1) {
                     $(this).fadeOut(300)
                     $(this).next().fadeIn(300);
                 }
                  if (distanceX > 0&& position>0) {
                         $(this).fadeOut(300)
                     $(this).prev().fadeIn(300);
                  }


        });

    });

if ($(document.body).width() + 17 < 658){
 $(".message_row").css("width","100%")
}




})
