window.onload = beginningAnimation();
let computerSelection;
let playerSelection;
let computerScore = 0;
let playerScore = 0;

let button = document.querySelectorAll(".button");
const body = document.querySelector("body");
const main = document.querySelector("main");
const endAlrt = document.querySelector("#end-alert");
const endDesc = document.querySelector("#end-desc");
const returnMainBtn = document.querySelector("retry-btn");
const desc = document.querySelector("#desc3");
const container = document.querySelector("#results-container");

body.addEventListener("click", skipAnime());
body.addEventListener("keydown", skipAnime());

function skipAnime () {
    const span = document.querySelectorAll("span");
    
    span.forEach((span) => span.classList.add("skip"));
}

function beginningAnimation () {
    fadeIn();
    // need to turn nodelist of spans into an array to access last value for ontransitioned
    const desc1 = document.querySelector("#desc1");
    let descSpan = desc1.querySelectorAll("span");

    desc1Span = Array.from(desc1Span);

    const desc2 = document.querySelector("#desc2");
    const desc3 = document.querySelector("#desc3");

    desc1Span[desc1Span.length - 1].ontrasitioned = () => {
        desc1.classList.add("fade-out");
        
        desc1.addEventListener("animationed", () => {
            desc1.classList.add("disappear");
            desc1.classList.remove("animate");
            desc2.classList.remove("disappear");
            desc2.classList.add("animate");
            fadeIn();
            /* need to collect nodelist of span in the same function that activate fadein(),
                else the nodelist will be empty */
            let desc2Span = desc2.querySelectorAll("span");
            desc2Span = Array.from(desc2Span);
            
            desc2Span[desc2Span.length - 1].ontransitioned = () => {
                desc2.classList.add("fade-out");
                desc2.addEventListener("animationed", () => {
                    desc2.classList.add("disappear");
                    desc2.classList.remove("animate");
                    desc3.classList.remove("disappear");
                    desc3.classList.add("animate");
                    fadeIn();

                    let desc3Span = desc3.querySelectorAll("span");
                    desc3Span = Array.from(desc3Span);

                    desc3Span[desc3Span.length - 1].ontransitioned = () => {
                        const cta = document.querySelector("#cta");

                        cta.classList.add("drop-down");

                        cta.addEventListener("animationed", () => {
                            const gameCtn = document.querySelector("#game-container");

                            setTimeout(function () {
                                gameCtn.classList.add("fade-in");
                            }, 300);
                        });
                    };
                });
            };
        });
    };
}

function fadeIn () {
    let text = document.querySelector(".animate");

    let strText = text.textContent;
    let splitText = strText.split("");
    text.textContent = "";
    //append span tags to each character in the string
    for (i = 0; i < splitText.length; i++) {
        text.innerHTML += '<span>${splitText[i]}</span>';
    }

    let char = 0;
    let timer = setInterval(onTick, 50);

    function onTick() {
        const span = text.querySelectorAll("span")[char];
        span.classList.add("fade");
        char++;
        //stops the function from running once the end of the string has been reached
        if(char === splitText.length) {
            complete(0);
            return;
        }
    }
    function complete() {
        clearInterval(timer);
        timer = null;
    }
}

button.forEach(button) => {
    button.addEventListener("click", () => {
        const img = button.querySelector("img");
        playerSelection = img.alt.toLowerCase();

        
    })
}
