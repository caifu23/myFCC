$(function() {

  // search button 点击时，
  $("#search").on("click", function() {
    // 切换为 查找中的search
    $("#search span:first-child").removeClass("icon-search").addClass("icon-youtube_searched_for");
    // result里的html 清空
    $("#result").html(" ");
    // wiki查询
    searchWiki();
  });

  // input 按回车时
  $("#query").keydown(function(event) {
    if (event.keyCode == 13) {
      // 切换为 查找中的search
      $("#search span:first-child").removeClass("icon-search").addClass("icon-youtube_searched_for");
      $("#result").html(" ");
      searchWiki();
      // $("#submit").trigger("click");
    }
  });


  function searchWiki(q) {

    //   获取input#query的值
    var q = $("#query").val();
    var queryUrl =
      "https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=" +
      q +
      "&callback=?";
    $.ajax({
      type: "POST",
      url: queryUrl,
      dataType: "json",
      success: function(result) {
        $("#search span:first-child").delay(6000).removeClass("icon-youtube_searched_for").addClass("icon-search");
        var data = result.query.pages;
        // console.log(JSON.stringify(data));
        disResult(data);
      },
      error: function(err) {
        console.log(err);
        alert("Oops something went wrong! Please try again.");
      }
    });
  }

  // 返回的数据的结果 处理 显示
  function disResult(data) {
    var pageurl = "https://en.wikipedia.org/?curid=";
    for (var i in data) {
      $("#result").append(
        "<div class='resultdiv fadeInUp animated'><a target='_blank' href='" + pageurl + data[i].pageid + "'><h3>" + data[i].title + "</h3><p>" + data[i].extract +
          "</p></a></div>"
      );
    }
  }
});
