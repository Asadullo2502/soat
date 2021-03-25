var soat = document.querySelector('#soat');
var minut = document.querySelector('#minute');
var sekund = document.querySelector('#secund');
var deg = 6;



function soaterator() {
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * deg; 
    let ss = day.getSeconds() * deg;

    soat.style.transform = `rotateZ(${(hh)+(mm/12)}deg)`;   
    minut.style.transform = `rotateZ(${mm}deg)`;
    sekund.style.transform = `rotateZ(${ss}deg)`;
}

setInterval(() => {
    soaterator();
}, 1000);

soaterator();

