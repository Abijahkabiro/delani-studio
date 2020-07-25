$(document).ready(function() {

    $("#design").click(function(){
      $("#design-showing").toggle();
      $(".hideDesignImage").toggle();
    });
    
    $("#development").click(function(){
        $("#development-showing").toggle();
        $(".hideDevelopmentImage").toggle();
    });

    $("#productManagement").click(function(){
        $("#productManagement-showing").toggle();
        $(".hideProductManagement").toggle();
    });

    $(".Hover").hover(function(){
        $(this).animate({opacity:'1'});
      },
      function(){
        $(this).animate({opacity:'0'});
      });
    
      
});