/**
 * Fes una pàgina web que puguis introduir les dades d’un anime. Les dades de l’anime són titol, creador i any de creació. 
 * Aquestes s’han d’afegir en una llista d’animes formada per classes d’animes. Els atributs seran privats i es necessitaran 
 * els mètodes getters i setters. A més, afegeix un constructor amb tots els paràmetres, un mètode toString amb tots els atributs 
 * juntament amb els seus valors.Les variables han d’estar fortament tipades i posar les classes en un altre fitxer perquè es corregeixi.

 **/

import { Anime } from "./anime.js";

const animes: Anime[] = [];

const form = document.querySelector<HTMLFormElement>(
	"#animes-form",
) as HTMLFormElement;

form.addEventListener("submit", (event) => {
	event.preventDefault();

	const formData = new FormData(form);
	console.log("Form submitted", formData);

	const titol = formData.get("titol") as string;
	const creador = formData.get("creador") as string;
	const publish = parseInt(formData.get("primera") as string, 10);

	const anime = new Anime({ titol, creador, publish });
	animes.push(anime);

	console.log(animes);

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

	animes.forEach((anime) => {
		const animeDiv = document.createElement("div");
		animeDiv.classList.add("anime");

		const commonInfo = document.createElement("p");
		commonInfo.textContent = anime.toString();
		animeDiv.appendChild(commonInfo);

		output.appendChild(animeDiv);
	});
});
