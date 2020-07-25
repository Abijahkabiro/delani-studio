$(document).ready(function() {

    $("#design").click(function(){
      $("#design-showing").toggle();
      $(".hideDesignImage").toggle();
    })
    
    $("#development").click(function(){
        $("#development-showing").toggle();
        $(".hide-development-image").toggle();
      })
})