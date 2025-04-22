alert("Bienvenue ! Sur cette page, vous découvrirez les mystères de l'Univers, de sa formation à celle de notre système solaire.")// s'affiche à l'ouverture de la page

function afficherFaux(id){
    var couleur=document.getElementById(id);
    couleur.style.backgroundColor="red";
    var affiche=document.getElementById("cache");
    affiche.style.display="flex";
} //permet d'afficher une mauvaise réponse en rouge et d'afficher sa description

function afficherVrai(){
    var couleur=document.getElementById('vrai');
    couleur.style.backgroundColor="green";
    var affiche=document.getElementById("cache2");
    affiche.style.display="flex";
    var affiche2=document.getElementById("cache");
    affiche2.style.display="none";
}//permet d'afficher la bonne réponse en vert et d'afficher sa description

function changeImage(source){
    document.getElementById("proton_neutron").src=source;
}// permet de changer l'image à son survol

function changeTexte1(){
    document.getElementById('legende').textContent="Neutron";
}//permet de changer la légende de l'image à son survol

function changeTexte2(){
    document.getElementById('legende').textContent="Proton";
}

function aPropos(){
    alert("Site entièrement créé par Arno SOULARD BARENTON 1G2. J'espère qu'il vous plaira")
}