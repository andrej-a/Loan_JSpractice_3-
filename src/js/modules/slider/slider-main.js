"use strict";
import Slider from "./slider";

export default class MainSlider extends Slider{
    constructor(btns) {
        super(btns);
    }

    showSlides(n) {//метод, как функция но метод
        if (n > this.slides.length) {
            this.slideIndex = 1;
        }

        if (n < 1) {
            this.slideIndex = this.slides.length;
        }

        try {
            this.card.style.display = "none";

            if (this.slides[this.slideIndex - 1].classList.contains("modules")) {
                setTimeout(() => {
                    this.card.classList.add("animated", "slideInUp");
                    this.card.style.display = "block";
                }, this.timeMS);
            }
        } catch (e) {}

        this.slides.forEach(slide => {
            slide.style.display = "none";
        });
        this.slides[this.slideIndex - 1].style.display = "block"; 
        this.slides[this.slideIndex - 1].classList.add("animated", "fadeIn");

        
    }

    changeSlides(n) {
        this.showSlides(this.slideIndex += n);
    }

    render() {
        try {
            this.card = document.querySelector(".hanson");
        }catch(e){}
        
        this.btns.forEach(btn => {
            btn.addEventListener("click", () => {
                this.changeSlides(1);
            });

            btn.parentNode.previousElementSibling.addEventListener("click", (event) => {
                event.preventDefault();
                this.slideIndex = 1;
                this.showSlides(this.slideIndex);
            });
        });

        this.showSlides(this.slideIndex);
    }
}