<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <link rel="stylesheet" href="/libs/slick/slick.css">
    <link rel="stylesheet" href="style.css">
    <!--http://kenwheeler.github.io/slick/-->
    <style>

    </style>
</head>
<body>
<div class="container_my top-slider_container">
    <div class="top-slider">

        <div class="top-slider_element">
            <div class="top-slider_image top-slider_image__print">
                <div class="wrap_my top-slider_wrap">
                    <h2 class="top-slider__title">ОФСЕТНАЯ ПЕЧАТЬ ФОРМАТА А2 <br>
                        НА НЕМЕЦКОМ БОРУДОВАНИИ </h2>
                </div>
                <div class="top-slider_controls"></div>
            </div>
        </div>
        <div class="top-slider_element">
            <div class="top-slider_image__print">
                <div class="wrap_my  top-slider_wrap">
                    <h2 class="top-slider__title">ОФСЕТНАЯ ПЕЧАТЬ ФОРМАТА А222 <br>
                        НА НЕМЕЦКОМ БОРУДОВАНИИ </h2>
                </div>
                <div class="top-slider_controls"></div>
            </div>
        </div>

<!--        <div class="top-slider_dots">123</div>-->

    </div>
</div>


<script src="/libs/jquery-3.3.1.min.js"></script>
<script src="/libs/slick/slick.min.js"></script>
<script>
    "use strict";
    (function () {
        window.addEventListener('DOMContentLoaded', init);

        function init() {
            const sliderMy = $('.top-slider');

            if(sliderMy.length > 0){
                // console.log(bigImg);
            }
            sliderMy.slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                dots: true,
                fade: true,
                autoplay: true,
                prevArrow: '<button type="button" class="slick-prev"></button>',
                nextArrow: '<button type="button" class="slick-next"></button>',
                // appendDots: $(".top-slider_controls")
            });
        }
    })();
</script>
</body>
</html>