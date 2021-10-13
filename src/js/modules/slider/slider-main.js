"use strict";
import Slider from "./slider";

export default class MainSlider extends Slider{
    constructor(btns, next, prev) {
        super(btns, next, prev);
    }

    showSlides(n) {//метод, как функция но метод
        try {
            if (n > this.slides.length) {
                this.slideIndex = 1;
            }
        } catch(e) {}

        try {
            if (n < 1) {
                this.slideIndex = this.slides.length;
            }
        }catch(e){}

        try {
            this.card.style.display = "none";

            if (this.slides[this.slideIndex - 1].classList.contains("modules")) {
                setTimeout(() => {
                    this.card.classList.add("animated", "slideInUp");
                    this.card.style.display = "block";
                }, this.timeMS);
            }
        } catch (e) {}

        try{
            this.slides.forEach(slide => {
                slide.style.display = "none";
            });
            this.slides[this.slideIndex - 1].style.display = "block"; 
            this.slides[this.slideIndex - 1].classList.add("animated", "fadeIn");
        }catch(e) {}

        
    }

    changeSlides(n) {
        this.showSlides(this.slideIndex += n);
    }

    bindTriggers() {
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

            this.prev.forEach(btn => {
                btn.addEventListener("click", (e) => {
                    e.preventDefault();
                    this.changeSlides(-1);
                });
            });

            this.next.forEach(btn => {
                btn.addEventListener("click", (e) => {
                    e.preventDefault();
                    this.changeSlides(1);
                });
            });
    }
    
    render() {
        try {
            this.card = document.querySelector(".hanson");
        }catch(e){}
        this.bindTriggers();
        this.showSlides(this.slideIndex);
    }
}