"use strict";

export default class ModalVideoPlayer{
    constructor(triggers, modalWindow, closeTrigger) {
        this.triggers = document.querySelectorAll(triggers);
        this.modalWindow = document.querySelector(modalWindow);
        this.closeTrigger = this.modalWindow.querySelector(closeTrigger);
    }

    openModalWindow() {

        this.triggers.forEach(trigger => {
            trigger.addEventListener("click", () => {
                

                if (document.querySelector("iframe#frame")) {
                    this.modalWindow.style.display = "flex";
                } else {
                    this.modalWindow.style.display = "flex";
                    this.createPlayer(trigger.getAttribute('data-url'));//1
                }
                
            });
        });

        this.init();//2
        this.closeModalWindow();
    }

    closeModalWindow() {
        this.closeTrigger.addEventListener("click", () => {
            this.modalWindow.style.display = "none";
            this.player.pauseVideo();
        });
    }

    init() {
        const tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }

    createPlayer(url) {
        this.player = new YT.Player('frame', {
            height: '100%',
            width: '100%',
            videoId: `${url}`,
          });
    }

}//class