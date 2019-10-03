    $(document).scroll(function () {
        var sc = $(document).scrollTop();

        if (sc >= 798 && sc <= 1212) {
            $(".vieperso").addClass("active");
            $(".viepro").removeClass("active");
            $(".galerie").removeClass("active");
            $(".acceuil").removeClass("active");
        }

        if (sc >= 1213 && sc <= 1629) {
            $(".vieperso").removeClass("active");
            $(".viepro").addClass("active");
            $(".galerie").removeClass("active");
            $(".acceuil").removeClass("active");
        }

        if (sc >= 1630 && sc <= 1942) {
            $(".vieperso").removeClass("active");
            $(".viepro").removeClass("active");
            $(".galerie").addClass("active");
            $(".acceuil").removeClass("active");
        }



        if (sc < 584) {
            $(".vieperso").removeClass("active");
            $(".viepro").removeClass("active");
            $(".galerie").removeClass("active");
            $(".acceuil").addClass("active");
        }
    })

    $("#hamburger").click(function () {
        $('nav ul').fadeToggle();
    })
