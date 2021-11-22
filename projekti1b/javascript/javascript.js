function nimet() {
let nimi = document.getElementById("nimi").value;
if (nimi.length<2) {
  alert("Nimi puuttuu");
  return false;
}
  else { //jos edellinen if lauseke täyty tulee toteuttaa tämän.
    return true; // palauttaa arvon totta eli true.
    }
}

function emailit() {
  let email = document.getElementById("email").value;
  function emailIsValid (email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) }
if(emailIsValid(email)) {
  return true
}
  else {
    alert("Anna oikea sähköpostiosoitteesi");
    lomake.email.focus();
    return (false);
  }
  }


function iat() {
let ika = document.getElementById("ika").value;
  if(isNaN(ika) || ika=="") {
    alert("Syötä ikä numeroina");
    return false;
    }
  else if (ika < 0 || ika > 130) {
    alert("Anna numero väliltä 1-130")
    return false;
    }
  else { //jos edellinen if lauseke täyty tulee toteuttaa tämän.
    return true; // palauttaa arvon totta eli true.
    }
}


//-------------------------------------------------------------------------

/*Avaan vähän tähän tätä kuinka sähköposti juttu toimii....
function emailIsValid (email) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) }

on käytännössä*/

function emailIsValid(email) { //kuten yleensäkin aloitetaan funktio
return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)  //on siis Regular expressions
}
//Regular expressions on siis tapa etsiä merkkejä merkkijonoista (string)
//palauttaa arvon true tai false

//Pääset siis tekemään toimivan email varmistuksen kutsumalla tuon opettajan tekemän funktion
//Ja sitten kun se antaa joko true tai false arvoin niin kaveriksi koodia joka päättää mitä sillä tiedolla tekee.



//Opettajan kirjoittama koodin rivi  ei käytännössä toimi suoraan koska loppuosa siitä muuttuu automaattisesti kommentiksi.
/*
if(emailIsValid(sahkoposti)) { // } else{ alert("Anna oikea sÃ¤hkÃ¶postiosoitteesi"); lomake.email.focus(); return (false); }
*/
//eli se tarvii joko muokata tai kirjoittaa kokonaan uutta koodia.
//---------------------------------------------------------------------
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





function radiot() {
  //seuraava ottaa kaikki ne radio nappulat tarkasteluun luokka on
  let satunnainenMuuttujaNimi = document.getElementsByClassName("pallot");
  // Ei ole suositeltavaa kierrättää samaa muuttuja nimeä,
  //mutta se on mahdollista.
  //Tosin siten saattaa helposti tehdä virheitä joita on todella vaikea löytää.
  for (let i = 0; i < satunnainenMuuttujaNimi.length; i++) {
    //tehdään silmukka käyttämällä for mihin ensin määrittelen muuttujan i
    // toisena kerron että silmukka toimii niin kauan kun i:n arvo on pienempi kuin muuttujan pituus.
    //viimeisessä kerron että joka kierroksen jälkeen i:n arvo kasvaa yhdellä.

    if (satunnainenMuuttujaNimi[i].checked){ //tarkistaa onko "radio nappula" valittu
      return true;
    }
  }
}




// koska käytämme document.getElementById niin tein nappulan
//johon voi liittää nuo muut funktiot
//ja tehdä sitä kautta kaikkiin kerralla tarkistuksen.

  function nappula1() {
    let nim = nimet()
    let sahkoposti = emailit()
    let ikaNum = iat()
    let drop = droppi() // tekee mutttujan drop ja ottaa joko false tai true arvon functiolta droppi.
    let radios = radiot()
    if (drop === true && radios === true && nim === true && sahkoposti === true && ikaNum === true) { //tarkistaa molemmat muuttujat on saanut arvon true.
      alert("Kaikki on oikein");
    }
    else { // Tulee taas tänne jollei if lauseke täyty.
      alert("jokin on pielessä");
    }
  }
