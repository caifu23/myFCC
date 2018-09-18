$(function() {
    var locationArr = [];
    $('#wea').on('click', getLocation);
    $('#wea').on('click', function() {
        console.log(locationArr[0]);
        $('.weather').append(locationArr[0]);
    });
    

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