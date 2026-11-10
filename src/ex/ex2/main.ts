/**
 * Fes una pàgina web que permeti introduir un valor numèric i indicar si són Graus Celsius (°C) o Fahrenheit (°F). Un botó "Calcular"
 * farà la conversió a l'altra unitat. El missatge mostrarà el valor anterior, el valor convertible formatat i la conversió realitzada.
 */

const button = document.getElementById("button") as HTMLButtonElement;
const input = document.getElementById("entrada") as HTMLInputElement;
const resultt = document.getElementById("result") as HTMLParagraphElement;

type Options = "c" | "f";

const selected: Options = (
	document.getElementById("valors") as HTMLSelectElement
).value as Options;

button?.addEventListener("click", () => {
	let result: number = 0.0;

	if (selected === "c") {
		result = input.valueAsNumber * 1.8 + 32.0;
	} else if (selected === "f") {
		result = input.valueAsNumber * (9 / 5) + 32.0;
	}

	resultt.innerText = `${input.valueAsNumber}${selected === "c" ? "ºC" : "ºF"} equivalen a ${result}${selected === "c" ? "ºC" : "ºF"} (${selected === "c" ? "Celsius a Farenheit" : "Farenheit a Celsius"})`;
});
