function valitse() { //funktio jolla voi kutsua muut osat
  let cards = document.getElementById("valitseKoko").value;
  console.log(cards);
  pelilauta(parseInt(cards));
}

//here we need array for all pictures (18 pcs)
const allPictures =  [
  "kuvat/aasi.jpg", "kuvat/apina.jpg", "kuvat/haukka.jpg",
  "kuvat/janis.jpg", "kuvat/kauris.jpg", "kuvat/kettu.jpg",
  "kuvat/kili.jpg", "kuvat/kirahvi.jpg", "kuvat/kissa.jpg",
  "kuvat/koira.jpg", "kuvat/kultapanda.jpg", "kuvat/lammas.jpg",
  "kuvat/leppakerttu.jpg", "kuvat/lintu", "kuvat/norsu.jpg",
  "kuvat/seepra.jpg", "kuvat/tiikeri.jpg", "kuvat/villisika.jpg"

]




// boardEraser I function what check is there any div class"peli" and delete those.
const boardEraser = () =>{
  let div = document.querySelector('.peli');
  console.log(div);
  if (div != null ) {
    console.log("porn");
    document.querySelectorAll('.peli').forEach(e => e.remove());
  }}
// boardEraser end here

// makeGameBoard is function and this make right number of cards what needed
const makeGameBoard = (cards, orderArr) =>{
  for (let i = 0; i < cards; i++) { //tämä osio lisää niitä
    console.log(i);
    const order = orderArr[i]
    const divine = document.createElement('div');
    //const teksti = document.createTextNode(allPictures[order]);
    const kuva = document.createElement("IMG");
    kuva.setAttribute("src", allPictures[order])
    const element = document.getElementById("container");
    divine.className ="peli"
    console.log(i);
    //divine.appendChild(teksti);
    divine.appendChild(kuva);
    element.appendChild(divine);
    let testi = document.getElementsByTagName("DIV").className;
    //testi.classList.add("peli")

  }}
//makeGameBoard end here





// picToCard is funtion what take number of cards and give those numbers random order

const picToCard = (cards) => {
  let arr = [];
  for (let y =0;y<2;y++)
  for (let i = 0; i < cards/2; i++) {

    arr.push(i);
    arr.push(i);

  }
  const suffle = (arr) =>{
    for (let x = arr.length-1; x >0;x--){
        let j = Math.floor(Math.random() * (x +1));
        let temp =arr[x]; //save last number of array
        arr[x] = arr[j];  // change last number to random number
        arr[j] = temp;  // change that random numner place to last numner of starting array
  }
  return arr;

  }
  console.log("testi");
  console.log(suffle(arr));
  return suffle(arr);
}
//picToCard ends here


function pelilauta(cards) {
  const orderofCards = picToCard(cards)
  console.log(orderofCards);
  boardEraser();
  //picToCard(cards)
  makeGameBoard(cards, orderofCards);

  //  for (let j = 0; j < cards; j--) {
    //  const divi = document.deleteElement('div');

  }
