
import ModalVideoPlayer from "./modules/modalVideoPlay";
import MainSlider from "./modules/slider/slider-main";
import MiniSlider from "./modules/slider/slider-mini";
import Question from "./modules/question-cards";
import Forms from "./modules/forms";
import Accordeon from "./modules/accordeon";
import Download from "./modules/downloadFile";

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


    new ModalVideoPlayer(".showup  .play", ".overlay", ".close").init();
    new ModalVideoPlayer(".module__video-item .play", ".overlay", ".close").init();
    
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

    const bigForm = new Forms({
        forms: ".join .form",
        mailInputs: "[name='email']",
        phoneInputs: "[name='phone']"
    });
    bigForm.init();

    const smallForm = new Forms({
        forms: ".schedule .form",
        mailInputs: "[name='email']"
    });
    smallForm.init();

    const secondPageSlider = new MainSlider({
        container: ".moduleapp",
        btns: ".sidecontrol .next",
        next: ".nextmodule",
        prev: ".prevmodule" 
    });
    secondPageSlider.render();

    new Accordeon(".plus__content", ".msg").init();

    new Download(".download").init();
    
});