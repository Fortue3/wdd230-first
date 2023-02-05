const date = new Date();

const d = date.toDateString()

document.getElementById('hdate').innerHTML = d

document.querySelector('#menu').addEventListener('click', () => {
	document.querySelector('header div ul').classList.toggle('showmenu')
})