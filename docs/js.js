console.log('Овсянников Алёша');
window.onload = function() {
console.log('567');  
  var elements = document.getElementsByClassName('jet-headline__label');
  setTimeout(() => {  elements[46].innerHTML="Овсянников Пётр"; }, 5000);  
}
