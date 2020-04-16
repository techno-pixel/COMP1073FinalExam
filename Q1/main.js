// JavaScript Document

let main = document.querySelector("main"); // query selector
let submitButton = document.querySelector('input[type="submit"]');
let body = document.querySelector("body"); // document
let input = document.querySelector('input[type="text"]'); // add input

submitButton.addEventListener("click", function(e) {  // onclick
  e.preventDefault();
  let personName = input.value; 
  let para = document.createElement('p'); 
  para.innerHTML = '<h3>Hey there ' + personName + '! Thanks for stopping by!</h3>'; 
  main.appendChild(para); // para not paragraph
  body.setAttribute("class", "meow"); 
  console.log('=^..^='); 
}); 