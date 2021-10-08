"use strict";
import Slider from "./slider";

export class MiniSliders extends Slider{
    constructor(page, btns, prevBtns) {
        super(page, btns);
        this.prevBtns = document.querySelectorAll(prevBtns);
    }

    render() {
        
        this.btns.forEach(btn => {
            btn.addEventListener("click", () => {
                this.changeSlides(1);
            });
        });

        this.prevBtns.forEach(btn => {
            btn.addEventListener("click", () => {
                this.changeSlides(-1);
            });
        });

        this.showSlides(this.slideIndex);
    }
}