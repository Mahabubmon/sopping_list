const itemInput = document.getElementById("itemInput");
    const addItemButton = document.getElementById("addItemButton");
    const itemList = document.getElementById("itemList");
    const shoppingItems = [];
// Add event listener to "Add Item" button
addItemButton.addEventListener("click", addItemToList);