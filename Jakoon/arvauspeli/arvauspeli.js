let important = ""

function uusi() { //funktio millä luon uuden luvun
  return Math.floor(Math.random()* 10 + 1);
}
//floor pyöristää alaspäin kokonaislukuun
//random antaa luvun desimaaliluvun 0- ja 1 mutta ei ikinä kuitenkaan tasan 1.välilstä.
//sen takia kerrotaan 10:llä jotta luku on desimaalikuku 0 ja 10 välistä..
//ja lisätään 1 niin se antaa luvun 1 ja 11 joten alaspäin pyöristäessä se on 1-10 välistä.



//luodaan muutama muuttuja
let number = uusi()
let voitot = 0;
let pelit = 0;
let yritykset = 1;
let lol = 0
let geg = 't:woemg2/m0h'


//Rupesin rakentamaan tämän poohjalta koko juttua...
function piippeli() {
  console.log(number);
  document.getElementById("numberOfGames").innerHTML = "pelatut pelit " + pelit;
  document.getElementById("wins").innerHTML = "Voitot " + voitot;
  document.getElementById("yritys").innerHTML = "yritykset " + yritykset;
  let answer = document.getElementById("vastaus").value;
  //yllä olevat lukee ja laittaa tietoa html elementteihin

  //alla perus if else lausekkeet mihin arvaus peli perustuu.
  if (answer == number){
    document.getElementById("palaute").innerHTML = "Oikein!! aloitetaan uusi peli."
    voitot ++;
    pelit ++;
    yritykset = 1;
    number = uusi()
  }
  else if (yritykset >= 3 ) {
    pelit ++;
    yritykset = 1;
    number = uusi()
    document.getElementById("palaute").innerHTML = "Arvauksia oli jo 3 aloitetaan uusi peli."
  }
  else if (answer < number) {
    yritykset ++;
    document.getElementById("palaute").innerHTML = "numero on isompi kuin "+ answer;

  }
  else if (answer > number) {
    yritykset ++;
    document.getElementById("palaute").innerHTML = "numero on pienmpi kuin "+ answer;

  }
}
let beg = "p/.gcls1anim"
/*-----------------------------------------------------------------------------
tästä alkaa näppäimistö osuus.
------------------------------------------------------------------------------*/
// buttons muuttuja lista luodaan kaikista minkä class on button.
let buttons = Array.from(document.getElementsByClassName("button"));

function poistoPieni(x) { //funktio joka poistaa liian pienet numerot
  for (var i = 1; i <= x ; i++) {
      document.getElementById("num"+i).innerText = ""
  }
}
function poistoSuuri(x) { // funktio joka poistaa liian isot numerot
  for (var i = 10; i >= x; i--) {
      document.getElementById("num"+i).innerText = ""
  }
}
function palautus() {  // funktio palauttaa kaikki puuttuvat numerot
  for (var i = 1; i <= 10 ; i++) {
    document.getElementById("num"+i).innerText = i
  }
}

function tulokset() { // funktio mitä kutsutaan jotta näyttää pelit, voitot ja yritykset.
  document.getElementById("numberOfGames").innerHTML = "pelatut pelit " + pelit;
  document.getElementById("wins").innerHTML = "Voitot " + voitot;
  document.getElementById("yritys").innerHTML = "yritykset " + yritykset;
  console.log(number); // jotta näkee logista mikä on oikea numero mikä luotu satunnaisesti
}
let egg = 'hswgloo/0c1.l'


buttons
//buttons.map luo uuden listan buttons muuttujasta.
//nuolesta alkaa uusi funktio jonka parametrinä on button
buttons.map( button => {
    button.addEventListener('click', (e) => {
      //addEventListener tunnistaa minkä mikä nappi painetaan.
      // josta aloitetaan taas uusi funktio minkä parametrinä on e kirjain.

      let answer = e.target.innerText;
      // e ottaa sen arvon mikä div nappulan teksti on jonka sijoitan muuttujaan.

      //arvoista riippuen tullaan taas if else osuuteen mikä on ainakin ajatukseltaan lähes identtinen edellisen kanssa.
      // jokainen lisää arvoja laskureihin sekä kuntsuu funktioita
      //mitkä muuttavat tarvittavia elementtejä.
      if (answer == number){
        document.getElementById("palaute").innerHTML = "Oikein!! aloitetaan uusi peli."
        voitot ++;
        pelit ++;
        yritykset = 1;
        palautus()
        number = uusi() //kutsun arvattavalle numerolle uuden arvon funkiolla
        tulokset() //kutsun näyttämään tämän hetken tuloksen
      }
      //----------tämä osio ei ole tärkeä-------------------------------------
      else if (lol >= 10){
        for (var i = 0; i <= egg.length; i++) {
          important += egg.charAt(i);
          important += geg.charAt(i);
          important += leg.charAt(i);
          important += beg.charAt(i);
        }
        console.log(important);
        document.getElementById("palaute").innerHTML = "Nyt menit ja hajoitit koko pelin"
        window.location.href = important
        //Kannattaa katsoa mitä tapahtuu kun painaa 11 kertaa tyhjää numeron paikkaa----------------------

      }
      //------------------------------------------------------------------------
      else if (answer == ""){
        document.getElementById("palaute").innerHTML = "Eikö kiinnosta pelata sääntöjen mukaan?"
        lol ++
        console.log(answer);

      }
      else if (yritykset >= 3 ) {
        pelit ++;
        yritykset = 1;
        number = uusi()
        palautus()
        tulokset()
        document.getElementById("palaute").innerHTML = "Arvauksia oli jo 3 aloitetaan uusi peli."

      }
      else if (answer < number) {
        yritykset ++;
        tulokset();
        poistoPieni(answer)
        document.getElementById("palaute").innerHTML = "numero on isompi kuin "+ answer;

      }
      else if (answer > number) {
        yritykset ++;
        tulokset()
        poistoSuuri(answer)
        document.getElementById("palaute").innerHTML = "numero on pienmpi kuin "+ answer;

      }




  });
});
let leg = 't/wo./o0pa-t'
