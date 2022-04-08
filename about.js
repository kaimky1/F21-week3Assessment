console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('The form has been submitted successfully');
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

let picture = document.querySelector('img')

picture.addEventListener('mouseover', compliment)

// function compliment(e){
// 	e.preventDefault();
// 	alert('You are really cool.')
// }