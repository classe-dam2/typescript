const afegir = document.getElementById("afegir") as HTMLButtonElement;
const reproduir = document.getElementById("play") as HTMLButtonElement;

const listPlaying = document.getElementById("playing") as HTMLUListElement;
const listPendents = document.getElementById("pendents") as HTMLUListElement;

const currentSong = document.getElementById(
	"current-song",
) as HTMLParagraphElement;

const numRemaining = document.getElementById(
	"num-remaining",
) as HTMLParagraphElement;

const playlist: string[] = [];

afegir.addEventListener("click", () => {
	const text = document.getElementById("entrada") as HTMLInputElement;
	playlist.push(text.value);

	text.value = "";
});

function cancoAleatoria() {
	return Math.random() + 1;
}
