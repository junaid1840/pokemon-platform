import {
  IAddInMyPokemonListActionType,
  IPokemonDetailsActionType,
  IPokemonListActionType,
  IPokemonListOffsetActionType,
  ADD_IN_MY_POKEMON_LIST,
  POKEMON_DETAILS,
  POKEMON_LIST,
  POKEMON_LIST_OFFSET,
} from "../../types/book/pokemonType";
import {
  IPokemon,
  IPokemonDetails,
  IPokemonListOffset,
} from "../../interfaces/pokemon/pokemonInterfaces";

export const pokemonListAction = (
  pokemonList: IPokemon[]
): IPokemonListActionType => ({
  type: POKEMON_LIST,
  payload: pokemonList,
});

export const pokemonListOffsetAction = (
  pokemonListOffset: IPokemonListOffset
): IPokemonListOffsetActionType => ({
  type: POKEMON_LIST_OFFSET,
  payload: pokemonListOffset,
});

export const pokemonDetailsAction = (
  pokemonDetails: IPokemonDetails
): IPokemonDetailsActionType => ({
  type: POKEMON_DETAILS,
  payload: pokemonDetails,
});

export const addInMyPokemonListAction = (
  pokemon: IPokemonDetails
): IAddInMyPokemonListActionType => ({
  type: ADD_IN_MY_POKEMON_LIST,
  payload: pokemon,
});
