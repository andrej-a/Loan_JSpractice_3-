import Slider from "./modules/slider";
import ModalVideoPlayer from "./modules/modalVideoPlay";
window.addEventListener("DOMContentLoaded", () => {

    const slider = new Slider(".page", ".next", 3000);
    slider.render();

    const player = new ModalVideoPlayer(".showup  .play", ".overlay", ".close");
    player.openModalWindow();
});