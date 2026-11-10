export type CharacterType = "barbarian" | "wizard";

export type Character = Barbarian | Wizard;

export interface BaseCharacter {
	name: string;
	points: number;
	type: CharacterType;
}

export interface Barbarian extends BaseCharacter {
	weapon: string;
	damage: number;
}

export interface Wizard extends BaseCharacter {
	conjuration: string;
	arcaneTradition: string;
}
