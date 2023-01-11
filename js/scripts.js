window.onload = function() {
  let letter = document.querySelector("letter");
  Form.onsubmit = function(event) {
    const userInput = document.getElementById("userInput").ariaValueMax;

    document.querySelector("span#userInputa").innerText = userInput;

    event.preventDefault();
  }
}