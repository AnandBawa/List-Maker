
//DOM Events Exercise

function addEntry() {   //function is invoked every click because of onClick HTML element event added in HTML

    var inputLength = document.getElementById("input").value.length;    //assign length of input

    if ( inputLength > 0) {                                     //only process if there is some input

        var input = document.getElementById("input").value;     //get the input value
        var ul = document.querySelector("ul");                  //select UL to append list and buttons

        var li = document.createElement("li");                  //create list element, add class, text input
        li.classList.add("list");
        li.textContent = input;

        var toggleButton = document.createElement("button");    //create toggle button, add class, text
        toggleButton.classList.add("toggle");
        toggleButton.innerHTML = "Toggle";

        var deleteButton = document.createElement("button");    //create delete button, add class, text
        deleteButton.classList.add("delete");
        deleteButton.innerHTML = "Delete";

        li.appendChild(toggleButton);                           //append toggle button to list
        li.appendChild(deleteButton);                           //append delete button to list

        toggleButton.onclick = function toggleB() {             //add onClick event function to toggle button
            li.classList.toggle("done");                        //toggles strike-through using 'done' class CSS
        }

        deleteButton.onclick = function deleteB() {             //add onClick event function to delete button
            li.remove();                                        //delete the list element its part of
        }

        ul.appendChild(li);                                     //append list to UL
        
        document.getElementById("input").value = "";            //clear input field
    }
}

function clearEntry() {     //function is invoked every click because of onClick HTML element event added in HTML
    var list = document.getElementsByClassName("list");             //get all list items by class name
    var length = document.getElementsByClassName("list").length;    //assign length of list

    for (var i = length; i != 0; i--) {                             //loop till list is cleared
        list[i-1].remove();
    }
}

input.addEventListener("keypress", function (event) {           //go to addEntry function when Enter key is pressed
	if (event.key === "Enter") {
		addEntry();
	}
});
