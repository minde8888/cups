// const cups = document.querySelector('img');
const cups = document.querySelector('.tower');


let num = 15;
let HTML = '';
let count = 0;
let counter = 0;
let a = 0;

while(a<=num){
  count++;
  a = a + count;
    if( a > num){
    count--;
  }
}
    for ( let i=0; i<=count-1; i++ ){
      counter++;
      let b = counter;
      HTML += '<div class="flex">'
      for ( let x=0; x<=counter-1; x++ ){
        console.log(counter)
        HTML += `<div class="img" style="width: calc(100% / ${counter});"><img src="./img/cup.png"/> </div>`;
      }
     
      HTML += '</div>'


     //HTML += `<div class="img" style="width: calc(100% / ${counter});"><img src="./img/cup.png"/> </div>`;
    }
    cups.innerHTML = HTML;
