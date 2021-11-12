function Tarkasta() {

var nimi = document.getElementById('nimi').value;

if(nimi.length < 2)
{
alert("Et antanut nimeäsi");
form.nimi.focus();
return false;
}
}

function Tarkasta() {

var email = document.getElementById('email').value;

function emailIsValid (email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) }
  if(emailIsValid(sahkoposti)) {
    // else?
    alert("Anna oikea sähköpostiosoitteesi");
  form.email.focus();
  return (false);
}
}


function Tarkasta() {

var ika = document.getElementById('ika').value;

if(ika == string)
{
alert("Syötä numero");
form.ika.focus();
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


  // Nämä eivät vielä ole valmiita eikä toimi
function radiot() {
  //seuraava ottaa kaikki ne radio nappulat tarkasteluun missä name arvo on mielipide
  let satunnainenMuuttujaNimi = getElementsByTagName("mielipide")
  // Ei ole suositeltavaa kierrättää samaa muuttuja nimeä,
  //mutta se on mahdollista.
  //Tosin siten saattaa helposti tehdä virheitä joita on todella vaikea löytää.
  for (let i = 0; i < satunnainenMuuttujaNimi.length; i++) {
    if
  }

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
