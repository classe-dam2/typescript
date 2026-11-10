/**
 * Fes una pàgina web amb un camp de text i un botó.
 * Crea una funció en TypeScript que rebi el text i retorni una tupla de 3 elements [number, string, boolean]:
 **/

const button = document.getElementById("button") as HTMLButtonElement;
const result = document.getElementById("result") as HTMLParagraphElement;

const color = document.getElementById("color") as HTMLDivElement;
const valors = document.getElementById("valors") as HTMLSelectElement;

button?.addEventListener("click", () => {
	const selectedColor = valors.value;
	color.style.backgroundColor = selectedColor;

	result.innerHTML = `
	<span>Color seleccionat: ${selectedColor}</span></br>
	`;
});
