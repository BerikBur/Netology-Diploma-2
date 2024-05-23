;(function () {
	'use strict'

	// Class representing a menu
	class Menu {
		constructor(domNode) {
			this.menu = domNode
			this.menuButton = this.menu.querySelector('.js-menu_button')
			this.menuButton.addEventListener('click', this.toggle.bind(this))
		}

		// Toggle the menu visibility
		toggle() {
			return this.menu.classList.toggle('js-menu_active')
		}
	}

	// Initialize Menu for each element with class 'js-menu'
	document.querySelectorAll('.js-menu').forEach(item => {
		new Menu(item)
	})
})()

// Select the .header_top element
const headerTop = document.querySelector('.header_top')
// Select the .menu element
const menu = document.querySelector('.menu')
// Select the .menu element
const menuList = document.querySelector('.menu_list')
// Select the button element to toggle alignment
const alignButton = document.querySelector('#alignButton')
let isAligned = true // Variable to track the current alignment state
// Function to toggle the alignment of .header_top element
function toggleAlignment() {
	if (isAligned) {
		headerTop.style.alignItems = 'start' // Change the alignment to start
		menu.style.display = 'flex' // Make sure the element is set to display: flex
		menu.style.flexDirection = 'row-reverse' // Set flex-direction to row-reverse
		menu.style.alignItems = 'start'

		menuList.style.display = 'flex' // Make sure the element is set to display: flex
		menuList.style.alignItems = 'start' // Set flex-direction to row-reverse
		isAligned = false // Update the alignment state
	} else {
		headerTop.style.alignItems = 'center' // Restore the initial alignment to center

		menuList.style.display = 'flex' // Make sure the element is set to display: flex
		menuList.style.flexDirection = 'column' // Set flex-direction to row-reverse
		menuList.style.marginLeft = 0

		menu.style.alignItems = 'center'

		isAligned = true // Update the alignment state
	}
}
// Event listener for the button click to toggle alignment
alignButton.addEventListener('click', toggleAlignment)

const menuItems = document.querySelectorAll('.menu_list_pad')

// Function to toggle the 'open' class on menu items for smooth opening
function toggleMenuItems() {
	menuItems.forEach(item => item.classList.toggle('open'))
}

// Event listener for clicking on the menu button to toggle menu items
alignButton.addEventListener('click', toggleMenuItems)
