/**
 * Fes una pàgina web que, a partir d'un text introduït per l'usuari (per exemple, un nom complet en minúscules o majúscules),
 * posi en majúscula la primera lletra de cada paraula i la resta en minúscules. Utilitza tipatge fort.
 */

const button = document.getElementById("button") as HTMLButtonElement;
const input = document.getElementById("entrada") as HTMLInputElement;
const result = document.getElementById("result") as HTMLParagraphElement;

function capitalizeFirstLetter(val: string): string {
	return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}

button?.addEventListener("click", () => {
	const text = input.value
		.split(" ")
		.map((el) => capitalizeFirstLetter(el))
		.join(" ");

	result.innerText = text;
});
