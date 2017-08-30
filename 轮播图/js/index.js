require(["jquery","carousel"],function ($,Carousel) {
    var settings={
        selector:"#container",
        imgArr:["img/1.jpg","img/2.jpg","img/3.jpg","img/4.jpg"],
        speed:500,
        btnStyle:"square",
        arrowPos:"bottom"
    };
    var carousel=new Carousel(settings);
    carousel.init();
});
