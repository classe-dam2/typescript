/**
 * Fes una pàgina web que puguis introduir l'inventari a un personatge.
Instruccions:

Crea la classe item que tindrà com atributs el nom, la descripció i el pes. Els 2 primers són text i l'últim és un número.
Crea la classe inventari que tindrà com atributs la capacitat màxima i els items del personatge. Els items és un array de la classe Item.
Dintre de la classe inventari, crear un mètode que sigui afegiritem. Només es podrà afegir un item si el seu pes més el pes del nou item és inferior a la capacitat màxima.


Crea un constructor que rebi tots els atributs per inicialitzar un objecte Videojoc.


Implementa els mètodes getters i setters per a tots els atributs.
Afegeix un mètode toString(): string que retorni un text amb tots els detalls de l'inventari.
Crea una pàgina on hi hagi:

4 inputs. Un per la capacitat màxima, i els altres tres pels camps de l'item.
Hi haurà 3 botons. Un per afegir la capacitat. Només la primera vegada. La resta de vegades està deshabilitat. Hi haurà un botó per afegir items que estarà habilitat quan hi hagi una capacitat. El mateix pel botó de mostrar que serà per les dades de l'inventari.
Hi haurà un p resultat per mostrar la informació.
 **/

class Item {
	private _nom: string;
	private _descripcio: string;
	private _pes: number;

	constructor(nom: string, descripcio: string, pes: number) {
		this._nom = nom;
		this._descripcio = descripcio;
		this._pes = pes;
	}

	public get nom(): string {
		return this._nom;
	}

	public set nom(nom: string) {
		this._nom = nom;
	}

	public get descripcio(): string {
		return this._descripcio;
	}

	public set descripcio(descripcio: string) {
		this._descripcio = descripcio;
	}

	public get pes(): number {
		return this._pes;
	}

	public set pes(pes: number) {
		if (pes <= 0) {
			throw new Error("El pes ha de ser positiu.");
		}
		this._pes = pes;
	}

	public toString(): string {
		return `El nom és: ${this._nom}, descripció: ${this._descripcio} i el pes: ${this._pes}.`;
	}
}

class Inventari {
	private _capacitatMaxima: number;
	private _items: Item[] = [];

	constructor(capacitatMaxima: number) {
		this._capacitatMaxima = capacitatMaxima;
	}

	public get capacitatMaxima(): number {
		return this._capacitatMaxima;
	}

	public set capacitatMaxima(capacitatMaxima: number) {
		if (capacitatMaxima <= 0) {
			throw new Error("La capacitat ha de ser positiva.");
		}
		this._capacitatMaxima = capacitatMaxima;
	}

	public get items(): readonly Item[] {
		return this._items;
	}

	public get pesTotal(): number {
		return this._items.reduce((total, item) => total + item.pes, 0);
	}

	public afegirItem(item: Item): boolean {
		if (this.pesTotal + item.pes > this._capacitatMaxima) {
			return false;
		}
		this._items.push(item);
		return true;
	}

	public toString(): string {
		return [
			"Els items de l'inventari són:",
			...this._items.map((item) => item.toString()),
		].join("\n");
	}
}

function getElement<T extends HTMLElement>(selector: string): T {
	const element = document.querySelector<T>(selector);
	if (!element) {
		throw new Error(`No s'ha trobat l'element ${selector}`);
	}
	return element;
}

const capacitatInput = getElement<HTMLInputElement>("#capacitat");
const btnCapacitat = getElement<HTMLButtonElement>("#btnCapacitat");
const nomInput = getElement<HTMLInputElement>("#nom");
const descripcioInput = getElement<HTMLInputElement>("#descripcio");
const pesInput = getElement<HTMLInputElement>("#pes");
const btnAfegirItem = getElement<HTMLButtonElement>("#afegirItem");
const btnMostrar = getElement<HTMLButtonElement>("#mostrarInventari");

const resultat = getElement<HTMLParagraphElement>("#resultat");
resultat.style.whiteSpace = "pre-line";

let inventari: Inventari | null = null;

function mostrarMissatge(missatge: string): void {
	resultat.textContent = missatge;
}

btnAfegirItem.disabled = true;
btnMostrar.disabled = true;

btnCapacitat.addEventListener("click", () => {
	const capacitat = capacitatInput.valueAsNumber;
	if (Number.isNaN(capacitat) || capacitat <= 0) {
		mostrarMissatge("Introdueix una capacitat vàlida.");
		return;
	}

	inventari = new Inventari(capacitat);
	capacitatInput.disabled = true;
	btnCapacitat.disabled = true;
	btnAfegirItem.disabled = false;
	btnMostrar.disabled = false;
	mostrarMissatge(`Inventari creat amb capacitat ${capacitat} kg.`);
});

btnAfegirItem.addEventListener("click", () => {
	if (!inventari) {
		return;
	}

	const nom = nomInput.value.trim();
	const descripcio = descripcioInput.value.trim();
	const pes = pesInput.valueAsNumber;

	if (!nom || !descripcio || Number.isNaN(pes) || pes <= 0) {
		mostrarMissatge("Omple tots els camps correctament.");
		return;
	}

	if (inventari.afegirItem(new Item(nom, descripcio, pes))) {
		mostrarMissatge("Item afegit correctament.");
		nomInput.value = "";
		descripcioInput.value = "";
		pesInput.value = "";
	} else {
		mostrarMissatge(
			"No es pot afegir l'item: el pes total superaria la capacitat màxima.",
		);
	}
});

btnMostrar.addEventListener("click", () => {
	if (inventari) {
		mostrarMissatge(inventari.toString());
	}
});
