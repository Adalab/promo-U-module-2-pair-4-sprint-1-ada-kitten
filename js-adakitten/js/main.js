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


const input_search_desc = document.querySelector('.js_in_search_desc');
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
}

const formSection = document.querySelector('.js-new-form');
formSection.classList.remove('collapsed');
const inputDesc = document.querySelector('.js-input-desc');
const inputPhoto = document.querySelector('.js-input-photo');
const inputName = document.querySelector('.js-input-name');
const labelMessageError = document.querySelector('.js-label-error');
const sectionButton = document.querySelector(".js-btn-add");


sectionButton.addEventListener ('click', (event)=> {
  event.preventDefault();
  const valueDesc = inputDesc.value;
  const valuePhoto = inputPhoto.value;
  const valueName = inputName.value;

if (valueDesc === '' || valuePhoto === '' || valueName === '') {
	console.log (labelMessageError); 
   labelMessageError.innerHTML = "¡Uy! parece que has olvidado algo"; 
} 
else (valueDesc !== '' || valuePhoto !== '' || valueName !== ''); {
	labelMessageError.innerHTML = "¡Uy! parece que has olvidado algo"; 
} }
); 

const formSection = document.querySelector('.js-new-form');
formSection.classList.add('collapsed');