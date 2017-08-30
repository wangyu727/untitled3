define(["jquery"],function ($) {
    function Carousel(settings) {
        this.$container=$('<div class="carousel-container"></div>');
        this.$tabs=$('<ul class="carousel-tabs"></ul>');
        this.$imgs=$('<div class="carousel-imgs"></div>');
        this.$arrows=$('<div class="carousel-arrows"></div>');
        this.$prev=$('<span class="carousel-prev"></span>');
        this.$next=$('<span class="carousel-next"></span>');

        this.defaultSettings={
            selector:document.body,
            imgArr:[],
            speed:1000,
            btnStyle:"square",
            arrowPos:"bottom"
        };
        $.extend(this.defaultSettings,settings)
    }

    Carousel.prototype.init=function () {
        this.$container.append(this.$tabs).append(this.$imgs).append(this.$arrows);
        this.$arrows.append(this.$prev).append(this.$next);

        for(var i=1;window,this.defaultSettings.imgArr.length;i++){
            var $li=$("<li></li>").html(i+1);
            this.$tabs.append($li);
        }
        $(this.defa)

    };
    return Carousel;
});
