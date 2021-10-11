"use strict";
import { postDataFormToServer } from "../service/service";

export default class Forms{
    constructor({forms, mailInputs, phoneInputs = null}) {
        this.forms = document.querySelectorAll(forms);
        this.mailInputs = document.querySelectorAll(mailInputs);
        this.phoneInputs = document.querySelectorAll(phoneInputs);
        
        if (this.phoneInputs) {
            this.setCursorEnd(phoneInputs);
        }

        this.statusMessage = {
            waiting: "Loading",
            done: "Your request has been sent. Thanks!",
            error: "Error. Try again."
        };
    }

    setCursorEnd(elem) {
        document.querySelectorAll(elem).forEach(input => {
            input.addEventListener("click", () => {
                    input.selectionStart = input.selectionEnd = input.value.length;
            });
        });
    }

    phoneMask() {
        let matrix = "+1 (___) ___-____";//создаем матрицу. можно из БД или сервера
        let i = 0; //счетчик
        let def = matrix.replace(/\D/g, ""); 
        let value = this.value.replace(/\D/g, "");//работает на основе ввода пользователя

        if (def.length >= value.length) {
            value = def;
        }
                    /*каждый символ, и в а тоже*/
        this.value = matrix.replace(/./g, function(a) {
            return /[_\d]/.test(a) && i < value.length ? value.charAt(i++) : i >= value.length ? "" : a;
        });

        if (event.type === "blur") {
            if (this.value.length <= 5) {
                this.value = "";
            }
        }
    }//phonemask

    checkLanguages(array) {
        array.forEach(input => {
            input.addEventListener("input", event => {
                if (event.target.name === "email") {
                    if (/[а-яё]/gi.test(event.target.value)) {
                        event.target.value = event.target.value.replace(/[^а-яё 0-9]/gi, "");
                        event.target.style.border = "1px solid red";
                        input.value = "You have to input this information in English";
                        setTimeout(() => {
                            event.target.style.border = "";
                            input.value = "";
                        }, 3000);
                    }
                }
            });
        });
    }

    postDate(form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            const message = document.createElement("div");
            message.style.fontSize = "20px";
            form.appendChild(message);

            let statusIMG = document.createElement("img");
            message.innerText = this.statusMessage.waiting;
            message.appendChild(statusIMG);

            const formData = new FormData(form);

            postDataFormToServer("assets/question.php", formData)
                .then(result => result.text())
                .then(result => {
                    console.log(result);
                    message.innerText = this.statusMessage.done;
                })
                .catch((e) => {
                    message.innerText = this.statusMessage.error;
                })
                .finally(() => {
                    setTimeout(() => {
                        message.remove();
                        form.reset();
                    }, 3000);
                }); //finally
        });
    }

    init() {
        
        if (this.phoneInputs) {
                this.phoneInputs.forEach(input => {
                input.addEventListener("input", this.phoneMask);
                input.addEventListener("focus", this.phoneMask);
                input.addEventListener("blur", this.phoneMask);
            });
        }

        this.forms.forEach(form => {
            this.postDate(form);
        });

        this.checkLanguages(this.mailInputs);
    }
}//forms