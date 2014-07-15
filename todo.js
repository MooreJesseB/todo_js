var form = document.getElementById("toDoForm");
var theList = document.getElementById("list");

// event handler
var setClickOnRemove = function(element, button) {
  button.onclick = function() {
    theList.removeChild(element);
  };
};

//  Started setting up a function set for storing data in local storage
//
// var setLocalStorage = function() {

// };

// var appendLocalStorage = function() {

// };

// var removeLocalStorage = function() {

// };

// appendLocalStorage();

form.onsubmit = function(event) {
  event.preventDefault();

  // initialize variables
  var newTask = this.description;
  var newLine = document.createElement('li');
  var newDescription = document.createTextNode(newTask.value + "          ");
  var newButton = document.createElement('button');

  newButton.innerHTML = "Remove Task";

  // append new elements
  theList.appendChild(newLine);
  newLine.appendChild(newDescription);
  newLine.appendChild(newButton);

  // set up event handler
  setClickOnRemove(newLine, newButton);

  // setLocalStorage();

  // clear description field
  oldText = document.getElementById("description");
  oldText.value = "";
};

