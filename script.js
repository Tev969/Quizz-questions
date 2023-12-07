let titleQuest = document.querySelector("#title");
let allQuest = document.querySelectorAll(".libutton");
let index = 0;
let score = 0;





let finalScore = document.querySelector("#res");
document.querySelector("#res").style.display = 'none';
function nextQuest() {
if (index < 5) {
     index ++
}
if (index === 5) {
     document.querySelector("#res").style.display = 'block';
     document.querySelector("#res").textContent = 'Votre score est ' + score

}
  ShowQuestions();
 
}

const shuffleArray = array => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}


let Myquestions = [
  {
    questionsTitle: "Utilité de la boucle if ?",
    answers: [
      "Se foutre de vous",
      "Vénerer Pascal",
      "Intégrer du CSS au HTML",
      "Lier son JS",
    ],
    goodAnswer: "Se foutre de vous",
  },
  {
    questionsTitle: "Qui a marché sur la lune ??",
    answers: [
      "Nelson Mandela",
      "Probablement Pascal",
      "Sarkozy",
      "Tom & Jerry",
    ],
    goodAnswer: "Sarkozy",
  },
  {
    questionsTitle: "Comment a était faite la PS2",
    answers: [
      "Dans un petit labo",
      "Sur le dos de Rémi",
      "Avec un marteau et des petits clous",
      "Des ingénieurs pardi !",
    ],
    goodAnswer: "Sur le dos de Rémi",
  },
  {
    questionsTitle: "Que veut dire HTML ?",
    answers: [
      "Hyper Text Markeup Language",
      "Hypopotame trompeur mon loulou",
      "Hyper Machin libelulle",
      "Pascal",
    ],
    goodAnswer: "Hyper Machin libelulle",
  },
  {
    questionsTitle: "Qui se souvient de Louis XVI ?",
    answers: ["Certainnement pas moi", "Toi", "Vous", "Probablement Thomas"],
    goodAnswer: "Probablement Thomas",
  },
];

function ShowQuestions() {
  document.querySelectorAll(".selected").forEach((el) => {
    el.classList.remove("selected");
  });
  titleQuest.innerHTML = Myquestions[index].questionsTitle;
  allQuest.forEach((element, i) => {
    element.innerHTML = Myquestions[index].answers[i];
  });
}

function goodAnswers(answer) {
  document.querySelectorAll(".selected").forEach((el) => {
    el.classList.remove("selected");});
  answer.classList.add("selected");
  console.log(answer.innerHTML);
     
  console.log(index);
  if (answer.innerHTML == Myquestions[index].goodAnswer) {
    score += 1;
    finalScore = finalScore + score;
    console.log(parseInt(score));
  } 


}


Myquestions.forEach(element => {
     shuffleArray(element.answers)
});


ShowQuestions()




