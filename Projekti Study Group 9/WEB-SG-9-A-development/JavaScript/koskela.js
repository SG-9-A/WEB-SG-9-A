//Kaikki muuttujat
let intro = document.querySelector("#intro");
let press = document.querySelector("#press");
let quiz = document.querySelector("#quiz");
let reload = document.querySelector("#reload");
let questionN1Button = document.querySelector("#questionN1Button");
let questionN2Button = document.querySelector("#questionN2Button");
let questionN3Button = document.querySelector("#questionN3Button");
let questionN4Button = document.querySelector("#questionN4Button");
let questionN5Button = document.querySelector("#questionN5Button");
let question = document.querySelector("#question");
let answerA = document.querySelector("#answerA");
let answerB = document.querySelector("#answerB");
let answerC = document.querySelector("#answerC");
let answerD = document.querySelector("#answerD");
let answerE = document.querySelector("#answerE");
let iterationalNumber = 0;
let qnChoice = "";
let score = 0;
//Piilottaa aloita alusta napin
reload.style.display = "none";
// funktio napille, josta visa alkaa
function start() {
    intro.style.display ="none";
    quiz.style.display = "block";
    question.innerHTML = questionList[iterationalNumber];
    questionN1Button.style.display = "block";
    press.style.display = "none";
}
//Visan kysymykset
let questionList = [
    "Kysymys numero 1! Mikä alkuaine on nimeltään H2O?",
    "Kysymys numero 2! Mikä alkuaine on nimeltään H?",
    "Kysymys numero 3! Mikä alkuaine on nimeltään Fe?",
    "Kysymys numero 4! Mikä alkuaine on nimeltään C?",
    "Kysymys numero 5! Mikä alkuaine on nimeltään He?",

]
//Piilottaa visan
quiz.style.display = "none";
questionN1Button.style.display = "none";
questionN2Button.style.display = "none";
questionN3Button.style.display = "none";
questionN4Button.style.display = "none";
questionN5Button.style.display = "none";



//Funktiot, jolla vastuakset määritellään
function aFunction() {
    qnChoice = "a"
    answerA.style.textDecoration = "underline";
    answerB.style.textDecoration = "none";
    answerC.style.textDecoration = "none";
    answerD.style.textDecoration = "none";
    answerE.style.textDecoration = "none";


}

function bFunction() {
    qnChoice = "b"
    answerA.style.textDecoration = "none";
    answerB.style.textDecoration = "underline";
    answerC.style.textDecoration = "none";
    answerD.style.textDecoration = "none";
    answerE.style.textDecoration = "none";
}

function cFunction() {
    qnChoice = "c"
    answerA.style.textDecoration = "none";
    answerB.style.textDecoration = "none";
    answerC.style.textDecoration = "underline";
    answerD.style.textDecoration = "none";
    answerE.style.textDecoration = "none";
}

function dFunction() {
    qnChoice = "d"
    answerA.style.textDecoration = "none";
    answerB.style.textDecoration = "none";
    answerC.style.textDecoration = "none";
    answerD.style.textDecoration = "underline";
    answerE.style.textDecoration = "none";
}

function eFunction() {
    qnChoice = "e"
    answerA.style.textDecoration = "none";
    answerB.style.textDecoration = "none";
    answerC.style.textDecoration = "none";
    answerD.style.textDecoration = "none";
    answerE.style.textDecoration = "underline";
}


// Funktio, jolla visaa pisteytetään ja minkä mukaan teksti tulee sivulle.
function submitQn1() {
    if (qnChoice == "c") {
        score += 1;
    }
    iterationalNumber += 1;
    question.innerHTML = questionList[iterationalNumber];
    questionN1Button.style.display = "none";
    questionN2Button.style.display = "block";
    answerA.style.textDecoration = "none";
    answerB.style.textDecoration = "none";
    answerC.style.textDecoration = "none";
    answerD.style.textDecoration = "none";
    answerE.style.textDecoration = "none";

    if (qnChoice == "c") {
        outro.innerHTML = ("Vastasit oikein kysymykseen 1!")
    } else {
        outro.innerHTML = ("Vastasit väärin kysymykseen 1. Oikea vastaus on C) Vesi")
    }

}

function submitQn2() {
    if (qnChoice == "a") {
        score += 1;
    }
    iterationalNumber += 1;
    question.innerHTML = questionList[iterationalNumber];
    questionN2Button.style.display = "none";
    questionN3Button.style.display = "block";
    answerA.style.textDecoration = "none";
    answerB.style.textDecoration = "none";
    answerC.style.textDecoration = "none";
    answerD.style.textDecoration = "none";
    answerE.style.textDecoration = "none";

    if (qnChoice == "a") {
        outro.innerHTML = ("Vastasit oikein kysymykseen 2!")
    } else {
        outro.innerHTML = ("Vastasit väärin kysymykseen 2. Oikea vastaus on A) Vety")
    }

}

function submitQn3() {
    if (qnChoice == "e") {
        score += 1;
    }
    iterationalNumber += 1;
    question.innerHTML = questionList[iterationalNumber];
    questionN3Button.style.display = "none";
    questionN4Button.style.display = "block";
    answerA.style.textDecoration = "none";
    answerB.style.textDecoration = "none";
    answerC.style.textDecoration = "none";
    answerD.style.textDecoration = "none";
    answerE.style.textDecoration = "none";

    if (qnChoice == "e") {
        outro.innerHTML = ("Vastasit oikein kysymykseen 3!")
    } else {
        outro.innerHTML = ("Vastasit väärin kysymykseen 3. Oikea vastaus on E) Rauta")
    }
}

function submitQn4() {
    if (qnChoice == "d") {
        score += 1;
    }
    iterationalNumber += 1;
    question.innerHTML = questionList[iterationalNumber];
    questionN4Button.style.display = "none";
    questionN5Button.style.display = "block";
    answerA.style.textDecoration = "none";
    answerB.style.textDecoration = "none";
    answerC.style.textDecoration = "none";
    answerD.style.textDecoration = "none";
    answerE.style.textDecoration = "none";

    if (qnChoice == "d") {
        outro.innerHTML = ("Vastasit oikein kysymykseen 4!")
    } else {
        outro.innerHTML = ("Vastasit väärin kysymykseen 4. Oikea vastaus on D) Hiili")
    }
}

function submitQn5() {
    if (qnChoice == "b") {
        score += 1;
    }
    iterationalNumber += 1;
    press.innerHTML = "Sinun pisteesi oli: " + score;
    quiz.style.display = "none";
    outro.style.display = "none";
    press.style.display = "block";
    reload.style.display = "block";
    
}

