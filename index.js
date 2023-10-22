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
  // Function to update list display
  function updateListDisplay() {
    itemList.innerHTML = "";
    shoppingItems.forEach((item, index) => {
      const listItem = document.createElement("li");
      listItem.innerHTML = `
        <input type="checkbox" id="checkbox-${index}" />
        <label for="checkbox-${index}" class="${item.purchased ? 'purchased' : ''}">${item.name}</label>
        <button class="btn btn-danger btn-sm ml-2" onclick="removeItem(${index})">Delete</button>
      `;
      itemList.appendChild(listItem);
      
      const checkbox = listItem.querySelector(`#checkbox-${index}`);
      checkbox.addEventListener("change", () => togglePurchased(index));
    });
  }

   // Function to toggle purchased status
   function togglePurchased(index) {
    shoppingItems[index].purchased = !shoppingItems[index].purchased;
    updateListDisplay();
  }

  // Function to remove item from the list
  function removeItem(index) {
    shoppingItems.splice(index, 1);
    updateListDisplay();
  }

