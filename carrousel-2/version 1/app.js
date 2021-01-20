let div = document.createElement("img");
let image = "images/image.jpg";
let image1 = "images/image1.jpg";
let image2 = "images/image2.jpg";
let image3 = "images/image3.jpg";
let image4 = "images/image4.jpg";
let image5 = "images/image5.jpg";
let image6 = "images/image6.jpg";
let image7 = "images/image7.jpg";
let image8 = "images/image8.jpg";
let array = [image,image1, image2, image3, image4, image5,image6,image7, image8];

document.body.append(div);
div.className = "image";
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