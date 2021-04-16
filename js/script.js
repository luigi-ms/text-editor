const textArea = document.querySelector("textarea");
const rows = document.querySelector("#rows");
const boldButton = document.querySelector("#boldButton");
const italicButton = document.querySelector("#italicButton");
const underlineButton = document.querySelector("#underlineButton");
const alignLeftButton = document.querySelector("#alignLeftButton");
const alignCenterButton = document.querySelector("#alignCenterButton");
const alignRightButton = document.querySelector("#alignRightButton");

let totalRows = 0;
let counterRows = 0;

function boldIt(event){
  const isBold = (textArea.style.fontWeight === 'bold');
  if(isBold){
    textArea.style.fontWeight = 'normal';
  } else {
    textArea.style.fontWeight = 'bold';
  }
}

function italicIt(event){
 const isItalic = (textArea.style.fontStyle === 'italic');
 if (isItalic) {
   textArea.style.fontStyle = 'normal';
 } else {
   textArea.style.fontStyle = 'italic';
 }  
}

function underlineIt(event){
  const isUnderline = (textArea.style.textDecoration === 'underline');
  if(isUnderline){
    textArea.style.textDecoration = 'none';
  } else {
    textArea.style.textDecoration = 'underline';
  }
}

function alignToLeft(event) {
  textArea.style.textAlign = 'left';
}

function alignToCenter(event) {
  textArea.style.textAlign = 'center';
}

function alignToRight(event) {
  textArea.style.textAlign = 'right';
}

function addNewLine(totalLines){
  let newLine = document.createElement('li');
  newLine.className = 'rowNumber';
  newLine.innerText = totalLines+1;
  rows.appendChild(newLine);
}

function removeLastLine(){
  rows.removeChild(rows.lastChild);
}

boldButton.addEventListener('click', boldIt);
italicButton.addEventListener('click', italicIt);
underlineButton.addEventListener('click', underlineIt);
alignLeftButton.addEventListener('click', alignToLeft);
alignCenterButton.addEventListener('click', alignToCenter);
alignRightButton.addEventListener('click', alignToRight);

textArea.addEventListener('keydown', (event) => {
  if(event.keyCode === 13){
    totalRows = textArea.value.split(/\r\n|\r|\n/).length;
    countRows = totalRows;
    addNewLine(countRows);
  }else if(event.keyCode === 8){
    totalRows = textArea.value.split(/\r\n|\r|\n/).length;
    if(countRows < totalRows){
      countRows -= 1;
      removeLastLine();
    }
  }
});

feather.replace();