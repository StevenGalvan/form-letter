//UI Logic
window.onload = function() {
  console.log("Script executing!");

  let form = document.querySelector("form");
  form.onsubmit = function(event) {
    event.preventDefault();
    const userInput = document.getElementById("userInput").value;
    
    console.log("Submit letter successful");
   

    document.querySelector("span#userInputa").innerText = userInput;

    

    document.querySelector("div#story").removeAttribute("class");
  }
}