// This statement tells the processors to use strict mode
"use strict";
// global variables
var list = [];

// This function loops through the li elements and removes them. 
// Then loops array for each element, makes new li element, makes 
// the "first" button and calls the moveToTop() function.
function generateList() {
	var listItems = document.getElementsByTagName("li");
	for (var i = listItems.length - 1; i >= 0; i--) {
		document.getElementsByTagName("ol")[0].removeChild(listItems[i]);
	}
	for (var i = 0; i < list.length; i++) {
		var newItem = "<span class='first'>first</span>" + list[i];
		// This will add the ability to move item to position of last
		"<span class='last'>last</span" + [i];
		var newListItem = document.createElement("li");
		newListItem.innerHTML = newItem;
		document.getElementsByTagName("ol")[0].appendChild(newListItem);
		var firstButtons = document.querySelectorAll(".first");
		var lastFirstButton = firstButtons[firstButtons.length -1];
		var lastButtons = document.querySelectorAll(".last");
		var lastLastButton = lastButtons[lastButtons.length - 1];
		if (lastFirstButton.addEventListener) {
			lastFirstButton.addEventListener("click", moveToTop, false);
			lastLastButton.addEventListener("click", moveToBotton, false);
		} else if (lastFirstButton.attachEvent) {
			lastFirstButton.attachEvent("onclick", moveToTop);
			lastLastButton.attachEvent("onclick", moveToBottom);
		}
	}
} 

// This function adds the value in the text box to the end of the
// list array returning and clearing it's value from the text box.
function addItem() {
	var newItem = document.getElementById("newItem");
	list.push(newItem.value);
	newItem.focus();
	newItem.value = "";
	generateList();
}


// This creates variables that reference the li elements and parent li
// of the "first" button that was clicked calling the function.  Then
// loops searching to check each value in the list against the parent 
// element. If a match is found, it will then use splice to remove 
// assigning to variable. Then calls generateList().
function moveToTop(evt) {
	if (evt === undefined) { // get caller element in IE8 
		evt = window.event;
	}
	var callerElement = evt.target || evt.srcElement;
	var listItems = document.getElementsByTagName("li");
	var parentItem = callerElement.parentNode;
	for (var i = 0; i < list.length; i++) {
		if (parentItem.innerHTML.search(list[i]) !== -1) {
			var itemToMove = list.splice(i, 1);
			list.unshift(itemToMove);
		}
	}
	generateList();
}

function moveToBottom(evt) {
	if (evt === undefined) { // get caller element in IE8
		evt = window.event;
	}
	var callerElement = evt.target || evt.srcElement;
	var listItems = document.getElementsByTagName("li");
	var parentItem = callerElement.parentNode;
	for (var i = 0; i < list.length; i++) {
		if (parentItem.innerHTML.search(list[i]) !== -1) {
			var itemToMove = list.splice(i, 1);
			list.push(itemToMove);
		}
	}
	generateList();
}

// This function will add the event listener for the button
function createEventListener() {
	var addButton = document.getElementById("button");
	if (addButton.addEventListener) {
		addButton.addEventListener("click", addItem, false);
	} else if (addButton.attachEvent) {
		addButton.attachEvent("onclick", addItem);
	}
} if (window.addEventListener) {
		window.addEventListener("load", createEventListener, false);
} else if (window.attachEvent) {
		window.attachEvent("onload", createEventListener);
}






