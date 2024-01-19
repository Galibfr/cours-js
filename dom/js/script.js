document.onkeydown = clavier;

function clavier(event) {
	if (event.keyCode == 40) {
		freezer.style.top = freezer.offsetTop + 200 + "px";
	} else if (event.keyCode == 38) {
		freezer.style.top = freezer.offsetTop - 200 + "px";
	} else if (event.keyCode == 39) {
		freezer.style.left = freezer.offsetLeft + 200 + "px";
	} else if (event.keyCode == 37) {
		freezer.style.left = freezer.offsetLeft - 200 + "px";
	} else if (event.keyCode == 83) {
		//s::down
		document.querySelector("#freezer").src = "images/jeux/b.gif";
		playAudio();
		setTimeout(reset, 1400);
	} else if (event.keyCode == 90) {
		//z::up
		document.querySelector("#freezer").src = "images/jeux/c.gif";
		setTimeout(reset, 1400);
	}
}

function reset() {
	document.querySelector("#freezer").src = "images/jeux/a.gif";
}

// setTimeout(()=>{
//     document.querySelector("#freezer").src = "images/jeux/a.gif";
// },1400)

function playAudio() {
	let audio = new Audio("images/jeux/hoho.mp3");
	audio.play();
	audio.volume = 0.9;
}
