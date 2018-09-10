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
        });
        
     

    }


    var flag = true;
    console.log(arr);
    for(var key in arr) {
        console.log(arr[key] + '==')
        if(arr[key] == 'undefined'){
            flag = false;
        }
    }
    if(flag) {
        tvChannels.forEach(function(v) {
          // 节目的相关信息
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

    


    // all 被点击时
    $('#tvStatusAll').on('click', function() {
        $('.offline').css('display','flex');
        $('.inline').css('display','flex');
    });

    //tvOnline 被点击时
    $('#tvOnline').on('click', function() {
        $('.offline').css('display','none');
        $('.inline').css('display','flex');
    });

    //tvOffline 被点击时
    $('#tvOffline').on('click', function() {
        $('.inline').css('display','none');
        $('.offline').css('display','flex');
    });

});