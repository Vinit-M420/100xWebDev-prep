//  use this quizData in your app.
// export 
const quizData = [{
    "question": "Which language runs in a web browser?",
    "a": "Java",
    "b": "C",
    "c": "Python",
    "d": "JavaScript",
    "correct": "d",
},
{
    "question": "What does CSS stand for?",
    "a": "Central Style Sheets",
    "b": "Cascading Style Sheets",
    "c": "Cascading Simple Sheets",
    "d": "Cars SUVs Sailboats",
    "correct": "b",
},
{
    "question": "What does HTML stand for?",
    "a": "Hypertext Markup Language",
    "b": "Hypertext Markdown Language",
    "c": "Hyperloop Machine Language",
    "d": "Helicopters Terminals Motorboats Lamborginis",
    "correct": "a",
},
{
    "question": "What year was JavaScript launched?",
    "a": "1996",
    "b": "1995",
    "c": "1994",
    "d": "none of the above",
    "correct": "b",
},
// you can add more quiz here
]

let currentQuestion = 0;
let score = 0;
const quizlength = quizData.length;

function submit() {
    const correctAns = quizData[currentQuestion].correct; 
    const selected = document.querySelector('input[name="answer"]:checked');
    if (!selected){
        alert('Please check your answer before submitting')
    }
    
    if (selected.value == correctAns) {
        score = score + 1;
    }
    currentQuestion = currentQuestion + 1;
    

    if (currentQuestion === quizlength) {
        const quizBox = document.querySelector('.quiz-box');
        quizBox.innerHTML = '';
        const quizEnd = document.createElement('h2');
        quizEnd.textContent = `You got ${score}/${quizlength}`;
    
        quizBox.appendChild(quizEnd);
        return;
    }

    renderQuestion(currentQuestion);

};

function renderQuestion(index){
    const quizBox = document.querySelector('.quiz-box'); 
    quizBox.innerHTML = '';
    let quiz = quizData[index];

    const quizQ = document.createElement('h2');
    quizQ.textContent = quiz.question;
    quizBox.appendChild(quizQ);

    function createOption(key, value) {
        const label = document.createElement('label');
        label.style.display = 'block'; 
        const input = document.createElement('input');
        input.type = 'radio';
        input.name = 'answer'; // Important
        input.value = key;

        label.appendChild(input);
        label.appendChild(document.createTextNode(' ' + value));
        label.setAttribute('class','quizlabel')
        return label;
    }

    quizBox.appendChild(createOption('a', quiz.a));
    quizBox.appendChild(createOption('b', quiz.b));
    quizBox.appendChild(createOption('c', quiz.c));
    quizBox.appendChild(createOption('d', quiz.d));

    const submitBtn = document.createElement('button');
    submitBtn.textContent = 'Submit';
    submitBtn.addEventListener('click', submit); // Instead of onclick attribute
    quizBox.appendChild(submitBtn);

    
};

window.onload = function () {
    renderQuestion(currentQuestion);
};
