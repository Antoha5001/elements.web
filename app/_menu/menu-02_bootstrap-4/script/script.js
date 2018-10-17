(function () {
    const MENU_TOP_BUTTON = document.querySelector('.menu-top__button'),
        MENU_TOP = document.querySelector('.menu-top'),
        MENU_TOP_TITLE = document.querySelectorAll('.menu-top_title'),
        MENU_TOP_TITLE_LINK = document.querySelectorAll('.menu-top_title-link'),
        body = document.body;

    let show = false, showTitle = false;

    MENU_TOP_BUTTON.addEventListener('click', menuShow);

    function menuShow() {
        if(!show){

            show = true;
            MENU_TOP.style.display = 'block';

            raf(function () {
                MENU_TOP_BUTTON.classList.add('show');
                MENU_TOP.classList.add('show');
                body.classList.add('no-overflow');
            });
        } else {

            raf(function () {

            });
            function handler(){
                // MENU_TOP.style.display = 'none';
                body.classList.remove('no-overflow');
                MENU_TOP.removeEventListener('transitionend', handler);
            }
            MENU_TOP_BUTTON.classList.remove('show');
            MENU_TOP.classList.remove('show');
            MENU_TOP.addEventListener('transitionend', handler);
            show = false;
        }
    }

    MENU_TOP_TITLE_LINK.forEach( element => {
        element.addEventListener('click', function (e) {

            var ul = e.target.nextElementSibling,
            ulHeight = e.target.nextElementSibling.offsetHeight,
                linkHeight = e.target.offsetHeight,
            liHeight = ulHeight + linkHeight,
            li = this.parentNode;


            if(e.target.parentElement.children.length !== 2){
                return false;
            }
            console.log(liHeight);
            e.preventDefault();
            // e.stopPropagation();
            console.log(e.target.parentElement.children.length);

            MENU_TOP_TITLE.forEach(el => {

                // console.log(el);
                // console.log(el);
                if(el.classList.contains('show')){
                    if(el === this.parentNode) {

                        return;

                    }
                    // ul.style.display = "";
                    el.style.height = linkHeight+'px';
                    raf(function () {
                        el.classList.remove('show');
                    });

                }
                // console.log(el);
            });
            if (li.style.height === liHeight+'px'){
                li.style.height = linkHeight+'px';
            } else{
                ul.style.display = "block";
                li.style.height = linkHeight+'px';
                li.classList.add('show');
                raf(function () {

                    li.style.height = (ul.offsetHeight+linkHeight)+'px';
                    console.log(ul.offsetHeight);
                });

            }
            // li.classList.toggle('show');

            // console.log(this);
        });
    });

    function raf(fn) {
        window.requestAnimationFrame(function () {
            window.requestAnimationFrame(function () {
                fn();
            });
        });
    }

})();