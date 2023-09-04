import './styles/styles.scss';


document.querySelectorAll('.items-nav li').forEach(item => {
	item.addEventListener('click', () => {
		let popap = item.querySelector('.popap');
		if (popap) {
			if (!popap.classList.contains('active')) {
				popap.classList.add('active');
			}
			else {
				popap.classList.remove('active');
			}

		}
	})

})

function timeCountDown() {
	let currentDate = new Date();
	let goalDate = new Date(2024, 0, 0o1);
	let diff = goalDate - currentDate;
	if (diff <= 0) {
		clearInterval(timer);
	}
	let days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : "00";
	let hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : "00";
	let minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : "00";
	let seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : "00";
	let boxesTime = document.querySelectorAll('.item-time');
	boxesTime.forEach(box => {
		switch (box.classList[1]) {
			case 'days-item':
				box.innerHTML = days.toString().length === 1 ? "0" + days.toString() : days;
				break;
			case 'hours-item':
				box.innerHTML = hours.toString().length === 1 ? "0" + hours.toString() : hours;
				break;
			case 'minutes-item':
				box.innerHTML = minutes.toString().length === 1 ? "0" + minutes.toString() : minutes;
				break;
			case 'seconds-item':
				box.innerHTML = seconds.toString().length === 1 ? "0" + seconds.toString() : seconds;
				break;

		}
	})

}
let timer = setInterval(timeCountDown, 1000)
timeCountDown();

let slider = document.querySelector("#progress-scale")
let sliderValue = slider.value;

function progressScript() {

	slider.style.background = `linear-gradient(to right, #08ddeb ${sliderValue * 100 / slider.max}%, #ccc ${sliderValue}%)`;
}

progressScript();



function countGeneration() {
	let newValue = Number(slider.value) + Number(Math.random().toFixed(2));
	if (newValue >= Number(slider.max)) {
		slider.value = 0;
		newValue = 0;
	}

	slider.value = newValue;
	const tempSliderValue = slider.value;
	slider.textContent = tempSliderValue;
	const progress = (tempSliderValue / slider.max) * 100;
	slider.style.background = `linear-gradient(to right, #08ddeb ${progress}%, #ccc ${progress}%)`;
	let form = document.getElementById('form-progress-slider');
	form.querySelector('.box-info-value').innerHTML = newValue + " mln";
	form.querySelector('.box-info-value').style.left = "calc(" + slider.value * 100 / slider.max + "% - 55px)";

}
let differ = setInterval(countGeneration, 3000);