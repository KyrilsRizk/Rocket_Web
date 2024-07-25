const initApp = () => {
	const hambugerBtn = document.getElementById('hamburger')
	const mobileMenu = document.getElementById('mobile-menu')

	const toggleMenu = () => {
		mobileMenu.classList.toggle('hidden')
		mobileMenu.classList.toggle('flex')
		hambugerBtn.classList.toggle('toggle')
	}

	hambugerBtn.addEventListener('click', toggleMenu)
	mobileMenu.addEventListener('click', toggleMenu)
}

document.addEventListener('DOMContentLoaded', initApp)
