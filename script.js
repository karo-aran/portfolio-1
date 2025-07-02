let startUpScreen = document.querySelector(".startup-screen");
let startUpBtn = document.querySelector(".startup-btn");

// pokemon screen elements
let pokemon = document.querySelector(".pokemon");
let pokemonBtn = document.querySelector(".pokemon-btn");
let alert2Btn = document.querySelector(".btn2");
let alert3Btn = document.querySelector(".btn3");
let alert4Btn = document.querySelector(".btn4");

// main screen elements
let mainScreen = document.querySelector(".main-screen");
let diamondBtn = document.querySelector(".about-me");
let aboutMeText = document.querySelector(".about-me-text");
let contactsBtn = document.querySelector(".contacts");
let contactsText = document.querySelector(".contacts-text");
let futureBtn = document.querySelector(".future");
let futureText = document.querySelector(".future-text");
let projectsBtn = document.querySelector(".projects");
let projectsText = document.querySelector(".projects-text");

// contact screen elements
let contactScreen = document.querySelector(".contact-screen");
let mainOverlay = document.querySelector(".main-overlay");

//navbar elements
let navbar = document.querySelector(".navbar");
let backBtn = document.querySelector(".back");
let homeBtn = document.querySelector(".home");
let websitesBtn = document.querySelector(".websites");

startUpBtn.addEventListener("click", function() {
    startUpScreen.classList.add('hide');
    pokemon.classList.remove('hide');
    document.body.style.backgroundImage = "url('pokemon.png')";
    document.body.style.backgroundSize = "965px";
    document.body.style.backgroundColor = "#0047B3";
});

//pokemon screen button actions
alert2Btn.addEventListener("click", function() {
    alert("nuh uh, you don't have anything in your bag!");
});

alert3Btn.addEventListener("click", function() {
    alert("you don't have any pokemon yet!");
});

alert4Btn.addEventListener("click", function() {
    alert("where do you think you're going? you can't leave yet!");
});

pokemonBtn.addEventListener("click", function() {
    document.body.style.backgroundImage = "url('mc_inventory.png')";
    document.body.style.backgroundSize = "925px";
    mainScreen.classList.remove('hide');
    diamondBtn.classList.remove('hide');
    aboutMeText.classList.remove('hide');
    contactsBtn.classList.remove('hide');
    contactsText.classList.remove('hide');
    futureBtn.classList.remove('hide');
    futureText.classList.remove('hide');
    projectsBtn.classList.remove('hide');
    projectsText.classList.remove('hide');
    // navbar elements
    navbar.classList.remove('hide');
    backBtn.classList.remove('hide');
    homeBtn.classList.remove('hide');
    websitesBtn.classList.remove('hide');
    // hide pokemon screen elements
    pokemonBtn.classList.add('hide');
    alert2Btn.classList.add('hide');
    alert3Btn.classList.add('hide');
    alert4Btn.classList.add('hide');
});

// contact page button actions
contactsBtn.addEventListener("click", function() {
    mainOverlay.classList.remove('hide');
    contactScreen.classList.remove('hide');
    mainScreen.classList.add('blurred'); // Optional: add blur effect if you want
});
// Hide contact screen and overlay
const contactBackBtn = document.querySelector('.contact-back-btn');
if (contactBackBtn) {
    contactBackBtn.addEventListener("click", function() {
        mainOverlay.classList.add('hide');
        contactScreen.classList.add('hide');
        mainScreen.classList.remove('blurred');
    });
}

// project showcase section
document.addEventListener("DOMContentLoaded", function() {
    const heartItems = document.querySelectorAll('.menu_left_side_down_item');
    const rightSide = document.getElementById('menu_right_side');
    let originalImg = document.getElementById('menu_right_side_img');
    let currentIframe = null;
    let currentPage = null;

    heartItems.forEach(item => {
        item.addEventListener('click', function() {
            const iframeSrc = item.getAttribute('data-iframe');
            // If iframe is already showing this page, toggle back to image
            if (currentIframe && currentPage === iframeSrc) {
                currentIframe.remove();
                originalImg.style.display = '';
                currentIframe = null;
                currentPage = null;
                return;
            }
            // Remove existing iframe if any
            if (currentIframe) {
                currentIframe.remove();
            }
            // Hide the original image
            originalImg.style.display = 'none';
            // Create and insert the iframe
            const iframe = document.createElement('iframe');
            iframe.src = iframeSrc;
            iframe.id = "menu_right_side_img_iframe";
            iframe.style.width = originalImg.style.width || "70%";
            iframe.style.height = "300px";
            iframe.style.margin = originalImg.style.margin || "0 15%";
            iframe.style.marginTop = originalImg.style.marginTop || "1.5vh";
            iframe.style.border = "none";
            rightSide.insertBefore(iframe, rightSide.firstChild);
            currentIframe = iframe;
            currentPage = iframeSrc;
        });
    });
});

