//start the game

let title = document.getElementById("title");
let rules = document.getElementById("rules");
let begin = document.getElementById("begin");
let logo = document.getElementById("logo");
let poubelle = document.getElementById("poubelle");
let dechets = document.getElementById("dechets");

function game(){
    title.style.display = "none";
    rules.style.display = "none";
    begin.style.display = "none";
    logo.style.display = "none";
    poubelle.style.display = "flex";
    dechets.style.display ="flex";
    game.reload();
    // requête jSON
    //ouverture poubelle pour animer un peu le jeu?!
}

begin.addEventListener("click", game);

