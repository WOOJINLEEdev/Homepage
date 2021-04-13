
$("document").ready(function(){
  $(".more_btn").on("click", function() {
    // $(".more_text").text("접기");
    // $(".more_icon").attr("src","img/up-arrow-icon.png")
    // $(".list_group").slideDown(2000);
    // if ($(".list_group").hasClass("hidden") === true) {
    //   $(".more_text").text("접기");
    //   $(".more_icon").attr("src","img/up-arrow-icon.png")
    //   $(".list_group").slideDown(2000);
    // } else {
    //   $(".more_text").text("더보기");
    //   $(".more_icon").attr("src","img/down-arrow.png")
    //   $(".list_group").slideUp(2000);
    // }

    if ($('.more_text').text() === "더보기") {
      $(".more_text").text("접기");
      $(".more_icon").attr("src","img/up-arrow-icon.png");
      $(".list_group").slideDown(2000);
    } else {
      $(".more_text").text("더보기");
      $(".more_icon").attr("src","img/down-arrow.png");
      $(".list_group").slideUp(2000);
    }



  });
});

