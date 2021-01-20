let secondsNeedle = document.getElementById("seconds");
let minutesNeedle = document.getElementById("minutes");
let hoursNeedle = document.getElementById("hours");

//Operation of the hands every 1000 milliseconds
setInterval(function(){
        //here I get the current date
        let dateNow = new Date();
        //now you have to retrieve the seconds / minutes / hours of the current date
        let seconds = dateNow.getSeconds();
        let minutes = dateNow.getMinutes();
        let hours = dateNow.getHours();

        //The seconds hand rotate 360deg in the clock, every 60s
        let secondsTime = ((seconds / 60) * 360);
        secondsNeedle.style.transform = "rotate(" + (secondsTime) + "deg)";

        /* the minute hand turns 360 deg in the clock, every 60 minutes according to the seconds
        and advances each time 1min passes */
        let minutesTime = ((minutes / 60) * 360) + (seconds / 60);
        minutesNeedle.style.transform = "rotate(" + (minutesTime) + "deg)";

        /* the hour hand turns 360 deg in the clock,
         every 12 hours depending on the minutes and advances each time 1 hour passes */
        let hoursTime = ((hours / 12) * 360) + (minutes / 60 );
        hoursNeedle.style.transform = "rotate(" + (hoursTime) + "deg)";

        //The current time
        document.getElementById("time").innerHTML = new Date().toLocaleTimeString();
        //The current date
        document.getElementById("date").innerHTML = new Date().toLocaleDateString();
    }
    ,1000);