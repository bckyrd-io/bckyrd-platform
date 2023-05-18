/* *ON PAGE SCROLL* */
const scrl = ScrollReveal({
    origin: 'top',
    distance: '100px',
    duration: 300,
    reset: true
});
scrl.reveal(
    '#post__section p, iframe, .col-section p, footer p, .left-heading', { interval: 50 }
);
const scrl2 = ScrollReveal({
    origin: 'bottom',
    distance: '50px',
    duration: 300,
    reset: true
});
scrl2.reveal(
    'h2, .brick,  .col-section, .max.inverted a img', { interval: 10 }
);



/* *ACCORDION SERVICES* */
function initAccordion(accordionElem) {
    function handlePanelClick(event) {
        showPanel(event.currentTarget);
    }

    function showPanel(panel) {
        var expandedPanel = accordionElem.querySelector(".active");
        if (expandedPanel) { expandedPanel.classList.remove("active"); }
        panel.classList.add("active");
    }
    var allPanelElems = accordionElem.querySelectorAll(".panel");
    for (var i = 0, len = allPanelElems.length; i < len; i++) {
        allPanelElems[i].addEventListener("click", handlePanelClick);
    }
    showPanel(allPanelElems[0])
}
initAccordion(document.getElementById("service__accordion"));
initAccordion(document.getElementById("faq__accordion"));



/* *NAVIGATION MOBILE MENU* */
function openNav() {
    var nav_menu = document.getElementById("nav_menu")
    var nav_link = document.getElementById("nav_link")
    nav_link.classList.toggle("change");
    nav_menu.classList.toggle("nav");
}



/* *Display the slide after a delay* */
function shuffleLinks() {
    const links = document.querySelectorAll('#slide a');
    links.forEach((link) => {
        const text = link.textContent;
        const shuffledText = text.split('').sort(() => 0.5 - Math.random()).join(''); // Shuffle the letters
        link.textContent = shuffledText;
        let i = 0;
        const speed = 50; // Speed of animation (in ms)
        const type = setInterval(() => {
            link.textContent = link.textContent.substr(0, i) + text[i] + link.textContent.substr(i + 1);
            i++;
            if (i >= text.length) {
                clearInterval(type);
            }
        }, speed + (Math.random() * 50)); // Add some randomness to the speed
    });
}

function slide() {
    setTimeout(() => {
        shuffleLinks();
        const slideElements = document.querySelectorAll('#slide h1');
        slideElements.forEach((slide) => {
            slide.style.display = 'none';
        });
        slideElements[slideIndex].style.display = 'block';
        slideIndex = (slideIndex + 1) % slideElements.length;
        slide();
    }, 3000);
}

let slideIndex = 0;
slide();