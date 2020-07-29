const cardSet = Array.from(Array(9), (_, i) => i + 1)
let sorted = true;
const shuffleArray = (array) => {
	for (let i = array.length - 1; i > 0; i--) {
		let j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
}
const addChildren = (cards) => {
	const parent = document.getElementById('cards');
	parent.innerHTML = "";
	for (let i = 0; i < cards.length; i++) {
		const card = document.createElement('div');
		card.id = cards[i];
		card.innerHTML = cards[i];
		card.classList.add('card');
		card.classList.add(`c${cards[i]}`);
		parent.appendChild(card);
	}
}
const shuffle = () => {
	shuffleArray(cardSet)
	addChildren(cardSet)
	sorted = false;
}
const sort = () => {
	if (!sorted) {
		cardSet.sort((a, b) => a - b)
		addChildren(cardSet)
		sorted = true;
	}
}

addChildren(cardSet)