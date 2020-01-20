var sliderSrc = [];
var sliderWrapper = document.querySelector('#slider');
var sliders = document.querySelectorAll('.slide');
var buttonLeft = document.querySelector('.button-left');
console.log(sliders);
sliders.forEach((e) => {
    addSrc(e, sliderSrc);
})

function addSrc(el, arr) {
    arr.push(el.firstChild.src);
    el.remove();
    console.log(arr);
}

step = 0;
offset = 0;
function draw() {
    var slide = document.createElement('div');
    var img = document.createElement('img');
    slide.classList.add('slide');
    slide.style.left = offset*500+'px';
    img.src = sliderSrc[step];
    slide.appendChild(img);
    sliderWrapper.appendChild(slide);
    if (step + 1 >= sliderSrc.length){
        step = 0
    } else {
        step++;
    }
    offset=1;
}
draw();
draw();

function slideToLeft() {
    offset2=0;
    var slide = document.querySelectorAll('.slide');
    slide.forEach((el) => {
        el.style.left = offset2*500 - 500 + 'px';
        offset2++;
        // console.log(el.style.left)
    })
    draw();
    slide[0].remove();
    console.log(slide);
}
buttonLeft.addEventListener('click', slideToLeft);