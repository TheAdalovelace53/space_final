function aPropos(){
    alert("Site entièrement créé par Arno SOULARD BARENTON 1G2. J'espère qu'il vous plaira")
}

function ouvrirDescription(id){
    var description = document.getElementById(id);
    if (description.style.display === "none") {
        description.style.display = "block";
    } 
    else {
        description.style.display = "none";
    }
} //permet d'ouvrir la description relative aux différentes rubriques