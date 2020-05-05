let box = document.getElementById('box'),
 btn = document.getElementsByTagName('button'),
 circle = document.getElementsByClassName('circle'),
 heart = document.querySelectorAll('.heart'),
 oneheart = document.querySelector('.heart'),
 wrapper = document.querySelector('.wrapper');


box.style.backgroundColor = "blue"
btn[1].style.borderRadius = "100%"
circle[0].style.backgroundColor = "red"
circle[1].style.backgroundColor = "orange"
circle[2].style.backgroundColor = "green"

/*for (let i = 0; i < heart.length; i++) {
	heart[i].style.backgroundColor = "blue"
}*/

// heart.forEach(function(item, i, hearts) {
// 	item.style.backgroundColor = "blue";
// })

let div = document.createElement('div'),
	text = document.createTextNode("Here was I");

div.classList.add("black");

// document.body.appendChild(div)

// wrapper.appendChild(div)

// div.innerHTML = "<h1>Hello to me!</h1>"

div.textContent = "Hello to me!"

document.body.insertBefore(div, circle[0])

document.body.removeChild(circle[1])
wrapper.removeChild(heart[0])

document.body.replaceChild(btn[1], circle[1])

//json, http request

let inputRub = document.getElementById('rub');
let inputUsd = document.getElementById('usd');

inputRub.addEventListener('input', () => {
	let request = new XMLHttpRequest();
	// request.open(method, url, async, login, pass)
	request.open('GET', 'current.json');
	request.setRequestHeader('Content-type', 'application/json; charsetutf-8');
	request.send();

	request.addEventListener('readystatechange', () => {
		if(request.readyState === 4 && request.status === 200) {
			let data = JSON.parse(request.response);

			inputUsd.value = +inputRub.value / data.usd;
		} else {
			inputUsd.value = "Smth went wrong...";
		}
	})

})


console.log(btn)
console.dir(oneheart)
