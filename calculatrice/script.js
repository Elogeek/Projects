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

document.querySelector("#reset").addEventListener("click", e => result.innerText = " ");
document.querySelector("#equal").addEventListener("click", e =>  result.innerHTML = eval(result.innerHTML));
document.querySelector("#delete").addEventListener("click", e =>
    result.innerText = result.innerHTML.slice(0, result.innerHTML.length - 1)
);

// Dans le presse papier.
document.querySelector("#copy").addEventListener("click",  e => {
    // Range object creation ( contains nodes portions )
    const range = document.createRange();
    range.selectNode(result); // Result text selection
    window.getSelection().addRange(range);
    if(document.execCommand('copy')){
        alert("Copié!");
    }
});




