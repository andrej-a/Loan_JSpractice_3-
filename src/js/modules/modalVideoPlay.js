"use strict";

export default class ModalVideoPlayer{
    constructor(triggers, modalWindow, closeTrigger) {
        this.triggers = document.querySelectorAll(triggers);
        this.modalWindow = document.querySelector(modalWindow);
        this.closeTrigger = this.modalWindow.querySelector(closeTrigger);
        this.onPlayerStateChange = this.onPlayerStateChange.bind(this);//!!! ВАЖНО иначе при нескольких обработчиках
        //потеряется контекст вызова
    }

    openModalWindow() {
        this.triggers.forEach((trigger, i) => {
            try{
                const blockedElem = trigger.closest(".module__video-item").nextElementSibling;

                if (i % 2 == 0) {
                    blockedElem.setAttribute("data-disabled", "true");
                }
            }catch(e){}

            trigger.addEventListener("click", () => {//можно проверить просто на существование
                    if (!trigger.closest(".module__video-item") || trigger.closest(".module__video-item").getAttribute("data-disabled") !== "true") {
                        this.active = trigger;
    
                        if (document.querySelector("iframe#frame")) { //если плеер уже был создан, то не пересоздаем
                            this.modalWindow.style.display = "flex";
                            if (this.path !== trigger.getAttribute('data-url')) { //если нажата другая кнопка с другим data-url
                                this.path = trigger.getAttribute('data-url'); //получаем новую ссылку на видео
                                this.player.loadVideoById({
                                    videoId: this.path
                                });
                                this.player.stopVideo();
                            }
                        } else {
                            this.modalWindow.style.display = "flex";
                            this.path = trigger.getAttribute('data-url'); //получаем ссылку на видео
                            this.createPlayer(this.path); //1 создаем плеер с полученной ссылкой
                        }
                    }
            });
        });
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

        this.openModalWindow();
    }

    createPlayer(url) {
        this.player = new YT.Player('frame', {
            height: '100%',
            width: '100%',
            videoId: `${url}`,
            events: {
                'onStateChange': this.onPlayerStateChange
              }
    
          });
          this.closeModalWindow();
    }

    onPlayerStateChange(state) {//state внутренний аргумент
        try {
            const blockedElem = this.active.closest(".module__video-item").nextElementSibling;
            const playBtn = this.active.querySelector("svg").cloneNode(true); //cloneNode -- копирование ноды. параметр true
            //включает глубокое копирование (с нодой копируются ее потомки и т.п.)

            if (state.data === 0) {//если видео целиком просмотрено

                if (blockedElem.querySelector(".play__circle").classList.contains("closed")) {
                    blockedElem.querySelector(".play__circle").classList.remove("closed");
                    blockedElem.querySelector("svg").remove();
                    blockedElem.querySelector(".play__circle").appendChild(playBtn);
                    blockedElem.querySelector(".play__text").textContent = "play video";
                    blockedElem.querySelector(".play__text").classList.remove("attention");
                    blockedElem.style.opacity = 1;
                    blockedElem.style.filter = "none";

                    blockedElem.setAttribute("data-disabled", "false");
                }
            }
        } catch (e) {}
    }

}//class