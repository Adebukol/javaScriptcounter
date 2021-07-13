let counterDisplayElem = document.querySelector('.counter-display')
let counterMinusElem = document.querySelector('.counter-minus')
let counterPlusElem = document.querySelector('.counter-plus')

let count=0

updateDisplay(0)

counterPlusElem.addEventListener("click",()=>{
    count++
    updateDisplay(50)
}) 

counterMinusElem.addEventListener("click",()=>{
    count--
    updateDisplay()
})

function updateDisplay(){
    counterDisplayElem.innerHTML = count
}
