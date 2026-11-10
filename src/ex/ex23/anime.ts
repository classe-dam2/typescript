interface BaseAnime {
	titol: string;
	creador: string;
	publish: number;
}

export class Anime implements BaseAnime {
	private readonly _titol: string;
	private readonly _creador: string;
	private readonly _publish: number;

	constructor(obj: BaseAnime) {
		this._titol = obj.titol;
		this._creador = obj.creador;
		this._publish = obj.publish;
	}

	public get titol(): string {
		return this._titol;
	}

	public get creador(): string {
		return this._creador;
	}

	public get publish(): number {
		return this._publish;
	}

	public toString(): string {
		return `Titol: ${this._titol}, Creador: ${this._creador}, Any de creació: ${this._publish}`;
	}
}
