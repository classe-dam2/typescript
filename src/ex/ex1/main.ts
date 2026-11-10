/**
 * Fes una pàgina web que tingui un input per posar un nombre. Després tindrà un botó, anomenat validar,
 * que al clicar t’indicarà si es troba dintre d’un interval
 * aleatori d’un rang màxim de 100 (1-100). Al missatge, s’han de mostrar els 2 nombres, l’aleatori màxim i el de l’input.
 */

const button = document.getElementById("button") as HTMLButtonElement;
const input = document.getElementById("entrada") as HTMLInputElement;
const result = document.getElementById("result") as HTMLParagraphElement;

button?.addEventListener("click", () => {
	const num: number = Math.ceil(Math.random() * 100 + 1);
	const text = `El numero ${input.value} ${input.valueAsNumber > num ? "no esta dintre" : "esta dintre"} de l'interval ${num}`;
	result.innerText = text;
});
