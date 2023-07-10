const baseURL = "https://buchii1.github.io/wdd230/";
const linksURL = "https://buchii1.github.io/wdd230/data/links.json";
const ul = document.querySelector("#links");

async function getLinks() {
	try {
		const response = await fetch(linksURL);

		if (response.ok) {
			const data = await response.json();
			console.log(data);
			displayLinks(data.weeks);
		} else {
			throw Error(await response.text());
		}
	} catch (error) {
		console.log(error);
	}
}
getLinks();

const displayLinkItems = (links) => {
	return links
		.map((link) => `<a href="${link.url}">${link.title}</a>`)
		.join(" | ");
};

const displayLinks = (weeks) => {
	let html = "";
	weeks.forEach((week) => {
		const weekHTML = displayLinkItems(week.links);
		html += `<li>${week.week}: ${weekHTML}</li>`;
	});
	ul.innerHTML = html;
};

