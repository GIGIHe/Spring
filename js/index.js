$(function(){
    $(".mfol li").click(function(){
        $(this).addClass('hover').siblings('li').removeClass('hover');
        $(".mfexa_type").eq($(this).index()).stop().slideDown(600).siblings(".mfexa_type").hide();
    })

    $(".point1").click(function(){
        $("html , body").animate({scrollTop:$(".m1").offset().top},400);
    });

    $(window).scroll(function(){
        // 注入ht
        var top = $(".zgm1").offset().top;//获取指定位置
        var scrollTop = $(window).scrollTop();
        if(scrollTop>top){
            $(".navbar").addClass('active');
        }else{
            $(".navbar").removeClass('active');
        }
    })

    $(".hjul li").each(function(index){
        $(this).click(function(){
            $(this).addClass('hover').siblings('li').removeClass('hover');
             $(".hjul_inner").hide().eq(index).fadeIn(200);
        })
    })
    $(".tabdl dd").each(function(index){
        $(this).click(function(){
            $(this).addClass('hover').siblings('dd').removeClass('hover');
             $(".table").hide().eq(index).fadeIn(200);
        })
    })
    var p_num
    var arr = ['事业单位全年集训营免费参加资格','事业单位全年备考图书1折购','事业单位购课优惠卷300元']
    if(localStorage.getItem("ran_text")=="undefined"||localStorage.getItem("ran_text")==null){
        var p_num =Math.floor(Math.random()*3)
        var jp_text = arr[p_num]
        localStorage.setItem('ran_text',jp_text)
        console.log(localStorage.getItem("ran_text"))
    }
    $(".line1 li").each(function(index){
        $(this).click(function(){
            flag = true
            $(".line1 li").removeClass('click');
            $(this).addClass('click')
            $(".mask").fadeIn(200)
            setTimeout(function(){
             $(".ii-frame").slideDown();
            if(window.localStorage){
                $(".hj p").text(localStorage.getItem("ran_text"))
            }else{
                alert('请升级您的浏览器')
            }
            
            },1000)
        })
    })
    $(".i-close").click(function(){
        $(".mask,.ii-frame").hide()
    });
})