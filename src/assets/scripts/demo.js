var $window = $(window);
    $('section[data-type="background"]').each(function(){
        var $bgobj = $(this); // assigning the object
        $(window).scroll(function() {
            var yPos = -($window.scrollTop() / $bgobj.data('speed'));
            // Put together our final background position
            var coords = '50% '+ yPos + 'px';
            // Move the background
            $bgobj.css({ backgroundPosition: coords });
        });
    });

    $(window).scroll(function(){
      var scroll = $(window).scrollTop();
      if (scroll > 0) {
        $(".navbar").addClass("navbar-scroll");
      }
      else{
        $(".navbar").removeClass("navbar-scroll");
      }
      if (scroll > 200) {
        $(".navbar").addClass("bg-primary");
      }
      else{
        $(".navbar").removeClass("bg-primary");
      }
    })
  
    $(".toggle-accordion").on("click", function() {
      var accordionId = $(this).attr("accordion-id"),
        numPanelOpen = $(accordionId + ' .collapse.in').length;
  
      $(this).toggleClass("active");
  
      if (numPanelOpen == 0) {
        openAllPanels(accordionId);
      } else {
        closeAllPanels(accordionId);
      }
    })
  
    openAllPanels = function(aId) {
      console.log("setAllPanelOpen");
      $(aId + ' .panel-collapse:not(".in")').collapse('show');
    }
    closeAllPanels = function(aId) {
      console.log("setAllPanelclose");
      $(aId + ' .panel-collapse.in').collapse('hide');
    }
  
    // Add minus icon for collapse element which is open by default
    $(".collapse.show").each(function(){
      $(this).prev(".card-header").find(".fa").addClass("fa-minus").removeClass("fa-plus");
      });
      // Toggle plus minus icon on show hide of collapse element
      $(".collapse").on('show.bs.collapse', function(){
      $(this).prev(".card-header").find(".fa").removeClass("fa-plus").addClass("fa-minus");
      }).on('hide.bs.collapse', function(){
      $(this).prev(".card-header").find(".fa").removeClass("fa-minus").addClass("fa-plus");
      });




