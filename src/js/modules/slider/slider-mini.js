"use strict";
import Slider from "./slider";
export default class MiniSlider extends Slider{
    constructor(container, next, prev, timeMS, activeClass, animate, autoplay) {
        super(container, next, prev, timeMS, activeClass, animate, autoplay);
    }

    decorizeActiveItem() {
        try{
            this.slides.forEach(item => {
                item.classList.remove(this.activeClass);
        
                if (this.animate) {
                    item.querySelector(".card__title").style.opacity = 0.4;
                    item.querySelector(".card__controls-arrow").style.opacity = 0;
                }
            });

            this.slides[0].classList.add(this.activeClass);

            if (this.animate) {
                this.slides[0].querySelector(".card__title").style.opacity = 1;
                this.slides[0].querySelector(".card__controls-arrow").style.opacity = 1;
            }
        } catch(e){} 
    }

    autoplaySlides() {
        try{
            if (this.autoplay) {
                const interval = setInterval(() => {
                    try{
                        if (this.container.classList.contains("feed__slider")) {
                            this.container.insertBefore(this.slides[0], this.slides[this.slides.length - 2]);
                            this.decorizeActiveItem();
                        } else {
                            this.container.appendChild(this.slides[0]);
                            this.decorizeActiveItem();
                        }
                    }catch(e){}
                }, this.timeMS);
            }
        }catch(e){}
    }

    bindTriggers() {
        try {
            if (this.container.classList.contains("feed__slider")) {
            
                this.next.forEach(btn => {
                    btn.addEventListener("click", () => {
                        this.container.insertBefore(this.slides[0], this.slides[this.slides.length - 2]);
                        this.decorizeActiveItem();
                    });
                });
        
                this.prev.forEach(btn => {
                    btn.addEventListener("click", () => {
                        this.container.insertBefore(this.slides[this.slides.length - 3], this.slides[0]);
                        this.decorizeActiveItem();
                    });
                });
    
            } else {
                
                this.next.forEach(btn => {
                    btn.addEventListener("click", () => {
                        this.container.appendChild(this.slides[0]);
                        this.decorizeActiveItem();
                    });
                });
    
            this.prev.forEach(btn => {
                btn.addEventListener("click", () => {
                    this.container.insertBefore(this.slides[this.slides.length - 1], this.slides[0]);
                    this.decorizeActiveItem();
                });
            });
            }
        }catch(e){}
    }

    init() {
        try{
            this.container.style.cssText = `
            display: flex;
            flex-wrap: wrap;
            overflow: hidden;
            align-items: flex-start;
        `;
        } catch(e) {}
        this.decorizeActiveItem();
        this.bindTriggers();
        this.autoplaySlides();
    }
}