var form = document.getElementById("toDoForm");
var theList = document.getElementById("list");

// event handler
var setClickOnRemove = function(element, button) {
  button.onclick = function() {
    theList.removeChild(element);
  };
};

//  Picked up a cold this weekend.  To tired to make this happen.  Will revisit.
//
// var setLocalStorage = function() {

// };

// var appendLocalStorage = function() {

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

