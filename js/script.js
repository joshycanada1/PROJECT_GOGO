$(".contactButton").on("click", function(){
  $(".contactButton").toggleClass("active");
  if ($(".contactButton").hasClass("active")) {
    // $(".contactBar").css("height", "100vh");

    $('.contactBar').css({
      height: '100vh',
      zindex: '1',
    });

    $("#contactForm").css("opacity","1");
    $(".searchIcon").removeClass("search").addClass("close");
  }
  else {
    $(".contactBar").css('height', "0vh", 'z-index',"-1");
    $("#contactForm").css("opacity","0");
    $(".searchIcon").removeClass("fa-times").addClass("fa-search");
  }
});

$(".toggle").click(function(){
  $(this).find(".toggleContainer").toggleClass("active");
  $(this).siblings(".toggle").find(".toggleContainer").removeClass("active");
});

$(document).ready(function () {
    $(".content").hide();
    $(".show_hide").on("click", function () {
        var txt = $(".content").is(':visible') ? 'View More' : 'View Less';
        $(".show_hide").text(txt);
        $(this).next('.content').slideToggle(200);
    });

    $(".show_hide").click(function () {
      $(this).toggleClass("down");
    })
});