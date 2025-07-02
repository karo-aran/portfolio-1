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

// project elements
let descriptionElem = document.getElementById('menu_right_side_info_description');

// contact screen elements
let contactScreen = document.querySelector(".contact-screen");
let mainOverlay = document.querySelector(".main-overlay");

//navbar elements
let navbar = document.querySelector(".navbar");
let backBtn = document.querySelector(".back");
let homeBtn = document.querySelector(".home");
let websitesBtn = document.querySelector(".websites");

// Only add event listeners if elements exist
if (startUpBtn && startUpScreen && pokemon) {
    startUpBtn.addEventListener("click", function() {
        startUpScreen.classList.add('hide');
        pokemon.classList.remove('hide');
        document.body.style.backgroundImage = "url('pokemon.png')";
        document.body.style.backgroundSize = "1150px";
        document.body.style.backgroundColor = "#0047B3";
    });
}

if (alert2Btn) {
    alert2Btn.addEventListener("click", function() {
        alert("nuh uh, you don't have anything in your bag!");
    });
}
if (alert3Btn) {
    alert3Btn.addEventListener("click", function() {
        alert("you don't have any pokemon yet!");
    });
}
if (alert4Btn) {
    alert4Btn.addEventListener("click", function() {
        alert("where do you think you're going? you can't leave yet!");
    });
}

if (pokemonBtn && mainScreen && diamondBtn && aboutMeText && contactsBtn && contactsText && futureBtn && futureText && projectsBtn && projectsText && navbar && backBtn && homeBtn && websitesBtn && alert2Btn && alert3Btn && alert4Btn) {
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
}
//mainscreen reroutes
document.addEventListener("DOMContentLoaded", function() {
    // About Me (diamond)
    const diamond = document.querySelector('.about-me');
    if (diamond) {
        diamond.addEventListener('click', function() {
            window.location.href = "aboutme.html";
        });
    }
    // Projects (shulker box)
    const shulker = document.getElementById('shulker-img');
    if (shulker) {
        shulker.addEventListener('click', function() {
            window.location.href = "projects.html";
        });
    }
    // Future (beacon)
    const beacon = document.querySelector('.future');
    if (beacon) {
        beacon.addEventListener('click', function() {
            window.location.href = "future.html";
        });
    }
    // Contacts (book)
    const book = document.querySelector('.contacts');
    if (book) {
        book.addEventListener('click', function() {
            window.location.href = "contacts.html";
        });
    }
});

//navbar fade
document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.querySelector('.navbar');
    const back = document.querySelector('.back');
    const home = document.querySelector('.home');
    const websites = document.querySelector('.websites');
    let fadeTimer = null;

    function setFaded(faded) {
        if (navbar) navbar.classList.toggle('navbar-faded', faded);
        if (back) back.classList.toggle('navbar-faded', faded);
        if (home) home.classList.toggle('navbar-faded', faded);
        if (websites) websites.classList.toggle('navbar-faded', faded);
    }

    function startFadeTimer() {
        clearTimeout(fadeTimer);
        fadeTimer = setTimeout(() => setFaded(true), 2000);
    }

    [navbar, back, home, websites].forEach(el => {
        if (!el) return;
        el.addEventListener('mouseenter', () => setFaded(false));
        el.addEventListener('mousemove', () => setFaded(false));
        el.addEventListener('mouseleave', startFadeTimer);
        el.addEventListener('click', () => setFaded(false));
    });

    // Start fade timer on page load
    startFadeTimer();
});

// navbar take you everywhere PLZ
// back button: go back one page
if (backBtn) {
    backBtn.addEventListener('click', function() {
        window.history.length > 1 ? window.history.back() : window.location.href = "index.html";
    });
}

// website button!!
if (websitesBtn) {
    websitesBtn.addEventListener('click', function() {
        window.location.href = "websites.html";
    });
}

// home button: always go to main screen (index.html)
if (homeBtn) {
    homeBtn.addEventListener('click', function(e) {
        e.preventDefault();
        // if already on index.html, show the inventory/main screen directly
        if (
            window.location.pathname.endsWith('index.html') ||
            window.location.pathname === '/' ||
            window.location.pathname === '\\'
        ) {
            // Hide startup and pokemon screens, show main screen and all buttons
            if (startUpScreen) startUpScreen.classList.add('hide');
            if (pokemon) pokemon.classList.add('hide');
            if (mainScreen) mainScreen.classList.remove('hide');
            if (diamondBtn) diamondBtn.classList.remove('hide');
            if (aboutMeText) aboutMeText.classList.remove('hide');
            if (contactsBtn) contactsBtn.classList.remove('hide');
            if (contactsText) contactsText.classList.remove('hide');
            if (futureBtn) futureBtn.classList.remove('hide');
            if (futureText) futureText.classList.remove('hide');
            if (projectsBtn) projectsBtn.classList.remove('hide');
            if (projectsText) projectsText.classList.remove('hide');
            if (navbar) navbar.classList.remove('hide');
            if (backBtn) backBtn.classList.remove('hide');
            if (homeBtn) homeBtn.classList.remove('hide');
            if (websitesBtn) websitesBtn.classList.remove('hide');
            // Hide pokemon screen buttons if present
            if (pokemonBtn) pokemonBtn.classList.add('hide');
            if (alert2Btn) alert2Btn.classList.add('hide');
            if (alert3Btn) alert3Btn.classList.add('hide');
            if (alert4Btn) alert4Btn.classList.add('hide');
            // Optionally reset background
            document.body.style.backgroundImage = "url('mc_inventory.png')";
            document.body.style.backgroundSize = "925px";
            document.body.style.backgroundColor = "";
        } else {
            // On any other page, go to index.html with a hash to trigger inventory
            window.location.href = "index.html#inventory";
        }
    });
}

// auto skip if hash is #inventory
if (
    window.location.pathname.endsWith('index.html') ||
    window.location.pathname === '/' ||
    window.location.pathname === '\\'
) {
    if (window.location.hash === "#inventory") {
        // Hide startup and pokemon screens, show main screen and all buttons
        if (startUpScreen) startUpScreen.classList.add('hide');
        if (pokemon) pokemon.classList.add('hide');
        if (mainScreen) mainScreen.classList.remove('hide');
        if (diamondBtn) diamondBtn.classList.remove('hide');
        if (aboutMeText) aboutMeText.classList.remove('hide');
        if (contactsBtn) contactsBtn.classList.remove('hide');
        if (contactsText) contactsText.classList.remove('hide');
        if (futureBtn) futureBtn.classList.remove('hide');
        if (futureText) futureText.classList.remove('hide');
        if (projectsBtn) projectsBtn.classList.remove('hide');
        if (projectsText) projectsText.classList.remove('hide');
        if (navbar) navbar.classList.remove('hide');
        if (backBtn) backBtn.classList.remove('hide');
        if (homeBtn) homeBtn.classList.remove('hide');
        if (websitesBtn) websitesBtn.classList.remove('hide');
        // Hide pokemon screen buttons if present
        if (pokemonBtn) pokemonBtn.classList.add('hide');
        if (alert2Btn) alert2Btn.classList.add('hide');
        if (alert3Btn) alert3Btn.classList.add('hide');
        if (alert4Btn) alert4Btn.classList.add('hide');
        // Optionally reset background
        document.body.style.backgroundImage = "url('mc_inventory.png')";
        document.body.style.backgroundSize = "925px";
        document.body.style.backgroundColor = "";
        // Remove hash from URL (optional, for cleanliness)
        history.replaceState(null, null, 'index.html');
    }
}

// project showcase 
document.addEventListener("DOMContentLoaded", function() {
    const shulker = document.getElementById("shulker-img");
    if (shulker) {
        shulker.addEventListener("click", function() {
            window.location.href = "projects.html";
        });
    }
});

// contact page button actions
if (contactsBtn && contactsText && contactScreen && mainOverlay && mainScreen) {
    contactsBtn.addEventListener("click", function() {
        mainOverlay.classList.remove('hide');
        contactScreen.classList.remove('hide');
        mainScreen.classList.add('blurred');
    });
}
// Hide contact screen and overlay
const contactBackBtn = document.querySelector('.contact-back-btn');
if (contactBackBtn && mainOverlay && contactScreen && mainScreen) {
    contactBackBtn.addEventListener("click", function() {
        mainOverlay.classList.add('hide');
        contactScreen.classList.add('hide');
        mainScreen.classList.remove('blurred');
    });
}

// Project page logic 
let rightImg = document.getElementById('menu_right_side_img');
let descElement = document.getElementById('menu_right_side_info_description');
let items = document.querySelectorAll('.menu_left_side_down_item');
let titleElement = document.getElementById('menu_right_side_info_title');

if (rightImg && descElement && items.length && titleElement) {
    items.forEach(item => {
        item.addEventListener('click', function() {
            const targetImg = item.getAttribute('data-target-img');
            const desc = item.getAttribute('data-description') || '';
            const title = item.getAttribute('data-title') || 'The Title';
            if (targetImg) {
                rightImg.src = targetImg;
            }
            descElement.textContent = desc;
            titleElement.textContent = title;
        });
    });
}

// future page
document.addEventListener("DOMContentLoaded", function() {
    // Find the window with Aspiration_03.ini
    const windows = document.querySelectorAll('.window');
    let aspirationWindow = null;
    windows.forEach(win => {
        const title = win.querySelector('.title-bar span');
        if (title && title.textContent.includes('Aspiration_03.ini')) {
            aspirationWindow = win;
        }
    });

    if (aspirationWindow) {
        const loadingFill = aspirationWindow.querySelector('.loading-fill');
        let timer = null;
        let catShown = false;

        aspirationWindow.addEventListener('mouseenter', function() {
            if (catShown) return;
            loadingFill.style.transition = 'width 5s linear';
            loadingFill.style.width = '100%';
            timer = setTimeout(() => {
                // Show cat image
                if (!catShown) {
                    const catImg = document.createElement('img');
                    catImg.src = 'catpic.jpeg';
                    catImg.alt = 'A cute cat';
                    catImg.style.display = 'block';
                    catImg.style.margin = '20px auto 0 auto';
                    catImg.style.maxWidth = '200px';
                    aspirationWindow.querySelector('.content').appendChild(catImg);
                    catShown = true;
                }
            }, 5000);
        });

        aspirationWindow.addEventListener('mouseleave', function() {
            if (catShown) return;
            loadingFill.style.transition = 'width 0.5s';
            loadingFill.style.width = '20%';
            clearTimeout(timer);
        });
    }
});

// Pickaxe back button  
if (backBtn) {
    backBtn.addEventListener('click', function() {
        window.history.back();
    });
}