let rows = document.querySelector("#rows");
let textArea = document.querySelector("textarea");

textArea.onkeydown = (event) => {
  if(event.keyCode == 13){
    let rowsAmount = textArea.value.split("\n").length;
    let newRow = document.createElement("li");
   
    newRow.className = "rowNumber";
    newRow.innerText = rowsAmount + 1;
   
    rows.appendChild(newRow); 
  }
}
