//Grab a couple of things
const section = document.querySelector("section");
const playerLivesCount = document.querySelector("span");
let playerLives = 16; //How many tries pplayer has
let cardNumb = 36; //Max card numbers board can has (board sizes: 16 = 4x4, 24 cards = 4x6, 36 = 6x6)
//Link text
playerLivesCount.textContent = playerLives;
//image bank
const imgBank = [

      {imgSrc: "./images/beatles.jpeg", name: "beatles"},
      {imgSrc: "./images/blink182.jpeg", name: "blink182"},
      {imgSrc: "./images/ccr.jpeg", name: "ccr"},
      {imgSrc: "./images/fleetwood.jpeg", name: "fleetwood"},
      {imgSrc: "./images/godsmack.jpeg", name: "godsmack"},
      {imgSrc: "./images/ledzep.jpeg", name: "ledzep"},
      {imgSrc: "./images/metallica.jpeg", name: "metallica"},
      {imgSrc: "./images/nirvana.jpeg", name: "nirvana"},
      {imgSrc: "./images/acdc.jpg", name: "acdc"},
      {imgSrc: "./images/bonjovi.jpg", name: "bonjovi"},
      {imgSrc: "./images/deeppurple.jpg", name: "deeppurple"},
      {imgSrc: "./images/gunsandroses.jpg", name: "gunsandroses"},
      {imgSrc: "./images/pinkfloyd.jpeg", name: "pinkfloyd"},
      {imgSrc: "./images/queen.jpeg", name: "queen"},
      {imgSrc: "./images/rhcp.jpg", name: "rhcp"},
      {imgSrc: "./images/rollingstones.jpg", name: "rollingstones"},
      {imgSrc: "./images/scorpions.jpeg", name: "scorpions"},
      {imgSrc: "./images/theoffspring.jpg", name: "theoffspring"},

  ];

// fill getData
const fill = (card) => {
  let numberOfCards = []; //depending on the board size, gonna push cards
  for (let y = 0; y < 2; y ++) { //Pushin the cards as match to the board (ie. 2x metallica card)
    for (let i = 0; i < card; i ++) {
      numberOfCards.push(imgBank[i]); // card source is imgBank

    }
  }
  return numberOfCards;
}
numberOfCards = fill(18);

//Generate the object
const getData = () =>  numberOfCards; // get data is equall to card numbers

//Randomize
const randomize = () => {
    const cardData = getData(); // getting card data from get data
    cardData.sort(() => Math.random() - 0.5); //Randomly sorting the cards
    return cardData;
};

//Card Generator Function
const cardGenerator = () => {
    const cardData = randomize(); //Randomizing the stack
    //Generate the HTML
    cardData.forEach((item) => { //Now every card will get covers for face and back
        const card = document.createElement("div");
        const face = document.createElement("img");
        const back = document.createElement("div");
        card.classList = "card"; //making class for covers to append them in
        face.classList = "face";
        back.classList = "back";
        //Attach the info to the cards
        face.src = item.imgSrc;
        card.setAttribute("name", item.name); //To able to see the card names on the dev console (F12) inside the elements
        //Attach the cards to the section
        section.appendChild(card);
        card.appendChild(face);
        card.appendChild(back);
        card.addEventListener("click", (e) => { //Added event listener and set it to CLICK. Means, when you click on a card, its gonna mark the card clicked or toggled as it named in here
            card.classList.toggle("toggleCard");
            checkCards(e);
        });
    });
};

//Check Cards
const checkCards = (e) => {
    const clickedCard = e.target;
    clickedCard.classList.add("flipped"); //Clicked cards will be added to the new class called "flipped"
    const flippedCards = document.querySelectorAll(".flipped"); //here defined as constant (permanent all flipped cards will be selected from .flipped
    const toggleCard = document.querySelectorAll(".toggleCard"); //same for toggled cards
    console.log(flippedCards); //here i logged the flipped cards
    //Logic
    if (flippedCards.length === 2) { // if flipped cards equal to 2 (for a match)
        if (flippedCards[0]. getAttribute("name") === flippedCards[1].getAttribute("name")){ //the first flipped card [0] and the second card [1] get attribute "match"
            console.log("match"); // here i logged the matches
            flippedCards.forEach(card => {
                card.classList.remove("flipped"); //after getting match removes them from "flipped" class
                card.style.pointerEvents = "none"; // pointer has no event
            });
        }
        else {
            console.log("wrong"); //if no match made then its a wrong match
            flippedCards.forEach(card => {
                card.classList.remove("flipped"); //after getting wrong match removes them from "flipped" class
                setTimeout(() => card.classList.remove("toggleCard"), 1000); //timing is set to 1000 ms before the cards remove from togglecard class and turn them back
            });
            playerLives--; //after a wrong match player lives will be decreased 1 point or number
            playerLivesCount.textContent = playerLives;
            if (playerLives === 0) { //when player lives reach to 0, try again message will show up and then new game will be started
                restart("Try again");
            }
        }
    }
    //Run a check to see if we won the game
    if (toggleCard.length === cardNumb) { //here checking, are all the toggled cards equal to total card number, if yes you won the game. because it means you made all the cards match
        restart("You won");
    }
};

//Restart
const restart = (text) => { //here the restart for the game
    let cardData = randomize();
    let faces = document.querySelectorAll(".face"); //selecting all the card faces
    let cards = document.querySelectorAll(".card"); // selecting all the cards
    section.style.pointerEvents = "none";
    cardData.forEach((item, index) => {
        cards[index].classList.remove("toggleCard"); //remove all the toggled cards so the board can randomize and mix cards places again
        //Randomize
        setTimeout(() => {
            cards[index].style.pointerEvents = "all";
            faces[index].src = item.imgSrc;
            cards[index].setAttribute("name", item.name);
            section.style.pointerEvents = "all";
        }, 1000); //1 second has been set
    });
    playerLives = 16; //max player lives given to player in the beginning of the game
    playerLivesCount.textContent = playerLives; // player lives gonna shown as player lives count
    setTimeout(() => {window.alert(text+ " Time used " + seconds + " seconds"), 100; //when game ends the time used to play the game will be shown as seconds
      seconds=0});

};

cardGenerator(); //to start a new game, calling the card generator function again to randomize the cards and change their places and so on...


//timer
let seconds = 0; //setting the time for 0 second
let timer = setInterval(() => { seconds ++; //with starting of the game time starts too
  console.log(seconds); //logging the time to console
  document.getElementById("time").innerHTML =  seconds + " seconds";
}
,1000);

//this add listening to dropbox
document.getElementById("valitseKoko").addEventListener("change",(value) =>
valitseKoko(value)); //here making html dropbox functional

//remove old cards
const boardEraser = () => {
  let div = document.querySelector('.card');
  if (div != null) {
    document.querySelectorAll('.card').forEach(e => e.remove());
  }}

//size change
const valitseKoko = (value) => {
  console.log(value);
  boardEraser();
  let elem = document.getElementsByClassName("board"); //elem (element) variable will act in the behalf of the game's content area so called board
  let size = document.getElementById("valitseKoko").value; //depending on the option of option element in html
    if (size == 16) { // size 16 means 4x4 board
      elem[0].style.gridTemplateColumns = "repeat(4, 8rem)"; //here we get 4 columns along with 8 rem (128 pixels) gap before the next column starts
      elem[0].style.gridTemplateRows = "repeat(4, 8rem)"; //here we get 4 rows along with the 8 rem gap again
      cardNumb = 16; // total card number
      numberOfCards = fill(8); // 8 cards (x2 total 16) to fill the board
    }
    else if (size == 24) { //size 24 means 4x6 board
      elem[0].style.gridTemplateColumns = "repeat(4, 8rem)"; //here we get 4 columns again
      elem[0].style.gridTemplateRows = "repeat(6, 8rem)"; //this time we need 2 more rown to extend the board
      cardNumb= 24; //total card number
      numberOfCards = fill(12); //4 extra cards (x2 total 24) to fill the board
    }
    else if (size == 36) { // size 36 means 6x6 board
      elem[0].style.gridTemplateColumns = "repeat(6, 8rem)"; // this time we get 6 rows
      elem[0].style.gridTemplateRows = "repeat(6, 8rem)"; // and 6 rows
      cardNumb = 36; //total card number 36 (max number)
      numberOfCards = fill(18); //all cards in use to fill the board
    }
  cardGenerator(); //lets call back our card generator function back to start the game
}
