"use strict";

const sliderMain = document.querySelector('.slider-main');
const sliderItems = document.querySelectorAll('.slider-item');
const btnLeft = document.querySelector('.btn-left');
const btnRight = document.querySelector('.btn-right');
const btnDots = document.querySelectorAll('.dot');

const sliderWidth = sliderItems[0].offsetWidth;
const sliderlength = sliderItems.length;

let pos = 0;
let index = 0;
btnDots[index].style.backgroundColor = 'rgb(231 0 255)';

var slideAuto = setInterval(() => setInter(), 3000);

function setInter() {
    if(index === sliderlength - 1){
        btnDots[index].style.backgroundColor = '#222';
        index = 0;
        btnDots[index].style.backgroundColor = 'rgb(231 0 255)';
        pos = 0;
        sliderMain.style= `transform: translateX(${pos}px)`;
    }else {
        handSlider(1);
    }
}

btnLeft.onclick = () => {
    clearInterval(slideAuto);
    handSlider(-1);
    slideAuto = setInterval(() => setInter(), 3000)
}

btnRight.onclick = () => {
    clearInterval(slideAuto);
    handSlider(1);
    slideAuto = setInterval(() => setInter(), 3000);
}

btnDots.forEach((btnDot, i) => {
    btnDot.onclick = () => {
        clearInterval(slideAuto);
        btnDots[index].style.backgroundColor = '#222';
        index = i;
        btnDots[index].style.backgroundColor = 'rgb(231 0 255)';
        pos = -1000*i;
        sliderMain.style= `transform: translateX(${pos}px)`;
        slideAuto = setInterval(() => setInter(), 3000)
    }
})


function handSlider(dec) {
    if(dec === -1){
        if(index > 0){
            pos = pos + 1000;
            sliderMain.style= `transform: translateX(${pos}px)`;
            btnDots[index].style.backgroundColor = '#222';
            index--;
            btnDots[index].style.backgroundColor = 'rgb(231 0 255)';
        }
    } else if(dec === 1){
        if(index < sliderlength - 1){
            pos = pos - 1000;
            sliderMain.style= `transform: translateX(${pos}px)`;
            btnDots[index].style.backgroundColor = '#222';
            index++;
            btnDots[index].style.backgroundColor = 'rgb(231 0 255)';
        }
    }
}

