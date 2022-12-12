// Matikkapelin koodi, koostuu 2 random generaattorista joita käytetään laskujen luomiseen
let n1 = Math.floor(Math.random()*10+1)
let n2 = Math.floor(Math.random()*10+1)
document.getElementById("v1").innerHTML = n1;
document.getElementById("v2").innerHTML = n2;
var count = 0;
var wrong = 0;
var score = 0;
document.getElementById("v1").value = n1;
document.getElementById("v2").value = n2;
document.getElementById("restart").style.visibility = "hidden";
document.getElementById("winner").style.visibility = "hidden";
document.getElementById("loser").style.visibility = "hidden";
document.getElementById("message").innerHTML = "Yritä saada täydet pisteet!";

let ans = n1 + n2;

// Pelaaja saa pisteitä oikeasta vastauksesta ja sivu generoi uuden laskun. Peli päättyy viiden kysymyksen jälkeen.
const jsGame = () => {
    var usera = document.getElementById("answ").value;
    if (usera == ans) {
        wrong = 0; 
        score++;
        count++; 
        GenerateRandom();
        document.getElementById("message").innerHTML = "Oikein!";
        
    }

// Jokaisesta väärästä kysymyksestä lähtee yksi piste pois ja peli kertoo oikean vastauksen. Et saa pistettä vaikka korjaisit oikean vastauksen jälkikäteen.
    else {    
        wrong = wrong-1;
        count++;
        document.getElementById("message").innerHTML = `Väärin! ${ans} oli oikea vastaus`
        
    }
// Viiden kysymyksen jälkeen peli näyttää loppuruudun riippuen siitä montako pistettä olet saanut. Enemmän kuin kolme pistettä niin peli sanoo että voitit ja se näyttää siihen liittyvän kuvan.
    if (count == 5) {
        Visible();
        var s = score;
        if (score >= 3) {
            document.getElementById("result").innerHTML = `Voitit ja sait ${score}/5 oikein!`
            document.getElementById("message").style.visibility = "hidden";
            document.getElementById("restart").style.visibility = "visible";
            document.getElementById("winner").style.visibility = "visible";
            
// Jos häviät niin peli ilmoittaa senkin ja näyttää siihen erilaisen kuvan.
        }else{
            document.getElementById("answ").value = " ";
            document.getElementById("result").innerHTML = `Hävisit ja sait ${wrong}/5 oikein`
            document.getElementById("message").style.visibility = "hidden";
            document.getElementById("restart").style.visibility = "visible";
            document.getElementById("loser").style.visibility = "visible";
        }
    }  

};

// Matikkapelin randomigeneraattori
function GenerateRandom() {
    document.getElementById("answ").value = " ";
    n1 = Math.floor(Math.random() * 10 + 1)
    n2 = Math.floor(Math.random() * 10 + 1)
    document.getElementById("v1").innerHTML = n1;
    document.getElementById("v2").innerHTML = n2;
    document.getElementById("v1").value = n1;
    document.getElementById("v2").value = n2;
    ans = n1 + n2;
}

// Peli piilottaa tiettyjä sivun osia kun olet suorittanut testin.
function Visible() {
    document.getElementById("v1").style.visibility = "hidden";
    document.getElementById("v2").style.visibility = "hidden";
    document.getElementById("answ").style.visibility = "hidden";
    document.getElementById("submit").style.visibility = "hidden";
    document.getElementById("operator").style.visibility = "hidden";
    document.getElementById("message").style.visibility = "hidden";
    document.getElementById("restart").style.visibility = "hidden";
    
}