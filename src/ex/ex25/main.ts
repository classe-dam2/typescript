/**
Fes el mateix de l’exercici 21, però amb classes. Crear un constructor per afegir els valors dels atributs. 
També crea un  toString per posar tots els valors de la classe. Com que tenen elements comuns tindran una classe 
pare amb els elements comuns. En aquest cas, els atributs són:
Barbarian son: name, points(number), weapon, ragei type.
Wizard son: name, points(number) , conjuration, arcane tradition i type.
Hauràs de crear una llista que accepti tant una classe com una altra, sense que s’hagi d’informar tots els camps.
Les variables han d’estar fortament tipades i posar les classes en un altre fitxer perquè es corregeixi.
 **/

import {
	BaseCharacter,
	type Character,
	type CharacterType,
} from "./character.js";

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
		const barbarian = BaseCharacter.createCharacter(
			{
				type,
				name,
				points,
				weapon,
				damage: parseInt(damage, 10),
			},
			"barbarian",
		);

		characters.push(barbarian);
	} else if (type === "wizard") {
		const wizard = BaseCharacter.createCharacter(
			{
				type,
				name,
				points,
				conjuration: weapon,
				arcaneTradition: damage,
			},
			"wizard",
		);

		characters.push(wizard);
	}

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
		commonInfo.textContent = character.toString();
		characterDiv.appendChild(commonInfo);

		characterDiv.appendChild(commonInfo);

		output.appendChild(characterDiv);
	});
});
