import {
  IPokemon,
  IPokemonDetails,
  IPokemonListOffset,
} from "../../interfaces/pokemon/pokemonInterfaces";

export const POKEMON_LIST = "POKEMON_LIST";
export const POKEMON_LIST_OFFSET = "POKEMON_LIST_OFFSET";
export const POKEMON_DETAILS = "POKEMON_DETAILS";
export const ADD_IN_MY_POKEMON_LIST = "ADD_IN_MY_POKEMON_LIST";

export interface IPokemonStateType {
  pokemonList: IPokemon[];
  pokemonListOffset: IPokemonListOffset;
  pokemonDetails: IPokemonDetails;
  myPokemonList: Record<number, IPokemonDetails>;
}

export interface IPokemonListActionType {
  type: typeof POKEMON_LIST;
  payload: IPokemon[];
}
export interface IPokemonListOffsetActionType {
  type: typeof POKEMON_LIST_OFFSET;
  payload: IPokemonListOffset;
}
export interface IPokemonDetailsActionType {
  type: typeof POKEMON_DETAILS;
  payload: IPokemonDetails;
}
export interface IAddInMyPokemonListActionType {
  type: typeof ADD_IN_MY_POKEMON_LIST;
  payload: IPokemonDetails;
}

export type pokemonActionTypes =
  | IPokemonListActionType
  | IPokemonListOffsetActionType
  | IPokemonDetailsActionType
  | IAddInMyPokemonListActionType;
