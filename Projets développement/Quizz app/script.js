const questions = [
    {
        question: "Quel est le plus grand animal au monde?",
        answers: [
            { text:  "Requin", correct: false},
            { text:  "Baleine bleu", correct: true},
            { text:  "Eléphant", correct: false},
            { text:  "Girafe", correct: false},
        ]
    },
    {
        
        question: "Quel est le plus petit continent au monde?",
        answers: [
            { text:  "l'Asie", correct: false},
            { text:  "l'Australie", correct: true},
            { text:  "l'Arctique", correct: false},
            { text:  "l'Afrique", correct: false},
        ]
    },
    {
        question: "Quel est le plus grand désert au monde?",
        answers: [
            { text:  "Kalahari'", correct: false},
            { text:  "Gobi", correct: false},
            { text:  "Sahara", correct: false},
            { text:  "Antarctique", correct: true},
        ] 
    },
    {
        question: "Quel est le plus petit pays au monde?",
        answers: [
            { text:  "Le vatican'", correct: true},
            { text:  "Népal", correct: false},
            { text:  "Sri Lanka", correct: false},
            { text:  "Bénin", correct: true},
        ] 
    }
];

const questionelement = document.getElementById("question");
const answerbutton = document.getElementById("answer-buttons");
const nextbutton = document.getElementById("next-button");

let currentquestionindex = 0;
let score = 0;

function startquiz(){
    currentquestionindex = 0;
    score = 0;
    nextbutton.innerHTML =" Next";
    showquestion();
}

function showquestion(){
    resetestate();
    let currentquestion = questions[currentquestionindex];
    let questionNo = currentquestionindex + 1;
    questionelement.innerHTML = questionNo + ". " + currentquestion.question;

    currentquestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerbutton.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
            
        }
        button.addEventListener("click", selectanswer);
        
    });
}
function resetestate(){
nextbutton.style.display ="none";
while (answerbutton.firstChild) {
    answerbutton.removeChild(answerbutton.firstChild);
    
}
}

function selectanswer(e){
const selectedbtn = e.target;
const iscorrect = selectedbtn.dataset.correct === "true";
if (iscorrect) {
    selectedbtn.classList.add("correct");
    score++; 
}else{
    selectedbtn.classList.add("incorrect");
}

Array.from(answerbutton.children).forEach(button => {
    if (button.dataset.correct === true) {
        button.classList.add("correct");
        
    }
    button.disabled = true;
});
 nextbutton.style.display = "block";
}
function showscore() {
    resetestate();
    questionelement.innerHTML = `Votre score est de ${score} sur ${questions.length}!`;
    nextbutton.innerHTML ="Rejouer";
    nextbutton.style.display = "block";
}

function handlenextbutton(){
    currentquestionindex++;
    if (currentquestionindex < questions.length) {
        showquestion();
    }else{
        showscore();
    }
}
nextbutton.addEventListener("click", () => {
    if (currentquestionindex < questions.length) {
        handlenextbutton();
    }else{
        startquiz();
    }
})
startquiz();


