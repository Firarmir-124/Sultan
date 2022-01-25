const option1 = document.querySelector('.option1'),
      option2 = document.querySelector('.option2'),
      option3 = document.querySelector('.option3'),
      option4 = document.querySelector('.option4');

const options = document.querySelectorAll('.option');

const question = document.getElementById('question'),
        numberOFquestion = document.getElementById('number-of-question'),
        numberOfAllQuestion = document.getElementById('number-of-all-questions');


let indexOfQuestion,
    indexOfPage = 0;


const answersTracker = document.getElementById('answers-tracker'); // количество правильных и не правильных ответов 
const btnNext = document.getElementById('btn-next'); //кнопка для перехода на следующий вопрос
    
let score = 0; // итоговый результат  викторины 
    
const correctAnswer = document.getElementById('correct-answer'), // количество правильных ответов
      numberOfAllQuestions2 = document.getElementById('number-of-all-questions-2'), //количество всех вопрос в модальном окне
      btnTryAgain = document.getElementById('btn-try-again'), // Начать викторину заново
      txtQuez = document.getElementById('txt-quez'); //Победное слово

const quizOverModal = document.querySelector('.quiz-over-modal');
const img = document.querySelector('.img img');
let timer = document.getElementById('timer'),
    blockTimer = document.querySelector('.timer'),
    timer2 = document.getElementById('timer2');

const offerImg_options = document.querySelector('.offer-img_options');
const btnClue = document.querySelector('.btnClue');
let clue = document.querySelector('.clue');

const questions = [
    {
        question: 'Какая страна первой запустила спутник?',
        options: [
            'СССР',
            'США',
            'ССР',
            'Спутников нет',
        ],
        rightAnswer: 0
    },
    {
        question: 'Кто является первой женщиной-космонавтом?',
        options: [
            'Папова галя',
            'Валентина Терешкова',
            'Маргира Иванова',
            'Софа Гер',
        ],
        rightAnswer: 1
    },
    {
        question: 'Как называется ближайшая к Солнцу планета?',
        options: [
            'Венера',
            'Луна',
            'Сатурн',
            'Меркурий',
        ],
        rightAnswer: 3
    },
    {
        question: 'Что в переводе с греческого означает "комета"?',
        options: [
            'Хвостатая звезда',
            'Снег',
            'Хвоя',
            'Пришелец',
        ],
        rightAnswer: 0
    }
];

numberOfAllQuestion.innerHTML = questions.length; // Кол вопросов

let load = function() {
    question.innerHTML = questions[indexOfQuestion].question;
    //Добавляем ответы
    option1.innerHTML = questions[indexOfQuestion].options[0];
    option2.innerHTML = questions[indexOfQuestion].options[1];
    option3.innerHTML = questions[indexOfQuestion].options[2];
    option4.innerHTML = questions[indexOfQuestion].options[3];

    numberOFquestion.innerHTML = indexOfPage + 1;
    indexOfPage++;
}

let complatedAnsewer = []; //Массив для заполненеия уже заданных вопросов

let randomQuestion = function() {
    let randomNum = Math.floor( Math.random() * questions.length );
    let hitDublication = false; //Якорь для проверки одинаковых вопросов

    if (indexOfPage == questions.length) {
        quizOver()
    } else {
        if (complatedAnsewer.length > 0) {
            complatedAnsewer.forEach(function(item) {
                if (item == randomNum) {
                    hitDublication = true;
                }
            });
            if (hitDublication) {
                randomQuestion();
            } else {
                indexOfQuestion = randomNum;
                load();
            }
        }
        if (complatedAnsewer.length == 0) {
            indexOfQuestion = randomNum;
            load();
        }

    }
    complatedAnsewer.push(indexOfQuestion);
}


let cheikAnsewer = function(el) {
    if (el.target.dataset.id == questions[indexOfQuestion].rightAnswer) {
        el.target.classList.add('correct');
        score++;
        updateAnswersTrackers('correct')
    } else {
        el.target.classList.add('wrong');
        updateAnswersTrackers('wrong')
    }
    disabledOption();
}


for (option of options) {
    option.addEventListener('click', function(el) {cheikAnsewer(el)});
}

let disabledOption = function() {
    options.forEach(function(item) {
        item.classList.add('disabled');
        if (item.dataset.id == questions[indexOfQuestion].rightAnswer) {
            item.classList.add('correct')
        }
    })
};

let enableOptions = function() {
    options.forEach(function(item) {
        item.classList.remove('disabled','correct','wrong');
    })
}

let volidate = function() {
    if(! options[0].classList.contains('disabled')) {
        alert('Выберите одно из полей ответов !')
    } else {
        enableOptions();
        randomQuestion();
    }
}

let answersTrackers = function() {
    questions.forEach(function() {
        const div = document.createElement('div');
        answersTracker.appendChild(div);
    })
}

let updateAnswersTrackers = function(status) {
    answersTracker.children[indexOfPage - 1].classList.add(`${status}`);
}


btnNext.addEventListener('click', function() {
    volidate();
    clue.style.display = 'none';
})

let quizOver = function() {
    quizOverModal.classList.add('active');
    correctAnswer.innerHTML = score;
    numberOfAllQuestions2.innerHTML = questions.length;
    volidateQuizOver();
}

let setTimer = function(item) {
    timer.innerHTML = 4;
    item = setInterval(() => {
        timer.innerHTML--;
        if (timer.innerHTML == 0) {
            clearInterval(item);
            randomQuestion();
            setTimer2();
            blockTimer.classList.add('active');
        }
    }, 1000);
}

let setTimer2 = function(item) {
    item = setInterval(() => {
        timer2.innerHTML--;
        if (timer2.innerHTML == 0) {
            clearInterval(item);
            quizOver();
        } else if (timer2.innerHTML == 10) {
            timer2.style.color = 'red'
        }
    }, 1000);
}

let volidateQuizOver = function() {
    if (score < 3) {
        document.querySelector('h1').innerHTML = 'Плохой результат !'
        img.src = './img/false.svg';
    } else {
        document.querySelector('h1').innerHTML = 'Хороший результат !'
        txtQuez.innerHTML = 'пуська'
    }
}

let reloadQuizOver = function() {
    window.location.reload();

}


let getClue = function() {
    clue.innerHTML = questions[indexOfQuestion].rightAnswer + 1;
    clue.style.display = 'flex';
}

btnTryAgain.addEventListener('click', reloadQuizOver)
offerImg_options.addEventListener('click', getClue, {once: true});
btnClue.addEventListener('click', getClue, {once: true});

let greetings = function () {
    alert('Привет друг. Это тест о космосе.Тебе доступна одна подсказка, нажав на секретный спутник')
}


window.addEventListener('load', function() {
    greetings();
    answersTrackers();
    setTimer();
})