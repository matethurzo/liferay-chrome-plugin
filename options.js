function saveOptions() {
	var liferayUrl = document.getElementById("liferayUrl");

	localStorage["liferayUrl"] = liferayUrl;

	document.getElementById("status").innerHTML = "Options saved.";
}

function restoreOptions() {
	var liferayUrl = localStorage["liferayUrl"];

	document.getElementById("liferayUrl") = liferayUrl;
}

document.addEventListener('DOMContentReady', restoreOptions);
document.querySelector('#saveButton').addEventListener('click', saveOptions);