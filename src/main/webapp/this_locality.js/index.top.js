$(function () {
    window.onload=function(){
        var $anvlfteb = $('#anvlfteb'),
        $posbox = $anvlfteb.find('div.posbox'),
        $seledbox = $("#seledbox"),
        anvjson = {
            bbs: '<a href="#">我的优惠券</a>' +
                '<a href="#">我的红包</a>' +
                '<a href="#">我的考拉豆</a>'+
                '<a href="#">账号管理</a>'+
                '<a href="#">我的实名认证</a>'+
                '<a href="#">我的发票抬头</a>'+
                '<a href="#">我收藏的商品</a>'+
                '<a href="#">我关注的品牌</a>'+
                '<a href="#">售后管理</a>',
            news: '<a href="#">联系客服</a>' +
                '<a href="#">帮助中心</a>' +
                '<a href="#">知识产权保护</a>' +
                '<a href="#">规则中心</a>',
            post: '<a href="#">充值中心</a>' +
                '<a href="#">话费流量</a>' +
                '<a href="#">游戏充值</a>' +
                '<a href="#">APPStore充值卡</a>',
            youhui: '<a href="#">消费者权益</a>' +
                '<a href="#">消费者告知书</a>' +
                '<a href="#">消费者投诉公示</a>' ,
            other: '<a href="#">收藏本站</a>' +
                '<a href="#">新浪微博</a>' +
                '<a href="#">微信公众号</a>' +
                '<a href="#">易信公众号</a>'+
                '<a href="#">招商合作</a>'+
                '<a href="#">考拉招聘</a>'
        };
    $posbox.mouseover(function () {
        var i = $(this).index();
        $(this).addClass("anvh").siblings().removeClass("anvh");
        var selec = $(this).attr("selec");
        if ($seledbox.is(":hidden")) {
            $seledbox.show().animate({"left":"90*i","text-algin":"center"}).html("<div>" + anvjson[selec] + "</div>").css({"z-index":20})
        } else {
            $seledbox.stop().animate({
                left: 90 * i + 1
            }, 200, function () {
                $("#seledbox").html("<div>" + anvjson[selec] + "</div>")
            })
        }
    });
    $anvlfteb.mouseleave(function () {
        $seledbox.hide();
        $posbox.removeClass("anvh");
    })
    }
   
})