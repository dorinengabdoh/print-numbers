'use strict'
let first=document.getElementById('cont1');
let last=document.getElementById('cont2');
let mid=document.getElementById('cont3');
let btn=document.getElementById('conver');

// fonction

function print(start,end) {
      let all=[];
      for(let i=start; i<=end; i++){
         console.log(i); 
         all.push[i];
      }
      return all;
}

// display

function display() {
  let fi =first.value;
  let mi=mid.value;
  // let la=last.value
  const all= print(fi,mi);
  la =`${all}`;
}
btn.addEventListener('click', display);

