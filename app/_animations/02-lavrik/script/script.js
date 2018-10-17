"use strict";
(function () {

    window.addEventListener('DOMContentLoaded', init);


    function init() {

        const btnShow = document.querySelector('.show-alert'),
            btnHide = document.querySelector('.hide-alert'),
            divAlert = document.querySelector('.animTarget');

        btnHide.addEventListener('click', function () {

            function handler (){
                divAlert.style.display = 'none';
                divAlert.classList.remove('fa-leave-active');
                divAlert.classList.remove('fa-leave-to');
                // divAlert.removeEventListener('transitionend', handler);
                divAlert.removeEventListener('animationend', handler);
            }

            divAlert.classList.add('fa-leave-active');

            raf(function () {

                divAlert.classList.add('fa-leave-active');
                divAlert.classList.add('fa-leave-to');
                divAlert.classList.remove('fa-leave');
            });

            // divAlert.addEventListener('transitionend', handler);
            divAlert.addEventListener('animationend', handler);
        });

        btnShow.addEventListener('click', function () {

            function handler (){
                divAlert.classList.remove('fa-enter-active');
                divAlert.classList.remove('fa-enter-to');
                // divAlert.removeEventListener('transitionend', handler);
                divAlert.removeEventListener('animationend', handler);
            }

            divAlert.style.display = 'block';
            divAlert.classList.add('fa-enter');
            raf(function () {
                divAlert.classList.add('fa-enter-active');
                divAlert.classList.add('fa-enter-to');
                divAlert.classList.remove('fa-enter');
            });
            // divAlert.classList.remove('fa-enter');
            // divAlert.addEventListener('transitionend', handler);
            divAlert.addEventListener('animationend', handler);
        });

        function raf(fn) {
            window.requestAnimationFrame(function () {
                window.requestAnimationFrame(function () {
                    fn();
                });
            });
        }


    }

})();