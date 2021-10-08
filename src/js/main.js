import Slider from "./modules/slider";
import ModalVideoPlayer from "./modules/modalVideoPlay";
import {MiniSliders} from "./modules/miniSliders";
window.addEventListener("DOMContentLoaded", () => {

    const slider = new Slider(".page", ".next", 3000);
    slider.render();

    const player = new ModalVideoPlayer(".showup  .play", ".overlay", ".close");
    player.openModalWindow();

    const secondSlider = new MiniSliders(".showup__content-slider", ".showup__next", ".showup__prev");
    secondSlider.render();
});