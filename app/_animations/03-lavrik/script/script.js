"use strict";
(function () {

    window.addEventListener('DOMContentLoaded', init);


    function init() {

        const btnAdd = document.querySelector('.add-item'),
            ul = document.querySelector('.animTarget');

        btnAdd.addEventListener('click', function () {
            var li = document.createElement('li');
            li.innerHTML = Math.random();

            ul.appendChild(li);

            function handler (){
                li.classList.remove('fa-enter-active');
                li.classList.remove('fa-enter-to');

                li.removeEventListener('animationend', handler);
            }

            // li.style.display = 'n';
            li.classList.add('fa-enter');
            raf(function () {
                li.classList.add('fa-enter-active');
                li.classList.add('fa-enter-to');
                li.classList.remove('fa-enter');
            });

            li.addEventListener('animationend', handler);
        });

        ul.addEventListener('dblclick',function (e) {
            console.log(e.target.parentNode !== ul);

            if(e.target.parentNode !== ul){
                return false;
            }

            var  li = e.target;


            function handler (){
                li.classList.remove('fa-leave-active');
                li.classList.remove('fa-leave-to');
                // divAlert.removeEventListener('transitionend', handler);
                li.removeEventListener('animationend', handler);
                ul.removeChild(li);
            }

            li.classList.add('fa-leave');

            raf(function () {
                li.classList.add('fa-leave-active');
                li.classList.add('fa-leave-to');
                li.classList.remove('fa-leave');
            });

            // divAlert.addEventListener('transitionend', handler);
            li.addEventListener('animationend', handler);

        });


        function raf(fn) {
            window.requestAnimationFrame(function () {
                window.requestAnimationFrame(function () {
                    fn();
                });
            });
        }

     /*   btnHide.addEventListener('click', function () {

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
*/



    }

})();