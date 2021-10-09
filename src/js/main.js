
import ModalVideoPlayer from "./modules/modalVideoPlay";
import MainSlider from "./modules/slider/slider-main";
import MiniSlider from "./modules/slider/slider-mini";
import Question from "./modules/question-cards";

window.addEventListener("DOMContentLoaded", () => {

    const slider = new MainSlider({
        container: ".page",
        btns:".next",
        timeMS: 3000});
    slider.render();

    const showUpSlider = new MiniSlider({
        container: ".showup__content-slider",
        next: ".showup__next", 
        prev: ".showup__prev",
        activeClass: "card-active",
        animate: true
    });
    showUpSlider.init();

    const modulesUpSlider = new MiniSlider({
        container: ".modules__content-slider",
        next: ".modules__info-btns .slick-next", 
        prev: ".modules__info-btns .slick-prev",
        activeClass: "card-active",
        animate: true,
        autoplay: true,
        timeMS: 5000
    });
    modulesUpSlider.init();

    const feedSlider = new MiniSlider({
        container: ".feed__slider",
        next: ".feed__slider .slick-next", 
        prev: ".feed__slider .slick-prev",
        activeClass: "feed__item-active",
    });
    feedSlider.init();


    const player = new ModalVideoPlayer(".showup  .play", ".overlay", ".close");
    player.openModalWindow();

    const questionCardsOld = new Question({
        container: ".officerold",
        cards: ".officer__card-item"
    });
    questionCardsOld.init();

    const questionCardsNew = new Question({
        container: ".officernew",
        cards: ".officer__card-item"
    });
    questionCardsNew.init();

    
});