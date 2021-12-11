function moi(){ //Tämä on nyt funktio mitä mietit...
  document.getElementById("teksti").innerHTML = 5*10
}

function testi1() { //tämä on satunnainen funktio tässä
  let muuttuja = "heippa";
  document.getElementById("juttu").innerHTML = muuttuja;
}

//jos on useampi minkä haluaa sivun latauksen yhteydessä kutsua,
//niin itse olen vielä ainakin käyttänyt funktiota funktion sisällä
function kaikki() { //tämä siis vain kutsuu nuo ylemmät jotta niiden sisältö näkyy sivulla
  testi1()
  moi()

}



function testi2() {
  //ja tänne tein nappilla toimivan funtion että saa muutta 
  document.getElementById("juttu").innerHTML = "nappi muutti";
}
