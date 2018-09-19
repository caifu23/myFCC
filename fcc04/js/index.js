$(function() {

    $('#tvList').html('');
    var tvChannels = ["freecodecamp", "storbeck", "terakilobyte", "habathcx","RobotCaleb","thomasballinger","noobs2ninjas","beohoff","esl_sc2"];
    var streamApi = "https://wind-bow.glitch.me/twitch-api/streams/";
    var channelApi = 'https://wind-bow.glitch.me/twitch-api/channels/';
    var arr = {};

    // 遍历tvChannels
    tvChannels.forEach(function(v) {
        allStreamCall(v);
        
    });

    function allStreamCall(v) {
        //是否正在直播
        $.getJSON(streamApi + v + "?callback=?",function(res){
            if(res.stream == null || res.stream === undefined) {
                arr[v] = 'offline';
            }else {
                arr[v] = 'inline';
            }

            //获取详细信息
            $.getJSON(channelApi + v + "?callback=?",function(data){
                console.log(arr[v]  + '-------' + v);
                if(arr[v] == 'inline') {
                    $('#tvList').prepend(" <li class='row "+ arr[v] +"'><div class='col-md-2' ><img src='" + data.logo +  "'/></div><div class='col-md-4' ><a href='"  + data.url +  "' target='_blank'>"+ data.display_name +"</a></div><div class='col-md-6'>" + data.display_name + " " + (data.status==null ? '' : data.status) + "</div></li>");
    
                }else {
                    $('#tvList').append(" <li class='row "+ arr[v] +"'><div class='col-md-2' ><img src='" + data.logo +  "'/></div><div class='col-md-4' ><a href='"  + data.url +  "' target='_blank'>"+ data.display_name +"</a></div><div class='col-md-6'>" + "offline" + "</div></li>");
                }
            }); 


        });
        
        
     

    }



    $('.tvSelector').on('click', function () {
        // 移除li的active类名
        $('.tvSelector').parent().removeClass('active');
        // 给当前点击的li添加active类名
        $(this).parent().addClass('active');
        
        var status = $(this).attr('id');
        if(status === 'tvStatusAll') {  // all 被点击时
            $('.offline, .inline').show();
        } else if(status === 'tvOnline') {    //tvOnline 被点击时
            $('.offline').hide();
            $('.inline').show();
        } else if(status === 'tvOffline'){  //tvOffline 被点击时
            $('.inline').hide();
            $('.offline').show();
        }
    });

});
