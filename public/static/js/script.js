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
	for (let i = 0; i < cards.length; i++) {
		let card = document.getElementById(`card-${i + 1}`);
		if (!card) {
			card = document.createElement('div');
			parent.appendChild(card);
		}
		card.id = `card-${i + 1}`;
		card.innerHTML = cards[i];
		card.className = `card c${cards[i]}`
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