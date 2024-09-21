// JavaScript Document
console.log("hi");

 // Zoek alle buttons binnen de ul
const buttons = document.querySelectorAll('footer > ul > li > button');

// Voeg een click event listener toe aan elke button
buttons.forEach(button => {
    button.addEventListener('click', function() {
        // Zoek de ul die zich direct na de button bevindt
        const dropdown = this.nextElementSibling;

        // Sluit andere dropdowns als ze open zijn
        document.querySelectorAll('footer > ul > li > ul').forEach(ul => {
            if (ul !== dropdown) {
                ul.style.display = 'none'; // Sluit andere open dropdowns
            }
        });

        // Toggle het display van de huidige dropdown
        dropdown.style.display = (dropdown.style.display === 'block') ? 'none' : 'block';
    });
});


/*******************************/
/* AUTO SCROLLEN van carrousel */
/*******************************/

const carrousel = document.getElementById('CarrouselAutoScroll');
const autoScrollInterval = 30; // Tijd in milliseconden tussen het scrollen
let AutoScrollTimer;

function AutoScroll() {
    // de class "autoScrolling" toevoegen aan de carrousel
    carrousel.classList.add("autoScrolling");
    
    // een timer aanzetten
    AutoScrollTimer = setInterval(function(){
      // als de timer afgaat naar het volgende element gaan
      goToElement("next");
    }, autoScrollInterval);
   
  }

  // Functie om de carrousel op te zetten (je kunt deze uitbreiden)
function createCarrousel(id) {
    const carrouselElement = document.getElementById(id);
    // Hier kun je logica toevoegen om de carrousel op te zetten
}

  (function() {
    // hier de id gebruiken van de section in de html
    createCarrousel("CarrouselAutoScroll");
    AutoScroll();
    //je kunt hier ook meerdere carrousellen activeren
  })();