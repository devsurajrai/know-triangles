let question=document.querySelector(".question")
let questionNo=document.querySelector("#question-num")
let startQuestionBtn=document.querySelector(".start")
let refreshBtn=document.querySelector(".restart")
let options=document.querySelector(".options")
let labelOne=document.querySelector("#option-one")
let labelTwo=document.querySelector("#option-two")
let labelThree=document.querySelector("#option-three")
let questions=document.querySelector(".questions")
let score=document.querySelector(".score")
let inputOne=document.querySelector("#options__one")
let inputTwo=document.querySelector("#options__two")
let inputThree=document.querySelector("#options__three")
 
// <--------------------------------DataBase------------------------------->

let questionsArr=[
  {
  questionNumber:"1.",
  question: "If a triangle is to be made with angles 120 , 25 and 35 degrees. Would it make an obtuse angle triangle?", 
  answer:"Yes",
  opts:["Yes","No","I don't Know"]
 },
 {
  questionNumber:"2.",
  question: "If a triangle has a 90 degree angle. Would you call it a right angle triangle?", 
  answer:"Yes",
  opts:["Yes","No"," I don't Know"]
 },
 {
  questionNumber:"3.",
  question: "If a triangle is to be made with angles 100 , 60 and 20. Would it make an acute angle triangle?", 
  answer:"No",
  opts:["Yes","No","I don't Know"]
 },
 {
  questionNumber:"4.",
  question: "A triangle has two of its angles as 70 and 60 degrees. What would be its third angle?", 
  answer:"50",
  opts:["50","20","60"]
 },
 {
  questionNumber:"5.",
  question: "If a triangle has all its sides equal. What triangle is it?", 
  answer:"Equilateral Triangle",
  opts:["Equilateral Triangle","Isosceles Triangle","Scalene Triangle"]
 },
 {
  questionNumber:"6.",
  question: "If a triangle has two equal sides?. What triangle is it?", 
  answer:"Isosceles Triangle",
  opts:["Isosceles Triangle","Equilateral Triangle","Scalene Triangle"]
 },
 {
  questionNumber:"7.",
  question: "If a triangle has all different sides?. What triangle is it?", 
  answer:"Scalene Triangle",
  opts:["Scalene Triangle","Equilateral Triangle","Isosceles Triangle"]
 },
 {
  questionNumber:"8.",
  question: "If a triangle has two equal interior angles?. What triangle is it?", 
  answer:"Isosceles Triangle",
  opts:["Isosceles Triangle","Equilateral Triangle","Scalene Triangle"]
 },
 {
  questionNumber:"9.",
  question: "If a triangle has all different interior angles?. What triangle is it?", 
  answer:"Scalene Triangle",
  opts:["Scalene Triangle","Equilateral Triangle","Isosceles Triangle"]
 },
 {
  questionNumber:"10.",
  question: "If a triangle has all its interior angles equal. What triangle is it?", 
  answer:"Equilateral Triangle",
  opts:["Equilateral Triangle","Isosceles Triangle","Scalene Triangle"]
 }
]

//<-----------------------Logic------------------------------------------------------------------------------------------

let questionCounter=0;
let quizScore=0
let totalScore=10

let labelsArr=[labelOne,labelTwo,labelThree]
let inputArr=[inputOne,inputTwo,inputThree]

// things to do when start button is clicked

let clickHandler= ()=>{
  if(questionCounter>=1 && questionCounter<=10){
    for(let item in labelsArr){
      //for incrementing the score if the answer is correct
      if(inputArr[item].checked){
        if(labelsArr[item].innerHTML===questionsArr[questionCounter-1].answer){
          quizScore++
        }
        inputArr[item].checked=false
      }
    }
  }

  if(questionCounter<10){
      startQuestionBtn.innerHTML="Next"
      //options for every question
      for(let item in questionsArr[questionCounter].opts){
        labelsArr[item].innerHTML=questionsArr[questionCounter].opts[item]
      }
      // for question number and question
      question.innerHTML=questionsArr[questionCounter].question
      questionNo.innerHTML=questionsArr[questionCounter].questionNumber
      //for making a div/section visible
      options.classList.add("display-block")
      questions.classList.add("display-block")
      //for increasing the question counter
      questionCounter++
  }

  else if(questionCounter===10){
      startQuestionBtn.innerHTML="Score"
      //for making a div/section visible
      options.classList.add("display-none")
      questions.classList.add("display-none")
      questionCounter++
  }
  else if(questionCounter===11){
      score.innerHTML=`You Scored ${quizScore} out of ${totalScore}`
      score.style.fontSize="140%"
      startQuestionBtn.classList.add("display-none")
      refreshBtn.classList.add("display-inline")
      refreshBtn.style.width="40%"
  }
 }

startQuestionBtn.addEventListener('click',clickHandler)
refreshBtn.addEventListener('click',()=>{window.location.reload()})




