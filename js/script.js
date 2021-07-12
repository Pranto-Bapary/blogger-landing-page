$(document).ready(function () {

    // Carousel for Different Breakpoints
    const responsive = {
        0: {
            items: 1,
        },
        320: {
            items: 1,
        },
        560: {
            items: 2,
        },
        960: {
            items: 3,
        }
    }

    // jQuery Variables
    $nav = $(".nav")
    $toggleCollapse = $(".toggle-collapse")

    // click event on toggle menu
    $toggleCollapse.click(function () {
        $nav.toggleClass('collapse')
    })

    // Owl Carousel for Blog Post
    $('.owl-carousel').owlCarousel({
        loop: true,
        responsiveClass: true,
        autoplay: true,
        autoplayTimeout: 3000,
        nav: true,
        dots: false,
        navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
        responsive: responsive
    })

    // Scroll to Top
    $('.moveup span').click(function () {
        $('html, body').animate({
            scrollTop: 0,
        }, 1000)
    })

    // Typed JS
    var typed = new Typed('.animate', {
        strings: [
            "Visit Beautiful Places",
            "Amazing Places of The Earth",
            "Lost in Natural Beauty",

        ],
        typeSpeed: 50,
        backSpeed: 45,
        loop: true
    });

    // Animate On Scroll
    AOS.init();

    // One page nav
    $('#nav').onePageNav();

})

// Toggle Hamburger Icon
const menuBtn = document.querySelector('.menu-btn')
let menuOpen = false
menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        menuBtn.classList.add('open')
        menuOpen = true
    } else {
        menuBtn.classList.remove('open')
        menuOpen = false
    }
});


// Add box shadow to the nav while scrolling
function scrollHeader() {
    const nav = document.querySelector('.nav')
    if (this.scrollY >= 100) nav.classList.add('scroll-header')
    else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)