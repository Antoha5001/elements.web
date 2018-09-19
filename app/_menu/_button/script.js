const menuBtn = document.querySelector('.menu-btn'),
    menuTopWrapper = document.querySelector('.menu-top__wrapper'),
    menuBrandSection = document.querySelector('.menu-top__brand-section'),
    menuNavSection = document.querySelector('.menu-top__nav-section'),
    menuItem = document.querySelectorAll('.menu-top__nav-item');

let showMenu = false;

menuBtn.addEventListener('click',toggleMenu);

function toggleMenu() {
    if(!showMenu){
        menuBtn.classList.add('close');
        menuTopWrapper.classList.add('show');
        menuBrandSection.classList.add('show');
        menuNavSection.classList.add('show');

        menuItem.forEach( item => {
            item.classList.add('show');
        });

        showMenu = true;
    }else{
        menuBtn.classList.remove('close');
        menuTopWrapper.classList.remove('show');
        menuBrandSection.classList.remove('show');
        menuNavSection.classList.remove('show');

        menuItem.forEach( item => {
            item.classList.remove('show');
        });

        showMenu = false;
    }
}














