
const sub = document.getElementById('submit')
const rating = document.getElementById('rating')
const thanks = document.getElementById('thanks')
const btn1 = document.getElementById('btn1')
const btn2 = document.getElementById('btn2')
const btn3 = document.getElementById('btn3')
const btn4 = document.getElementById('btn4')
const btn5 = document.getElementById('btn5')
const par = document.getElementById('par')
const score = document.getElementsByClassName('btn')
let sco 

btn1.addEventListener('click',()=>{
  sco = 1
  btn1.style.backgroundColor = "#fb7413"
  btn2.style.backgroundColor = "#384354"
  btn3.style.backgroundColor = "#384354"
  btn4.style.backgroundColor = "#384354"
  btn5.style.backgroundColor = "#384354"
  par.innerText= `You selected ${sco} out of 5`
  
})

btn2.addEventListener('click',()=>{
  sco = 2
  btn2.style.backgroundColor = "#fb7413"
  btn1.style.backgroundColor = "#384354"
  btn3.style.backgroundColor = "#384354"
  btn4.style.backgroundColor = "#384354"
  btn5.style.backgroundColor = "#384354"
  par.innerText= `You selected ${sco} out of 5`
})

btn3.addEventListener('click',()=>{
  sco = 3
  btn3.style.backgroundColor = "#fb7413"
  btn1.style.backgroundColor = "#384354"
  btn2.style.backgroundColor = "#384354"
  btn4.style.backgroundColor = "#384354"
  btn5.style.backgroundColor = "#384354"
  par.innerText= `You selected ${sco} out of 5`

})

btn4.addEventListener('click',()=>{
  sco = 4
  btn4.style.backgroundColor = "#fb7413"
  btn1.style.backgroundColor = "#384354"
  btn2.style.backgroundColor = "#384354"
  btn3.style.backgroundColor = "#384354"
  btn5.style.backgroundColor = "#384354"
  par.innerText= `You selected ${sco} out of 5`

})

btn5.addEventListener('click',()=>{
  sco = 5
  btn5.style.backgroundColor = "#fb7413"
  btn1.style.backgroundColor = "#384354"
  btn2.style.backgroundColor = "#384354"
  btn3.style.backgroundColor = "#384354"
  btn4.style.backgroundColor = "#384354"
  par.innerText= `You selected ${sco} out of 5`

})

sub.onclick = function next() {
  rating.style.display = "none"
  thanks.style.display = "block"
}
