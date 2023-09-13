'use strict';

const listElement = document.querySelector('.js-list');


const kittenImageOne = `https://dev.adalab.es/gato-siames.webp`;
const kittenNameOne = `Anastacio`;
const kittenRaceOne = `Siamés`;
const kittenDescOne = `
			Porte elegante, su patrón de color tan característico y sus ojos
			de un azul intenso, pero su historia se remonta a Asía al menos
			hace 500 años, donde tuvo su origen muy posiblemente.`;

const kittenOne = `<li class="card">
	<article>
	<img
	class="card_img"
    src="${kittenImageOne}"
	alt="siames-cat"
	/>
	<h3 class="card_title">${kittenNameOne}</h3>
	<h4 class="card_race">${kittenRaceOne}</h4>
	<p class="card_description">${kittenDescOne}</p>
	</article>
	</li>`;

const kittenImageTwo = `https://dev.adalab.es/sphynx-gato.webp`;
const kittenNameTwo = `Fiona`;
const kittenRaceTwo = `Sphynx`;
const kittenDescTwo = 
` Produce fascinación y curiosidad.  Exótico, raro, bello, extraño… 
hasta con pinta de alienígena han llegado a definir a esta raza 
gatuna que se caracteriza por la «ausencia» de pelo.`;

const kittenTwo = `<li class="card"> 
	<img 
		class="card_img"
		src="${kittenImageTwo}"
		alt="sphynx-cat"
	/> 
	<h3 class="card_title">${kittenNameTwo}</h3> 
	<h4 class="card_race">${kittenRaceTwo}</h4> 
	<p class="card_description"> ${kittenDescTwo}</p> 
    </li>`; 

const kittenImageThree = `https://dev.adalab.es/maine-coon-cat.webp`;
const kittenNameThree = `Cielo`;
const kittenRaceThree= `Maine Coon`;
const kittenDescThree= 
`Tienen la cabeza cuadrada y los ojos simétricos, por lo que su
bella mirada se ha convertido en una de sus señas de identidad.
Sus ojos son grandes y las orejas resultan largas y en punta.`;

const kittenThree = `<li class="card">
	<img
		class="card_img"
		src="${kittenImageThree}"
		alt="maine-coon-cat"
	/>
	<h3 class="card_title">${kittenNameThree}</h3>
	<h4 class="card_race">${kittenRaceThree}</h4>
	<p class="card_description">${kittenDescThree}</p>
	</li>`; 


listElement.innerHTML = kittenOne+kittenTwo+kittenThree; 

const formSection = document.querySelector('.js-new-form');
const inputDesc = document.querySelector('.js-input-desc');
const inputPhoto = document.querySelector('.js-input-photo');
const inputName = document.querySelector('.js-input-name');
const inputRace = document.querySelector('js-input-race');

function renderKitten(inputDesc, inputPhoto, inputRace, inputName){
	const result = `<li class="card">
	<img
		class="card_img"
		src="${inputPhoto}"
		alt="maine-coon-cat"
	/>
	<h3 class="card_title">${inputName}</h3>
	<h4 class="card_race">${inputRace}</h4>
	<p class="card_description">${inputDesc}</p>
	</li>`; 
	return result 
}

/*-------Busqueda de gatitos---*/
const buttonSearch = document.querySelector('.js-button-search');

const input_search_desc = document.querySelector('.js_in_search_desc');


const filterKitten = (event) => {
	event.preventDefault (); 
	listElement.innerHTML = ''; 
	const descrSearchText = input_search_desc.value;
	if (kittenDescOne.includes(descrSearchText)) {
	  listElement.innerHTML += kittenOne;
	}
	if (kittenDescTwo.includes(descrSearchText)) {
	  listElement.innerHTML += kittenTwo;
	}
	if (kittenDescThree.includes(descrSearchText)) {
	  listElement.innerHTML += kittenThree;
	}
  };

buttonSearch.addEventListener('click', filterKitten);


/*const input_search_desc = document.querySelector('.js_in_search_desc');
const descrSearchText = input_search_desc.value;
const result = document.querySelector ('.js-list');
console.log(result);
if( kittenDescOne.includes(descrSearchText) ) {
  result.innerHTML = kittenOne;
}
if( kittenDescTwo.includes(descrSearchText) ) {
  result.innerHTML = kittenTwo;
}
if( kittenDescThree.includes(descrSearchText) ) {
  result.innerHTML = kittenThree;
}
if(descrSearchText === "") {
result.innerHTML = kittenOne+kittenTwo+kittenThree;
}*/



const labelMessageError = document.querySelector('.js-label-error');
const sectionButton = document.querySelector(".js-btn-add");

function addNewKitten(event) {
	event.preventDefault();
	const valueDesc = inputDesc.value;
 	const valuePhoto = inputPhoto.value;
 	const valueName = inputName.value;
	const valueRace = inputRace.value;
	if (valueDesc === '' || valuePhoto === '' ||valueName === '') {
	labelMessageError.innerHTML = "¡Uy! parece que has olvidado algo"; 
  	labelMessageError.classList.remove('hidden');
	}else {
		labelMessageError.classList.add('hidden');
		listElement.innerHTML += renderKitten(valueDesc, valuePhoto, valueRace, valueName);
		console.log('hola');
}}

sectionButton.addEventListener('click', addNewKitten);



/*--------Seccion colapse------*/


const linkNewFormElement = document.querySelector('.js-btn');

const newForm= document.querySelector('.js-new-form');

function showNewCatForm() {
  newForm.classList.remove('collapsed');
}
function hideNewCatForm() {
  newForm.classList.add('collapsed');
}


function handleClickNewCatForm(event) {
  event.preventDefault();
  
  if (newForm.classList.contains('collapsed')) {

    showNewCatForm();

  } else {
    hideNewCatForm();
  }
}

linkNewFormElement.addEventListener('click', handleClickNewCatForm);



