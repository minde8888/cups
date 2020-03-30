"use strict";

const cups = document.querySelector('img');

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
      HTML += ` <img src="./img/cup.png"  style="width: calc(100% / 20);">`;
      /*HTML += ` <div class="png" style="width: calc(100% / ${b});">><img src="./img/cup.png" </div>`;
      HTML += `<div class="img" style="width: calc(100% / ${counter});">><img src="./img/cup.png" </div>`;*/
      
       /* counter = document.querySelector('div');
        HTML += `<div class="img" style="width: calc(100% / ${counter});">><img src="./img/cup.png" </div>`;*/
        //norimasElementas.innerHTML = HTML;
    }
    document.querySelector('img').innerHTML = HTML;
//HTML += ` <img src="./img/cup.png"  style="width: calc(100% / 20);">`;
/*let norimasElementas = document.querySelector('div');
const HTML = 'Naujas turinys';
norimasElementas.innerHTML = HTML;*/
