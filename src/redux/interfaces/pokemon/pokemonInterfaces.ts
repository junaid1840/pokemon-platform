export interface IPokemon {
  name: string;
  url: string;
}

export interface IPokemonListOffset {
  nextOffset: string;
  previousOffset: string;
}
interface IMove {
  move: IPokemon;
}
interface IType {
  slot: number;
  type: IPokemon;
}

export interface IPokemonDetails {
  id: number;
  name: string;
  sprites: string[];
  moves: IMove[];
  types: IType[];
}
export interface IMyPokemonDetails extends IPokemonDetails {
  nickName: string;
}
