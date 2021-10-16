"use strict";

export default class Download{
    constructor(triggers) {
        this.triggers = document.querySelectorAll(triggers);
        this.path = "assets/img/mainbg.jpg";
    }
    //триггером скачивания должна быть ссылка, как <a></a>; тут ее нет, поэтому сначала ее создаем, настраиваем
    //путь скачивания файла (можно менять динамически, в зависимости от ссылки), помещаем на страницу с none-display
    //и вручную вызываем клик при клике на триггер. кликая на триггер, происходит клик по ссылке и файл скачивается

    downloadItem(path) {
        const element = document.createElement("a");

        element.setAttribute("href", path);
        element.setAttribute("download", "nice-picture");

        element.style.display = "none";
        document.body.appendChild(element);

        element.click();

        document.body.removeChild(element);
    }


    init() {
        this.triggers.forEach(btn => {
            btn.style.cursor = "pointer";
            
            btn.addEventListener("click", () => {
                this.downloadItem(this.path);
            });
        });
    }
}//dwnl