"use strict";

window.addEventListener("DOMContentLoaded", countarray);

let counter = 0;
const array = [];

function countarray() {
  console.log("countarray");
  counter++;

  array.unshift(counter);

  if (counter > 9) {
    array.pop();
  }

  setTimeout(countarray, 1000);

  console.log(array);
}
