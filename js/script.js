const textArea = document.querySelector("textarea");
const rows = document.querySelector("#rows");
const boldButton = document.querySelector("#boldButton");
const italicButton = document.querySelector("#italicButton");
const underlineButton = document.querySelector("#underlineButton");
const alignLeftButton = document.querySelector("#alignLeftButton");
const alignCenterButton = document.querySelector("#alignCenterButton");
const alignRightButton = document.querySelector("#alignRightButton");

const ENTER = 13, 
BACKSPACE = 8, 
DELETE = 46;

let totalLines = 0,
showedRows = 0,
caretPosition = 0;

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

function addNewLine(){
  let newLine = document.createElement('li');
  newLine.className = 'rowNumber';
  newLine.innerText = showedRows;
  rows.appendChild(newLine);
}

function removeLastLine(){
  showedRows -= 1;
  rows.removeChild(rows.lastChild);
}

boldButton.addEventListener('click', boldIt);
italicButton.addEventListener('click', italicIt);
underlineButton.addEventListener('click', underlineIt);
alignLeftButton.addEventListener('click', event => textArea.style.textAlign = 'left');
alignCenterButton.addEventListener('click', event => textArea.style.textAlign = 'center');
alignRightButton.addEventListener('click', event => textArea.style.textAlign = 'right');
textArea.addEventListener('keyup', event => caretPosition = event.target.selectionStart);

textArea.addEventListener('keydown', (event) => {
  if(event.keyCode === ENTER){
    totalLines = textArea.value.split(/\n/).length;
    showedRows = totalLines + 1;
    addNewLine();
  }
});

textArea.addEventListener('input', (event) => {
  totalLines = textArea.value.split(/\n/).length;
  if (showedRows > totalLines && totalLines > 1) {
    removeLastLine();
  }
});

feather.replace();