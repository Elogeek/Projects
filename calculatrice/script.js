let result = document.getElementById("result");

document.getElementById("chiffre1").addEventListener("click", function () {
    result.innerText = result.innerHTML + 1;
});

document.getElementById("chiffre2").addEventListener("click", function () {
    result.innerText = result.innerHTML + 2;
});

document.getElementById("chiffre3").addEventListener("click", function () {
    result.innerText = result.innerHTML + 3;
});

document.getElementById("chiffre4").addEventListener("click", function () {
    result.innerText = result.innerHTML + 4;
});

document.getElementById("chiffre5").addEventListener("click", function () {
    result.innerText = result.innerHTML + 5;
});

document.getElementById("chiffre6").addEventListener("click", function () {
    result.innerText = result.innerHTML + 6;
});

document.getElementById("chiffre7").addEventListener("click", function () {
    result.innerText = result.innerHTML + 7;
});

document.getElementById("chiffre8").addEventListener("click", function () {
    result.innerText = result.innerHTML + 8;
});

document.getElementById("chiffre9").addEventListener("click", function () {
    result.innerText = result.innerHTML + 9;
});

document.getElementById("chiffre0").addEventListener("click", function () {
    result.innerText = result.innerHTML + 0;
});

document.getElementById("plus").addEventListener("click", function () {
    result.innerText = result.innerHTML + "+";
});

document.getElementById("moins").addEventListener("click", function () {
    result.innerText = result.innerHTML + "-";
});

document.getElementById("diviser").addEventListener("click", function () {
   result.innerText = result.innerHTML + "/";
});

document.getElementById("fois").addEventListener("click", function () {
    result.innerText = result.innerHTML + "*";
});

document.getElementById("parenthese").addEventListener("click", function () {
    result.innerText = result.innerHTML + "(";
});

document.getElementById("parenthese2").addEventListener("click", function () {
   result.innerText = result.innerHTML + ")";
});

document.getElementById("modulo").addEventListener("click", function () {
    result.innerText = result.innerHTML + "%";
});

document.getElementById("virgule").addEventListener("click", function () {
    result.innerText = result.innerHTML + ".";
});

document.getElementById("reset").addEventListener("click", function () {
    result.innerText = " ";
});

document.getElementById("delete").addEventListener("click", function () {
   result.innerText = result.innerHTML.slice(0, result.innerHTML.length - 1);
});

document.getElementById("egal").addEventListener("click", function () {
    result.innerHTML = eval(result.innerHTML);
});

//dans le presse papier, l'événement copy
document.getElementById("copy").addEventListener("click", function () {
    let range = document.createRange();// je crée l'objet range (= segment qui peut contenir des noeuds et des parties de noeuds)
    range.selectNode(result); // Sélection du texte
    window.getSelection().addRange(range);
    try{
    // l'instruction try catch permet de regrouper des instrictions à éxécuter et définit une réponse
    // si l'une de ses instructions provoque une exception
        if(document.execCommand('copy')){
            alert("Bravo, la copie est réussi !");
        }
    window.getSelection().removeAllRanges();
    }catch (error){
        alert("Erreur, la copie n'a pas pu ce faire !");
    }
});




