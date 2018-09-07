$(function() {
    //获取格言
    getQuote();
    //改变背景色  字体颜色
    changeColor();


    //   click btn
  $("#newQuote").on("click", function() {  
    
    //获取格言
    getQuote();
    //改变背景色  字体颜色
    changeColor();

  });


    // 改变颜色
    function changeColor() {
        //获取随机颜色值
        var quoteColor = randomColor();
        // 背景色及字体颜色设置
        $(".quoteBg").css("background-color", quoteColor);
        $("#quoteWords").css("color", quoteColor);
        $("#quoteAuthor").css("color", quoteColor);
        $("#leftQuotation").css("color", quoteColor);
    }

    //   获取随机颜色
    function randomColor() {
        //自定义颜色
        var colorArr = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];
        var randColor;
        randColor = Math.floor(Math.random() * (colorArr.length));
        //   randomNum = Math.floor(Math.random() * (max - min + 1)) + min;


        //返回最终获取到的颜色
        return colorArr[randColor];
    }

    // 获取格言
    function getQuote() {
        var author;
        $.getJSON("https://zhaiyan.acman.cn/api/rand?encode=json", function (json) {
            $("#quoteWords").text(json.msg.zhaiyan);
            author = json.msg.role_cn ? json.msg.role_cn : " ";
            $("#quoteAuthor").text("— " + author + " 《" + json.msg.bangumi_cn + "》");
            // alert(JSON.stringify(json));
            // alert(JSON.stringify(json.msg.zhaiyan));
    }); 



            // jQuery.getJSON('https://v1.hitokoto.cn/?encode=json', function (json) {
            //     // $('#quoteWords').text(JSON.stringify(json));
            //     $('#quoteWords').text(json.hitokoto);

            //     $('#quoteAuthor').text(json.creator);
            // });
    }





});
