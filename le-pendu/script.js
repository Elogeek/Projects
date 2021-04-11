let words = [
    "CHEVRE",
    "CHEVAL",
    "RACLETTE",
    "BOLOGNAISE",
    "METROPOLE",
    "MONTAGNE",
    "METEQUE",
    'METAL',
    'MUSIQUE',
    'ORDINATEUR',
    'RAVEL',
    'MYRTILLE',
    'THE',
    'PATISSERIE',
    'BOIS',
    "kITSUNE",
    "PITAYA",
    "OIGNONS",
    "CARAMBOLE",
    "ANONE",
    "PHYSALIS",
    "BOULANGERIE",
    "INGENIEUR",
    "MAISON",
    "TANUKI",
    "CAFE",
    "DEVELOPPEUR",
    "MOCHI",
    "SESAME",
    "HOTEL",
    "TELEVISION",
    "CROISSANT",
    "ORNITHORYNQUE",
    "MANGA"
];

let life = 7;

// Select a random Words:
function getRandom() {
    return Math.floor(Math.random() * words.length);
}

let randomWord = words[getRandom()];
let withWord = randomWord.length;
let arrayWord = Array.from(randomWord);
let i;

for ( i = 0; i < withWord; i++) {
    let letters = document.createElement('button');

    document.getElementById('penduLetters').appendChild(letters);
    letters.innerHTML = "_" ;
    letters.id = "letter" + [i];
}

//  pictures pendu //
let img = document.createElement("img");
img.style.width = "100%";


function penduImage (pts) {
    img.src = pts +".PNG";
    document.getElementById('pendu').appendChild(img);
}

// button values//
let valeurButton = document.getElementsByClassName('lettersBtn');

// Letters Win or Loose:
let winPts = 1;

for (let valeursButtons of valeurButton) {
    valeursButtons.addEventListener('click', function () {
        document.getElementById('lettersFalse').innerHTML += " " + valeursButtons.innerHTML ;
        let rules = document.querySelector('#rules');
        rules.style.display = "none";

        let position = arrayWord.indexOf(valeursButtons.innerHTML);
        ///////WARNING
        //plus aucune lettre  ne s'affichent dans le mot à trouver
        // problème la lettre qui apparait +sieurs fois  ne s'affiche pas!!!!

        //letter to find
        let lettersFind = document.getElementById('lettersBtn');
        for (i = 0; i < lettersFind; i++) {
            lettersFind += lettersFind + position;
        };

        // Win:
        if (winPts === arrayWord.length) {
            alert("Félicitations, vous avez gagner !");
            window.location.reload();
        }
        // Correct letter:
        else if (arrayWord.indexOf(valeursButtons.innerHTML) >= 0 && (lettersFind.innerHTML === valeursButtons.innerHTML)){
            winPts++;
            lettersFind.innerHTML = valeursButtons.innerHTML;
        }
        // Loose:
        else {
            penduImage(life);
            life --;

            if (life === 0) {
                alert("Oups, vous avez perdu ! Le mot étais: " + randomWord);
                window.location.reload();
            }
        }
    })
}

// choice word :
let choiceBtn = document.getElementById('choiceWord');
choiceBtn.addEventListener('click', function () {
    window.location.reload();
});


