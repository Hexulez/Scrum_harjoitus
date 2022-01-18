function valitse() { //funktio jolla voi kutsua muut osat
  let cards = document.getElementById("valitseKoko").value;
  console.log(cards);
  pelilauta(parseInt(cards));
}

// boardEraser I function what check is there any div class"peli" and delete those.
boardEraser = () =>{
  let div = document.querySelector('.peli');
  console.log(div);
  if (div != null ) {
    console.log("porn");
    document.querySelectorAll('.peli').forEach(e => e.remove());
  }}
// boardEraser end here

// makeGameBoard is function and this make right number of cards what needed
makeGameBoard = (cards) =>{
  for (let i = 0; i < cards; i++) { //tämä osio lisää niitä
    const divine = document.createElement('div');
    const teksti = document.createTextNode("testi teksti.");
    const element = document.getElementById("container");
    divine.className ="peli"
    console.log(i);
    divine.appendChild(teksti);
    element.appendChild(divine);
    let testi = document.getElementsByTagName("DIV").className;
    //testi.classList.add("peli")

  }}
//makeGameBoard end here


function pelilauta(cards) {
  boardEraser();
  makeGameBoard(cards);

//  for (let j = 0; j < cards; j--) {
  //  const divi = document.deleteElement('div');

  }
