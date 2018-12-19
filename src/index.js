import style from "./main.css"

[...document.getElementsByClassName('burger')].forEach(element=>{
	element.addEventListener('click',e=>{
		element.parentNode.classList.toggle('active')
	})
})