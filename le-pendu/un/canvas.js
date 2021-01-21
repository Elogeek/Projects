let canvas = document.querySelector('#canvas');
let context = canvas.getContext('2d');

(function() {
    //1st line
    context.beginPath();
    context.moveTo(60, 150);
    context.lineTo(210, 150);
    context.stroke();

    //2nd line
    context.beginPath();
    context.moveTo(90, 150);
    context.lineTo(90, 30);
    context.stroke();

    //3rd line
    context.beginPath();
    context.moveTo(90, 30);
    context.lineTo(170, 30);
    context.stroke();

    //4th line -- rope
    context.beginPath();
    context.moveTo(170, 30);
    context.lineTo(170, 40);
    context.stroke();

})(); // end of the anonym function that draws the gallow

function head() {
    //5th line -- head
    context.beginPath();
    context.arc(170, 50, 10, 0, Math.PI * 2);
    context.stroke();
}

function body() {
    //6th line -- body
    context.beginPath();
    context.moveTo(170, 60);
    context.lineTo(170, 100);
    context.stroke();
}

function right_arm() {
    //7th line -- right arm
    context.beginPath();
    context.moveTo(170, 70);
    context.lineTo(190, 80);
    context.stroke();
}

function left_arm() {
    //8th line -- left arm
    context.beginPath();
    context.moveTo(170, 70);
    context.lineTo(150, 80);
    context.stroke();
}

function right_leg() {
    //9th line -- right leg
    context.beginPath();
    context.moveTo(170, 100);
    context.lineTo(190, 110);
    context.stroke();
}

function left_leg() {
    //9th line -- right leg
    context.beginPath();
    context.moveTo(170, 100);
    context.lineTo(150, 110);
    context.stroke();
}

let hang_the_man = [
    left_leg,
    right_leg,
    left_arm,
    right_arm,
    body,
    head
];



