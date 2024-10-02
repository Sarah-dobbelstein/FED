/****************************************/
/* menu openen en sluiten met de button */
/****************************************/

// bron voor menu https://codepen.io/shooft/pen/VwJXNEg?editors=1100

// stap 1: zoek de menu-button op en sla die op in een variabele
var MenuButton = document.querySelector("header button");


// stap 2: laat de menu-button luisteren naar kliks en voer dan een functie uit
MenuButton.onclick = HamburgerMenu;

// stap 3: voeg in de functie een class toe aan de nav
function HamburgerMenu() {  
  // zoek de nav op
  var deNav = document.querySelector(".hamburgermenu");
  // voeg een class toe aan de nav
  
  // en verwijder die weer bij nogmaals klikken
  // toggle
  deNav.classList.toggle("toonMenu");

// Log de huidige status van het menu (zichtbaar of verborgen)
if (deNav.classList.contains("toonMenu")) {

    } else {
 
    }
}


/****************************************/
/* dropdown menu in de footer */
/****************************************/
// bron voor de dropdown  https://www.w3schools.com/howto/howto_js_dropdown.asp bron voor de dropdown/
// Zoek alle buttons binnen de footer ul
const buttons = document.querySelectorAll('footer > ul > li > button');

// Voeg een click event listener toe aan elke button
buttons.forEach(button => {
    button.addEventListener('click', function() {
        // Zoek de ul die zich direct na de button bevindt
        const dropdown = this.nextElementSibling;

        // Toggle het display van de huidige dropdown
        dropdown.style.display = (dropdown.style.display === 'block') ? 'none' : 'block';

        // Sluit andere dropdowns als ze open zijn
        document.querySelectorAll('footer > ul > li > ul').forEach(ul => {
            if (ul !== dropdown) {
                ul.style.display = 'none'; // Sluit andere open dropdowns
            }
        });
    });
});

// Sluit de dropdown als er buiten wordt geklikt
window.addEventListener('click', function(event) {
    if (!event.target.matches('footer > ul > li > button')) {
        document.querySelectorAll('footer > ul > li > ul').forEach(ul => {
            ul.style.display = 'none'; // Sluit alle dropdowns
        });
    }
});

/****************************************/
/* dropdown menu met info over item */
/****************************************/

// Zoek alle buttons binnen de main in de 2e section
const buttoninfo = document.querySelectorAll('main section:nth-of-type(2) ul li button');

// Voeg een click event listener toe aan elke button
buttoninfo.forEach(button => {
    button.addEventListener('click', function() {
        // Zoek de ul die zich direct na de button bevindt
        const dropdown = this.nextElementSibling;

        // Toggle het display van de huidige dropdown
        dropdown.style.display = (dropdown.style.display === 'block') ? 'none' : 'block';

        // Sluit andere dropdowns als ze open zijn
        document.querySelectorAll('main section:nth-of-type(2) ul li img, main section:nth-of-type(2) ul li p').forEach(ul => {
            if (ul !== dropdown) {
                ul.style.display = 'none'; // Sluit andere open dropdowns
            }
        });
    });
});

// Sluit de dropdown als er buiten wordt geklikt
window.addEventListener('click', function(event) {
    if (!event.target.matches('main section:nth-of-type(2) ul li button')) {
        document.querySelectorAll('main section:nth-of-type(2) ul li button').forEach(ul => {
            ul.style.display = 'none'; // Sluit alle dropdowns
        });
    }
});





