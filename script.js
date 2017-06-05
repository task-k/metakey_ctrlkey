"use strict";
const clickDoms = document.getElementById('js-command_click');

function nodeAdd(event){
  let addDom = document.createElement('span');
  this.appendChild(addDom);
  if(event.ctrlKey || event.metaKey){
    addDom.innerHTML = " + command or control...";
  } else {
    addDom.innerHTML = " click only!! ";
  }
}
clickDoms.addEventListener("click",nodeAdd);
