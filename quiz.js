class Question {
    constructor(element) {
        this.element = element;
        this.isAnswered = false; // Vérifie si la question a été répondue
        this.mauvaiseReponseCliquee = false; // Vérifie si une mauvaise réponse a été cliquée

        this.buttons = element.querySelectorAll(".reponse"); // Récupère tous les boutons de la question

        // Ajoute un event listener à chaque bouton
        this.buttons.forEach(button => {
            button.addEventListener("click", () => this.handleClick(button));
        });
    }

    handleClick(button) {
        if (this.isAnswered) return; // Si déjà répondu, ne fait rien

        if (button.classList.contains("vraie")) {
            this.handleCorrectAnswer(button);
        } else {
            this.handleWrongAnswer(button);
        }
    }

    handleCorrectAnswer(button) {
        if (!this.mauvaiseReponseCliquee) {
            // Augmente le score seulement si aucune mauvaise réponse n'a été cliquée
            Question.updateScore();
        }
        button.style.backgroundColor = "green";
        this.isAnswered = true;
    }

    handleWrongAnswer(button) {
        this.mauvaiseReponseCliquee = true; // Une mauvaise réponse a été cliquée
        this.isAnswered = true;
        button.style.backgroundColor = "red";
    }

    static updateScore() {
        let scoreElement = document.getElementById("score");
        let score = parseInt(scoreElement.textContent);
        score++;
        scoreElement.textContent = score +"/20";
    }
}

// Initialisation des questions
document.querySelectorAll(".question").forEach(questionElement => {
    new Question(questionElement);
});

function aPropos(){
    alert("Site entièrement créé par Arno SOULARD BARENTON 1G2. J'espère qu'il vous plaira")
}