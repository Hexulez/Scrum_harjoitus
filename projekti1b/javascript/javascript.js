function nimi() {

var nimi = document.getElementById('nimi').value;

if(nimi.length < 2)
{
alert("Et antanut nimeäsi");
form.nimi.focus();
return false;
}
}

function email() {

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


function ika() {

var ika = document.getElementById('ika').value;

if(ika == string)
{
alert("Syötä numero");
form.ika.focus();
return false;
}
}
