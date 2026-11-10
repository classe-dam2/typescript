/**
 * Moure un quadrat de 50px de mida 10px cap amunt,
 * avall, esquerra o dreta utilitzant botons de direcció, controlant que no surti dels límits d'un contenidor pare de 400x400px.
 **/

const result = document.getElementById("result") as HTMLDivElement;

let x: number = 50;
let y: number = 50;

const board = document.getElementById("board") as HTMLDivElement;

const upButton = document.getElementById("up") as HTMLButtonElement;
const downButton = document.getElementById("down") as HTMLButtonElement;
const leftButton = document.getElementById("left") as HTMLButtonElement;
const rightButton = document.getElementById("right") as HTMLButtonElement;

function seed() {
	result.style.position = "relative";
	result.style.top = `${y}px`;
	result.style.left = `${x}px`;
}

upButton?.addEventListener("click", () => {
	if (y > 0) {
		y -= 10;
		result.style.top = `${y}px`;
	}
});

downButton?.addEventListener("click", () => {
	if (y < board.clientHeight - result.clientHeight) {
		y += 10;
		result.style.top = `${y}px`;
	}
});

leftButton?.addEventListener("click", () => {
	if (x > 0) {
		x -= 10;
		result.style.left = `${x}px`;
	}
});

rightButton?.addEventListener("click", () => {
	if (x < board.clientWidth - result.clientWidth) {
		x += 10;
		result.style.left = `${x}px`;
	}
});

seed();
