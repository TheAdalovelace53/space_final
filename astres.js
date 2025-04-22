alert("Bienvenue ! Sur cette page, vous découvrirez les différents types d'astres qui existent dans l'univers.") //s'affiche à l'ouverture de la page

function afficherVrai(){
    var couleur=document.getElementById('vrai');
    couleur.style.backgroundColor="green";
    document.getElementById('vrai').textContent="Bravo ! L'étoile la plus proche de nous s'appelle Proxima de Centaure et est située à 4,246 années-lumière de la Terre !";
} // permet de colorer en vert la bonne réponse et d'afficher le texte descriptif associé

function afficherFaux1(){
    var couleur=document.getElementById('faux1');
    couleur.style.backgroundColor="red";
    document.getElementById('faux1').textContent="Faux ! Véga est située à 25,05 années-lumière de la Terre ! Essaye encore.";
}// permet de colorer en rouge une mauvaise réponse et d'afficher le texte descriptif associé

function afficherFaux2(){
    var couleur=document.getElementById('faux2');
    couleur.style.backgroundColor="red";
    document.getElementById('faux2').textContent="Faux ! Bételgeuse est située à 642,5 années-lumière de la Terre ! Essaye encore.";
}

function afficherFaux3(){
    var couleur=document.getElementById('faux3');
    couleur.style.backgroundColor="red";
    document.getElementById('faux3').textContent="Faux ! Sirius est située à 8,611 années-lumière de la Terre ! Essaye encore.";
}

function afficherFaux4(){
    var couleur=document.getElementById('faux4');
    couleur.style.backgroundColor="red";
    document.getElementById('faux4').textContent="Faux ! Rigel est située à 864,3 années-lumière de la Terre ! Essaye encore.";
}

function changeImage(source){
    document.getElementById("planete").src=source;
} // permet de changer l'image à son survol

function changeTexte(){
    document.getElementById("legende").textContent="Une exoplanète";
}// permet de changer la description au survol de l'image

function changeTexte2(){
    document.getElementById("legende").textContent="Une planète (Jupiter)";
}

function agrandirImage(){
    var dimensions=document.getElementById("planete");
    var ecriture=document.getElementById("legende");
    var i=parseInt(dimensions.style.width) || 500;
    var j=parseInt(ecriture.style.marginLeft) || 25;
    if(i<900){ //quand i est inférieur à 900
        i+=200 // i s'incrémente de 200
        j-=5
        dimensions.style.width=i+"px";  // il faut rajouter "px"
        ecriture.style.marginLeft=j+"%";
    }
} // permet d'agrandir l'image

function retrecirImage(){
    var dimensions=document.getElementById("planete");
    var ecriture=document.getElementById("legende");
    var i=parseInt(dimensions.style.width) || 500;
    var j=parseInt(ecriture.style.marginLeft) || 25;
    if(i>300){ 
        i-=200 
        j+=5
        dimensions.style.width=i+"px";
        ecriture.style.marginLeft=j+"%";
    }
}//permet de rétrécir l'image

function aPropos(){
    alert("Site entièrement créé par Arno SOULARD BARENTON 1G2. J'espère qu'il vous plaira")
}