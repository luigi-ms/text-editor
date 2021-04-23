const textArea = document.querySelector("#textfield");
const boldButton = document.querySelector("#boldButton");
const italicButton = document.querySelector("#italicButton");
const underlineButton = document.querySelector("#underlineButton");
const alignLeftButton = document.querySelector("#alignLeftButton");
const alignCenterButton = document.querySelector("#alignCenterButton");
const alignRightButton = document.querySelector("#alignRightButton");

const enter = 13;

// trocado textarea por div

function boldIt(event){
  const isBold = (textArea.style.fontWeight === 'bold');
  let text = document.getSelection().toString();
  let newText = textArea.value.replace(text, '<b>'+text+'</b>');
  
  
  /*if(isBold){
    textArea.style.fontWeight = 'normal';
  } else {
    textArea.style.fontWeight = 'bold';
  } */console.log('done?')
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

function addElement(){
  let newLine = document.createElement('p');
  newLine.contentEditable = true;
  textArea.appendChild(newLine);
  newLine.focus();
}


boldButton.addEventListener('click', boldIt);
italicButton.addEventListener('click', italicIt);
underlineButton.addEventListener('click', underlineIt);
alignLeftButton.addEventListener('click', event => textArea.style.textAlign = 'left');
alignCenterButton.addEventListener('click', event => textArea.style.textAlign = 'center');
alignRightButton.addEventListener('click', event => textArea.style.textAlign = 'right');
textArea.addEventListener('keyup', event => caretPosition = event.target.selectionStart);

feather.replace();