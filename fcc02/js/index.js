// weather  api
// 1、   https://www.apixu.com/doc/    用github关联的
// http://api.apixu.com/v1/current.json
// key=4bbf6f0cbe6c41daa8391927180709
// q=auto:ip
// days=5
// lang=zh

// http://api.apixu.com/v1/current.json?key=4bbf6f0cbe6c41daa8391927180709&q=auto:ip&days=5&lang=zh


//2、 https://home.openweathermap.org/users/sign_up
//3、  和风天气 https://free-api.heweather.com/s6/weather/now?location=auto_ip&username=HE1809071832421116&t=
// 4、 https://www.sojson.com/open/api/weather/json.shtml?city=%E5%B9%BF%E5%B7%9E
$(function() {
    $.getJSON('http://api.apixu.com/v1/current.json?key=4bbf6f0cbe6c41daa8391927180709&q=auto:ip&lang=zh', function(json) {
        $('#locationName').html( '<img src=http:'+json.current.condition.icon+'>'  + json.location.name);
        $('#weather-toData li span').eq(0).text(json.current.humidity);
        $('#weather-toData li span').eq(1).text(json.current.temp_c);
        $('#weather-toData li span').eq(2).text(json.current.feelslike_c);
        $('#weather-toData li span').eq(3).text(json.current.condition.text);
        $('#weather-toData li span').eq(4).text(json.current.wind_kph);
       
    });

    $.getJSON('http://api.apixu.com/v1/forecast.json?key=4bbf6f0cbe6c41daa8391927180709&q=auto:ip&days=7&lang=zh', function(json) {
        // $('#sixDays').text('sssssssss');
        $.each(json, function(k, v) {
            console.log(k,v);
        });
        var date;
        for(var i=0; i<6; i++) {
            date = json.forecast.forecastday[i+1];
            $('#sixDays li').eq(i).html(date.date + ' <img src=http:' + date.day.condition.icon + '>' + ' ' +date.day.condition.text +' ' + date.day.mintemp_c +'℃ ~'+date.day.maxtemp_c + '℃');
        }
    });
});
