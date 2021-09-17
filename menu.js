// Menu Despegable

document.getElementById('menu').addEventListener('click', menuResponsive); 
const nav = document.querySelector('#nav');
const iconMenu = document.querySelectorAll(".icon-item");
	function menuResponsive() {
		nav.classList.toggle('menu-active');
		
		for (var i = 0; i < iconMenu.length; i++) {
			iconMenu[i].classList.toggle('icon-active');
		}
	}

/*	Explicación

document.getElementById('menu').addEventListener('click', menuResponsive); 
	// Seleccionamos un elemento por medio de su id
	// Registramos un evento, en este caso cuando da click ejecutara una funcion "menuResponsive"

const nav = document.querySelector('#nav');
	// creamos una constante llamada nav, la cual su valor sera el elemento definido por su id #nav

const iconMenu = document.querySelectorAll(".icon-item");
	// De igual forma pasa con iconMenu, pero esta vez accedemos a todos los elementos definidos por 
	// la clase .icon-item y son almacenados en un array llamada iconMenu

	function menuResponsive() {
		// se crea la funcion y definimos en esta: 

		nav.classList.toggle('menu-active');
			// la variable nav, se le agregara una clase llamada .menu-active
		
		for (var i = 0; i < iconMenu.length; i++) {
			// creamos un bucle for, por medio de .lenth accedemos a la cantidad de elementos que tiene
			// nuestra array

			iconMenu[i].classList.toggle('icon-active');
			// el valor de i sera representado como el valor del elemento
			// si el valor fuese 1, afectara a nuestro segundo elemento con la clase .icon-item
		}
	}

*/