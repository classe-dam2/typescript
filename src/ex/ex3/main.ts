/**
 * Fes una pàgina web que, a partir d'un text introduït per l'usuari, compti quantes vegades apareixen
 * els caràcters espai (" "), punt (".") i coma (","). Totes les variables han d'estar fortament tipades.
 **/

const button = document.getElementById("button") as HTMLButtonElement;
const input = document.getElementById("entrada") as HTMLTextAreaElement;
const result = document.getElementById("result") as HTMLParagraphElement;

button?.addEventListener("click", () => {
	const espais = input.value.split(" ").length;
	const punts = input.value.split("").filter((el) => el === ".").length;
	const comes = input.value.split("").filter((el) => el === ",").length;

	result.innerHTML = `
	<b>Resultat del reconte</b></br>
	<span>espais: ${espais}</span></br>
	<span>punts: ${punts}</span></br>
	<span>comes: ${comes}</span></br>
	`;
});
