const url =
	"https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json";
const cards = document.querySelector("#cards");

async function getProphetData(url) {
	const response = await fetch(url);
	if (response.ok) {
		const data = await response.json();

		displayProphets(data.prophets);
	}
}
getProphetData(url);

const displayProphets = (prophets) => {
	prophets.forEach((prophet) => {
		const card = document.createElement("section");
		const fullName = document.createElement("h2");
		const portrait = document.createElement("img");
        
		fullName.innerHTML = `${prophet.name} ${prophet.lastname}`;
		portrait.setAttribute("src", prophet.imageurl);
		portrait.setAttribute("alt", `Portrait of {$fullName}`);
		portrait.setAttribute("loading", 'lazy');
		portrait.setAttribute("width", '340');
		portrait.setAttribute("height", '440');

        card.appendChild(fullName);
        card.appendChild(portrait);
        cards.appendChild(card);
	});
};
