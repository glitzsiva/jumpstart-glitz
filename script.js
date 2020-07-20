
$(document).ready(function(){
  // toggle header
  $('.dropdown-menu .dropdown-toggle').on("click", function(e){
    e.stopPropagation();
    if($(this).parent().hasClass("show")){

      $(".dropdown-menu .dropdown-menu, .dropdown-menu .dropdown").removeClass("show");
    }
    else{
      $(".dropdown-menu .dropdown-menu, .dropdown-menu .dropdown").removeClass("show");
      $(this).next().addClass("show");
    $(this).parent().addClass("show");
    }
  });
  // outside click hide header menu

  $(".nav-link").on("click",function(){
    $(".dropdown-menu .dropdown-menu, .dropdown-menu .dropdown").removeClass("show");   
  });

  $(document.body).on("click" ,function(){
    if($(".dropdown-menu .dropdown-menu").hasClass("show")){
    $(".dropdown-menu .dropdown-menu, .dropdown-menu .dropdown").removeClass("show");
    }
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 20) {
      $('#back-to-top').fadeIn();
    } else {
      $('#back-to-top').fadeOut();
    }
  });
  // scroll body to 0px on click
  $('#back-to-top').click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 400);
    return false;
  });
  AOS.init({
    duration:400,
  });
  
});

AOS.init();
























/* $(".dropdown-menu .dropdown,.dropdown-menu .dropdown-menu").removeClass("show")
    e.stopPropagation();
    $(this).parent(".dropdown").addClass("show");
    $(this).next(".dropdown-menu").addClass("show");
      $(this).click(function(){
      $(this).siblings(".dropdown-menu").css("display","block");
    })
   

    if ($(".dropdown-menu .dropdown-menu").css("display")=="none"){
      $(this).siblings(".dropdown-menu ").fadeIn();
    }
    else{
      $(".dropdown-menu .dropdown-menu").css("display","none");
    }
    $(".dropdown-menu .dropdown-menu").css("display","none");
    if($(this).siblings(".dropdown-menu ").css("display")==("block")){
      alert("hii")
      $(this).siblings(".dropdown-menu ").fadeOut();
    } 
    else{
      alert("ram")
      $(this).siblings(".dropdown-menu ").fadeIN();
    }



  */