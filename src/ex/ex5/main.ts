/**
 * Fes una pàgina web amb un camp de text i un botó.
 * Crea una funció en TypeScript que rebi el text i retorni una tupla de 3 elements [number, string, boolean]:
 **/

const button = document.getElementById("button") as HTMLButtonElement;
const input = document.getElementById("entrada") as HTMLTextAreaElement;
const result = document.getElementById("result") as HTMLParagraphElement;

function analize(text: string): [number, string, boolean] {
	const len: number = text.length;
	const upper = text.toUpperCase();
	const moreThan10: boolean = len > 10;

	return [len, upper, moreThan10];
}

button?.addEventListener("click", () => {
	const [len, majus, mesDe10] = analize(input.value);

	result.innerHTML = `
	<b>Resultat del reconte</b></br>
	<span>Logintud: ${len}</span></br>
	<span>Majus: ${majus}</span></br>
	<span>Mes de 10: ${mesDe10}</span></br>
	`;
});
