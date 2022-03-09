$(document).ready(function () {



  $(".619").addClass("active");

$(".619").click(function (e) { 
  e.preventDefault();
  $(".619").parent().parent().find("a").removeClass("active");
  $(".619").addClass("active");
  $(".agenda_619").parent().find("table").css("display","none");
  $(".agenda_619").css("display","table");
});
$(".620").click(function (e) { 
  e.preventDefault();
  $(".620").parent().parent().find("a").removeClass("active");
  $(".620").addClass("active");
  $(".agenda_620").parent().find("table").css("display","none");
  $(".agenda_620").css("display","table");
});
$(".621").click(function (e) { 
  e.preventDefault();
  $(".621").parent().parent().find("a").removeClass("active");
  $(".621").addClass("active");
  $(".agenda_621").parent().find("table").css("display","none");
  $(".agenda_621").css("display","table");
});
$(".622").click(function (e) { 
  e.preventDefault();
  $(".622").parent().parent().find("a").removeClass("active");
  $(".622").addClass("active");
  $(".agenda_622").parent().find("table").css("display","none");
  $(".agenda_622").css("display","table");
});


/*網路上抄來的收合選單(但不知怎讓其他題收起來)
$(".Q a").click(function (e) { 
  e.preventDefault();
  var X = $(this).parent().siblings(".A").find("p")
  if( X.css("display") == "none"){
    X.slideDown();}
    else{
      X.slideUp();}
});
*/ 


$(".Q a").click(function (e) { 
  e.preventDefault();
  $(this).parent().siblings(".A").find("p").slideToggle();
  $(this).parent().parent().siblings().find("p").slideUp();
});




$(".index_wrap .btn a").hover(function () {
    // over
    $(this).find("img").attr("src","../img/enter_2.png")
  }, function () {
    // out
    $(this).find("img").attr("src","../img/enter.png")
  }
);






$(".burger_btn a").click(function (e) { 
  $(".small_nav_container").addClass("active")
});
$(".close_btn a").click(function (e) { 
  $(".small_nav_container").removeClass("active")
});
$(".index_container").click(function (e) { 
  e.preventDefault();
  $(".small_nav_container").removeClass("active")
});









});