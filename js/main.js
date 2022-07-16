AOS.init();

AOS.init({
    once: true
});

$(document).ready(function () {
    $(this).scrollTop(0);
});

const button = document.querySelector("#menu-button");
const menu = document.querySelector("#menu");

button.addEventListener("click", () => {
    menu.classList.toggle("hidden");
});

window.onscroll = function () {
    var distanceScrolled = document.documentElement.scrollTop;
    console.log(distanceScrolled)
    // Navbrand
    distanceScrolled > 632 ? $("#nav").addClass("text-white") : $("#nav").removeClass("text-white");
    // Navlink
    distanceScrolled > 632 ? $("#navlink").addClass("text-white") : $("#navlink").removeClass("text-white");
    // Bg Nav
    distanceScrolled > 632 ? $("#coreNav").removeClass("bg-white/50") : $("#coreNav").addClass("bg-white/50");
    // Toggle Nav
    distanceScrolled > 632 ? $("#menu-button").addClass("text-white") : $("#menu-button").removeClass("text-white");
    // Contact Us
    distanceScrolled > 1295 ? $("#nav").removeClass("text-white") : $("#nav").addClass("text-zinc-900");
    distanceScrolled > 1295 ? $("#navlink").removeClass("text-white") : $("#navlink").addClass("text-zinc-900");
}

// Swiper Js
const swipe = new Swiper('.swiper', {
    speed: 1000,
    autoplay: {
        delay: 5000,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});


