let question = document.querySelector('.question-js');
let result = document.querySelector('.result-js');
let answer1 = document.querySelector('.answer1');
let answer2 = document.querySelector('.answer2');
let answer3 = document.querySelector('.answer3');
let answer4 = document.querySelector('.answer4');
let nextButton = document.querySelector('.next-button-js');
let previousButton = document.querySelector('.previous-button-js');

// Define questions and answers for each question
const questions = [
  'Question 1: What comes once in a minute, twice in a moment, but never in a thousand years?',
  'Question 2: I speak without a mouth and hear without ears. I have no body, but I come alive with the wind. What am I?',
  'Question 3: The more you take, the more you leave behind. What am I?',
  'Question 4: I am taken from a mine, and shut up in a wooden case, from which I am never released, and yet I am used by almost every person. What am I?',
  'Question 5: What has keys but can\'t open locks?',
  // Add more questions here
];
const answers = [
  { options: ['The letter "m"', 'The letter "i"', 'A leap year', 'A blink of an eye'], correctAnswer: 0 }, // Question 1
  { options: ['An echo', 'A song', 'A whisper', 'A cloud'], correctAnswer: 2 }, // Question 2
  { options: ['Memories', 'Time', 'Shadows', 'Footsteps'], correctAnswer: 3 }, // Question 3
  { options: ['Diamond', 'Pencil lead', 'Stone', 'Gold'], correctAnswer: 1}, //Question 4
  { options: ['Door', 'Safe', 'Piano', 'Chest'], correctAnswer: 2}, //Question 5
  // Add more answers objects for additional questions
];
let currentQuestionIndex = 0; // Change this index to select the appropriate question

// Set initial question and answer buttons content
question.innerText = questions[currentQuestionIndex];
answer1.innerText = answers[currentQuestionIndex].options[0];
answer2.innerText = answers[currentQuestionIndex].options[1];
answer3.innerText = answers[currentQuestionIndex].options[2];
answer4.innerText = answers[currentQuestionIndex].options[3];


  
 const correctAnswerIndex = answers[currentQuestionIndex].correctAnswer;

 answer1.onclick = function() {
   if (correctAnswerIndex === 0) {
     result.innerText = 'CORRECT!!!';
   } else  {result.innerText = 'WRONG!!';}
  
 
 };
 
 answer2.onclick = function() {
   if (correctAnswerIndex === 1) {
     result.innerText = 'CORRECT!!!';
   } else {result.innerText = 'WRONG!!';}
  
 };
 
 answer3.onclick = function() {
   if (correctAnswerIndex === 2) {
     result.innerText = 'CORRECT!!!';
   } else {result.innerText = 'WRONG!!';}
   
 };
 
 answer4.onclick = function() {
   if (correctAnswerIndex === 3) {
     result.innerText = 'CORRECT!!!';
   } else {result.innerText = 'WRONG!!';}
  
 
}


function nextAndPreviousButton(clickedButton) {
  if (clickedButton === nextButton) {
    // Clear previous result and reset buttons
    result.innerText = '';
    answer1.onclick = null;
    answer2.onclick = null;
    answer3.onclick = null;
    answer4.onclick = null;
    currentQuestionIndex++;

    if (currentQuestionIndex === questions.length) {
      currentQuestionIndex = 0; // Set current question index to the last question index
    } 

    // Update question text and answer buttons
    question.innerText = questions[currentQuestionIndex];
    answer1.innerText = answers[currentQuestionIndex].options[0];
    answer2.innerText = answers[currentQuestionIndex].options[1];
    answer3.innerText = answers[currentQuestionIndex].options[2];
    answer4.innerText = answers[currentQuestionIndex].options[3];

    // Set the correct answer behavior for the current question
    const correctAnswerIndex = answers[currentQuestionIndex].correctAnswer;

    answer1.onclick = function() {
      if (correctAnswerIndex === 0) {
        result.innerText = 'CORRECT!!!';
      } else  {result.innerText = 'WRONG!!';}
     
    
    };
    
    answer2.onclick = function() {
      if (correctAnswerIndex === 1) {
        result.innerText = 'CORRECT!!!';
      } else {result.innerText = 'WRONG!!';}
     
    };
    
    answer3.onclick = function() {
      if (correctAnswerIndex === 2) {
        result.innerText = 'CORRECT!!!';
      } else {result.innerText = 'WRONG!!';}
      
    };
    
    answer4.onclick = function() {
      if (correctAnswerIndex === 3) {
        result.innerText = 'CORRECT!!!';
      } else {result.innerText = 'WRONG!!';}
     
    };
  }

  if(clickedButton === previousButton){
      // Clear previous result and reset buttons
    result.innerText = '';
    answer1.onclick = null;
    answer2.onclick = null;
    answer3.onclick = null;
    answer4.onclick = null;
   

      // Check if current question index is already at the first question
    if (currentQuestionIndex === 0) {
      currentQuestionIndex = questions.length - 1; // Set current question index to the last question index
    } else {
      currentQuestionIndex--;
    }

    // Update question text and answer buttons
    question.innerText = questions[currentQuestionIndex];
    answer1.innerText = answers[currentQuestionIndex].options[0];
    answer2.innerText = answers[currentQuestionIndex].options[1];
    answer3.innerText = answers[currentQuestionIndex].options[2];
    answer4.innerText = answers[currentQuestionIndex].options[3];

    // Set the correct answer behavior for the current question
    const correctAnswerIndex = answers[currentQuestionIndex].correctAnswer;

    answer1.onclick = function() {
      if (correctAnswerIndex === 0) {
        result.innerText = 'CORRECT!!!';
      } else  {result.innerText = 'WRONG!!';}
     
    
    };
    
    answer2.onclick = function() {
      if (correctAnswerIndex === 1) {
        result.innerText = 'CORRECT!!!';
      } else {result.innerText = 'WRONG!!';}
     
    };
    
    answer3.onclick = function() {
      if (correctAnswerIndex === 2) {
        result.innerText = 'CORRECT!!!';
      } else {result.innerText = 'WRONG!!';}
      
    };
    
    answer4.onclick = function() {
      if (correctAnswerIndex === 3) {
        result.innerText = 'CORRECT!!!';
      } else {result.innerText = 'WRONG!!';}
     
    };

    if (currentQuestionIndex <= questions.length) {
      
      answer1.style.display = 'block';
      answer2.style.display = 'block';
      answer3.style.display = 'block';
      answer4.style.display = 'block';
      return;
  }
}

}