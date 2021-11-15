function validateForm() {
let nimi = document.getElementById("nimi").value;
let ika = document.getElementById('ika').value;

if (nimi.length<2) {
  alert("Nimi puuttuu");
  return false;
}
else if (email) {

}
else if(isNaN(ika) || ika=="") {
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
    let drop = droppi() // tekee mutttujan drop ja ottaa joko false tai true arvon functiolta droppi.
    let radios = radiot()
    if (drop === true && radios === true) { //tarkistaa molemmat muuttujat on saanut arvon true.
      alert("Kaikki on oikein");
    }
    else { // Tulee taas tänne jollei if lauseke täyty.
      alert("jokin on pielessä");
    }
  }
