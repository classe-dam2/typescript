/**
 * Desenvolupa una pàgina web per gestionar l'inventari d'un magatzem:

Crea un tipus de diccionari (Map<string, number>) que tingui el nom del producte com a clau i com a valor la quantitat en estoc.
A partir del tipus anterior, crea la instància del mapa.
Quan es cliqui el botó Registrar, s'afegeix el producte al mapa amb el valor 0.
El botó Afegir Estoc, incrementa en 1 l'estoc del producte indicat a l'input. Si no existeix, no es fa res.
Finalment, el botó Mostrar, mostra l'estat actual de l'inventari.
 **/

const productes: Map<string, number> = new Map();

const producte = document.getElementById("producte") as HTMLInputElement;
const btnRegistrar = document.getElementById(
	"btnRegistrar",
) as HTMLButtonElement;
const btnEstoc = document.getElementById("btnEstoc") as HTMLButtonElement;
const btnMostrar = document.getElementById("btnMostrar") as HTMLButtonElement;

btnRegistrar.addEventListener("click", () => {
	productes.set(producte.value, 0);
	producte.value = "";
});

btnEstoc.addEventListener("click", () => {
	console.log(productes);
	if (productes.has(producte.value)) {
		const estocActual = productes.get(producte.value) || 0;
		productes.set(producte.value, estocActual + 1);
	}
	producte.value = "";
});

btnMostrar.addEventListener("click", () => {
	const result = document.getElementById("missatge") as HTMLParagraphElement;
	result.innerHTML = "";
	for (const [nom, quantitat] of productes.entries()) {
		result.innerHTML += `<p>${nom}: ${quantitat}</p>`;
	}
});
