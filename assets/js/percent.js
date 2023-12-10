document.addEventListener('DOMContentLoaded', function(){
    let counter = 0;
    let load = 0;
    const i = setInterval(function() {
        document.querySelector(".number h2").innerHTML = `${load}%`;
        counter++;
        load++;
        if (counter == 71) {
            clearInterval(i);
        }
    }, 28);
});

document.addEventListener('DOMContentLoaded', function(){
    let counter = 0;
    let load = 0;
    const i = setInterval(function() {
        document.querySelector(".css h2").innerHTML = `${load}%`;
        counter++;
        load++;
        if (counter == 61) {
            clearInterval(i);
        }
    }, 32);
});

document.addEventListener('DOMContentLoaded', function(){
    let counter = 0;
    let load = 0;
    const i = setInterval(function() {
        document.querySelector(".js h2").innerHTML = `${load}%`;
        counter++;
        load++;
        if (counter == 11) {
            clearInterval(i);
        }
    }, 170);
})
;
document.addEventListener('DOMContentLoaded', function(){
    let counter = 0;
    let load = 0;
    const i = setInterval(function() {
        document.querySelector(".sql h2").innerHTML = `${load}%`;
        counter++;
        load++;
        if (counter == 31) {
            clearInterval(i);
        }
    }, 70);
});
document.addEventListener('DOMContentLoaded', function(){
    let counter = 0;
    let load = 0;
    const i = setInterval(function() {
        document.querySelector(".photoshop h2").innerHTML = `${load}%`;
        counter++;
        load++;
        if (counter == 51) {
            clearInterval(i);
        }
    }, 40);
});
document.addEventListener('DOMContentLoaded', function(){
    let counter = 0;
    let load = 0;
    const i = setInterval(function() {
        document.querySelector(".humour h2").innerHTML = `${load}%`;
        counter++;
        load++;
        if (counter == 101) {
            clearInterval(i);
        }
    }, 20);
});

$(document).ready(function () {
    
    if ($(window).width() > 1100) {
        $("nav").on('mouseleave', function () {
            $("nav").slideUp("2000", function () {
                $(".vide").fadeIn("slow")
            })
        })

        $(".vide").on('mouseover', function () {
            $(".vide").fadeOut("slow", function () {
                $("nav").slideDown("2000")
            })
        })
    }
    
   
})