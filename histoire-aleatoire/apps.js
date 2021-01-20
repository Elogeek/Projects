document.getElementById("button1").addEventListener("click", function() {
    let nameCook = ["Jiro Ono", "Nobuyuki Matsuhisa", "Niki Nakayama ", "Magnus Nilson", "Grant Achatz", "Massimo Bottura"];
    let object = [" une raquette de tennis de table", " du papier toilette", "l'ordinateur", " l'aquarium", " une tong", "ma mère", " une scie", " un vélo"];
    let places = ["de la cabane", " du restaurant", " du chalet", " du restaurant sous-terrain", " de la boule (un restaurant aérien)"," du wagon restaurant"];
    let city = ["Grenoble", "Paris", "Reims", "Osaka", "Gorges du Verdon", "Tokyo"];
    let verb = ["mangé", "bu", "dormi", "découpé", "déféqué", "vomi", "hurlé", "cassé"];
    let name = document.getElementById("input1").value;
    nameCook = nameCook[Math.floor(Math.random() * nameCook.length)];
    object = object[Math.floor(Math.random() * object.length)];
    places = places[Math.floor(Math.random() * places.length)];
    city = city[Math.floor(Math.random() * city.length)];
    verb = verb[Math.floor(Math.random() * verb.length)];

    let container = document.getElementById("container");
    let textDiv = document.createElement("div");
    textDiv.innerHTML = "Bonjour, je m'appelle " + name + ", hier, nous étions en voyage. C'était les vacances. On est parti en famille à "
        + city + ". Les enfants étaint affamés. Au loin on voyait l'affiche  " + places + " où cuisinait " + nameCook
        + ". Tout à coup,  " + object + " est sorti du coffre! Je l' ai/J'ai " + verb + " dessus et laissé là !";
    container.appendChild(textDiv);
});