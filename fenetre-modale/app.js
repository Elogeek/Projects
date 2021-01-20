/*make overlay*/
let button = document.querySelector('#button').addEventListener("click", function (event) {
    let div = document.createElement('div');
    div.id = "overlay";
    div.style.position = "absolute";
    div.style.top = "0";
    div.style.left = "0";
    div.style.zIndex = "10";
    div.style.backgroundColor = "rgba(204,204,204,0.72)";
    div.style.width = "100%";
    div.style.height = "100vh";
    document.body.append(div);

    /* my window*/
    let div2 = document.createElement("div");
    div2.id = "window";
    div2.style.backgroundColor = "white";
    div2.style.position = "absolute";
    div2.style.zIndex = "15";
    div2.style.left = "30%";
    div2.style.height = "50vh";
    div2.style.width = "50%";
    div2.innerHTML = " Blabla, lorem ..... voilà ma fenêtre modale! Je la trouve super coooool! ";
    document.body.appendChild(div2);

    /*my button*/
    let closed = document.createElement("button");
    closed.id = "button-close";
    closed.innerHTML = " Fermer la fenêtre";
    closed.style.zIndex = "15";
    div2.appendChild(closed);

    /*closed my window*/
    closed.addEventListener("click", function (event) {
        div.remove();
        div2.remove();
    });
});


