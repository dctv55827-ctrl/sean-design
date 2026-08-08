$(function(){
    $('#loader .number span').animateNumber({ number: 99},2000);;
})

$(window).load(function() {	

    //載入後移除Loading
    $("#loader").fadeOut();

    var windowH = $(window).height();
    var scrollIndex = 0;

    $(window).scroll(function() {   
        var scrollVal = $(this).scrollTop();
        if(scrollVal >= scrollIndex){
            if(scrollVal > windowH){
                $("header").addClass("scrolling")
            }
            scrollIndex = scrollVal;
        }
        if(scrollVal < scrollIndex){
            if(scrollVal > windowH){
                $("header").removeClass("scrolling")
            }
            scrollIndex = scrollVal;
        }
        if(scrollVal > windowH){
            $(".scroll-top").fadeIn()
        }
        if(scrollVal < windowH){
            $(".scroll-top").fadeOut();
        }
        $(".slidein-object").each(function(){ 
            if(scrollVal > $(this).offset().top - windowH){
                $(this).addClass("slidein-start")
            }
        })
        $(".line").each(function(){ 
            if(scrollVal > $(this).offset().top - windowH){
                $(this).addClass("line-complete")
            }
        })
        $(".bottomIn-object").each(function(){ 
            if(scrollVal > $(this).offset().top - windowH){
                $(this).addClass("bottomIn-start")
            }
        })
        /*$(".loop-assets").each(function(){ 
            if(scrollVal > $(this).offset().top - windowH/3){
                $(this).addClass("loop-start");
            }
        })*/
    });



    //圖片放大彈入
    function BounceIn(){
        $(".loop-assets").each(function(){
            var x=$(this).find(".pop-up").index();
            var y=$(this).find(".mockup-pop").length;

            if(x == y-1){
                $(this).find(".mockup-pop").eq(x).removeClass("pop-up");
                $(this).find(".mockup-pop").eq(0).addClass("pop-up");
                x = 0;
            }
            else{
                $(this).find(".mockup-pop").eq(x).removeClass("pop-up");
                $(this).find(".mockup-pop").eq(x+1).addClass("pop-up");
            }
        })
    }

    //圖片放大彈入循環輪播
    var BounceInLoop = window.setInterval(function(){
        BounceIn();
    }, 3500);

    //滑鼠移入清除圖片放大彈入循環輪播
    $(".loop-assets").mouseenter(function(){
        clearInterval(BounceInLoop);
    });

    //滑鼠移出圖片繼續放大彈入循環輪播
    $(".loop-assets").mouseleave(function(){
        BounceInLoop = window.setInterval(function(){
            BounceIn();
        }, 3500);
    });



    //圖片淡入
    function RevealIn() {
        $(".loop-assets").each(function(){
            var x=$(this).find(".reveal-in").index();
            var y=$(this).find(".mockup-reveal").length;

            if(x == y-1){
                $(this).find(".mockup-reveal").eq(x).removeClass("reveal-in");
                $(this).find(".mockup-reveal").eq(0).addClass("reveal-in");
                /*$(this).find(".mockup-reveal").eq(0).fadeIn(300,function(){
                    $(this).addClass("reveal-in");
                    $(this).parent().find(".mockup-reveal").eq(x).removeClass("reveal-in")
                })*/
                x = 0;
            }
            else{
                $(this).find(".mockup-reveal").eq(x).removeClass("reveal-in");
                $(this).find(".mockup-reveal").eq(x+1).addClass("reveal-in");
                /*$(this).find(".mockup-reveal").eq(x+1).fadeIn(300,function(){
                    $(this).addClass("reveal-in");
                    $(this).parent().find(".mockup-reveal").eq(x).removeClass("reveal-in")
                })*/
            }
        })
    }

    //圖片淡入循環輪播
    var RevealInLoop = window.setInterval(function(){
        RevealIn();
    }, 2000);

    //滑鼠移入清除圖片淡入循環輪播
    $(".loop-assets").mouseenter(function(){
        clearInterval(RevealInLoop);
    });

    //滑鼠移出圖片繼續圖片淡入循環輪播
    $(".loop-assets").mouseleave(function(){
        RevealInLoop = window.setInterval(function(){
            RevealIn();
        }, 2000);
    });


    //重新整理時觸發scroll
    $(window).trigger('scroll');

   

    //回上方
    $(".scroll-top").click(function(){
        $('html,body').animate({scrollTop:$('html,body').offset().top}, 800);
    })


    //手機選單
    $(".mobile-menu-btn").click(function(){
        $(this).toggleClass("open");
        $(".mobile-menu").toggleClass("open");
    })

});




