export type CharacterType = "barbarian" | "wizard";

export type Character = Barbarian | Wizard;

type CharacterMap = {
	barbarian: Barbarian;
	wizard: Wizard;
};

export class BaseCharacter {
	readonly name: string;
	readonly points: number;
	readonly type: CharacterType;

	constructor(obj: { name: string; points: number; type: CharacterType }) {
		this.name = obj.name;
		this.points = obj.points;
		this.type = obj.type;
	}

	public toString(): string {
		return `Name: ${this.name}, Points: ${this.points}, Type: ${this.type}`;
	}

	public static createCharacter<T extends keyof CharacterMap>(
		character: CharacterMap[T],
		type: T,
	): CharacterMap[T] {
		switch (type) {
			case "barbarian":
				return new Barbarian(
					character as CharacterMap["barbarian"],
				) as CharacterMap[T];
			case "wizard":
				return new Wizard(
					character as CharacterMap["wizard"],
				) as CharacterMap[T];
		}
	}
}

export class Barbarian extends BaseCharacter {
	readonly weapon: string;
	readonly damage: number;

	constructor(obj: BaseCharacter & Barbarian) {
		super(obj);
		this.weapon = obj.weapon;
		this.damage = obj.damage;
	}

	public override toString(): string {
		return `${super.toString()}, Weapon: ${this.weapon}, Damage: ${this.damage}`;
	}
}

export class Wizard extends BaseCharacter {
	readonly conjuration: string;
	readonly arcaneTradition: string;

	constructor(obj: BaseCharacter & Wizard) {
		super(obj);
		this.conjuration = obj.conjuration;
		this.arcaneTradition = obj.arcaneTradition;
	}

	public override toString(): string {
		return `${super.toString()}, Conjuration: ${this.conjuration}, Arcane Tradition: ${this.arcaneTradition}`;
	}
}
