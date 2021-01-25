let words = [
    "CHEVRE",
    "CHEVAL",
    "RACLETTE",
    "BOLOGNAISE",
    "METROPOLE",
    "MONTAGNE",
    "METEQUE",
    "VACHE",
    'METAL',
    'MUSIQUE',
    'ORDINATEUR',
    'RAVEL',
    'MYRTILLE',
    'THE',
    'PATISSERIE',
    'BOIS',
    "PITAYA",
    "CACAHUETES",
    "MANGOUSTAN",
    "OIGNONS",
    "CARAMBOLE",
    "ANONE",
    "PHYSALIS",
    "BOULANGERIE",
    "INGENIEUR",
    "MAISON",
    "CAFE",
    "MOCHI",
    "SESAME",
    "HOTEL",
    "TELEPHONE",
    "TELEVISION",
    "FEUILLE",
    "CROISSANT"
]

let life = 7;

// Select a random Words:
function getRandom(){
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
img.style.height = "100%";

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

        let position = arrayWord.indexOf(valeursButtons.innerHTML);
        //problème la lettre qui apparait +sieurs fois  ne s'affiche pas!!!!//
        let idButton = document.getElementById('letter'+position);

        // Win:
        if (winPts === arrayWord.length){
            alert("Félicitations, vous avez gagner !");
            window.location.reload();
        }
        // Correct letter:
        else if (arrayWord.indexOf(valeursButtons.innerHTML) >= 0 && (idButton.innerHTML !== valeursButtons.innerHTML)){
            winPts++;
            idButton.innerHTML = valeursButtons.innerHTML;
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

choiceBtn.addEventListener('click', function (){
    window.location.reload();
})


