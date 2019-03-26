$(document).ready(function(){
    $('.carousel').carousel();
    setInterval(function(){
      $('.carousel').carousel('next');
    }, 4000);
  });

  $(document).ready(function(){
    $('.tap-target').tapTarget('open');
  });