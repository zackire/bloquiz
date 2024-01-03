const quizData = [
    {
        question: "Which character from 'Game of Thrones' is known for saying, 'You know nothing, Jon Snow'?",
        image: "gifs/fantasy.gif",
        a: "Tyrion Lannister",
        b: "Daenerys Targaryen",
        c: "Sansa Stark",
        d: "Ygritte",
        correct: "d"
    },
    {
        question: "What is the primary setting of the TV show 'Breaking Bad'?",
        image: "gifs/breakingbad.gif",   
        a: "Los Angeles",
        b: "Miami",
        c: "Albuquerque",
        d: "Texas",
        correct: "c"
    },
    {
        question: "In the TV series 'Friends,' what is the name of Ross Geller's second wife?",
        image: "gifs/friends1.gif",
        a: "Rachel Green",
        b: "Emily Waltham",
        c: "Janice Litman",
        d: "Carol Willick",
        correct: "b"
    },
    {
        question: "In the TV series 'Succession,' who is the patriarch of the Roy family and the founder of the media conglomerate Waystar RoyCo?",
        image: "gifs/shivroy.gif",
        a: "Logan Roy",
        b: "Kendall Roy",
        c: "Roman Roy",
        d: "Shiv Roy",
        correct: "a"
    },
    {
        question: "Who created and stars as the main character in the TV series 'Fleabag'?",
        image: "gifs/fleabag.gif",
        a: "Olivia Colman",
        b: "Fiona Shaw",
        c: "Phoebe Waller-Bridge",
        d: "Sian Clifford",
        correct: "c"
    },
];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const imageEl = document.getElementById('image');
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0
loadQuiz()
function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    imageEl.src = currentQuizData.image;
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => {
        answerEl.checked = false;
    });
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }
       currentQuiz++
       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>
           <button onclick="location.reload()">Repeat Quiz</button>
           `
       }
    }
})
