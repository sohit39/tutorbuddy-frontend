particlesJS.load('particles-js', './particlesjs-config.json', function() {
    console.log('callback - particles.js config loaded');
  });

  $(document).ready(function() {
    $(".menu").css("background", "transparent");
    $("#navBar > li > a").css("color", "#29E7CD");
    $(window).scroll(function() {
      var scroll = $(window).scrollTop();
      if (scroll > 40) {
        $(".menu").css("background", "#29E7CD");
        $("#navBar > li > a").css("color", "white");
      } else {
        $(".menu").css("background", "transparent");
        $("#navBar > li > a").css("color", "#29E7CD");
      }
    });
  });

  jQuery(document).ready(function($){ //wait for the document to load
    $(window).hover(function() {
      $('#root').each(function(){ //loop through each element with the .dynamic-height class      
          $(this).css({
            'margin-bottom': -($('#root').outerHeight()+50) + 'px' //adjust the css rule for margin-top to equal the element height - 10px and add the measurement unit "px" for valid CSS
        });
    });
    });
});
