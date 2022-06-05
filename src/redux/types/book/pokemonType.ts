import {
  IPokemon,
  IPokemonListOffset,
} from "../../interfaces/pokemon/pokemonInterfaces";

export const POKEMON_LIST = "POKEMON_LIST";
export const POKEMON_LIST_OFFSET = "POKEMON_LIST_OFFSET";

export interface IPokemonStateType {
  pokemonList: IPokemon[];
  pokemonListOffset: IPokemonListOffset;
}

export interface IPokemonListActionType {
  type: typeof POKEMON_LIST;
  payload: IPokemon[];
}
export interface IPokemonListOffsetActionType {
  type: typeof POKEMON_LIST_OFFSET;
  payload: IPokemonListOffset;
}

export type pokemonActionTypes =
  | IPokemonListActionType
  | IPokemonListOffsetActionType;
