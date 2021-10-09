"use strict";

export default class Question {
    constructor({container, cards} = {}) {
        this.container = document.querySelector(container);
        this.cards = this.container.querySelectorAll(cards);
        this.counter = 0;
    }

    showCards(item) {
        
        item.addEventListener("click", () => {
            
            if (this.counter < this.cards.length - 2) {
                this.cards[this.counter].style.display = "flex";
                this.cards[this.counter].classList.add("animated", "fadeIn");
                this.counter++;
            } else {
                this.cards[this.counter].style.display = "flex";
                this.cards[this.counter].classList.add("animated", "fadeIn");
                
                setTimeout(() => {
                    item.classList.add("animated", "fadeOut");
                    item.style.display = "none";
                }, 1000);
            }
        });
    }

    init() {
        this.cards.forEach((item, i) => {
            if (i === (this.cards.length - 1) ) {
                this.cards[i].style.display = "flex";
                this.cards[i].style.cursor = "pointer";
                this.showCards(this.cards[i]);
            } else {
                item.style.display = "none";
            }
        });
    }
}//question