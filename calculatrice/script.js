const result = document.getElementById("result");
const buttons = document.querySelectorAll('#calculator :not(#delete, #equal)');

for(const button of buttons) {
    //delete space
    button.addEventListener('click', e => result.innerHTML += e.target.innerText.trim());
}
// click calculator buttons
document.querySelector("#reset").addEventListener("click", e => result.innerText = " ");
document.querySelector("#equal").addEventListener("click", e =>  result.innerHTML = eval(result.innerHTML));
document.querySelector("#delete").addEventListener("click", e =>
    result.innerText = result.innerHTML.slice(0, result.innerHTML.length - 1)
);

// copy to clipboard
document.querySelector("#copy").addEventListener("click",  e => {
    // Range object creation ( contains nodes portions )
    const range = document.createRange();
    range.selectNode(result); // Result text selection
    window.getSelection().addRange(range);
    if(document.execCommand('copy')){
        alert("Copié!");
    }
});
