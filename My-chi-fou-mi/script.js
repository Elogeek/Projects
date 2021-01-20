const bouton = document.querySelectorAll('button');
const conteneurMessage = document.querySelector('.message');
const fondNoir = document.querySelector('.fond-noir');
const monScore = document.querySelector('.ton-score');
const scoreAdverse = document.querySelector('.son-score');
const affichageGagnant = document.querySelector('.affichage-gagnant');
const tableauReponses = { 0: "pierre", 1: "feuille", 2: "ciseaux" };
let monCompte = 0;
let adversaireCompte = 0;
monScore.textContent = monCompte;
scoreAdverse.textContent = adversaireCompte;

const restart = function () {
    monCompte = 0;
    adversaireCompte = 0;
    monScore.textContent = monCompte;
    scoreAdverse.textContent = adversaireCompte;
     message.textContent = "";
    affichageGagnant.textContent = "";
}

const afficheMessage = function(e) {
     message = e;
    conteneurMessage.textContent += message;
    conteneurMessage.classList.add('actif');
    fondNoir.classList.add('actif');
    setTimeout(function () {
        conteneurMessage.classList.remove('actif');
        fondNoir.classList.remove('actif');
    }, 1000);
};

bouton.forEach(function (elem) {
    elem.addEventListener('click', function () {

        // OBTENIR LES DEUX VALEURS
        const adversaire = Math.floor(Math.random() * 3);
        const reponseAdverse = tableauReponses[adversaire];
        const classe = this.className;

        // COMPARER LES DEUX VALEURS ET RETOURNER LES MESSAGES CORRESPONDANTS
        if ((classe === "pierre" && reponseAdverse === "ciseaux") || (classe === "feuille" && reponseAdverse === "pierre") || (classe === "ciseaux") && (reponseAdverse === "feuille")) {
            afficheMessage("You win");
            monCompte ++;
            monScore.textContent = monCompte;
            if (monCompte === 3) {
                affichageGagnant.textContent = "Tu as gagné !";
                restart();
            }
        } else if (classe === reponseAdverse) {
            afficheMessage(" Ex Aequo ");
        } else {
            afficheMessage(" You Loose ");
            adversaireCompte ++;
            scoreAdverse.textContent = adversaireCompte;
            if ( adversaireCompte === 3 ) {
                affichageGagnant.textContent = "Tu as perdu !";
                restart();
            }
        }

    })
})
