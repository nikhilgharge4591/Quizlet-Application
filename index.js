// Install Packages
const readLineSync = require('readline-sync');
console.log("Welcome to Quizlet \n");

// Take input as user name
const playerName = readLineSync.question("What is your name? \n");

console.log();

// UserWelcomeInfo function defined
const description = function userWelcomeInfo(){
  console.log(`Hello ${playerName} 😊😊! My name is Nikhil Gharge and I am  Software Engineer. Today, I will like you to play this interesting quiz and see how knowledgeable you are 😎😎😎😎. \n`);
};

// UserWelcomeInfo function has been called
description();

// gameRulesInfo function is been defined
const gameRules = function gameRulesInfo(){
    console.log("Multiple Choice Quiz about World Test Championship \n");
};

// gameRules function is execute
gameRules(); 

console.log("Lets start the Quiz and Best of Luck 🤞\n");

let userScore = 0;

// mcqList declaration
const mcqList = [
{
  options:['England','Sri Lanka', 'South Africa', 'Bangladesh'],
  questions:'Which team lost most Tests in the first cycle of the WTC?',
  answer:3
},
{
  options:['Dawid Warner', 'Marnus Labuschagne', 'Josh Hazelwood', 'Mathew Wade'],
  questions:'Which of these cricketer featured in each of Australias 14 Tests during the first iteration of the WTC?',
  answer:4 
},
{
  options:['Faf du Plessis', 'Marnus Labuschagne', 'Joe Root', 'Henry Nichollis'],
  questions:'Who was the only player to be dismissed for 199 during the first edition of the WTC?',
  answer:1 
},
{
  options:['India', 'England', 'Australia', 'New Zealand'],
  questions:'Which team won the first edition of the WTC?',
  answer:4 
}
];

// CheckAns function
const checkAns = (userInput, mcqListObj) => {
  if(userInput == mcqListObj.answer){
    userScore += 1;
    console.log("You're answer is correct. Hurry 😀😀😀 \n");
  }else{
    console.log(`Ooops !! Correct answer is: ${mcqListObj.answer} \n`);
  }
};

// Display option function
const displayOption = (option) => {
  let opt='';
  option.forEach((option,index)=>{
    opt=`${opt}${index+1} ${option}\n`
  })
  return opt;
}

// StartQuiz function
const startQuiz = (question) => {
  console.log(question.questions);
  const userInput = readLineSync.question(displayOption(question.options));

  //Checkf if output is between 1 - 4
  if(userInput >= 1 && userInput <= 4){
    checkAns(userInput, question);
  }else{
    console.log("Enter number between 1 - 4");
  }
  //
  console.log(`You're score is: ${userScore} \n`);
}

// Iterate question list
const questionsList = (questionsArr) => {
  questionsArr.forEach( question => startQuiz(question))
}
questionsList(mcqList);

console.log(`You're final score is: ${userScore}`);
console.log("Thank you for the participation")

