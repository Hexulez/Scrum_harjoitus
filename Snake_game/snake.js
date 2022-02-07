const fuckIt = () => {
reset()
}
;

//some constant and variables.
const snakeboard = document.getElementById("gameCanvas");
const snakeboard_ctx = snakeboard.getContext("2d"); //määrittää että sisältö on 2d
const snakeColor = "blue";
const snakeBorder = "dark blue";
const speed = 1000;
const appleColor = "red";
let score = 0;


let snake = [  {x: 200, y: 200},  {x: 190, y: 200},  {x: 180, y: 200},  {x: 170, y: 200},  {x: 160, y: 200}];
console.log(typeof snake);
//piirtää madon jokaisen osan erikseen
const drawSnakePart = (snakePart) => {
  snakeboard_ctx.fillStyle =snakeColor //täyttöväri
  snakeboard_ctx.strokeStyle  = snakeBorder //reunaväri
  snakeboard_ctx.fillRect(snakePart.x, snakePart.y, 10, 10); //määrittelee mille alueelle tulee täyttöväri
  snakeboard_ctx.strokeRect(snakePart.x, snakePart.y, 10, 10); //määrittelee reunojen alueen
}

//ottaa käärmeen sijainnin sekä piirtää sen.
const drawSnake = () =>{
  snake.forEach(e => drawSnakePart(e));
}

//tyhjää koko alustan
const clear = () =>{
  snakeboard_ctx.clearRect(0, 0, snakeboard.width, snakeboard.height);
}


let movement = {x:0, y:0} // muuttuja joka määrittelee suunnan mihin käärme liikkuu
//liikkuminen
const moving = () =>{
  let direction = {x:0, y:0}
  direction.x = snake[0].x + movement.x; //lisää käärmeen päähän liikkumis suunnan mukaan numerot
  direction.y = snake[0].y + movement.y; //sama tässä vain korkeus suunnassa.
  snake.unshift(direction); //laittaa käärmeelle "uuden pään"
  if (getApple == true){  //jos kerää omenan ei lyhennetä käärmeen häntää
    getApple = false;
  }
  else {  //normaalisti otetaan aina viimenen häntä palikka pois.
    snake.pop();
  }

}


//borders
const drawBorders =() => {
  snakeboard_ctx.strokeStyle  = "black" //reunaväri
  snakeboard_ctx.strokeRect(0, 0, 400, 400); //määrittelee reunojen alueen
}

//detecting arrow key presses and change direction... :D
document.addEventListener('keydown', (e) => {

  if(e.keyCode == 37){ // tarkistaa onko painettu vasemmalle?
    if (movement.x != 10){
      movement = {x:-10, y:0};
    }
  }
  else if (e.keyCode == 38){ //tarkistaa onko painettu ylös?
    if (movement.y != 10){
      movement = {x:0, y:-10};
    }
  }
  else if (e.keyCode == 39){  //tarkistaa onko painettu oikealle?
    console.log("3");
    if (movement.x != -10){
      movement = {x:10, y:0};
    }
  }
  else if (e.keyCode == 40){  //tarkistaa onko painettu alas
    console.log("4");
    if (movement.y != -10){
      movement = {x:0, y:10};
    }
  }
});

 let touch = {x:0, y:0}
//mobile touch
//tämä oli oma ensimmäinen mobiiliohjaus minkä heitin hatusta.
//Mulla ei ole mitään käsitystä kuinka se oikeasti pitäisi tehdä :D
//tälläinen purkkapatentti
document.addEventListener("touchstart", e=>{ //kosketus sijoittaa aloitus arvot muutujaan
  touch.x = event.touches[0].clientX;
  touch.y = event.touches[0].clientY });
document.addEventListener("touchmove", e=>{
  console.log(e[0]);
  if (event.touches[0].clientX > touch.x+50 ){ //jos liike on tarpeeksi iso niin mato vaihtaa suuntaa
    if (movement.x != -10){
    movement = {x:10, y:0};
    }
  }
  if (event.touches[0].clientX < touch.x-50 ){ //jos liike on tarpeeksi iso niin mato vaihtaa suuntaa
    if (movement.x != 10){
    movement = {x:-10, y:0};
    }
  }
  if (event.touches[0].clientY > touch.y+50 ){ //jos liike on tarpeeksi iso niin mato vaihtaa suuntaa
    if (movement.y != -10){
    movement = {x:0, y:10};
    }
  }
  if (event.touches[0].clientY < touch.y-50 ){ //jos liike on tarpeeksi iso niin mato vaihtaa suuntaa
    if (movement.x != 10){
    movement = {x:0, y:-10};
    }
  }
});




//game reset
const reset = () => {
  snake = [  {x: 200, y: 200},  {x: 190, y: 200},  {x: 180, y: 200},  {x: 170, y: 200},  {x: 160, y: 200}];

}


// game over
const gameOver = () =>{
  for(let i = 1; i<snake.length;i++){
    if (snake[0].x == snake[i].x && snake[0].y == snake[i].y){ //jos käärmeen pää ja kroppa on samassa paikkaa lopettaa pelin
      reset()
    }
    else if (snake[0].x == -10 || snake[0].x == 400 || snake[0].y == -10 || snake[0].y == 400){
      reset()
    }
  }
}
let getApple = false;

//random generator
const randomFood= ()=>
Math.floor(Math.random()*39)*10+10;


let fruit = {x:200, y:200}
//apple
const apple = () => {
  snakeboard_ctx.fillStyle = appleColor;  //nää ei esittelyä kaipaa samat kun käärmeessäkin
  snakeboard_ctx.strokeStyle = appleColor;
  snakeboard_ctx.fillRect(fruit.x, fruit.y, 10, 10);
  snakeboard_ctx.strokeRect(fruit.x, fruit.y,10 ,10);
  if (snake[0].x == fruit.x && snake[0].y == fruit.y){ //jos käärmeen pää osuu hedelmään niin saa pisteet ja tulee uusi.
    score += 10;
    getApple = true;
    fruit.y =randomFood()
    fruit.x = randomFood()

  }
}





//main thing rule all the things :)
const main = () =>{
  setTimeout(() =>{ //luo pienen viiveen koodin suorittamiseen niin ei peli liiku liian nopeasti.
    gameOver()
    clear()
    drawBorders()
    apple()
    drawSnake()
    moving()
    main()
  },50)
}
