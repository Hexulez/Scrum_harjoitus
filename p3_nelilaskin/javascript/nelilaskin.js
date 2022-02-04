
//näyttö
let display = document.getElementById('naytto')

//tekee listan kaikisita <div> class="button"
let buttons = Array.from(document.getElementsByClassName("button"));

//käy kaikki listan elementit läpi ja suorittaa jokaisella elementillä seuraavan funktion
buttons.map( button => {
    //tarkkailee jos jotakin painetaan
    button.addEventListener('click', (e) => {
        //ottaa elementin tekstin ja siitä tulee perinteinen switch case
        switch(e.target.innerText){
            //AC tyhjentää "näytön"
            case 'AC':
                display.innerText = '';
                break;

                // kokeilee eval komennolla suorittaa functiona "näytöllä" olevan merkkijonon
                //tai antaa virheen
            case '=':
                try{
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = "Error"
                }
                break;
                //ottaa yhden nymeron näytöltä (viimeisenä olevan)
            case 'C':
                if (display.innerText){
                     display.innerText = display.innerText.slice(0, -1);
                }
                break;
                //näyttää "näytöllä" merkkijonon jota on jo painettu
                //lisää myöskin uudet painetut merkit ellei vielä ollut missään case kohdassa.
            default:
                display.innerText += e.target.innerText;
        }
    });
});
