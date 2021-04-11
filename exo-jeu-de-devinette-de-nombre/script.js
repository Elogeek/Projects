//je génére un nombre aléatoire de 1 à 100
let number = (Math.trunc(Math.random() * 100));
let answer = document.getElementById("answer");
let i = 10;
let solution = document.getElementById("solution");

//je créer ma fonction
function game() {
    let monNumber = document.getElementById("monNumber").value;

    if(isNaN(monNumber)) {
        astuces.innerHTML = "Ceci n'est pas un nombre";
    }

    // si la réponse est trouvée
    else if(parseInt(monNumber) === number) {
        alert("Félicitations!" +" " + "vous avez trouvé");
        number = (Math.trunc(Math.random() * 100));
        while (answer.firstElementChild) {
            answer.removeChild(answer.firstElementChild);
        }
        i = 10;
        document.getElementById("titre").innerHTML = "Trouvez le chiffre compris entre 1 et 100 (10 essais)";
        solution.innerHTML = "";
    }

    // si la réponse n'est pas trouvée
    else if (i === 1){
        alert("vous avez perdu" + " " + "le nombre a trouver était " + number);
        number = (Math.trunc(Math.random() * 100));
        number = (Math.trunc(Math.random() * 100));
        while (liste.firstElementChild) {
            answer.removeChild(liste.firstElementChild);
        }
        i = 10;
       solution.innerHTML = "";
    }

   // j'affiche dans  le div #astuces le nombre d'essais, et si  l'utilisateur a écrit autre chose qu'un nombre,
    // si le nombre à deviner est plus grand ou plus petit je l'affiche dedans aussi
    else {
        let astuces = document.getElementById("astuces").innerHTML = "il reste" +" " +(i - 1) + " essai";
        i--;
    }
}

//j'affiche dans mon p #aide (qui est dans #astuces) si le nombre est plus grd ou plus petit pour le deviner + facilement
let para = document.getElementById('aide');
if (parseInt(monNumber) < nombre) {
    para.innerHTML += "Ce nombre est plus grand";
}

else {
    para.innerHTML +="Ce nombre est plus petit";
}

document.getElementById("play").addEventListener("click", game);

function reset() {
    number = (Math.trunc(Math.random() * 100));
    while (answer.firstElementChild) {
        answer.removeChild(answer.firstElementChild);
    }
    i = 10;
}

// pour recommencer une partie
window.location.reload();

// pour mon chrono qui ne fonctionne pas encore
let chrono = document.getElementById("chrono");

