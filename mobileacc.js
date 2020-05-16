/** First slider */

$('.slider-one')
    .not('.slick-initialized')
    .slick({
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        prevArrow: ".site-slider .slider-btn .prev",
        nextArrow: ".site-slider .slider-btn .next",

    });


/* e-commerse banner*/
$(document).ready(function () {

    $('#myCarousel').carousel({
        interval: 3000,
    })

});


/** gotopart */

function gotopart(id)
{
    if(id==1){
        var elmnt = document.getElementById("charger");
        elmnt.scrollIntoView()
    }
    else if(id==2){
        var elmnt = document.getElementById("headset");
        elmnt.scrollIntoView()
    }
    else if(id==3){
        var elmnt = document.getElementById("power");
        elmnt.scrollIntoView()
    }
    else if(id==4)
    {
        var elmnt = document.getElementById("covers");
        elmnt.scrollIntoView()
    }
    else{
        var elmnt = document.getElementById("screen");
        elmnt.scrollIntoView()
    }
}


/** */
function gotoTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0;
}

function gotoDown() {
    
    var elmnt = document.getElementById("bott");
    elmnt.scrollIntoView()
}