var form = document.getElementById("toDoForm");
var theList = document.getElementById("list");

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

  var newTask = this.description;
  var newParagraph = document.createElement('li');
  var newDescription = document.createTextNode(newTask.value + "          ");
  var newButton = document.createElement('button');
  newButton.innerHTML = "Remove Task";

  theList.appendChild(newParagraph);
  newParagraph.appendChild(newDescription);
  newParagraph.appendChild(newButton);

  setClickOnRemove(newParagraph, newButton);

  // setLocalStorage();

  oldText = document.getElementById("description");
  oldText.value = "";
};

