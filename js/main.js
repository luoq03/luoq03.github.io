jQuery(document).ready(function($) {

	'use strict';

        $(window).load(function() { // makes sure the whole site is loaded
            $(".seq-preloader").fadeOut(); // will first fade out the loading animation
            $(".sequence").delay(500).fadeOut("slow"); // will fade out the white DIV that covers the website.
        })
        $(window).resize(function() {
            var div = document.getElementById('lisize');
            var heig=(div.offsetHeight+15)+"px";
            $("#mtop").css("margin-top",heig); 
            $("#mtop2").css("margin-top",heig); 
        });
        
        $(function() {
  
        function showSlide(n) {
            // n is relative position from current slide
          
            // unbind event listener to prevent retriggering
            $body.unbind("mousewheel");
          
            // increment slide number by n and keep within boundaries
            currSlide = Math.min(Math.max(0, currSlide + n), $slide.length-1);
            
            var displacment = window.innerHeight*currSlide;
            // translate slides div across to appropriate slide
            $slides.css('transform', 'translateY(-' + displacment + 'px)');
            // delay before rebinding event to prevent retriggering
            setTimeout(bind, 700);
            
            // change active class on link
            $(' a.active').removeClass('active');
            $($('a')[currSlide]).addClass('active');
            if(currSlide==2){   
                $(".foot").css("color","#232323");     
                $("#bubb").css("top","calc(100% - 150px)");   
                $("#bubb2").css("top","calc(100% - 150px)");     
                $("#bubb3").css("top","calc(100% - 150px)");        
                fly(18000,"#bubb");
                fly(15000,"#bubb2");
                fly(20000,"#bubb3");
                var div = document.getElementById('lisize');
            var heig=(div.offsetHeight+15)+"px";
            $("#mtop").css("margin-top",heig); 
            $("#mtop2").css("margin-top",heig); 
            }
            else{
                $(".foot").css("color","white");  
                $("#bubb").stop();
                $("#bubb2").stop();
                $("#bubb3").stop();
            }
        }
            function fly(m,n){
                $(n).animate({"top":"0"},m);
            }
        function bind() {
             $body.bind('false', mouseEvent);
          }
      
        function mouseEvent(e, delta) {
            // On down scroll, show next slide otherwise show prev slide
            showSlide(delta >= 0 ? -1 : 1);
            e.preventDefault();
        }
        
        $('h1, #connect #index,area').click(function(e) {
            console.log(currSlide)
            // When link clicked, find slide it points to
            var newslide = parseInt($(this).attr('href')[1]);
            // find how far it is from current slide
            var diff = newslide - currSlide - 1;
            showSlide(diff); // show that slide
            e.preventDefault();
        });
        $('#pre').click(function(e) {
            showSlide(1); // show that slide
            e.preventDefault();
        });
        $(window).resize(function(){
          // Keep current slide to left of window on resize
          var displacment = window.innerHeight*currSlide;
          $slides.css('transform', 'translateY(-'+displacment+'px)');
        });
        
        // cache
        var $body = $('body');
        var currSlide = 0;
        var $slides = $('.slides');
        var $slide = $('.slide');
      
        // give active class to first link
        $($('a')[0]).addClass('active');
        
        // add event listener for mousescroll
        $body.bind('false', mouseEvent);
    })        


        $('#form-submit .date').datepicker({
        });


        $(window).on("scroll", function() {
            if($(window).scrollTop() > 100) {
                $(".header").addClass("active");
            } else {
                //remove the background property so it comes transparent again (defined in your css)
               $(".header").removeClass("active");
            }
        });


});
