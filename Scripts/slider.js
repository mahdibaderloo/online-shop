$('.owl-carousel').owlCarousel({
    loop:true,
    items:4,
    margin:30,
    autoplay:true,
    autoplayTimeout:1500,
    autoplayHoverPause:true,
    // nav:true,
    responsive : {
        250 : {
            items : 3
        },
        450 : {
            items : 3
        },
        650 : {
            items : 4
        }
    }
})