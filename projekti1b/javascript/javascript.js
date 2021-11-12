function Tarkasta() {

var nimi = document.getElementById('nimi').value;

if(nimi.length < 2)
{
alert("Et antanut nimeäsi");
form.nimi.focus();
return false;
}
}

function Tarkasta() {

var email = document.getElementById('email').value;

function emailIsValid (email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) }
  if(emailIsValid(sahkoposti)) {
    // else?
    alert("Anna oikea sähköpostiosoitteesi");
  form.email.focus();
  return (false);
}
}


function Tarkasta() {

var ika = document.getElementById('ika').value;

if(ika.length < 2)
{
alert("Et antanut nimeäsi");
form.ika.focus();
return false;
}
}
