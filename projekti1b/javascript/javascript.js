function Tulosta() {    // ei mitään hajua onko oikein, enkä muista kuinka tarkistetaan, selvittelen... //

var nimi = kyselylomake.nimi.value;

if(nimi.length < 2)
{
alert("Et antanut nimeäsi");
form.nimi.focus();
return false;
}
}
