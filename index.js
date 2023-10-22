const itemInput = document.getElementById("itemInput");
    const addItemButton = document.getElementById("addItemButton");
    const itemList = document.getElementById("itemList");
    const shoppingItems = [];
// Add event listener to "Add Item" button
addItemButton.addEventListener("click", addItemToList);

  // Function to add item to the list
  function addItemToList() {
    const itemName = itemInput.value.trim();
    if (itemName !== "") {
      const newItem = { name: itemName, purchased: false };
      shoppingItems.push(newItem);
      updateListDisplay();
      itemInput.value = "";
    }
  }