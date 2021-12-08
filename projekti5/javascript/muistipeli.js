function valitse() { //funktio jolla voi kutsua muut osat
  let cards = document.getElementById("valitseKoko").value;
  console.log(cards);
  pelilauta(cards);
}


//Tästä olisi tarkoitus rakentaa funktio joka lisää ja poistaa div elementejä
//sen mukaan kuinka paljon haluaa käyttää kortteja
function pelilauta(cards) {

  //tähän pitäisi lisätä osio mikä tarkistaa onko niitä vielä ja poistaa vanhat

  for (let i = 0; i < cards; i++) { //tämä osio lisää niitä
    const divine = document.createElement('div');
    const teksti = document.createTextNode("testi teksti.");
    const element = document.getElementById("container");
    divine.className ="peli"
    console.log(i);
    divine.appendChild(teksti);
    element.appendChild(divine);
    //let testi = document.getElementsByTagName("DIV").className;
    //testi.classList.add("peli")

  }
}
