console.log("hello world");
const img = document.querySelector('img');

function mouseover() {
	alert('Cool Ducky thinks you are the best')
}


function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Form has been submitted')
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);
img.addEventListener('mouseover', mouseover);