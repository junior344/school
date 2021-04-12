// ------------------------------------menu responsive------------------------------------------

const btnMenu = document.querySelector('.logo-menu');
const menu = document.querySelector('.liste-nav');

btnMenu.addEventListener('click', function() {
    menu.classList.toggle('active');
})


const allLinks = document.querySelectorAll('.item-nav');

allLinks.forEach(function(item) {

        item.addEventListener('click', function() {
            menu.classList.toggle('active');
        })

    })
    //----------------------------------------------- slides --------------------------------------

const slide = document.querySelectorAll('.slide'),
    dot = document.querySelectorAll('.dot');
let counter = 1;
slidefun(counter);

let timer = setInterval(autoslide, 8000);

function autoslide() {
    counter += 1;
    slidefun(counter);
}

function plusSlides(n) {
    counter += n;
    slidefun(counter);
    resetTimer();
}

function currentSlide(n) {
    counter = n;
    slidefun(counter);
    resetTimer();
}

function resetTimer() {
    clearInterval(timer);
    timer = setInterval(autoslide, 8000);
}

function slidefun(n) {
    let i;
    for (i = 0; i < slide.length; i++) {
        slide[i].style.display = "none";
    }
    for (i = 0; i < dot.length; i++) {
        dot[i].classList.remove('active')
    }
    if (n > slide.length) {
        counter = 1;
    }
    if (n < 1) {
        counter = slide.length;
    }
    slide[counter - 1].style.display = "block";
    dot[counter - 1].classList.add('active');
}

//-----------------------------------smooth scroll-------------------------------------------------------

function smoothScroll(target, duration) {
    var target = document.querySelector(target);
    var targetPosition = target.getBoundingClientRect().top;
    var startPosition = window.pageXOffset;
    var distance = targetPosition - startPosition;
    var startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        var timeElapsed = currentTime - startTime;
        var run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);

        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 2) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);

}



var section = document.querySelector('.reglement');
var section1 = document.querySelector('.contact');
var section2 = document.querySelector('.entete');



section2.addEventListener('click', function() {
    smoothScroll('#entete', 1000);
});
section.addEventListener('click', function() {
    smoothScroll('#reglement', 2000);
});
section1.addEventListener('click', function() {
    smoothScroll('#contact', 3000);
});

//--------------------------------------------fleche vers le haute --------------------

