"use strict";

export default class Slider {
    constructor({container = null,
        btns = null,
        next = null,
        prev = null,
        timeMS = null,
        activeClass = "",
        animate,
        autoplay} = {}) {
        this.container = document.querySelector(container);//главный блок, страница, родитель
        this.slides = this.container.children; //все дети на странице Node
        this.btns = document.querySelectorAll(btns);
        this.next = document.querySelector(next);
        this.prev = document.querySelector(prev);
        this.activeClass = activeClass;
        this.animate = animate;
        this.autoplay = autoplay;
        this.timeMS = timeMS;
        this.slideIndex = 1;
    }
}//class