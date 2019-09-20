
$(document).scroll(function () {
            var sc = $(document).scrollTop();

            if(sc >= 585 && sc <=1297){
              $(".vieperso").addClass("active");
              $(".viepro").removeClass("active");
              $(".galerie").removeClass("active");
              $(".contact").removeClass("active");
            }
    
             if(sc >= 1298 && sc <=1700){
              $(".vieperso").removeClass("active");
              $(".viepro").addClass("active");
              $(".galerie").removeClass("active");
              $(".contact").removeClass("active");
            }
    
            if(sc >= 1701 && sc <=1942){
              $(".vieperso").removeClass("active");
              $(".viepro").removeClass("active");
              $(".galerie").addClass("active");
              $(".contact").removeClass("active");
            }
    
         if(sc > 1943){
              $(".vieperso").removeClass("active");
              $(".viepro").removeClass("active");
              $(".galerie").removeClass("active");
              $(".contact").addClass("active");
            }
    
        if(sc < 584){
              $(".vieperso").removeClass("active");
              $(".viepro").removeClass("active");
              $(".galerie").removeClass("active");
              $(".contact").removeClass("active");
            }})
