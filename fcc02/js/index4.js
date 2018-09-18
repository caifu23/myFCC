$(function() {
    var locationArr = [];
    setTimeout(getLocation, 1000);
    setTimeout(getWeather, 3000);
    $('#wea').on('click', getWeather);
    $('#wea').on('click', function() {
        console.log(locationArr[0]);
        // $('.weather').append(locationArr[0]);
    });
    

    function getWeather() {
        // getLocation();
        var num = locationArr[0];
        if(locationArr[0]) {
            $('.weather').append('----0'+ num);
            $('.weather').append('----1' + typeof num);
            $('.weather').append('----2' + parseInt(num));        
            $('.weather').append('-----3'+Math.floor(locationArr[0]));
        }
        

        // $.ajax({
        //     type: "GET",
        //     url: "https://fcc-weather-api.glitch.me/api/current",
        //     data: "?lat="+ Math.floor(locationArr[0]) + "&lon="+Math.floor(locationArr[1]),
        //     dataType: "JSON",
        //     success: function (response) {
        //         alert(JSON.stringify(response));
        //     },
        //     error: function (err) { 
        //         console.log(err);
        //      }
        // });
    }

    //获取位置
    function getLocation() {
        
        if(!navigator.geolocation) {
            console.log('您的浏览器不支持地理位置');
            $('.weather').append('您的浏览器不支持地理位置');
            return ;
        }

        function success(position) {
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;
            locationArr.push(latitude, longitude);
            console.log(locationArr);
            // $('.weather').append(locationArr[0] + ' ' +locationArr[1]);
        };

        function error() {
            console.log('无法获取您的位置!');
            $('.weather').append('无法获取您的位置');
        };

        navigator.geolocation.getCurrentPosition(success, error);
        
    }
    



    
});