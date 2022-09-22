let myTitle = document.getElementById("title");

let colorChanger = (color, time, callback) => {
  setTimeout(() => {
    myTitle.style.color = color;
    if (callback) callback();
  }, time);
};

colorChanger("yellow", 1000, () => {
  colorChanger("green", 1000, () => {
    colorChanger("purple", 1000, () => {
      colorChanger("green", 1000, () => {
        colorChanger("yellow", 1000, () => {
          colorChanger("purple", 1000, () => {
            colorChanger("green", 1000, () => {
              colorChanger("yellow", 1000, () => {
                colorChanger("purple", 1000, () => {
                  colorChanger("yellow", 1000, () => {
                    colorChanger("green", 1000, () => {});
                  });
                });
              });
            });
          });
        });
      });
    });
  });
});

colorChanger();
let rightArr = [];
const myQuestions = [
  {
    question: "Mardi Gras actually means:",
    answer1: "Merry Times",
    answer2: "Spring Welcome",
    answer3: "Fat Tuesday",
  },
  // correctAnswer:"answer3"

  {
    question: "The religious name for Mardi Gras is:",
    answer1: "Shrove Tuesday",
    answer2: "Whitsunday",
    answer3: "Prelent",
  },
  // correctAnswer:"a"

  {
    question:
      "In New Orleans,Mardi Gras celebrations are centered around this famous neighborhood:",
    answer1: "Latin Quarter",
    answer2: "French Quarter",
    answer3: " Sin City",
  },
  // correctAnswer:"answer2"

  {
    question:
      "New Orleans and Mardi Gras are often associated with this type of music:",
    answer1: "jazz",
    answer2: "French folk songs",
    answer3: "opera",
  },
  // correctAnswer:"answer1"

  {
    question: "Many Mardi Gras events are organized by private clubs known as:",
    answer1: "brotherhoods",
    answer2: "fraternities",
    answer3: "krewes",
  },
  ,
  // correctAnswer:"answer3"

  {
    question:
      "King Cakes are a popular Mardi Gras tradition. Inside the cake is hidden a:",
    answer1: "plastic baby",
    answer2: "silver dollar",
    answer3: "treasurehunt map",
  },
  // correctAnswer:"answer1"

  {
    question: "The Mardi Gras colors are:",
    answer1: "red white and blue",
    answer2: "white and gold",
    answer3: "purple green and gold",
  },
  // correctAnswer:"answer3"

  {
    question:
      "The young of all ages line the Mardi Gras parade route hoping to catch special coins tossed from the floats. The coins are known as:",
    answer1: " Mardi Gras pennies",
    answer2: "centimes",
    answer3: "doubloons",

    // correctAnswer:"answer3"
  },

  {
    question:
      "In Rio de Janeiro, Brazil, the Mardi Gras celebration is known as:",
    answer1: "Brazil Day",
    answer2: "Mardi Gras",
    answer3: "Carnival",
  },
  // correctAnswer:"answer3"

  {
    question:
      "This relatively small country features one of the largest Carnival celebrations in the world:",
    answer1: "Jamaica",
    answer2: "Trinidad and Tobago",
    answer3: "Grenada",
  },
  // correctAnswer:"b"
];

let myQuiz = document.getElementById("quiz");
let myresults = document.getElementById("results");
let btn = document.getElementById("submit");
let score=0
let currentQuiz=0

myQuestions.forEach((question) => {
  myQuiz.innerHTML += `
  <div class="container">
  <div class="question"> <h2>${question.question}</h2>  </div>

  <div class="answer-1">
  <input type="radio" id="${question.question}-answer-a" name="${question.question}" value="${question.answer1}">${question.answer1}</input><br>
  </div>
  
  <div class="answer-2">
  
  <input type="radio" id="answer-b" name="${question.question}" value="${question.answer2}">${question.answer2}</input><br>
  </div>
  
  <div class="answer-3">
  <input type="radio" id="answer-c" name="${question.question}" value="${question.answer3}">${question.answer3}</input><br>
  
  </div> `;
});
const correctAnswers = [
  myQuestions[0].answer3,
  myQuestions[1].answer1,
  myQuestions[2].answer2,
  myQuestions[3].answer1,
  myQuestions[4].answer3,
  // myQuestions[5].answer1,
  myQuestions[6].answer3,
  myQuestions[7].answer3,
  myQuestions[8].answer3,
  myQuestions[9].answer2,
];

btn.addEventListener("click", (evt) => {
if(myQuestions[0].question=correctAnswers[0])
  alert("yas")
else{("nooooooo")
}
});
