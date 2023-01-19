
// const sub = document.getElementById('submit')
// const rating = document.getElementById('rating')
// const thanks = document.getElementById('thanks')
// const btn1 = document.getElementById('btn1')
// const btn2 = document.getElementById('btn2')
// const btn3 = document.getElementById('btn3')
// const btn4 = document.getElementById('btn4')
// const btn5 = document.getElementById('btn5')
// const par = document.getElementById('par')
// const score = document.getElementsByClassName('btn')
// let sco 

// btn1.addEventListener('click',()=>{
//   sco = 1
//   btn1.style.backgroundColor = "#fb7413"
//   btn2.style.backgroundColor = "#384354"
//   btn3.style.backgroundColor = "#384354"
//   btn4.style.backgroundColor = "#384354"
//   btn5.style.backgroundColor = "#384354"
//   par.innerText= `You selected ${sco} out of 5`
  
// })

// btn2.addEventListener('click',()=>{
//   sco = 2
//   btn2.style.backgroundColor = "#fb7413"
//   btn1.style.backgroundColor = "#384354"
//   btn3.style.backgroundColor = "#384354"
//   btn4.style.backgroundColor = "#384354"
//   btn5.style.backgroundColor = "#384354"
//   par.innerText= `You selected ${sco} out of 5`
// })

// btn3.addEventListener('click',()=>{
//   sco = 3
//   btn3.style.backgroundColor = "#fb7413"
//   btn1.style.backgroundColor = "#384354"
//   btn2.style.backgroundColor = "#384354"
//   btn4.style.backgroundColor = "#384354"
//   btn5.style.backgroundColor = "#384354"
//   par.innerText= `You selected ${sco} out of 5`

// })

// btn4.addEventListener('click',()=>{
//   sco = 4
//   btn4.style.backgroundColor = "#fb7413"
//   btn1.style.backgroundColor = "#384354"
//   btn2.style.backgroundColor = "#384354"
//   btn3.style.backgroundColor = "#384354"
//   btn5.style.backgroundColor = "#384354"
//   par.innerText= `You selected ${sco} out of 5`

// })

// btn5.addEventListener('click',()=>{
//   sco = 5
//   btn5.style.backgroundColor = "#fb7413"
//   btn1.style.backgroundColor = "#384354"
//   btn2.style.backgroundColor = "#384354"
//   btn3.style.backgroundColor = "#384354"
//   btn4.style.backgroundColor = "#384354"
//   par.innerText= `You selected ${sco} out of 5`

// })

// sub.onclick = function next() {
//   rating.style.display = "none"
//   thanks.style.display = "block"
// }

const sub = document.getElementById('submit');
const rating = document.getElementById('rating');
const thanks = document.getElementById('thanks');
const btns = document.getElementsByClassName('btn');
const par = document.getElementById('par');
let sco;

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', function() {
      for (let j = 0; j < btns.length; j++) {
          if (j === i) {
              btns[j].style.backgroundColor = '#fb7413';
              sco = ++j
              par.innerText = `You selected ${sco} out of 5`;
          } else {
              btns[j].style.backgroundColor = '#384354';
          }
      }
  });
}

sub.onclick = function next() {
  if (sco === undefined){
    window.alert("you didn't give a rate")
  }else{
    thanks.style.display = "block";
    rating.style.display = "none";
  }
}
