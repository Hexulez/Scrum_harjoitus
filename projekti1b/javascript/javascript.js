function Tarkasta() {

let nimi = document.getElementById('nimi').value;

if(nimi.length < 2)
{
alert("Et antanut nimeäsi");
return false;
}
}

function Tarkasta() {

let email = document.getElementById('email').value;

function emailIsValid (email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) }
  if(emailIsValid(sahkoposti)) {
    // else?
    alert("Anna oikea sähköpostiosoitteesi");
  return (false);
}
}


function Tarkasta() {

let ika = document.getElementById('ika').value;

if(ika == string)
{
alert("Syötä numero");
return false;
}
}


// En ole vielä tarkistanut toimiiko nämä kuten suunnittelin,
//mutta ovat kuitenkin varmaan aika lähelle oikeaa
function droppi() {
  let satunnainenMuuttujaNimi = document.getElementById("pudotus").value;
  //let muuttujalla mun muuttuja ei toimi tämän funktion ulkopuolella
  if (satunnainenMuuttujaNimi == "") { //tarkistan onko muuttujan arvo tyhjä
    alert("Valitse jonkin vaihtoehto pudotus valikosta");
    return false; //palauttaa arvon epätosi eli false
}
  else { //jos edellinen if lauseke täyty tulee toteuttaa tämän.
    return true; // palauttaa arvon totta eli true.
  }
  }






// koska käytämme document.getElementById niin tein nappulan
//johon voi liittää nuo muut funktiot
//ja tehdä sitä kautta kaikkiin kerralla tarkistuksen.

  function nappula1() {
    let drop = droppi() // tekee mutttujan drop ja ottaa joko false tai true arvon functiolta droppi.
    if (drop === true ) {
      alert("Kaikki on oikein");
    }
    else { // Tulee taas tänne jollei if lauseke täyty.
      alert("jokin on pielessä");
    }
  }
