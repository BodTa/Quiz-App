const submitBtn = document.getElementById("submit-btn");
const answerEls = document.querySelectorAll(".answer");
const quizCont = document.getElementById("quiz");
const QuizData = [
	{
		question: "What is DOM stands for?",
		a: "Data Of Math",
		b: "Data Object Model",
		c: "Document Object Model",
		d: "Direct of Models",
		correct: "c",
	},
	{
		question: "What is the HTML stands for?",
		a: "Hypertext Markup Language",
		b: "Hyper Transfer Module Language",
		c: "Helicopters Turbo Motor Layout",
		d: "Jason Object Notation",
		correct: "a",
	},
	{
		question: "What is the CSS stands for?",
		a: "Controlling Startup System",
		b: "Cascading Style Sheet",
		c: "Cyber Sons Style",
		d: "Cypber Super Songs",
		correct: "b",
	},
];
let currentQuiz = 0;
let checkAnswer = 0;
let score = 0;

loadQuiz();
function loadQuiz() {
	const quiz = QuizData[currentQuiz];
	const questionText = document.getElementById("question-text");
	const a = document.getElementById("a_text");
	const b = document.getElementById("b_text");
	const c = document.getElementById("c_text");
	const d = document.getElementById("d_text");
	questionText.innerHTML = quiz.question;
	a.innerHTML = quiz.a;
	b.innerHTML = quiz.b;
	c.innerHTML = quiz.c;
	d.innerHTML = quiz.d;
	currentQuiz++;
}
function getSelected() {
	let answer = undefined;
	answerEls.forEach(answerEls => {
		if (answerEls.checked) {
			answer = answerEls.id;
		}
	});
	return answer;
}
function deSelect() {
	answerEls.forEach(answerEls => {
		if (answerEls.checked) {
			answerEls.checked = false;
		}
	});
}
submitBtn.addEventListener("click", () => {
	const answer = getSelected();
	console.log(answer);
	if (answer != undefined) {
		if (answer === QuizData[checkAnswer].correct) {
			score++;
		}
		if (currentQuiz < QuizData.length) {
			checkAnswer++;
			loadQuiz();
			deSelect();
		} else {
			quizCont.innerHTML = `<h2>You answered correctly at ${score}/${QuizData.length} qustions. <\h2>`;
		}
	} else {
		alert("You have to chose answer");
	}
});
