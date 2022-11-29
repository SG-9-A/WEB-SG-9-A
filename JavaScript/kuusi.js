let n1 = Math.floor(Math.random()*10+1)
let n2 = Math.floor(Math.random() * 10 + 1)
document.getElementById('v1').innerHTML = n1;
document.getElementById('v2').innerHTML = n2;
var count = 0;
var wrong = 0;
var score = 0;
document.getElementById('v1').value = n1;
document.getElementById('v2').value = n2;


let ans = n1 + n2;
const jsGame = () => {
    var usera = document.getElementById('answ').value;
    if (usera == ans) {
        wrong = 0; 
        score++;
        count++; 
        GenerateRandom();
        document.getElementById("message").innerHTML = "Oikein!"
        
    }


    else {    
        wrong = wrong-1;
        count++;
        GenerateRandom();
        document.getElementById("message").innerHTML = "Väärin."
    }

    if (count == 5) {
        Visible();
        var s = score;
        if (score >= 3) {
            document.getElementById("final").innerHTML = `Voitit ja sait ${score}/5 oikein.`
            document.getElementsById('submit').style.visibility = "hidden";
            document.getElementById('operator').style.visibility = "hidden";
            

        }else{
            document.getElementById('answ').value = " ";
            document.getElementById("final").innerHTML = `Hävisit ja sait ${wrong}/5 oikein`
            

        }
    }  

};

function GenerateRandom() {
    document.getElementById('answ').value = " ";
    n1 = Math.floor(Math.random() * 10 + 1)
    n2 = Math.floor(Math.random() * 10 + 1)
    document.getElementById('v1').innerHTML = n1;
    document.getElementById('v2').innerHTML = n2;
    document.getElementById('v1').value = n1;
    document.getElementById('v2').value = n2;
    ans = n1 + n2;
}


function Visible() {
        document.getElementById('v1').style.visibility = "hidden";
        document.getElementById('v2').style.visibility = "hidden";
        document.getElementById('answ').style.visibility = "hidden";
        document.getElementById('submit').style.visibility = "hidden";
        document.getElementById('operator').style.visibility = "hidden";
    
}