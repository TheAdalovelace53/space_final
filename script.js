function aPropos(){
    alert("Site entièrement créé par TheAdaLovelace53. J'espère qu'il vous plaira")
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
