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
