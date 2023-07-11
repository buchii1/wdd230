const url = "https://buchii1.github.io/wdd230/chamber/data/members.json";
const display = document.querySelector("article");
const gridButton = document.querySelector("#grid");
const listButton = document.querySelector("#list");

async function getMembers() {
	try {
		const response = await fetch(url);

		if (response.ok) {
			const data = await response.json();
			displayResults(data.members);
		} else {
			throw Error(await response.text());
		}
	} catch (error) {
		console.log(error);
	}
}
getMembers();

const displayResults = (members) => {
	members.forEach((member) => {
		const section = `<section>
            <img src="${member.image}" alt="${member.name}" width="60" height="60">
            <h2>${member.name}</h2>
            <p>${member.memberLevel}</p>
            <address>${member.address}</address>
            <p>${member.phoneNumber} | ${member.email}</p>
            <a href="${member.websiteURL}" target="_blank">${member.websiteURL}</a>`;
		display.innerHTML += section;
	});
};

function showGrid() {
	display.classList.remove("article-list");
	display.classList.add("article-grid");
	listButton.classList.remove("directory-active");
	gridButton.classList.add("directory-active");
}

function showList() {
	display.classList.remove("article-grid");
	display.classList.add("article-list");
	gridButton.classList.remove("directory-active");
	listButton.classList.add("directory-active");
}

gridButton.addEventListener("click", showGrid);
listButton.addEventListener("click", showList);
