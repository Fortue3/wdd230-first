document.querySelector('#menu').addEventListener('click', () => {
	document.querySelector('nav ul').classList.toggle('showmenu')
})

const date = new Date();

const d = date.toDateString()
const year=date.getFullYear()
document.getElementById('myYear').innerHTML = year

// document.getElementById('hdate').innerHTML = d




function changeView(event) {
	event.preventDefault()

	const rightDiv = document.querySelector('.right')
	const rightSideDiv = document.querySelector('.fresh-container .right-side')

	rightSideDiv.style.display = "none"
	rightDiv.style.display = 'block'
    // const h3 = document.createElement('h3')
}