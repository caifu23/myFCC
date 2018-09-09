$(function() {
    // input 点击
    $('.box input').eq(0).on('click', function() {
        $('.box input').eq(0).css('width','300px');
        $('.box button').eq(0).delay(600).show();
    });
    // button 点击
    $('.box button').eq(0).on('click', function() {
        $('.box input').eq(0).css('width','150px');
        $('.box button').eq(0).hide();
    });

    // input 按回车时
    $('.box input').eq(0).keydown(function(event) {
        if(event.keyCode ==13){
            var res = $('.box input').eq(0).val();
            searchWiki(res);
            // $("#submit").trigger("click");
            
          }
      });
      
      
      function searchWiki(q) {
          $.ajax({
              type: "GET",
              url: "http://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch="+q+"&callback=?",
              dataType: "json",
              success: function(result){
                var data = result.query.pages;
                // alert(JSON.stringify(data));
                render(data);

              },
              error: function(err){
                console.log(err);
                alert('Oops something went wrong! Please try again.');
              }
          });
      }

      function render(data){
        var pageurl="http://en.wikipedia.org/?curid=";
        for(var i in data){
          $('#res').append("<div id='resultdiv'><a target='_blank' href='"+pageurl+data[i].pageid+"'><h3>"+data[i].title+"</h3><p>"+data[i].extract+"</p></a></div>");
        }
      }
});