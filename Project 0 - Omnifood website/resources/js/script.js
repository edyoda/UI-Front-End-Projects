$(document).ready(function(){
    
    /* ------------------------------ for sticky navigation ------------------------------ */
    $('.js--section-features').waypoint(function(direction){
        if(direction == 'down'){
            $('nav').addClass('sticky');     
        } else {
            $('nav').removeClass('sticky');
        }
    },{ offset: '80px' });
    
    /* ------------------------------ for scroll buttons ------------------------------ */
    $('.js--scroll-to-plans').click(function(){
        $('html,body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000)
    });
    
    $('.js--scroll-to-features').click(function(){
        $('html,body').animate({scrollTop: $('.js--section-features').offset().top}, 1000)
    });
    
    /* ------------------------- For smooth Scrolling: snippet ------------------------- */
    $('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]').not('[href="#0"]').click(function() {
    // On-page links
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          // Does a scroll target exist?
          if (target.length) {
                $('html, body').animate({scrollTop: target.offset().top}, 1000);
                return false;  
      }
    }
  });
    
    /* -------------------------- Animations on Scroll ------------------------- */
    $('.js--wp-1').waypoint(function(direction){
        $('.js--wp-1').addClass('animated fadeIn')
    },{ offset: '55%'})
    
    $('.js--wp-2').waypoint(function(direction){
        $('.js--wp-2').addClass('animated fadeInUp')
    },{ offset: '55%'})
    
    $('.js--wp-3').waypoint(function(direction){
        $('.js--wp-3').addClass('animated fadeIn')
    },{ offset: '55%'})
    
    $('.js--wp-4a').waypoint(function(direction){
        $('.js--wp-4a').addClass('animated pulse')
    },{ offset: '55%'})
    
    $('.js--wp-4b').waypoint(function(direction){
        $('.js--wp-4b').addClass('animated pulse')
    },{ offset: '55%'})
    
    $('.js--wp-4c').waypoint(function(direction){
        $('.js--wp-4c').addClass('animated pulse')
    },{ offset: '55%'})
    
    /* -------------------- Mobile Navigation ------------------------------------ */
    
    $('.js--nav-icon').click(function(){
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');
        
        nav.slideToggle(200); 
        if(icon.hasClass('ion-ios-menu')){
            icon.addClass('ion-md-close');
            icon.removeClass('ion-ios-menu');
        } else {
            icon.addClass('ion-ios-menu');
            icon.removeClass('ion-md-close');
        }
        
    });
    
    /* --------------------------------------- Google Maps---------------------- */
    var map = new GMaps({
      div: '.map',
      lat: 12.9637515, 
      lng: 77.85,
      zoom: 12
    });
    
    map.addMarker({
      lat: 12.9637515,
      lng: 77.7091111,
      infoWindow: {
      content: '<p>Zekefood HQ</p>'
    }    
    });
    
});
