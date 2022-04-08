color = document.querySelector('#color')

color.addEventListener('click', myfavColor)

function myfavColor(e){
	e.preventDefault();
	alert('My favorite color is blue.')
}

place = document.querySelector('#place')

place.addEventListener('click', myfavPlace)

function myfavPlace(e){
	e.preventDefault();
	alert('My favorite place is Japan.')
}

ritual = document.querySelector('#ritual')

ritual.addEventListener('click', myFavRitual)

function myFavRitual(e){
	e.preventDefault();
	alert('My favorite ritual is listening to music.')
}

