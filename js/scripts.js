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

      $('.button').click(function () {
        var Name = $('#name').val();
        var Email = $('#email').val();
        var Message = $('#message');
        if (Name == '' || Email == '' || Message == '') {
            alert('Please make sure you have filled in the form correctly!');
        } else {
            alert(' Hi ' + Name + ' We have received your message. Thank you for reaching out to us.');
        }
  });
    
      
});