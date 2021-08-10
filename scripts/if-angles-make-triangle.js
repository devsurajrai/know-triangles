let questionBox=document.querySelector(".container")
let outputBox=document.querySelector(".output")
let submitBtn=document.querySelector(".container__child--button")
let outputText=document.querySelector(".output__text")
let returnBtn=document.querySelector(".output__button")
let tryAgainBtn=document.querySelector(".container__child--button-try-again")
let inputOne=document.querySelector(".first")
let inputTwo=document.querySelector(".second")
let inputThree=document.querySelector(".third")
let errorInput= document.querySelector(".input-error-text")



function subBtnClickHandler(){

  let inputValidation=false
  let anglesSum=parseInt(inputOne.value)+parseInt(inputTwo.value)+parseInt(inputThree.value)
  let inputArr=[inputOne.value,inputTwo.value,inputThree.value]

  for(let item in inputArr){
    if(parseInt(inputArr[item])===0 ||inputArr[item]==="" || parseInt(inputArr[item])<0){
      inputValidation=true
    }
   
  }

  if(inputValidation!==true){

    if(anglesSum===180){
        outputText.innerHTML="Hurray ! These Angles Make A Triangle"
        outputText.style.color="green"
        outputText.style.fontSize="30px"
        returnBtn.innerHTML="Return"
     }
     else{
       outputText.innerHTML="Sorry ! These Angles Does Not Make A Triangle"
       outputText.style.color="red"
       outputText.style.fontSize="30px"
     }
     questionBox.classList.add("display-none")
     outputBox.classList.add("display-block")
  }
    
  else{
    errorInput.innerHTML="Please Check The Input"
    errorInput.style.color="Red"
  }
  
}
submitBtn.addEventListener('click',subBtnClickHandler)

returnBtn.addEventListener('click',()=>{window.location.reload()})


