let calculateBtn = document.getElementById("calculate");
let resetBtn = document.getElementById("reset");

let active = false;
let somme = 0;

// the fct starts as soon as you click on the btn (calculateBtn)
function checkButton() {
    calculateBtn.addEventListener("mouseup",function (){
        if(!active) {
            somme = 0;
            active = checkInputValue();
        }
    });
    resetBtn.addEventListener("mouseup",function (){
        somme = 0;
        let inputTab = document.getElementsByTagName("input");
        for(let value of inputTab){
            value.value = "";
            value.style.border = " 3px solid darkblue";
        }
        document.getElementById("resultAll").innerHTML = "";
    });
}

//// the function checks if all the boxes are filled
function checkInputValue() {
    let inputTab = document.getElementsByTagName("input");
    let tabValueToPlace = [];
    for(let value of inputTab){
        if(value.value !== "" && !isNaN(parseInt(value.value))){
            if(
                value.placeholder.includes("Salaire") ||
                value.placeholder.includes("Aides") ||
                value.placeholder.includes("Rentes") ||
                value.placeholder.includes("Autres") ||
                value.placeholder.includes("Epargne")
            ) {
                somme += parseFloat(value.value);

            }
            else {
                somme -= parseFloat(value.value);
            }
            value.style.border = "none";
        }
        else if(value.value === "" || isNaN(parseInt(value.value))) {
            tabValueToPlace.push(value.placeholder)
            value.style.border = "5px solid red"
            value.value = "";
        }
    }
    if(tabValueToPlace.length !== 0){
        showBoxToPlace(tabValueToPlace);
        return true
    }
    else {
        showResult();
    }
}
//if all the boxes are completed then the alert appears
function showBoxToPlace() {
    let div = document.createElement("div");
    alert("Vous devez compléter toutes les cases!")
    div.id = "toPlace";
    document.body.append(div);
}

//it is the result of all the calculations
function showResult(){
    let message;
    let div = document.getElementById("resultAll");
    if(somme < 0){
        message = "Vous etes dans le negatif ! Vous devez : "
    }
    else {
        message = "Vous avez actuelement : "
    }
    div.innerHTML = message + "<br>" + parseFloat(somme) + "€";
    div.style.cssText = "font-size:20px;font-weight:bold";
}

checkButton();