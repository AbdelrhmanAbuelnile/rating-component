
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
