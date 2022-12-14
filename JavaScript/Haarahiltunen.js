//Tietovisan koodi, koostuu useammasta funktiosta joilla kysymykset vaihtuvat

//Varrit
let welcome = document.querySelector("#welcome");
let userName = document.querySelector("#userName");
let headerText = document.querySelector("#headerText");
let headerTextTwo = document.querySelector("#headerTextTwo");
let headerTextThree = document.querySelector("#headerTextThree");
let headerTextFour = document.querySelector("#headerTextFour");
let greetingInput = document.querySelector("#greetingInput");
let quiz = document.querySelector("#quiz");
let qn1Button = document.querySelector("#qn1Button");
let qn2Button = document.querySelector("#qn2Button");
let qn3Button = document.querySelector("#qn3Button");
let qn4Button = document.querySelector("#qn4Button");
let qn5Button = document.querySelector("#qn5Button");
let question = document.querySelector("#question");
let answerA = document.querySelector("#answerA");
let answerB = document.querySelector("#answerB");
let answerC = document.querySelector("#answerC");
let answerD = document.querySelector("#answerD");
let iterationNumber = 0;
let qnChoice = "";
let score = 0;
document.getElementById("winner").style.visibility = "hidden";
document.getElementById("draw").style.visibility = "hidden";


//Kysymyslista.
let questionList = [
    "Kysymys 1: Mikä on Suomen länsinaapuri?",
    "Kysymys 2: Mikä planeetta on lähimpänä aurinkoa?",
    "Kysymys 3: Mikä on Suomen pääkaupunki?",
    "Kysymys 4: Miksi kutsutaan hevosen poikasta?",
    "Kysymys 5: Mikä näistä on myrkyllinen?",

]

//Kysymyslistat array:nä.
let aAnswerlist = ["Viro", "Merkurius", "Oulu", "Karitsa","Puolukka",]
let bAnswerlist = ["Venäjä", "Venus", "Rovaniemi", "Vasikka","Mustikka",]
let cAnswerlist = ["Islanti", "Mars", "Porvoo", "Varsa","Sudenmarja",]
let dAnswerlist = ["Ruotsi", "Maa", "Helsinki", "Vauva","Pihjalanmarja",]

//Piilottaa vastaus napit.
quiz.style.display = "none";
qn1Button.style.display = "none";
qn2Button.style.display = "none";
qn3Button.style.display = "none";
qn4Button.style.display = "none";
qn5Button.style.display = "none";

//Funktio resetoi valitun vastauksen näyttämisen aikaisemmassa kysymyksessä.
function reset () {
    answerA.style.color = "";
    answerB.style.color = "";
    answerC.style.color = "";
    answerD.style.color = "";  

    question.innerHTML = questionList[iterationNumber];
    answerA.innerHTML = aAnswerlist[iterationNumber];
    answerB.innerHTML = bAnswerlist[iterationNumber];
    answerC.innerHTML = cAnswerlist[iterationNumber];
    answerD.innerHTML = dAnswerlist[iterationNumber];

}

// Funktio tervehtii ja pyytää sivulla kävijää kirjoittamaan nimensä ja vastaa siihen.
function greeting() {
    welcome.innerHTML = "Hei " + userName.value + "! "
    headerText.innerHTML = "Vastaa nyt kysymyksiini." 
    greetingInput.style.display = "none"
    quiz.style.display = "block";
    qn1Button.style.display = "block";
    question.innerHTML = questionList[iterationNumber];
    answerA.innerHTML = aAnswerlist[iterationNumber];
    answerB.innerHTML = bAnswerlist[iterationNumber];
    answerC.innerHTML = cAnswerlist[iterationNumber];
    answerD.innerHTML = dAnswerlist[iterationNumber];

}
//Funktio määrittää vastauksen valitsemisen ja sen näyttämisen käyttäjälle.
function aFunction() {
    answerA.style.color = "red";
    answerB.style.color = "grey";
    answerC.style.color = "grey";
    answerD.style.color = "grey";
    qnChoice = "a";
}
function bFunction() {
    answerA.style.color = "grey";
    answerB.style.color = "red";
    answerC.style.color = "grey";
    answerD.style.color = "grey";
    qnChoice = "b";
}
function cFunction() {
    answerA.style.color = "grey";
    answerB.style.color = "grey";
    answerC.style.color = "red";
    answerD.style.color = "grey"; 
    qnChoice = "c";
}
function dFunction() {
    answerA.style.color = "grey";
    answerB.style.color = "grey";
    answerC.style.color = "grey";
    answerD.style.color = "red";
    qnChoice = "d";
}

//Funktio seuraa minkä vastauksen lukitset ja pisteyttää sen. 
//Funktio myös vaihtaa tekstit vastauksien perusteella.

function submitQn1() {
if (qnChoice == "d") {
    score += 1;
    welcome.innerHTML = "Vastauksesi on oikein!"
    headerText.innerHTML = "Ruotsi on ollut suomen länsinaapuri vuodesta 1809, kun Ruotsi menetti sen aikaisen suomen Venäjälle."
} 
else if (qnChoice == "a","b","c"){
    welcome.innerHTML = "Vastauksesi on väärin."
    headerText.innerHTML = "Suomen länsinaapuri on Ruotsi."; 
     
} 

    qn1Button.style.display = "none";
    qn2Button.style.display = "block";
    iterationNumber += 1;

    reset()
    
}
function submitQn2() {
if (qnChoice == "a") {
    score += 1;
    welcome.innerHTML = "Vastauksesi on oikein!"
    headerText.innerHTML = " Merkurius on kuiva, eloton, ja lähes kaasukehätön maankaltainen kiviplaneetta."

}
else if (qnChoice == "d","b","c"){
    welcome.innerHTML = "Vastauksesi on väärin."
    headerText.innerHTML = "Aurinkoa lähin planeetta on Merkurius."; 
     
}
    qn2Button.style.display = "none";
    qn3Button.style.display = "block";
    iterationNumber += 1;

    reset()
   
 
}
function submitQn3() {
if (qnChoice == "d") {
    score += 1;
    welcome.innerHTML = "Vastauksesi on oikein!"
    headerText.innerHTML = "Helsingistä tuli Suomen suuriruhtinaskunnan pääkaupunki vuonna 1812 ja Suomen tasavallan pääkaupunki maan itsenäistyessä vuonna 1917."; 
}
else if (qnChoice == "a","b","c"){
    welcome.innerHTML = "Vastauksesi on väärin."
    headerText.innerHTML = "Suomen pääkaupunki on Helsinki."; 
}
    qn3Button.style.display = "none";
    qn4Button.style.display = "block";
    iterationNumber += 1;

    reset()

}
function submitQn4() {
    if (qnChoice == "c") {
        score += 1;
        welcome.innerHTML = "Vastauksesi on oikein!"
        headerText.innerHTML = "Varsaksi kutsutaan useimmiten hevosia, jotka eivät ole vielä saavuttaneet sukukypsyyttä.";
    }
    else if (qnChoice == "a","b","c"){
        welcome.innerHTML = "Vastauksesi on väärin."
    headerText.innerHTML = "Hevosen poikasta kutsutaan varsaksi.";  
    }
        qn4Button.style.display = "none";
        qn5Button.style.display = "block";
        iterationNumber += 1;
    
        reset()
    
    }
    
function submitQn5() {
if (qnChoice == "c") {
    headerTextTwo.innerHTML = "Vastauksesi on oikein!"
    headerTextThree.innerHTML = "Myrkytystapaukset ovat kuitenkin olleet harvinaisia,sillä marjoja on vain yksi kasvia kohti ja sen maku on vastenmielinen. "; 
    headerTextFour.innerHTML = "Klikkaa kuvaa aloittaaksesi alusta!";
    score += 1;
} else if (qnChoice == "a","b","c"){
    headerTextTwo.innerHTML = "Vastauksesi on väärin!"
    headerTextThree.innerHTML = "Sudenmarja on myrkyllinen!";
    headerTextFour.innerHTML = "Klikkaa kuvaa aloittaaksesi alusta!";

}
    iterationNumber += 1;
    headerText.innerHTML = "Sait " + score + " vastausta oikein!";
    welcome.innerHTML = "Kiitos!";
    quiz.style.display = "none";
    //Lopputuloksen päätös vastausten perusteella
    if (score == "5"){
        document.getElementById("winner").style.visibility = "";
        }
        else if (score == "4","3","2"){
            document.getElementById("draw").style.visibility = "";    
}
    

}

