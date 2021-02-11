var button = document.getElementById("addItem");
var input = document.getElementById("userInput");
var ul = document.getElementsByTagName("ul")[0];
var doneItems = document.getElementsByClassName("done"); 
var deleteButtons = document.getElementsByClassName("deleteButton");


function inputLength() {
	return input.value.length;
}

function createListElement() {								
	var li = document.createElement("li");
	li.setAttribute("class", "done done2");					
	li.appendChild(document.createTextNode(input.value));	
	li.onclick = toggleListItem;
	ul.appendChild(li);										
	var delButton = document.createElement("button");
	delButton.innerHTML = "Delete";
	delButton.onclick = deleteItem;
	li.appendChild(delButton);
	input.value = "";										
}

function addListAfterClick() {								//adds item to the list if add to list button is clicked
	if (inputLength() > 0) {
	createListElement();
	}
}

function addListAfterKeypress (event) {						//adds item to the list if enter is pressed
	if (inputLength() > 0 && event.keyCode === 13) {
	createListElement();  
	}					
}						

function toggleListItem() {									//toggles list on off if item is clicked to css style of done2(note default is done1)
	this.classList.toggle("done"); 
}

function deleteItem() {										//remove item if delete button is pressed
		//this.closest(".done").remove(); 	// this worked to remove items but if an item was not toggled on then I had to click twice. Now it works in one press:				
		this.parentNode.remove();
}


button.addEventListener("click", addListAfterClick);       	//listener event for adding to list button

input.addEventListener("keypress", addListAfterKeypress);  	//listener event for keypress (enter)

for (var i = 0; i < doneItems.length; i++) {                //done item(for the toggle) listener event
	doneItems[i].addEventListener("click", toggleListItem);
};

for (var i = 0; i < deleteButtons.length; i++) {      		 //delete button listener event
	deleteButtons[i].addEventListener("click", deleteItem);
};

