/**
 * Desenvolupar una pàgina web que permeti afegir vehicles (bicicletes i patinets) a un array.
Crea els tipus Bicicleta i Patinet amb type.
Crea un tipus unió Vehicle = Bicicleta | Patinet.
Per mostrar la llista, utilitza l'operador in per determinar quin tipus de vehicle és cada element.
 **/

type VehicleTypes = "bicicleta" | "patinet";

interface Vehicle {
	fabricant: string;
	model: string;
	temps: number;
	tipus: VehicleTypes;
}

const vehicles: Vehicle[] = [];

const fabricant = document.getElementById("fabricant") as HTMLInputElement;
const model = document.getElementById("model") as HTMLInputElement;
const temps: number = Number(
	(document.getElementById("temps") as HTMLInputElement).value,
);
const tipus = (document.getElementById("tipus") as HTMLSelectElement)
	.value as VehicleTypes;
const button = document.getElementById("save") as HTMLButtonElement;
const show = document.getElementById("show") as HTMLButtonElement;
const result = document.getElementById("result") as HTMLParagraphElement;

const form = document.getElementById("form") as HTMLFormElement;

button.addEventListener("click", () => {
	const newVehicle: Vehicle = {
		fabricant: fabricant.value,
		model: model.value,
		temps: temps,
		tipus: tipus,
	};
	vehicles.push(newVehicle);
	form.reset();
});

show.addEventListener("click", () => {
	for (const vehicle of vehicles) {
		if (vehicle.tipus === "bicicleta") {
			result.innerHTML += `<p>Bicicleta: ${vehicle.fabricant} ${vehicle.model} - Temps: ${vehicle.temps}</p>`;
		} else if (vehicle.tipus === "patinet") {
			result.innerHTML += `<p>Patinet: ${vehicle.fabricant} ${vehicle.model} - Temps: ${vehicle.temps}</p>`;
		}
	}
});
