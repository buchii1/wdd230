const membersURL = "https://buchii1.github.io/wdd230/chamber/data/members.json";

// Function to fetch the member data
async function fetchMembersData() {
	try {
		const response = await fetch(membersURL);
		if (response.ok) {
			const data = await response.json();
			displaySpotlightAdvertisements(data.members);
		} else {
			throw new Error("Unable to fetch members data");
		}
	} catch (error) {
		console.log(error);
	}
}

fetchMembersData();

// Function to display the spotlight advertisements
function displaySpotlightAdvertisements(members) {
	const spotlightContainers = document.querySelectorAll(".spotlight");
	const spotlightMembers = getRandomMembers(members, 3);

	spotlightContainers.forEach((container, index) => {
		const member = spotlightMembers[index];
		const html = `
      <div class="member-card">
        <div>
            <img src="${member.image}" alt="${member.name}">
            <h4>${member.name}</h4>
        </div>
        <div>
            <p>${member.address}</p>
            <p>${member.phoneNumber}</p>
            <a href="${member.websiteURL}">${member.websiteURL}</a>
        <div>
      </div>
    `;

		container.innerHTML = html;
	});
}

// Function to get a random selection of members with silver or gold membership levels
function getRandomMembers(members, count) {
	const qualifiedMembers = members.filter(
		(member) =>
			member.memberLevel === "Silver Membership" ||
			member.memberLevel === "Gold Membership"
	);

	const randomMembers = [];
	const totalQualifiedMembers = qualifiedMembers.length;

	for (let i = 0; i < count; i++) {
		const randomIndex = Math.floor(Math.random() * totalQualifiedMembers);
		randomMembers.push(qualifiedMembers[randomIndex]);
	}

	return randomMembers;
}
