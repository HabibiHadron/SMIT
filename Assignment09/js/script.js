const originalBox = document.getElementById("original-statement-box");
const outputBox = document.getElementById("output-result-box");

document
  .getElementById("alert-name")
  .addEventListener("click", () => alert("Abdullah Zafar"));

document
  .getElementById("alert-number")
  .addEventListener("click", () => alert(220500));

document
  .getElementById("alert-number")
  .addEventListener("click", () => alert(220500));

document.getElementById("variable-name").addEventListener("click", () => {
  originalBox.innerHTML = "Variable Name";
  outputBox.innerHTML = "";
});

document.getElementById("camel-case").addEventListener("click", () => {
  originalBox.innerHTML = "Camel Case Example";
  outputBox.innerHTML = "camelCaseExample";
});

document.getElementById("sum-numbers").addEventListener("click", () => {
  originalBox.innerHTML = "";
  outputBox.innerHTML = "";
});

document.getElementById("subtract-numbers").addEventListener("click", () => {
  originalBox.innerHTML = "";
  outputBox.innerHTML = "";
});

document.getElementById("multiply-numbers").addEventListener("click", () => {
  originalBox.innerHTML = "";
  outputBox.innerHTML = "";
});

document.getElementById("divide-numbers").addEventListener("click", () => {
  originalBox.innerHTML = "";
  outputBox.innerHTML = "";
});

document.getElementById("calculate-numbers").addEventListener("click", () => {
  originalBox.innerHTML = "";
  outputBox.innerHTML = "";
});
