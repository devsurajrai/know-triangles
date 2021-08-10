inputHeight=document.querySelector(".height")
inputBase=document.querySelector(".base")
inputError=document.querySelector(".error")
inputResult=document.querySelector(".result-div")
resultArea=document.querySelector("#result")
calculateBtn=document.querySelector("#calculate")
reCalculateBtn=document.querySelector("#re-calculate")

errorFound=false
let calcEventListener=()=>{
  let area=0.5*(parseInt(inputHeight.value)*parseInt(inputBase.value))
  let inputArr=[inputHeight.value,inputBase.value]
  for(let item in inputArr){
    if(parseInt(inputArr[item])===0 || inputArr[item]===""|| parseInt(inputArr[item])<0){
      errorFound=true
    }
  }
 if(errorFound){
    inputError.classList.add("display-inline")
    inputError.innerHTML="Please Check The Input"
    errorFound=false
 }
 else{
  resultArea.value=area.toFixed(2)
  inputError.classList.add("display-none")
  inputResult.classList.add("display-block")
}
}
calculateBtn.addEventListener('click',calcEventListener)
reCalculateBtn.addEventListener('click',()=>window.location.reload())
