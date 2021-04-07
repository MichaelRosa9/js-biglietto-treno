//prompt chilometraggio
var userKm = prompt("Quanti chilometri vuoi percorrere?");
if(isNaN(userKm )){
  alert("Error");
}

//prompt età passeggero
var userAge = prompt("Quanti hanni hai?");
if(isNaN(userAge )){
  alert("Error");
}

//costo al chilometro
var costPerKm = 0.21;
var totPrice = (userKm * costPerKm).toFixed(2);

//sconti prezzi
var minorDiscount = (totPrice * 20) / 100;
var seniorDiscount = (totPrice * 60) / 100;
//calcolo sconto
if(userAge < 18){
  totPrice = totPrice - minorDiscount;
}
else if(userAge > 65){
  totPrice = totPrice - seniorDiscount;
}

//risultato
document.getElementById("js").innerHTML = totPrice + "€";