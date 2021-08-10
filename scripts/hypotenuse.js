let questionBox=document.querySelector(".container")
let refreshBtn=document.querySelector(".container__child--button-refresh")
let submitBtn=document.querySelector(".container__child--button")
let inputOne=document.querySelector(".first")
let inputTwo=document.querySelector(".second")
let output=document.querySelector(".output")
let errorInput=document.querySelector(".input-error-text")
let hypotenuseValue=document.querySelector(".hypotenuse-value")
let outputSqrt=document.querySelector(".output-sqrt")



function subBtnClickHandler(){
  let inputValidation=false
  let twoSidesSqrSum=(parseInt(inputOne.value)*parseInt(inputOne.value))+(parseInt(inputTwo.value)*parseInt(inputTwo.value))
  let inputArr=[inputOne.value,inputTwo.value]

  for(let item in inputArr){
    if(parseInt(inputArr[item])===0 ||inputArr[item]==="" || parseInt(inputArr[item])<0){
      inputValidation=true
    }
  }

  if(inputValidation!==true){
  output.value="C"
  outputSqrt.value=Math.sqrt(twoSidesSqrSum).toFixed(2)
  hypotenuseValue.classList.add("display-block")

  }
  else{
    errorInput.innerHTML="Please Check The Input"
    errorInput.style.color="Red"
  }
}
submitBtn.addEventListener('click',subBtnClickHandler)

refreshBtn.addEventListener('click',()=>{window.location.reload()})

