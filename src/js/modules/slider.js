export default class Slider {
    constructor(page, btns) {
        this.page = document.querySelector(page);//главный блок, страница, родитель
        this.slides = this.page.children; //все дети на странице Node
        this.btns = document.querySelectorAll(btns);
        this.slideIndex = 1;
    }

    showSlides(n) {//метод, как функция но метод
        if (n > this.slides.length) {
            this.slideIndex = 1;
        }

        if (n < 1) {
            this.slideIndex = this.slides.length;
        }

        this.slides.forEach(slide => {
            slide.style.display = "none";
        });
        this.slides[this.slideIndex - 1].style.display = "block"; 
        this.slides[this.slideIndex - 1].classList.add("animated", "fadeIn");
    }

    plusSlides(n) {
        this.showSlides(this.slideIndex += n);
    }

    render() {
        this.btns.forEach(btn => {
            btn.addEventListener("click", () => {
                this.plusSlides(1);
            });

            btn.parentNode.previousElementSibling.addEventListener("click", (event) => {
                event.preventDefault();
                this.slideIndex = 1;
                this.showSlides(this.slideIndex);
            });
        });

        this.showSlides(this.slideIndex);
    }
}//class