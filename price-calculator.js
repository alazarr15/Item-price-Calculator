 let itemArray = []; // persistent array

function enterItem() {
    const selectedItem = parseFloat(document.getElementById("selectedItem").value);

    if (typeof selectedItem === 'number' && selectedItem >= 1 && selectedItem <= 100) {
        if (Number.isInteger(selectedItem)) {
            // Add the number to the array
            itemArray.push(selectedItem);
            console.log("Current array:", itemArray);

            // Get container
            let container = document.getElementById("itemPlace");

            if (container) {
                // Create wrapper for each number
                let wrapper = document.createElement("div");
                wrapper.style.display = "inline-block";
                wrapper.style.textAlign = "center";
                wrapper.style.margin = "5px";
                wrapper.style.border = "1px solid #ccc";
                wrapper.style.padding = "5px";
                wrapper.style.borderRadius = "5px";

                // Create span to display the number
                let span = document.createElement("span");
                span.textContent = selectedItem;
                span.style.display = "block";
                span.style.fontSize = "20px";
                wrapper.appendChild(span);

                // "-" button
                let minusBtn = document.createElement("button");
                minusBtn.textContent = "-";
                minusBtn.style.marginRight = "5px";
                minusBtn.onclick = function () {
                    // Remove one instance of selectedItem from array
                    const index = itemArray.indexOf(selectedItem);
                    if (index !== -1) {
                        itemArray.splice(index, 1); // remove from array
                        console.log("Current array:", itemArray);
                    }
                };

                // "+" button
                let plusBtn = document.createElement("button");
                plusBtn.textContent = "+";
                plusBtn.onclick = function () {
                    itemArray.push(selectedItem); // add another copy
                    console.log("Current array:", itemArray);
                };

                wrapper.appendChild(minusBtn);
                wrapper.appendChild(plusBtn);

                // Add wrapper to container
                container.appendChild(wrapper);

            } else {
                console.error("Cannot find container");
            }

        } else {
            alert("Use Whole number Only!");
        }
    } else {
        alert("Select number between 1 and 100!");
    }
}


function calculateTotal(){
    let price = parseFloat(document.getElementById("itemPrice").value);
    let itemChoosen = itemArray.length;
    let totalPrice = itemChoosen * price;
    console.log(`Total Price: ${totalPrice}`);
}


function Clear(){
    console.log("clear")
    itemArray = [];
    console.log("Current array:", itemArray);
}


function RemoveItem(selectedItem){
    itemArray.splice(selectedItem);
}