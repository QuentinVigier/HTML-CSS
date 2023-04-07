let chiffreUn = document.querySelector("#chiffre1");
let chiffreDeux = document.querySelector("#chiffre2");

function calculer () {
let resultat = chiffreUn + chiffreDeux;
document.getElementById("somme").innerHTML=resultat;
console.log(resultat);
}