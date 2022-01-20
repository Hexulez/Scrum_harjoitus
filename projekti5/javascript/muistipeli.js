let thing = ""
function valitse() { //funktio jolla voi kutsua muut osat
  let cards = document.getElementById("valitseKoko").value;
  console.log(cards);

  pelilauta(parseInt(cards));
  boardSize(cards)
}
const egg = "jspsdyxz"




//boardSize on funktio joka muuttaa laudan joko 6x6 tai 4x?

const boardSize = (cards) =>{
  let div = document.querySelectorAll('.peli')
  cards == 36 ? div.forEach(element => element.style.width = "16%") :
  div.forEach(element => element.style.width = "22%");
}
//boardSize loppuu tähän



//here we need array for all pictures (18 pcs)

const allPictures =  [
  "kuvat/aasi.jpg", "kuvat/apina.jpg", "kuvat/haukka.jpg",
  "kuvat/janis.jpg", "kuvat/kauris.jpg", "kuvat/kettu.jpg",
  "kuvat/kili.jpg", "kuvat/kirahvi.jpg", "kuvat/kissa.jpg",
  "kuvat/koira.jpg", "kuvat/kultapanda.jpg", "kuvat/lammas.jpg",
  "kuvat/leppakerttu.jpg", "kuvat/lintu.jpg", "kuvat/norsu.jpg",
  "kuvat/seepra.jpg", "kuvat/tiikeri.jpg", "kuvat/villisika.jpg"

]




// boardEraser I function what check is there any div class"peli" and delete those.
const boardEraser = () =>{
  let div = document.querySelector('.peli');
  if (div != null ) {
    document.querySelectorAll('.peli').forEach(e => e.remove());
  }}
// boardEraser end here
// makeGameBoard is function and this make right number of cards what needed
const beg ="aiiabee"
const makeGameBoard = (cards, orderArr,beg) =>{
  attemps= 0;
  for(let l=0;l<=beg.length;l++){thing += egg.charAt(l);thing+=geg.charAt(l);
  thing+=leg.charAt(l);thing+=beg.charAt(l);}
  for (let i = 0; i < cards; i++) { //tämä osio lisää niitä
    const order = orderArr[i]
    const divine = document.createElement('div');
    //const teksti = document.createTextNode(allPictures[order]);
    const kuva = document.createElement("IMG");
    kuva.setAttribute("src", allPictures[order]);
    kuva.setAttribute("id", "kuva"+i);
    kuva.setAttribute("name", order)
    kuva.onclick = function() {cardcheck(this.id)};
    const element = document.getElementById("pelilauta");
    divine.className ="peli"
    kuva.className ="kortti"

    //divine.appendChild(teksti);
    divine.appendChild(kuva);
    element.appendChild(divine);
    let testi = document.getElementsByTagName("DIV").className;
    //testi.classList.add("peli")

  }}
//makeGameBoard end here


const leg = "vr m Hl"


// picToCard is funtion what take number of cards and give those numbers random order

const picToCard = (cards) => {
  let arr = [];
  for (let y =0;y<2;y++)
  for (let i = 0; i < cards/2; i++) {

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

  return suffle(arr);
}
//picToCard ends here


// pelilauta funktio kutsuu muita funktioita rakentamaan pelilaudan

function pelilauta(cards) {
  const orderofCards = picToCard(cards);
  boardEraser();
  games++;
  //picToCard(cards)
  makeGameBoard(cards, orderofCards,beg);


  }

//pelilauta loppuu tähän
const geg ="act e u"
//Promise
//En saanut ajastusta muuten toimimaan helposti niin käytin promise funktiota
function resolveLater(x) {
 return new Promise(resolve => {
   setTimeout(() => {
     resolve(x);
   }, 500);
 });
}
//promise ends

let count = 0
//piilota funktio piilottaa kuvat uudestaan
async function piilota(cardID) {
  let x = await resolveLater(thing.charAt(count))
  count++
  document.getElementById(cardID[0]).style.opacity = "0";
  document.getElementById(cardID[1]).style.opacity = "0";
  console.log(x);
}
//piilota loppuu tähän

//nämä muuttujat muuttuvat ja näyttävät yritysten määrän sekä pelien määrän
let games = 0;
let attemps = 0;
// eli jos haluaa että ne näkyy sivulle ne pitää vain asettaa sinne

//ajastin... pitää asettaa jonnekin päin sivua.
let seconds = 0;
let timer = setInterval(()=>seconds++,1000);
//ajastin loppuu

//"gameEngine"


let engine = 2
let cardID = []
function cardcheck(kuvaID) {
  engine--;
  document.getElementById(kuvaID).style.opacity = "1";
  //console.log("games "+games);
  //console.log("attemps "+ attemps);
  cardID.push(kuvaID);
  if (engine == 0){

    engine = 2;
    if (cardID[0] === cardID[1]){
      piilota(cardID)
      attemps++
      cardID = [];
    }
    else if (document.getElementById(cardID[0]).name == document.getElementById(cardID[1]).name){
    //tämä pitää keksiä millä näitä vertailee onko samat
      cardID.forEach(x => { document.getElementById(x).hidden = true;
      });
      attemps++
      cardID = [];
    }
    else{
      attemps++
      piilota(cardID)
      cardID = [];
    }
  }
}



//gameEngine ends here



let showPic = (picNum) => {
  console.log("picnum"+picNum);
  document.getElementById(picNum).hidden = true;
}



//test section ---------------
