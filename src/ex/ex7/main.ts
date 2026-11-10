/**
 * Galeria d'imatges interactiva: en fer clic
 * sobre una de les 3 imatges en miniatura, el text alt i la seva font (src) es copien a la imatge d'ampliació principal.
 **/

const result = document.getElementById("result") as HTMLImageElement;

document.querySelectorAll("img").forEach((img) => {
	img.addEventListener("click", () => {
		result.src = img.src;
	});
});
