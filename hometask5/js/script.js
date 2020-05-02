let menu = document.getElementsByClassName('menu')[0],
	menuItem = document.getElementsByClassName('menu-item'),
	heading = document.getElementById("title"),
	adv = document.querySelector('.adv'),
	columns = document.querySelectorAll('.column'),
	promptBox = document.querySelector('#prompt'),
	li = document.createElement('li');

menu.insertBefore(menuItem[2], menuItem[1]);

li.classList.add('menu-item');
li.textContent = "Пятый элемент";
menu.appendChild(li)

document.body.style.backgroundImage = 'url(./img/apple_true.jpg)';

heading.textContent = 'Мы продаем только подлинную технику Apple';

//columns[1].removeChild(adv);
adv.remove();

let ques = prompt("Ваше отношение к технике Apple?");

promptBox.textContent = ques;