$(document).ready(function(){
    $('.carousel').carousel();
    setInterval(function(){
      $('.carousel').carousel('next');
    }, 4000);
    $('.modal').modal();
  });

  $(document).ready(function(){
    $('.tap-target').tapTarget('open');
  });

  $("#modal2Open").on("click", function(){
    $("#modal1").modal("close")
    $("#modal2").modal("open")
  })

  $("#modal1Open").on("click", function(){
    $("#modal2").modal("close")
    $("#modal1").modal("open")
  })