/**
 * Desenvolupa una pàgina web mostrar llocs mitjançant les seves coordenades geogràfiques en un mapa.
Instruccions:

Crea un tipus tupla anomenat CoordenadaLloc que contingui el nom del lloc, la latitud i la longitud: [string, number, number].
Crea un array d'aquest tipus per anar emmagatzemant els llocs registrats.
Quan es cliqui el botó Afegir Lloc: llegeix les dades del formulari i crea la tupla corresponent, afegeix la tupla a l'array de llocs i mostra un marcador al mapa (amb Leaflet) que inclogui un popup amb la informació i centra el mapa en aquesta posició.
Quan es cliqui el botó Mostrar Històric: recorre l'array de tuples i mostra tots els llocs en la llista (<ul>).

Dades d'exemple per provar:

IES Sabadell: Latitud 41.55453 | Longitud 2.08253
Ajuntament de Sabadell: Latitud 41.54633 | Longitud 2.10589
 **/

import { Map as LeafletMap, Marker, TileLayer } from "leaflet";

const map = new LeafletMap("map").setView([51.505, -0.09], 13);

new TileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
	attribution:
		'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

new Marker([51.5, -0.09])
	.addTo(map)
	.bindPopup("A pretty CSS popup.<br> Easily customizable.")
	.openPopup();

type CoordenadaLloc = [string, number, number];

const llocs: CoordenadaLloc[] = [];

const btnAfegir = document.getElementById("btnAfegir") as HTMLButtonElement;
const btnHistoric = document.getElementById("btnHistoric") as HTMLButtonElement;

const nom = document.getElementById("nom") as HTMLInputElement;
const latitud = document.getElementById("latitud") as HTMLInputElement;
const longitud = document.getElementById("longitud") as HTMLInputElement;

btnAfegir.addEventListener("click", () => {
	new Marker([parseFloat(latitud.value), parseFloat(longitud.value)])
		.addTo(map)
		.bindPopup(
			`<b>${nom.value}</b><br>Latitud: ${latitud.value}<br>Longitud: ${longitud.value}`,
		)
		.openPopup();

	map.setView([parseFloat(latitud.value), parseFloat(longitud.value)], 13);

	llocs.push([
		nom.value,
		parseFloat(latitud.value),
		parseFloat(longitud.value),
	]);
});

btnHistoric.addEventListener("click", () => {
	const llista = document.getElementById("llista") as HTMLUListElement;
	llista.innerHTML = "";
	for (const lloc of llocs) {
		const item = document.createElement("li");
		item.textContent = `${lloc[0]} - Latitud: ${lloc[1]} | Longitud: ${lloc[2]}`;
		llista.appendChild(item);
	}
});
