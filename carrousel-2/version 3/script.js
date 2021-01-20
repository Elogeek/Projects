let div = document.createElement("img");

let image = "images/image1.jpg";
let image1 = "images/image2.jpg";
let image2 = "images/image3.jpg";
let image3 = "images/image4.jpg";
let image4 = "images/image5.jpg";
let image5 = "images/image6.jpg";
let image6 = "images/image7.jpg";
let image7 = "images/image8.jpg";
let image8 = "images/image9.jpg";
let image9 = "images/image10.jpg";
let image10 = "images/image11.jpg";
let image11 = "images/image12.jpg";
let image12 = "images/image13.jpg";
let image13 = "images/image14.jpg";
let image14 = "images/image15.jpg";
let image16 = "images/image16.jpg";
let image17 = "images/image17.jpg";
let image18 = "images/image18.jpg";

let array = [
    image,
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
    image14,
    image16,
    image17,
    image18
];

let myDiv = document.querySelector(".image");
myDiv.appendChild(div);

let x = 0;
function carousel() {
    let time = setTimeout(function () {
        div.src = array[x];
        x++
        if(x === array.length) {
            x = 0;
        }
        carousel()
    }, 3000)
}

carousel()


