"use strict";

export default class Accordeon {
    constructor(triggers, showingText) {
        this.triggers = document.querySelectorAll(triggers);
        this.showingText = document.querySelectorAll(showingText);
    }

    showDesciption() {
        this.triggers.forEach((btn, i, arr) => {
            btn.addEventListener("click", () => {
                if (this.showingText[i].style.display === "none") {
                    this.showingText[i].classList.remove("fadeOut");

                        this.showingText[i].classList.add("animated", "fadeIn");
                        this.showingText[i].style.display = "block";
                } else {
                    this.showingText[i].classList.remove("fadeIn");

                    this.showingText[i].classList.add("animated", "fadeOut");
                    this.showingText[i].style.display = "none";
                }
            });
        });
    }


    init() {
        this.showingText.forEach(item => {
            item.style.display = "none";
        });

        this.showDesciption();
    }
}//accordeon