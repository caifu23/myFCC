$(function() {
    //默认
    var city = '广州';
    getWeather(city);


    $('#changeCity').on('click', searchWeather);


    //查询某城市天气数据
    function searchWeather() {
        $('#changeCity').keydown(function (e) { 
            if(e.keyCode == 13) {
                city = $('#changeCity').val();
                getWeather(city);
            }
        });
        
        
    }

    // 获得某城市的天气数据
    function getWeather(cityName) {
        $.ajax({
            type: "GET",
            url: "https://v.juhe.cn/weather/index",
            data: "cityname="+ cityName +"&dtype=json&format=1&key=0912dacbdaa27981fe2523253a24bdb3",
            // data: {cityname: '广州', key: '0912dacbdaa27981fe2523253a24bdb3'},
            dataType: "jsonp",
            success: function (response) {
                var weatherToday = response.result.today;
                $('#weather-content .date').html(weatherToday.date_y + ' ' + weatherToday.week);
                $('#weather-content .weather-location span:first-child').text(weatherToday.city);
                $('#today-temp').text(weatherToday.temperature);
                $('#today-desc').text(weatherToday.weather);
                $('#today-humidity').html(response.result.sk.humidity + ' ' + response.result.sk.temp + '℃ ');
                $('#today-wind').html(' ' + response.result.sk.wind_direction +  response.result.sk.wind_strength);

                $('#weather-profit p span').eq(0).text(weatherToday.uv_index);
                $('#weather-profit p span').eq(1).text(weatherToday.dressing_advice);
                $('#weather-profit p span').eq(2).text(weatherToday.wash_index);
                $('#weather-profit p span').eq(3).text(weatherToday.travel_index);
                $('#weather-profit p span').eq(4).text(weatherToday.exercise_index);
            },
            error: function(err) {
                console.log(err);
            }
        });
    }
    
    

    
});