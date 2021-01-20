const CLICK_LEFT = 0, CLICK_RIGHT = 2;
let playerX = false, playerO = false;
let cases = document.getElementsByClassName("case");

//Ici square contient un nouvel élément .case de la liste d'éléments a chaque passage de la boucle !
//Maintenant que j'ai tous mes éléments, je dois trouver une solution pour savoir QUI et SI on a cliqué.
for(const square of cases) {
    // On ajoute un listener sur chaque élément de classe .case.
    square.addEventListener('mouseup', function(event) {
        switch(event.button) {
            case CLICK_LEFT:
                //Une fois que le X sera dans le div, on ne pourra plus rien ajouter dans ce div.
                insertPlayerText(this, "X")
                break;

            case CLICK_RIGHT:
                //Une fois que le O sera dans le div, on ne pourra plus rien ajouter dans ce div.
                insertPlayerText(this, "O")
                break;
        }

        //toujours après avoir effectué un clic, vérifier si qlqn a gagné, function???
        checkCases();
    });
}

// Vérifier quelque chose.
function checkCases() {
    playerX = checkHorizontal("X");
    playerO = checkHorizontal("O");

    //Si le résultat est autre chose qu'une chaine (donc false) alors on passe au test suivant !
    if(!playerX && !playerO) { // revient à ==> playerX === false && playerO === flase
        playerX = checkVertical("X");
        playerO = checkVertical("O")
        // Si pas de résultat en vertical, on check les diagonales.
        if (!playerX && !playerO) {
            playerX = checkDiagonal("X");
            playerO = checkDiagonal("O");
        }
    }
    if (playerX) {
        document.getElementById("won").innerHTML = "Le joueur 1 à gagné (X)!";
    }
    else if (playerO) {
        document.getElementById("won").innerHTML = "Le joueur 2 à gagné (O)!";
    }
}

//Un vérification horizontale.
function checkHorizontal(player) {
    // Le code juste au dessus en commentaire revient au code juste en dessous en plus simplifié !
    for (let idx = 0; idx <= 8; idx += 3) { //On a fait un pas de 3 a chaque fois de 0 à 3, de 1 à 4, ...
        //Et la au 1er passage, j'aurai 0, 1, 2 / au 2è j'aurai 3, 4, 5 et au 3è j'aurai 6, 7, 8
        if (cases[idx].innerHTML === player && cases[idx+1].innerHTML === player && cases[idx+2].innerHTML === player) {
            return true;
        }
    }
    return false;
}

//Une vérification verticale.
function checkVertical(player) {
    for (let idx = 0; idx <= 2; idx ++) { //On a fait un pas de 3 a chaque fois de 0 à 3, de 1 à 4, ...
        //Et la au 1er passage, j'aurai 0, 3, 6 / au 2è j'aurai 1, 4, 7 et au 3è j'aurai 2, 5, 8
        if (cases[idx].innerHTML === player && cases[idx+3].innerHTML === player && cases[idx+6].innerHTML === player) {
            return true;
        }
    }
    return false;
}

//Une verification diagonale.
function checkDiagonal(player) {
    //Et la au 1er passage, j'aurai 0, 4, 8 / au 2è j'aurai 2, 4, 6
    if (cases[0].innerHTML === player && cases[4].innerHTML === player && cases[8].innerHTML === player) {
        return true;
    }
    if (cases[2].innerHTML === player && cases[4].innerHTML === player && cases[6].innerHTML === player) {
        return true;
    }
    return false;
}

//Insère une lettre dans le div .case
function insertPlayerText(element, playerChar) {
    //Element contient l'élément a qui on va donner la lettre contenue dans playerChar.
    if (!playerX && !playerO) {
        if (element.innerHTML.length === 0) {
            //PlayerChar contient la lettre à insérer, X ou O
            element.innerHTML = playerChar; //Contient l'objet qui a généré l'évènement (l'objet sur lequel on a clic)
        }
    }
}

// Empêche un élément par défault de se produire, ici on empèche que le menu apparaisse quand on fait un clique droit qu'au niveau du square !!!!
document.addEventListener("contextmenu", function (event) {
    event.preventDefault();
});

//Reset de la zone de jeu.
document.getElementById("reset").addEventListener("click", function () {
    for (let square of cases) {
        square.innerHTML = "";
    }
    playerO = playerX = false; //playerO et playerX sont faux !
    document.getElementById("won").innerHTML = "";
})