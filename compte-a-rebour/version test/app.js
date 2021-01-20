jQuery(function($){
    let dated = new Date(2021, 12, 30, 0, 0, 0, 0);
    let days = $('#days');
    let hours = $('#hours');
    let minutes = $('#minutes');
    let seconds = $('#seconds');

    setDate();
    function setDate(){
        //starting today
        let now = new Date();
        let s = (dated.getTime() - now.getTime())/1000;
        let d = Math.floor(s / 86400);
        days.html('<strong>'+ d +'</strong> Jour'+(d > 1 ? 's':''));
        s -= d * 86400;
        /*calculation of hours*/
        let h = Math.floor(s/3600);
        hours.html('<strong>'+h+'</strong> Heure'+(h > 1 ? 's':''));
        s -= h * 3600;
        /*calculation of minutes*/
        let m = Math.floor(s/60);
        minutes.html('<strong>'+ m +'</strong> Minute'+(m > 1 ? 's':''));
        s -= m * 60;
        /*calculation of seconds*/
        s = Math.floor(s);
        seconds.html('<strong>'+ s +'</strong> Seconde'+(m > 1 ? 's':''));
        //timer//
        setTimeout(setDate, 1000);
    }
});