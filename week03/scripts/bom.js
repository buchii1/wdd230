const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

let chaptersArray = getChapterList() || [];
chaptersArray.forEach((chapter) => displayList(chapter));

button.addEventListener("click", () => {
	if (input.value === "") {
		input.focus();
	} else {
		displayList(input.value);
		chaptersArray.push(input.value);
		setChapterList();
		input.value = "";
		input.focus();
	}
});

function displayList(item) {
	const li = document.createElement("li");
	const delBtn = document.createElement("button");
	li.textContent = item;
	delBtn.textContent = "❌";
	delBtn.classList.add("delete");
	li.appendChild(delBtn);
	list.append(li);
	delBtn.addEventListener("click", function () {
		list.removeChild(li);
		deleteChapter(li.textContent);
		input.value = "";
		input.focus();
	});
}

function setChapterList() {
	localStorage.setItem("myFavBOMList", JSON.stringify(chaptersArray));
}

function getChapterList() {
	const chapter = localStorage.getItem("myFavBOMList");
	return JSON.parse(chapter);
}

function deleteChapter(chapter) {
	chapter = chapter.slice(0, chapter.length - 1);
	chaptersArray = chaptersArray.filter((item) => item !== chapter);
	setChapterList();
}
