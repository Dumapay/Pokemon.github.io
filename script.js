var elementBoy;
var elementPkm1;
var elementPkm2;
var elementPkm3;
var elementPkm4;
var elementPkm5;
var elementPkm6;

const spriteW = [
    "media/spriteBOY/13.png",
    "media/spriteBOY/14.png",
    "media/spriteBOY/15.png",
    "media/spriteBOY/16.png",
];
const spriteS = [
    "media/spriteBOY/1.png",
    "media/spriteBOY/2.png",
    "media/spriteBOY/3.png",
    "media/spriteBOY/4.png",
];
const spriteD = [
    "media/spriteBOY/9.png",
    "media/spriteBOY/10.png",
    "media/spriteBOY/11.png",
    "media/spriteBOY/12.png",
];
const spriteA = [
    "media/spriteBOY/5.png",
    "media/spriteBOY/6.png",
    "media/spriteBOY/7.png",
    "media/spriteBOY/8.png",
];

valorW = 0;
valorS = 0;
valorA = 0;
valorD = 0;

var valorID = 6;
var valorUD = 28;

var vfTema = false;

function iniciar() {

    elementBoy = document.querySelector(".boy");
    elementAux = document.querySelector(".aux");
    elementPkm1 = document.querySelector(".pkm1");
    elementPkm2 = document.querySelector(".pkm2");
    elementPkm3 = document.querySelector(".pkm3");
    elementPkm4 = document.querySelector(".pkm4");
    elementPkm5 = document.querySelector(".pkm5");
    elementPkm6 = document.querySelector(".pkm6");
    abc = document.querySelector("body");


    elementBoy.style.backgroundImage = `url(${spriteS[valorS]})`;
    elementBoy.style.top = 28 + "%";
    elementBoy.style.left = 6 + "%";

    window.addEventListener("click", capturar);
    window.addEventListener("mousemove", moverC);


    window.addEventListener("keydown", evento => {
        if (evento.key.toUpperCase() == "W" || evento.key.toUpperCase() == "S" || evento.key.toUpperCase() == "A" || evento.key.toUpperCase() == "D") {

            if (vfTema == false) {
                vfTema = true;
                var audioTema = new Audio("media/varios/tema.mp3");
                audioTema.volume = .1;
                audioTema.play();
            }
            elementAux.textContent = valorUD + " " + valorID;

            if (evento.key && evento.key.toUpperCase() == "W") {
                elementBoy.style.backgroundImage = `url(${spriteW[valorW]})`;
                elementBoy.style.top = valorUD + "%";
                valorUD--;
                valorW++;
                if (valorW == 2) {
                    valorW = 0;
                }
                if (valorUD == -1) {
                    valorUD = 0;
                }

                valorA = 0;
                valorD = 0;
                valorS = 0;
            }
            if (evento.key && evento.key.toUpperCase() == "S") {
                elementBoy.style.backgroundImage = `url(${spriteS[valorS]})`;
                elementBoy.style.top = valorUD + "%";
                valorUD++;
                valorS++;
                if (valorS == 2) {
                    valorS = 0;
                }
                if (valorUD == 89) {
                    valorUD = 88;
                }

                valorA = 0;
                valorD = 0;
                valorW = 0;
            }
            if (evento.key && evento.key.toUpperCase() == "A") {
                elementBoy.style.backgroundImage = `url(${spriteA[valorA]})`;
                elementBoy.style.left = valorID + "%";
                valorID--;
                valorA++;
                if (valorA == 2) {
                    valorA = 0;
                }
                if (valorID == -1) {
                    valorID = 0;
                }

                valorW = 0;
                valorD = 0;
                valorS = 0;
            }
            if (evento.key && evento.key.toUpperCase() == "D") {
                elementBoy.style.backgroundImage = `url(${spriteD[valorD]})`;
                elementBoy.style.left = valorID + "%";
                valorID++;
                valorD++;
                if (valorD == 2) {
                    valorD = 0;
                }
                if (valorID == 96) {
                    valorID = 95;
                }

                valorA = 0;
                valorw = 0;
                valorS = 0;
            }

        }

    });
}

var bucleLanzar;
var valorlanzaX = valorID;
var valorlanzaY = valorUD;
var vf = true;

function capturar() {
    if (vf == true) {

        valorlanzaX = valorID + 2;
        valorlanzaY = valorUD + 4;

        elementonuevo = document.createElement("span");
        abc.appendChild(elementonuevo);

        vf = false;

        bucleLanzar = setInterval(() => {
            elementAux.textContent = valorlanzaX;

            elementonuevo.style.left = valorlanzaX + "%";
            elementonuevo.style.top = valorlanzaY + "%";

            valorlanzaX++;

            if (valorlanzaX == 100) {

                clearInterval(bucleLanzar);
                vf = true

                abc.removeChild(elementonuevo);
            }

            if (valorlanzaY >= 5 && valorlanzaY <= 15 && valorlanzaX >= 50 && valorlanzaX <= 54) {
                var audioTema = new Audio("media/varios/catch.mp3");
                audioTema.volume = .1;
                audioTema.play();
                abc.removeChild(elementPkm1);
                clearInterval(bucleLanzar);
                vf = true

                abc.removeChild(elementonuevo);
            }

            if (valorlanzaY >= 16 && valorlanzaY <= 26 && valorlanzaX >= 65 && valorlanzaX <= 69) {
                var audioTema = new Audio("media/varios/catch.mp3");
                audioTema.volume = .1;
                audioTema.play();
                abc.removeChild(elementPkm2);
                clearInterval(bucleLanzar);
                vf = true

                abc.removeChild(elementonuevo);
            }

            if (valorlanzaY >= 27 && valorlanzaY <= 37 && valorlanzaX >= 76 && valorlanzaX <= 80) {
                var audioTema = new Audio("media/varios/catch.mp3");
                audioTema.volume = .1;
                audioTema.play();
                abc.removeChild(elementPkm3);
                clearInterval(bucleLanzar);
                vf = true

                abc.removeChild(elementonuevo);
            }

            if (valorlanzaY >= 15 && valorlanzaY <= 25 && valorlanzaX >= 95 && valorlanzaX <= 99) {
                var audioTema = new Audio("media/varios/catch.mp3");
                audioTema.volume = .1;
                audioTema.play();
                abc.removeChild(elementPkm4);
                clearInterval(bucleLanzar);
                vf = true

                abc.removeChild(elementonuevo);
            }

            if (valorlanzaY >= 70 && valorlanzaY <= 80 && valorlanzaX >= 29 && valorlanzaX <= 33) {
                var audioTema = new Audio("media/varios/catch.mp3");
                audioTema.volume = .1;
                audioTema.play();
                abc.removeChild(elementPkm5);
                clearInterval(bucleLanzar);
                vf = true

                abc.removeChild(elementonuevo);
            }

            if (valorlanzaY >= 65 && valorlanzaY <= 75 && valorlanzaX >= 96 && valorlanzaX <= 100) {
                var audioTema = new Audio("media/varios/catch.mp3");
                audioTema.volume = .1;
                audioTema.play();
                abc.removeChild(elementPkm6);
                clearInterval(bucleLanzar);
                vf = true

                abc.removeChild(elementonuevo);
            }

        }, 20);
    }

}

function moverC(evento) {

    posicX = evento.pageX / (window.innerWidth / 100);
    elementAux.textContent = posicX + " NEIL DUMAPAY";
}

window.addEventListener("load", iniciar, false);
