let rules = document.getElementById("rules");
let canvas = document.getElementById("canvas");
let letters = document.getElementById("letters");
let game = document.getElementById("game");
let easy = document.getElementById("easy");
let normal = document.getElementById("normal");
let hard = document.getElementById("hard");
let input = document.createElement("input");
let enter = document.createElement("button");
let tentative = document.createElement("p");
let array =[
    'métal',
    'musique',
    'ordinateur',
    'ravel',
    'myrtille',
    'thé',
    'pâtisserie',
    'bois',
    "Pitaya",
    "cacahuètes",
    "mangoustan",
    "oignons",
    "carambole",
    "anone",
    "physalis",
    "boulangerie",
    "ingénieur",
    "cycliste",
    "café",
    "mochi",
    "sésame"
];

let wordLettres = [];
let wordLettresR = [];
let point = 5;
let wordPin = document.createElement("p");

wordPin.id = "wordPin"
game.append(wordPin);

rules.innerHTML = "Quelques régles: " + "<br><br>" + "Vous pouvez choisir la difficulté que vous voulez (facile: 10, normal: 5, difficile: 3)." + "<br><br>" + "Bonne chance !";
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
 // Start the game and initializes the variables
 */
function gameOn(point) {
    let img = document.createElement("img");
    img.style.width = "100%";
    img.style.height = "265px";
    img.src = "un/canvas.js";
    canvas.append(img);
    let points = point;
    let win = 0;
    tentative.innerHTML = "Nombre de tentavive: " + points;
    let num = random();
    let word = array[num];
    wordLettresR.splice(0, wordLettresR.length);
    for(let x = 0; x < word.length; x++) {
        wordLettresR.push(word.substring(x, (x+1)));
    }
    wordChoice(num);
    choice(word, points, img, win, point);
}

/**
 // Create a random number
 */
function random() {
    return  Math.trunc(Math.random() * array.length);
}

/**
 // Choice a random word
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
 //Reset the game for the next game
 */
function reset(point) {
    canvas.removeChild(canvas.lastElementChild);
    wordPin.innerHTML = "";
    letters.innerHTML = "lettres utilisées :" + "<br><br>";
    gameOn(point);
}

/**
 //Manages the various buttons and conditions for win or loose
 */
function choice(word, points, img, win, point) {

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
                image(points, img);
            }
            tentative.innerHTML = "Nombre de tentavive: " + points;
            wordPin.innerHTML = "";
            for(let y = 0; y < word.length; y++) {
                wordPin.innerHTML += wordLettres[y];
            }
            if(points === 0) {
                alert("Vous avez perdu !");
                remove(point);
            }
            else if(win === word.length) {
                alert("Félicitation, vous avez gagné !");
                remove(point);
            }
        }
    }
    enter.addEventListener("click", test);

    /**
     //Easy mode of the game
     */
    let easyGame = function () {
        point = 10;
        remove(point);
    }

    easy.addEventListener("click", easyGame);

    /**
     //Normal mode of the game
     */
    let normalGame = function () {
        point = 5;
        remove(point);
    }

    normal.addEventListener("click", normalGame);

    /**
     //Hard mode of the game
     */
    let hardGame = function () {
        point = 3;
        remove(point);
    }

    hard.addEventListener("click", hardGame);

    /**
     //Remove addEvent for the various buttons and reset the game
     */
    function remove(point) {
        reset(point,test);
        easy.removeEventListener("click", easyGame);
        enter.removeEventListener("click", test);
        normal.removeEventListener("click", normalGame);
        hard.removeEventListener("click", hardGame);
    }
}
