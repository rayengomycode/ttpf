const questions = [
    { question: "Quand le Real Madrid a-t-il été fondé?", options: ["1902", "1910", "1920"], correctAnswer: 0 },
    { question: "Qui est le meilleur buteur de l'histoire du Real Madrid?", options: ["Cristiano Ronaldo", "Raul", "Alfredo Di Stefano"], correctAnswer: 1 },
    { question: "Combien de fois le Real Madrid a-t-il remporté la Ligue des champions de l'UEFA?", options: ["10", "13", "15"], correctAnswer: 1 },
    { question: "Dans quel stade le Real Madrid joue-t-il ses matchs à domicile?", options: ["Santiago Bernabeu", "Camp Nou", "Wanda Metropolitano"], correctAnswer: 0 },
    { question: "Quel est le surnom du Real Madrid?", options: ["Les Blaugrana", "Les Colchoneros", "Les Merengues"], correctAnswer: 2 },
    { question: "Qui est le président actuel du Real Madrid?", options: ["Florentino Perez", "Josep Maria Bartomeu", "Andrea Agnelli"], correctAnswer: 0 },
    { question: "Quelle équipe est considérée comme le plus grand rival du Real Madrid?", options: ["Barcelona", "Atletico Madrid", "Sevilla"], correctAnswer: 0 },
    { question: "Qui est le meilleur passeur de l'histoire du Real Madrid?", options: ["Lionel Messi", "Zinedine Zidane", "Ferenc Puskas"], correctAnswer: 1 },
    { question: "Quel joueur a remporté le plus de Ballons d'Or avec le maillot du Real Madrid?", options: ["Cristiano Ronaldo", "Alfredo Di Stefano", "Raul"], correctAnswer: 0 },
    { question: "En quelle année le Real Madrid a-t-il remporté sa première Ligue des champions?", options: ["1956", "1960", "1966"], correctAnswer: 0 },
    { question: "Quel entraîneur a remporté le plus de titres avec le Real Madrid?", options: ["Zinedine Zidane", "Vicente del Bosque", "Jose Mourinho"], correctAnswer: 0 },
    { question: "Combien de fois le Real Madrid a-t-il remporté la Liga espagnole?", options: ["30", "34", "38"], correctAnswer: 1 },
    { question: "Quel joueur a marqué le plus de buts en une seule saison pour le Real Madrid?", options: ["Cristiano Ronaldo", "Raul", "Hugo Sanchez"], correctAnswer: 0 },
    { question: "En quelle année le Real Madrid a-t-il été nommé 'Meilleur club du 20e siècle' par la FIFA?", options: ["1998", "2000", "2002"], correctAnswer: 2 },
    { question: "Qui est le capitaine actuel du Real Madrid?", options: ["Sergio Ramos", "Luka Modric", "Karim Benzema"], correctAnswer: 0 },
    { question: "Quel joueur est surnommé 'La Fábrica' et est connu pour être formé au Real Madrid?", options: ["Marco Asensio", "Dani Carvajal", "Sergio Ramos"], correctAnswer: 1 },
    { question: "Combien de fois le Real Madrid a-t-il remporté la Coupe du Roi?", options: ["17", "19", "23"], correctAnswer: 2 },
    { question: "Quel était le nom précédent du Real Madrid?", options: ["Club Español de Madrid", "Real Sociedad de Madrid", "Madrid Football Club"], correctAnswer: 2 },
    { question: "Qui est le meilleur gardien de but de l'histoire du Real Madrid?", options: ["Iker Casillas", "Keylor Navas", "Thibaut Courtois"], correctAnswer: 0 },
    { question: "Quel joueur a marqué le 'But du siècle' pour le Real Madrid en 2002?", options: ["Zinedine Zidane", "Roberto Carlos", "Raul"], correctAnswer: 1 },
    // Ajoutez d'autres questions de la même manière
];


let currentQuestion = 0;
const userAnswers = [];

function showQuestion() {
    const questionContainer = document.getElementById("question-container");
    questionContainer.innerHTML = `
        <h3>${questions[currentQuestion].question}</h3>
        <label>
            <input type="radio" name="answer" value="0"> ${questions[currentQuestion].options[0]}
        </label>
        <label>
            <input type="radio" name="answer" value="1"> ${questions[currentQuestion].options[1]}
        </label>
        <label>
            <input type="radio" name="answer" value="2"> ${questions[currentQuestion].options[2]}
        </label>
    `;
}

function nextQuestion() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    if (selectedAnswer) {
        userAnswers[currentQuestion] = parseInt(selectedAnswer.value);
        currentQuestion++;
        if (currentQuestion < questions.length) {
            showQuestion();
        } else {
            finishQuiz();
        }
    } else {
        alert("Veuillez sélectionner une réponse.");
    }
}

function prevQuestion() {
    currentQuestion = Math.max(0, currentQuestion - 1);
    showQuestion();
}

function finishQuiz() {
    const resultContainer = document.getElementById("result-container");
    const resultTable = document.getElementById("result-table");

    resultContainer.style.display = "block";

    // Construire le tableau des résultats
    let score = 0;
    for (let i = 0; i < questions.length; i++) {
        const userAnswer = userAnswers[i];
        const correctAnswer = questions[i].correctAnswer;

        const row = resultTable.insertRow(i);
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const cell3 = row.insertCell(2);

        cell1.innerHTML = `Question ${i + 1}`;
        cell2.innerHTML = `Votre réponse: ${questions[i].options[userAnswer]}`;
        cell3.innerHTML = `Réponse correcte: ${questions[i].options[correctAnswer]}`;

        if (userAnswer === correctAnswer) {
            score += 1; // Correction ici
        }
    }

    // Ajouter la ligne du score
    const scoreRow = resultTable.insertRow(questions.length);
    const cell1 = scoreRow.insertCell(0);
    const cell2 = scoreRow.insertCell(1);

    cell1.innerHTML = "Score";
    cell2.innerHTML = `${score} / ${questions.length}`;
}

// Afficher la première question au chargement de la page
showQuestion();
