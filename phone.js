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
        var elmnt = document.getElementById("apple");
        elmnt.scrollIntoView()
    }
    else if(id==2){
        var elmnt = document.getElementById("xiaomi");
        elmnt.scrollIntoView()
    }
    else if(id==3){
        var elmnt = document.getElementById("samsung");
        elmnt.scrollIntoView()
    }
    else if(id==4)
    {
        var elmnt = document.getElementById("vivo");
        elmnt.scrollIntoView()
    }
    else{
        var elmnt = document.getElementById("oppo");
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