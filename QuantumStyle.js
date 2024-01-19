"use strict";

const nav = document.querySelector('.nav');
const show = document.querySelector('.navbar');

const openmodalFunction = function () {
    show.classList.add('.active');
}

show.addEventListener('click', openmodalFunction);

/*
if (nav) {
    nav.addEventListener('click', function () {
        show.classList.add('active');
    }
}*/