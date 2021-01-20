let rules = document.getElementById("rules");
let pendu = document.getElementById("div");
let letters = document.getElementById("letters");
let game = document.getElementById("game");
let easy = document.getElementById("easy");
let middle = document.getElementById("middle");
let hard = document.getElementById("hard");
let input = document.createElement("input");
let enter = document.createElement("button");
let tentative = document.createElement("p");
let array =["Pitaya", "cacahuètes","mangoustan", "oignons", "carambole", "anone", "physalis", "école", "médecin", "cycliste", "café", "mochi", "sésame", "bureau"];
let wordLettres = [];
let wordLettresR = [];
let point = 5;
let wordPin = document.createElement("p");

wordPin.id = "wordPin";
game.append(wordPin);

rules.innerHTML = "Quelques instructions: " + "<br><br>" + "Vous pouvez choisir la difficulté que vous voulez." + "<br><br>" + "Bonne chance !";
letters.innerHTML = "lettres ayant échouées :" + "<br><br>";
gameOn(point)

tentative.id = "tentative";
game.append(tentative);
input.id = "input";
input.pattern ="[a-z]{1}"
enter.id = "enter";
enter.innerHTML = "Entrer";
game.append(input);
game.append(enter);

/**
 // je commence le jeu
 */


/**
 // je crée un number random
 */
function random() {
    return  Math.trunc(Math.random() * array.length);
}

/**
 // je crée une function qui choisi un mot aléatoire par rapport au nombre
 */
function wordChoice(random) {
    let word = array[random];
    wordLettres.splice(0, wordLettres.length);
    for(let x = 0; x < word.length; x++) {
        wordPin.innerHTML += "_ ";
        wordLettres.push("_ ")
    }
}

/**
 //ici, je réinitialise pour la prochaine partie
 */
function reset(point) {
    pendu.removeChild(pendu.lastElementChild);
    wordPin.innerHTML = "";
    letters.innerHTML = "lettres utilisées :" + "<br><br>";
    gameOn(point);
    pendu.append(canvas);
    let points = point;
    let win = 0;
    tentative.innerHTML = "" +
        "Saissisez une lettre" + " , " + " nombre de tentavive: " + points;
    let num = random();
    let word = array[num];
    wordLettresR.splice(0, wordLettresR.length);
    for(let x = 0; x < word.length; x++) {
    wordLettresR.push(word.substring(x, (x+1)));
}
wordChoice(num);
choice(word, points, canvas, win, point);
}

/**
 //mtnt, il faut gèrer les différents boutons et conditions pour gagner ou perdre
 */
function choice(word, points, canvas, win, point) {

    let test = function() {
        if(input.value.length === 1) {
            let essay = input.value;
            let length = 0;
            input.value = "";
            letters.innerHTML += essay + "<br>";
            for(let x = 0; x < word.length; x++) {
                if((essay.toLowerCase() === wordLettresR[x].toLowerCase()) && wordLettres[x] === "_ ") {
                    wordLettres.splice(x, 1, (essay + " "));
                    win++
                }
                else {
                    length++
                }
            }
            if(length === word.length) {
                points--;
                image(points, canvas);
            }
            tentative.innerHTML = "Nombre de tentavive: " + points;
            wordPin.innerHTML = "";
            for(let y = 0; y < word.length; y++) {
                wordPin.innerHTML += wordLettres[y];
            }
            if(points === 0) {
                alert("Perdu");
                remove(point);
            }
            else if(win === word.length) {
                alert("Gagné");
                remove(point);
            }
        }
    }
    enter.addEventListener("click", test);

    /**
     //le mode easy
     */
    let easyGame = function () {
        point = 10;
        remove(point);
    }

    easy.addEventListener("click", easyGame);

    /**
     //le mode moyen
     */
    let middleGame = function () {
        point = 5;
        remove(point);
    }

    middle.addEventListener("click", middleGame);

    /**
     //le mode hard
     */
    let hardGame = function () {
        point = 3;
        remove(point);
    }

    hard.addEventListener("click", hardGame);

    /**
     // ici, je Supprime addEvent pour les différents boutons et réinitialiser le jeu
     */
    function remove(point) {
        reset(point,test);
        easy.removeEventListener("click", easyGame);
        enter.removeEventListener("click", test);
        middle.removeEventListener("click", middleGame);
        hard.removeEventListener("click", hardGame);
    }
}

// mtnt je crée le bonhomme
