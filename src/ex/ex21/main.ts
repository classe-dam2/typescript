/**
 * Desenvolupa una pàgina web amb TypeScript que permeti crear personatges de tipus Barbarian i Wizard, afegir-los a una mateixa llista i mostrar-ne les dades segons el tipus de cada personatge.
Instruccions:

Genera una interfície base amb els camps name (string) i points (number), que comparteixen els dos tipus de personatges.
Genera una interfície per a cada tipus de personatge que hereti de la interfície base i afegeixi les propietats específiques:

weapon i damage per a Barbarian.
conjuration i arcaneTradition per a Wizard.


Cada personatge ha de tenir un camp type que permeti identificar-ne el tipus.
Crea una única llista que accepti personatges dels dos tipus, mantenint el tipatge fort, sense utilitzar any ni fer que tots els camps específics siguin obligatoris per a tots els personatges.
Les dades s'han d'obtenir mitjançant un formulari HTML.
En mostrar la llista, cal visualitzar els camps comuns i els camps específics que corresponguin a cada tipus de personatge.
 **/

import type { Character, CharacterType } from "./character.js";

const characters: Character[] = [];

const form = document.querySelector<HTMLFormElement>(
	"#character-form",
) as HTMLFormElement;

form.addEventListener("submit", (event) => {
	event.preventDefault();

	const formData = new FormData(form);
	console.log("Form submitted", formData);

	const type = formData.get("character") as CharacterType;
	const name = formData.get("name") as string;
	const points = parseInt(formData.get("points") as string, 10);
	const weapon = formData.get("weapon") as string;
	const damage = formData.get("damage") as string;

	if (type === "barbarian") {
		const barbarian: Character = {
			type,
			name,
			points,
			weapon,
			damage: parseInt(damage, 10),
		};
		characters.push(barbarian);
	} else if (type === "wizard") {
		const wizard: Character = {
			type,
			name,
			points,
			conjuration: weapon,
			arcaneTradition: damage,
		};
		characters.push(wizard);
	}

	console.log(characters);

	form.reset();
});

const showButton = document.querySelector<HTMLButtonElement>(
	"#mostrar",
) as HTMLButtonElement;

showButton.addEventListener("click", () => {
	const output = document.querySelector<HTMLDivElement>(
		"#result",
	) as HTMLDivElement;

	output.innerHTML = "";

	characters.forEach((character) => {
		const characterDiv = document.createElement("div");
		characterDiv.classList.add("character");

		const commonInfo = document.createElement("p");
		commonInfo.textContent = `Name: ${character.name}, Points: ${character.points}, Type: ${character.type}`;
		characterDiv.appendChild(commonInfo);

		if (
			character.type === "barbarian" &&
			"weapon" in character &&
			"damage" in character
		) {
			const barbarian = character;
			commonInfo.textContent += ` Weapon: ${barbarian.weapon}, Damage: ${barbarian.damage}`;
		} else if (
			character.type === "wizard" &&
			"conjuration" in character &&
			"arcaneTradition" in character
		) {
			const wizard = character;
			commonInfo.textContent += ` Conjuration: ${wizard.conjuration}, Arcane Tradition: ${wizard.arcaneTradition}`;
		}

		characterDiv.appendChild(commonInfo);

		output.appendChild(characterDiv);
	});
});
