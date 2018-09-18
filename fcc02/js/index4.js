var api = "https://fcc-weather-api.glitch.me/api/current?";
var lat, lon;
var tempUnit = 'C';
var currentTempInCelsius;

$(document).ready(function () {
  if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        lat = "lat=" + position.coords.latitude;
        lon = "lon=" + position.coords.longitude;
        getWeather(lat, lon);
      });
  } else {
      console.log('当前浏览器不支持 geolocation !');
  } 

});

function getWeather(lat, lon) {
    var urlString = api + lat + "&" + lon;
    $.ajax({
        type: "GET",
        url: urlString,
        dataType: "JSON",
        success: function (response) {
            $('.weather').append(JSON.stringify(response));
        },
        error: function (err) {
        console.log('ajax--' + err.message);
        }
    });
}




// $(function() {
//     var locationArr = [];
//     setTimeout(getLocation, 1000);
//     setTimeout(getWeather, 3000);
//     $('#wea').on('click', getWeather);
//     $('#wea').on('click', function() {
//         console.log(locationArr[0]);
//         // $('.weather').append(locationArr[0]);
//     });
    

//     function getWeather() {
//         // getLocation();
//         var num = locationArr[0];
//         var numLon = locationArr[1];
//         if( num && numLon ) {
//             $('.weather').append('----0'+ num);
//             $('.weather').append('----1'+ numLon);
//             getAjax(num, numLon);
            
//         }
        
        
        
//     }
//     // ajax获取天气数据
//     function getAjax(lat, lon) {
//         $.ajax({
//             type: "GET",
//             url: "https://fcc-weather-api.glitch.me/api/current",
//             data: "lat="+ lat + "&lon=" + lon,
//             dataType: "JSON",
//             success: function (response) {
//                 alert(JSON.stringify(response));
//             },
//             error: function (err) { 
//                 console.log(err);
//             }
//         });    
//     }

//     //获取位置
//     function getLocation() {
        
//         if(!navigator.geolocation) {
//             console.log('您的浏览器不支持地理位置');
//             $('.weather').append('您的浏览器不支持地理位置');
//             return ;
//         }

//         function success(position) {
//             var latitude = position.coords.latitude;
//             var longitude = position.coords.longitude;
//             locationArr.push(latitude, longitude);
//             console.log(locationArr);
//             // $('.weather').append(locationArr[0] + ' ' +locationArr[1]);
//         };

//         function error() {
//             console.log('无法获取您的位置!');
//             $('.weather').append('无法获取您的位置');
//         };

//         navigator.geolocation.getCurrentPosition(success, error);
        
//     }
    



    
// });