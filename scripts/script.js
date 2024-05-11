;(function () {
	'use strict'

	// Class representing a menu
	class Menu {
		constructor(domNode) {
			this.menu = domNode
			this.menuButton = this.menu.querySelector('.js-menu__button')
			this.menuButton.addEventListener('click', this.toggle.bind(this))
		}

		// Toggle the menu visibility
		toggle() {
			//console.log(this);
			return this.menu.classList.toggle('js-menu_active')
		}
	}

	// Initialize Menu for each element with class 'js-menu'
	document.querySelectorAll('.js-menu').forEach(item => {
		new Menu(item)
	})
})()
