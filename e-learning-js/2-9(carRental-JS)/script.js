$(document).ready(function(){
    // $(".img_container img:first-child").addClass("active");

    $("#burger_menu").click(function(){
        $("#scrolling_menu").slideToggle();
        $("#burger_menu").toggleClass("bg-color-white");
        $("#burger_menu div").toggleClass("bg-color-black");
    });


    // ci-dessous, pr regarder si le scroll effectué vers le bas 
    // + la taille de la partie visible de notre fenêtre
    // égalent bien à la taille de la page
    $(window).scroll(function(){
        if($(window).scrollTop() + $(window).height() === $(document).height()){
            console.log("Bottom!!");
            // ça va durer 2 secondes
            $(".toBeFaded").fadeIn(2000);
        }
    });

    var nbrImgs;
    var counter;
    var leftValue;


    function init(elem){
        // Counter, faut savoir la position de l'img active
        counter = elem.parent().find(".img_container img.active").index();
        // PositionLeft de img_container
        leftValue = counter * -100;
        // Number of pictures
        nbrImgs = elem.parent().find(".img_container img").length;

        // if(counter < nbrImgs - 1){
        //     $(this).parent().find(".img_container img").removeClass("active");
        //     $(this).parent().find(".img_container img").eq(counter - 1).addClass("active");
        //     leftValue += 100;
        //     $(this).parent().find(".img_container img").animate({left : leftValue + "%"}, 1000);
        //     // counter++;
        // }
    }

    function handleCarousel(scenario, elem){
        var eqPosition;
        if(scenario == 1){
            eqPosition = counter - 1;
            leftValue += 100;
        } else{
            eqPosition = counter + 1;
            leftValue -= 100;
        }

        elem.parent().find(".img_container img").removeClass("active");
        elem.parent().find(".img_container img").eq(eqPosition).addClass("active");
        elem.parent().find(".img_container").animate({left : leftValue + "%"}, 1000);
    }

    $(".arrow_left").click(function(){
        init($(this));
        if(counter > 0){
            handleCarousel(1, $(this));
        }
    });

    $(".arrow_right").click(function(){
        init($(this));
        if(counter < nbrImgs - 1){
            handleCarousel(2, $(this));
        }
    });
});