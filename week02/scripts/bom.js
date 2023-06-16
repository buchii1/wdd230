const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

button.addEventListener("click", () => {
	if (input.value === "") {
		input.focus();
	} else {
		const li = document.createElement("li");
		const delBtn = document.createElement("button");
		li.textContent = input.value;
		delBtn.textContent = "❌";
		li.appendChild(delBtn);
		list.append(li);
		input.value = "";
		input.focus();
	}
});
