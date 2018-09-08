$(function() {
    $.ajax({
        type: "GET",
        url: "https://www.tianqiapi.com/api/",
        data: "version=v1",
        dataType: "JSON",
        success: function(res) {
            $("#localCity").text(res.city + ' ');
            $("#weather-local p span").eq(0).append(' ' + res.data[0].date + ' ' + res.data[0].week);
            $("#weather-local li").eq(0).append(' ' + res.data[0].air + ' ' + res.data[0].air_level);
            $("#weather-local li").eq(1).append(' ' + res.data[0].index[3].level + ' &nbsp;&nbsp;' + res.data[0].index[3].desc);
            $("#weather-local li").eq(2).append(' ' + res.data[0].index[4].level + ' &nbsp;&nbsp;' + res.data[0].index[4].desc);
            $("#weather-local li").eq(4).append(' ' + res.data[0].index[1].desc);
            $("#weather-local li").eq(5).append(' ' + res.data[0].index[0].level + ' &nbsp;&nbsp;' + res.data[0].index[0].desc);

            var weaClass;
            // 遍历数组
            for (var i = 0; i < res.data[0].hours.length; i++) {
                weaClass = getWeaIcon(getWea(res.data[0].hours[i].wea));
                $('#hours').append('<li>'  + res.data[0].hours[i].day + '  ' + res.data[0].hours[i].tem +  ' ' + res.data[0].hours[i].wea + ' <span class=icon-'+ weaClass +'> </span> </li >');
            }

        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            console.log(errorThrown);
        }
        

    });

    //獲取天氣描述
    function getWea(desc) {
        var index;
        var weather = ['小雨', '阵雨', '多云'];
        if(weather.indexOf(desc) !== -1) {
            index = weather.indexOf(desc);
        }
        return index;
    }

    //获取对应的图标
    function getWeaIcon(index) {
        var className = ['rainy3','rainy2','cloudy2'];
        return className[index];
    }

    $('#ser').on('click', function() {
        var inpValue = $('#weather-search input').eq(0).val();
        

        //查询该城市天气
        $.ajax({
            type: "GET",
            url: "https://www.tianqiapi.com/api/",
            data: "version=v1&city=" + inpValue,
            dataType: "JSON",
            error: function(XMLHttpRequest, textStatus, errorThrown) {
                console.log(errorThrown);
            },
            success: function(res) {
                $("#serCity").text(res.city + ' ');
                $("#ser-result li").eq(0).text('空气质量 : ' + res.data[0].air + ' ' + res.data[0].air_level);
                $("#ser-result li").eq(1).text('穿衣指数 :' + res.data[0].index[3].level + ' ' + res.data[0].index[3].desc);
                $("#ser-result li").eq(2).text('洗车指数 : ' + res.data[0].index[4].level + ' ' + res.data[0].index[4].desc);
                $("#ser-result li").eq(4).text('锻炼指数 : ' + res.data[0].index[1].desc);
                $("#ser-result li").eq(5).text('紫外线指数 :' + res.data[0].index[0].level + ' ' + res.data[0].index[0].desc);

            }
        });
    });
});