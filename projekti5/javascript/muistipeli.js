function valitse() { //funktio jolla voi kutsua muut osat
  let cards = document.getElementById("valitseKoko").value;
  console.log(cards);
  pelilauta(parseInt(cards));
}

//here we need array for all pictures (18 pcs)
const allPictures =  [
   1,  2,  3,  4,  5,  6,
   7,  8,  9, 10, 11, 12,
  13, 14, 15, 16
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
const makeGameBoard = (cards) =>{
  for (let i = 0; i < cards; i++) { //tämä osio lisää niitä
    const divine = document.createElement('div');
    const teksti = document.createTextNode(allPictures[picToCard(cards)[i]]);
    //const kuva = document.createElement("IMG");
    //kuva.setAttribute("src", "kuvat/kuva2.jpg")
    const element = document.getElementById("container");
    divine.className ="peli"
    console.log(i);
    divine.appendChild(teksti);
    //divine.appendChild(kuva);
    element.appendChild(divine);
    let testi = document.getElementsByTagName("DIV").className;
    //testi.classList.add("peli")

  }}
//makeGameBoard end here


function pelilauta(cards) {
  boardEraser();
  //picToCard(cards)
  makeGameBoard(cards);

//  for (let j = 0; j < cards; j--) {
  //  const divi = document.deleteElement('div');

  }



// picToCard is funtion what take number of cards and give those numbers random order

const picToCard = (cards) => {
  let arr = [];
  for (let i = 0; i < cards/2; i++) {
    arr.push(i);
    arr.push(i);

  }
  const suffle = (arr) =>{
  for (var i = arr.length-1; i >0;i--);{
        let j = Math.floor(Math.random() * (i +1));
        let temp =arr[i]; //save last number of array
        arr[i] = arr[j];  // change last number to random number
        arr[j] = temp;  // change that random numner place to last numner of starting array
  }
  console.log(arr);

  }
  return arr
}
//picToCard ends here
