// Write your code here
const output = document.querySelector(".subtitle");
let count = 0;

let bulb1 = document.querySelector("#lightbulb1");
let bulb2 = document.querySelector("#lightbulb2");
let bulb3 = document.querySelector("#lightbulb3");

bulb1.addEventListener("click", function () {
  count++;
  output.innerHTML = `You've clicked the lights  ${count} times`;
  this.classList.toggle("active");
});

bulb2.addEventListener("click", function () {
  count++;
  output.innerHTML = `You've clicked the lights  ${count} times`;
  this.classList.toggle("active");
});

bulb3.addEventListener("click", function () {
  count++;
  output.innerHTML = `You've clicked the lights  ${count} times`;
  this.classList.toggle("active");
});
