'use strict';

const listElement = document.querySelector('.js-list');
const formSection = document.querySelector('.js-new-form');
const inputDesc = document.querySelector('.js-input-desc');
const inputPhoto = document.querySelector('.js-input-photo');
const inputName = document.querySelector('.js-input-name');
const inputRace = document.querySelector('js-input-race');

///// ARRAYS Y OBJETOS///


const kittenDataList = [
    {
	image: 'https://dev.adalab.es/gato-siames.webp',
	name: 'Anastacio',
	race: 'Siamés',
	desc: ' Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.',
    },
    {
	image: 'https://dev.adalab.es/sphynx-gato.webp',
	name:'Fiona',
	race: 'Sphynx',
	desc: ' Produce fascinación y curiosidad. Exótico, raro, bello, extraño…hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo. ',
     },
    {
	image: 'https://dev.adalab.es/maine-coon-cat.webp',
	name:'Cielo',
	race: 'Maine Coon',
	desc: ' Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta. ',
    },
]; 

function renderKitten(kittenDataList){
	const li = `<li class="card">
	<img
		class="card_img"
		src="${kittenDataList.image}"
		alt="cat race"
	/>
	<h3 class="card_title">${kittenDataList.name}</h3>
	<h4 class="card_race">${kittenDataList.race}</h4>
	<p class="card_description">${kittenDataList.desc}</p>
	</li>`; 
	return li; 
}

listElement.innerHTML = renderKitten (kittenDataList[0]) + renderKitten (kittenDataList[1]) + renderKitten (kittenDataList[2]);

/*-------Busqueda de gatitos---*/
const buttonSearch = document.querySelector('.js-button-search');

const input_search_desc = document.querySelector('.js_in_search_desc');


const filterKitten = (event) => {
	event.preventDefault (); 
	listElement.innerHTML = ''; 
	const descrSearchText = input_search_desc.value;
	if (kittenDataList.includes(descrSearchText)) {
	  listElement.innerHTML += renderKitten (kittenDataList[0]);
	}
	if (kittenDataList.includes(descrSearchText)) {
	  listElement.innerHTML += renderKitten (kittenDataList[1]);
	}
	if (kittenDataList.includes(descrSearchText)) {
	  listElement.innerHTML += renderKitten (kittenDataList[2]);
	}
  };

buttonSearch.addEventListener('click', filterKitten);

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





