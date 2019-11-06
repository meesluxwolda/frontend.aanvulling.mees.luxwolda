/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console': 0*/


var section = document.getElementsByClassName('filter')[0]; //De section die we triggeren
var button = document.getElementsByClassName('enablefilter')[0]; //De filter knop waar we op drukken
//Het linken van de js aan de html


//Filter aan en uitzetten
function filter() { //Maakt de functie filter aan

    section.classList.toggle('filter-active'); 
    //Toggle tussen css class Filter en Filter-active regel 168 en 1173
}

button.addEventListener('click', filter); 
//Als er gedrukt wordt op de knop voer de functie filter uit


