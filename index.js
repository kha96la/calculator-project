const clearBtn= document.getElementById("clear-Btn")
const delBtn= document.getElementById("del-Btn")
const pntBtn= document.getElementById("pnt-Btn")
const divBtn= document.getElementById("div-Btn")
const sevenBtn= document.getElementById("sevenBtn")
const eightBtn= document.getElementById("eight-Btn")
const nineBtn= document.getElementById("nine-Btn")
const multBtn= document.getElementById("mult-Btn")
const fourBtn= document.getElementById("four-Btn")
const fiveBtn= document.getElementById("five-Btn")
const sixBtn= document.getElementById("six-Btn")
const subBtn= document.getElementById("sub-Btn")
const oneBtn= document.getElementById("one-Btn")
const twoBtn= document.getElementById("two-Btn")
const threeBtn= document.getElementById("three-Btn")
const addBtn= document.getElementById("add-Btn")
const percBtn= document.getElementById("perc-Btn")
const zeroBtn= document.getElementById("zero-Btn")
const equaBtn= document.getElementById("equ-Btn")
const resultBtn = document.getElementById("result")

pntBtn.addEventListener("click", function(event) {
    event.preventDefault()
    resultBtn.value += pntBtn.textContent
})

divBtn.addEventListener("click", function(event) {
    event.preventDefault()
    resultBtn.value += '/'
})

sevenBtn.addEventListener("click", function(event) {
    event.preventDefault()
    resultBtn.value += sevenBtn.textContent
})

eightBtn.addEventListener("click", function(event) {
    event.preventDefault()
    resultBtn.value += eightBtn.textContent
})

nineBtn.addEventListener("click", function(event) {
    event.preventDefault()
    resultBtn.value += nineBtn.textContent
})

multBtn.addEventListener("click", function(event) {
    event.preventDefault()
    resultBtn.value += '*'
})

fourBtn.addEventListener("click", function(event) {
    event.preventDefault()
    resultBtn.value += fourBtn.textContent
})

fiveBtn.addEventListener("click", function(event) {
    event.preventDefault()
    resultBtn.value += fiveBtn.textContent
})

sixBtn.addEventListener("click", function(event) {
    event.preventDefault()
    resultBtn.value += sixBtn.textContent
})

subBtn.addEventListener("click", function(event) {
    event.preventDefault()
    resultBtn.value += subBtn.textContent
})

oneBtn.addEventListener("click", function(event) {
    event.preventDefault()
    resultBtn.value += oneBtn.textContent
})

twoBtn.addEventListener("click", function(event) {
    event.preventDefault()
    resultBtn.value += twoBtn.textContent
})

threeBtn.addEventListener("click", function(event) {
    event.preventDefault()
    resultBtn.value += threeBtn.textContent
})

addBtn.addEventListener("click", function(event) {
    event.preventDefault()
    resultBtn.value += addBtn.textContent
})

percBtn.addEventListener("click", function(event) {
    event.preventDefault()
    resultBtn.value = resultBtn.value/100
})

zeroBtn.addEventListener("click", function(event) {
    event.preventDefault()
    resultBtn.value += zeroBtn.textContent
})

equaBtn.addEventListener("click", function(event) {
    event.preventDefault()
    resultBtn.value = eval(resultBtn.value)
})

delBtn.addEventListener("click", function(event) {
    event.preventDefault()
    resultBtn.value = resultBtn.value.slice(0, -1) 
})

