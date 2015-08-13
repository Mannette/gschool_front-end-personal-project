// create question class
function Questions(question, answers, rightAnswer) {
  this.question = question;
  this.answers = answers;
  this.rightAnswer = rightAnswer;
}

// Create first question
questionOne = new Questions(
  "Which is a primitive in JavaScript?",
  {
    1: "Script",
    2: "String",
    3: "this",
    4: "Java"
  },
  2
);

// Create second question
questionTwo = new Questions(
  "What does NaN mean?",
  {
    1: "BaNaNa",
    2: "New at number",
    3: "Nothing to see here",
    4: "Not a number"
  },
  4
);

// Create third question
questionThree = new Questions(
  "Which company developed JavaScript?",
  {
    1: "Netscape",
    2: "Java",
    3: "Java gods",
    4: "twitter"
  },
  1
);

// Create fourth question
questionFour = new Questions(
  "Which of these is used for comments in JavaScript?",
  {
    1: "<!-- -->",
    2: "*/ /*",
    3: "//",
    4: "```"
  },
  3
);

// Create fifth question
questionFive = new Questions(
  "Which symbol means 'OR'?",
  {
    1: "?",
    2: "||",
    3: "/!/",
    4: "&|"
  },
  2
);

// Create sixth question
questionSix = new Questions(
  "Which one is a looping structure?",
  {
    1: "do-while",
    2: "if",
    3: "during",
    4: "fizz-buzz"
  },
  1
);

// Create seventh question
questionSeven = new Questions(
  "What does '4' + '8' equal?",
  {
    1: "24",
    2: "12",
    3: "16",
    4: "48"
  },
  4
);

// Create eigth question
questionEight = new Questions(
  "What value does NULL represent?",
  {
    1: "0",
    2: "None",
    3: "< 0",
    4: "> 0"
  },
  2
);

// Create ninth question
questionNine = new Questions(
  "Which of these is a Boolean operator?",
  {
    1: "<",
    2: ">",
    3: "!",
    4: "=="
  },
  3
);

// Create tenth question
questionTen = new Questions(
  // change this question.
  "What is my middle name?",
  {
    1: "Julian",
    2: "Mark",
    3: "Antonio",
    4: "Roy"
  },
  4
);

// Create array to hold questions.
var questionArr =
[
  questionOne,
  questionTwo,
  questionThree,
  questionFour,
  questionFive,
  questionSix,
  questionSeven,
  questionEight,
  questionNine,
  questionTen
];

// function to check answer
function check(questions) {
  if (userInput === questions[this.rightAnswer]) {
    // remove question from array.
    alert("Nice work!");
    // Advance to next question.
    // run specialQuestion.
  }
  else {
    // Wrong answer, try again!
    alert("Sorry, try again!");
  }
}

// on advance, determine if next question will be a 'special' question.
function specialQuestion(questionArr) {
  var specialOdds = Math.ceil(Math.random() * 4);
  if (specialOdds === 2) {
    // change question at first index to special question.
    // give player item on correct answer.
  }
  else {
    // normal question.
  }
}

module.exports = Questions;
