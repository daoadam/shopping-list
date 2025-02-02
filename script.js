const list = document.querySelector(".shopping-list");
const userInput = document.querySelector("#item-input");
const button = document.querySelector(".add-item-button");

function addItem(){
    //get input value
    const inputValue = userInput.value;

    //clear input field
    userInput.value="";

    //do nothing if input is empty
    if(inputValue.trim() === "") return;

    //create new elements
    const listItem = document.createElement("li");
    const itemText = document.createElement("span");
    const deleteButton = document.createElement("button");

    //set content 
    itemText.textContent = inputValue;
    deleteButton.textContent = "Delete";

    //append all the functionalities
    listItem.appendChild(itemText);
    listItem.appendChild(deleteButton);
    list.appendChild(listItem);

    deleteButton.addEventListener("click", () => {
        list.removeChild(listItem);
    });

    userInput.focus();
}

//event listener for the button
button.addEventListener("click", addItem);