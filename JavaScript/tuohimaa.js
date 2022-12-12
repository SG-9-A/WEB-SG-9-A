// Joona Tuohimaa - TIK22SP

//Teeman vaihto funktio
const setTheme = theme => document.documentElement.className = theme;
//Hauskat kuvat lisäilyyn ( !!!!!! KESKEN !!!!!!!!!)
// https://cdn.pixabay.com/photo/2015/12/10/22/21/albert-einstein-1087041_960_720.png - 5 pistettä - Albert Einstein
// conatainerElement.appendChild(imgElement);

// let imgElement = document.createElement("img");
// imgElement.src = "https://cdn.pixabay.com/photo/2015/12/10/22/21/albert-einstein-1087041_960_720.png";
// let conatainerElement = document.getElementById("kuvat");

//Kysymykset koodiin, asetetaan kysymykset ja vastaukset vakiona dataksi

const quizData = [
    {
        question: "Missä maassa Venetsia sijaitsee?",
        a:"Suomessa",
        b:"Sveitsissä",
        c:"Italiassa",
        d:"Luxemburgissa",
        correct: "c",
        oikein: "Italia"
    },
    {
        question: "Montako jalkaa hämähäkillä on?",
        a:"Kuusi",
        b:"Kahdeksan",
        c:"Kymmenen",
        d:"Neljä",
        correct: "b",
        oikein: "Kahdeksan",
    },
    {
        question: "Mikä on kili",
        a:"Hevonen",
        b:"Pässi",
        c:"Aasi",
        d:"Koira",
        correct: "b",
        oikein: "Pässi",
    },
    {
        question: "Mikä valuutta oli Suomessa ennen euroja?",
        a:"Rupla",
        b:"Kruuna",
        c:"Euro",
        d:"Markka",
        correct: "d",
        oikein:"Markka",
    },
    {
        question: "Mikä on aurinkokuntamme suurin planeetta?",
        a:"Venus",
        b:"Maa",
        c:"Jupiter",
        d:"Saturnus",
        correct: "c",
        oikein:"Jupiter",
    }
]
// Asetetaan vakiot input kentille joita tarvitaan funktioissa
const quiz= document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;
let currentQuestion = 1;

// Tämä funktio lataa testin ja sekä ottaa kysymykset ja vastaukset datasta
loadQuiz()
function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}
// Tämä funktio tyhjentää vastaukset
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}
// Tämä funktio päivittää seuraavan kysymyksen tilanneseuraajan
function nextQuestion(){
    currentQuestion++;
    updateQuestionTracker();
}
// Tämä funktio lisää HTML elementtiin tilanteen sen hetkisestä kysymyksestä
function updateQuestionTracker(){
    let questionTracker = document.getElementById("question-tracker");
    questionTracker.innerText = "Kysymys " + currentQuestion + "/5";
}
// Funkiota jota kutsutaan kun vastaus on valittu
function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}

// Funktio jota painamalla kutsutaan
submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        incorrect.innerText="Hienosti menee! Vastasit edelliseen kysymykseen oikein!" 
       }
       else {
            incorrect.innerText="Aijjai edellinen kysymys meni valitettavasti väärin! Oikea vastaus oli: " + quizData[currentQuiz].oikein;
       }
       nextQuestion();
       currentQuiz++
       if(currentQuiz < quizData.length) {
           loadQuiz()
       } 
       else {
           quiz.innerHTML = `
           <h2>Sinä vastasit ${score}/${quizData.length} kysymykseen oikein</h2>
           <button onclick="location.reload()">Kokeile uudestaan</button>
           `
       }
    }
})




