 let itemArray = [];

function enterItem() {
   console.log(" item selected");
   const selectedItem = parseFloat(document.getElementById("selectedItem").value);
   
   console.log(`selected items ${selectedItem}`);
   if ( typeof selectedItem === 'number' && selectedItem >= 1 && selectedItem <= 100 ){
    if(Number.isInteger(selectedItem) ){
       itemArray.push(selectedItem);
       console.log("Current array:", itemArray);
        
    }else{ alert("use Whole number Only!"); }
   }else {
      alert("select number between 0 and 100 !")
      console.log(`${typeof selectedItem}`)
   }
}