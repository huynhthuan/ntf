// Mmenu
let menu = new MmenuLight(document.querySelector('#menu'), '(max-width: 768px)');

let navigator = menu.navigation({
    selectedClass: 'Selected',
    slidingSubmenus: true,
    title: 'Menu',
});

let drawer = menu.offcanvas({
    // position: 'left'
});

//	Open the menu.
$('.toggle-menu').click(function () {
    drawer.open();
    $(this).addClass('active');
});

$('.mm-ocd__backdrop').click(function () {
    $('.btn-toggle-menu').removeClass('active');
});

// Sticky menu
var sticky = new Waypoint.Sticky({
    element: $('.header')[0],
});

document.onscroll = function (e) {
    if ($('.header').offset().top !== 0) {
        $('.header.stuck').css('background', '#090056');
        $('.header.stuck').css('padding', '10px 0');
    } else {
        $('.header.stuck').css('background', 'transparent');
        $('.header.stuck').css('padding', '50px 0');
    }
};

//Animation
var banner1 = bodymovin.loadAnimation({
    container: document.getElementById('banner-ani-1'), // Required
    path: './animation/banner1/data.json', // Required
    renderer: 'svg', // Required
    loop: true, // Optional
    autoplay: true, // Optional
});

var banner2 = bodymovin.loadAnimation({
    container: document.getElementById('banner-ani-2'), // Required
    path: './animation/banner2/data.json', // Required
    renderer: 'svg', // Required
    loop: true, // Optional
    autoplay: true, // Optional
});

var banner3 = bodymovin.loadAnimation({
    container: document.getElementById('banner-ani-3'), // Required
    path: './animation/banner3/data.json', // Required
    renderer: 'svg', // Required
    loop: true, // Optional
    autoplay: true, // Optional
});

var banner4 = bodymovin.loadAnimation({
    container: document.getElementById('banner-ani-4'), // Required
    path: './animation/banner4/data.json', // Required
    renderer: 'svg', // Required
    loop: true, // Optional
    autoplay: true, // Optional
});

var aboutAnimation = bodymovin.loadAnimation({
    container: document.getElementById('about-animation'), // Required
    path: './animation/animation5/data.json', // Required
    renderer: 'svg', // Required
    loop: true, // Optional
    autoplay: true, // Optional
});

// var tokenAnimation = bodymovin.loadAnimation({
//     container: document.getElementById('token-animation'), // Required
//     path: './animation/animation6/data.json', // Required
//     renderer: 'svg', // Required
//     loop: true, // Optional
//     autoplay: true, // Optional
// });

var footer1 = bodymovin.loadAnimation({
    container: document.getElementById('footer-animation-1'), // Required
    path: './animation/animation7/data.json', // Required
    renderer: 'svg', // Required
    loop: true, // Optional
    autoplay: true, // Optional
});

var footer2 = bodymovin.loadAnimation({
    container: document.getElementById('footer-animation-2'), // Required
    path: './animation/animation8/data.json', // Required
    renderer: 'svg', // Required
    loop: true, // Optional
    autoplay: true, // Optional
});
