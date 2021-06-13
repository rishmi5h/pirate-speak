var inputText = document.querySelector(".input");
var output = document.querySelector(".output");
var button = document.querySelector(".btn");
var url = "https://api.funtranslations.com/translate/pirate.json";

function getUrl(text) {
  return url + "?text=" + text;
}

function errorDisplay(error) {
  console.log("error", error);
  alert("There is an error please try again later");
}

function clickHandler() {
  var textInput = inputText.value;

  fetch(getUrl(textInput))
    .then((Response) => Response.json())
    .then((json) => {
      var textOutput = json.contents.translated;
      output.innerText = textOutput;
    })
    .catch(errorDisplay);
}

button.addEventListener("click", clickHandler);
