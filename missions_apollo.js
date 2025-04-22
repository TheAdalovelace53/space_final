alert("Bienvenue ! Sur cette page, vous découvrirez les différents missions Apollo menées par la NASA !") // s'affiche à l'ouverture de la page

function changeImage1(source){
    document.getElementById("nasa").src=source;
} //permet de changer l'image (d'id nasa) à son survol

function changeTexte1(){
    var element=document.getElementById("legende");
    element.textContent="La NASA";
} // permet de changer la légende au survol de l'image

function changeTexte2(){
    var element=document.getElementById("legende");
    element.textContent="Le programme Apollo";
}

function aPropos(){
    alert("Site entièrement créé par Arno SOULARD BARENTON 1G2. J'espère qu'il vous plaira")
}