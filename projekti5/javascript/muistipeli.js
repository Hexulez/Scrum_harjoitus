function valitse() {
  let cards = document.getElementById("valitseKoko").value;
  console.log(cards);
  pelilauta(cards);
}



function pelilauta(cards) {
  

  for (let i = 0; i < cards; i++) {
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
