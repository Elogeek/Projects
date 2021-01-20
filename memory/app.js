// Cards patterns numbered from 1 to 10
let themeCards = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10];

// Cards states: 0: face down / 1: face up/ -1: removed
let statCards = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

// Contains the numbers of returned cards
let returnCards = [];

// Contains the number of pairs of cards that have already been found
let nbPairsFind = 0;

//executes each time the user clicks on the image, its role is to call controlGame with the number of the clicked image. //
let imgCards = document.getElementById("game-area").getElementsByTagName("img");

for(let i = 0; i < imgCards.length;i++) {
    imgCards[i]["noCarte"] = i;
    imgCards[i].addEventListener('click', function() {
        controlGame(i);
    });
}

function displayCards(noCarte) {
    switch (statCards[noCarte]) {
        //face down cards//
        case 0 :
            imgCards[noCarte].src = "./images/carteFond.jpg";
            break;
        //returned cards//
        case 1 :
            imgCards[noCarte].src = "images/images" + themeCards[noCarte] + ".jpg";
            break;
        //cards found => invisible cards//
        case -1 :
            imgCards[noCarte].style.visibility = "hidden";
            break;
    }
    
}

// shuffle card pattern numbers//
function initGame(){
    for(let position = themeCards.length-1; position >= 1; position--){
        let hazard= Math.floor(Math.random() * (position + 1));
        let safe = themeCards[position];
        themeCards[position] = themeCards[hazard];
        themeCards[hazard] = safe;
    }
}

// Init game
initGame();

/**
 * Game control, if two cards are turned over and the same ones then they disappear
 * @param noCarte
 */
function controlGame(noCarte) {

    if(returnCards.length < 2) {

        if(statCards[noCarte] === 0) {
            statCards[noCarte] = 1;
            returnCards.push(noCarte);
            displayCards(noCarte);
        }

        if(returnCards.length >= 2){
            let newState = 0;
            if(themeCards[returnCards[0]] === themeCards[returnCards[1]]){
                newState = -1;
                nbPairsFind++;
            }

            statCards[returnCards[0]] = newState;
            statCards[returnCards[1]] = newState;

            setTimeout(() => {
                displayCards(returnCards[0]);
                displayCards(returnCards[1]);

                returnCards = [];
                if (nbPairsFind === 10) {
                    setTimeout(() => {replay()}, 750);
                }
            }, 750);
        }
    }

}

/**
 * Display the won message and reload the game once ok clicked.
 */
function replay() {
    alert("Bravo !");
    location.reload();
}

// Tout est ok pour une version test !!!!