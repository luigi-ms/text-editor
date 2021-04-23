const textField = document.querySelector("#textfield");
const boldButton = document.querySelector("#boldButton");
const italicButton = document.querySelector("#italicButton");
const underlineButton = document.querySelector("#underlineButton");
const alignLeftButton = document.querySelector("#alignLeftButton");
const alignCenterButton = document.querySelector("#alignCenterButton");
const alignRightButton = document.querySelector("#alignRightButton");

function createSpan(text, style='bold'){
 let span = document.createElement('span');
 
 span.innerText = text;
 span.contentEditable = false;
 
 if(style === 'bold'){
   span.style.fontWeight = style;
 } else if(style === 'italic'){
   span.style.fontStyle = style;
 } else {
   span.style.textDecoration = style;
 }
 
 textField.appendChild(span); 
}

function styleText(style){
  let selected = document.getSelection();
  let text = selected.toString();
  selected.deleteFromDocument();
  
  createSpan(text, style);
}

boldButton.addEventListener('click', event => styleText('bold'));
italicButton.addEventListener('click', event => styleText('italic'));
underlineButton.addEventListener('click', event => styleText('underline'));
alignLeftButton.addEventListener('click', event => textField.style.textAlign = 'left');
alignCenterButton.addEventListener('click', event => textField.style.textAlign = 'center');
alignRightButton.addEventListener('click', event => textField.style.textAlign = 'right');

feather.replace();