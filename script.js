var button = document.getElementById("addItem");
var input = document.getElementById("userInput");
var ul = document.getElementsByTagName("ul")[0];

function inputLength() {
	return input.value.length;
}

function createListElement() {								
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));	
	li.onclick = toggleListItem;
	ul.appendChild(li);		
	input.value = "";		

	var delButton = document.createElement("button");
	delButton.innerHTML = "Delete";
	delButton.onclick = deleteItem;
	li.appendChild(delButton);
}

function addListAfterClick() {							//adds item to the list if add to list button is clicked
	if (inputLength() > 0) {
	createListElement();
	}
}

function addListAfterKeypress (event) {						//adds item to the list if enter is pressed
	if (inputLength() > 0 && event.keyCode === 13) {
	createListElement();  
	}					
}						

function toggleListItem() {							//toggles list on off if item is clicked to css style of done2(note default is done1)
	this.classList.toggle("done"); 
}

function deleteItem() {								//remove item if delete button is pressed
	this.parentNode.remove();
}

button.addEventListener("click", addListAfterClick);       	//listener event for adding to list button
input.addEventListener("keypress", addListAfterKeypress);  	//listener event for keypress (enter)

