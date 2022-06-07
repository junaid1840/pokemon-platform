import {
  IAddInMyPokemonListActionType,
  IPokemonDetailsActionType,
  IPokemonListActionType,
  IPokemonListOffsetActionType,
  ADD_IN_MY_POKEMON_LIST,
  POKEMON_DETAILS,
  POKEMON_LIST,
  POKEMON_LIST_OFFSET,
  REMOVE_FROM_MY_POKEMON_LIST,
  IRemoveFromMyPokemonListActionType,
} from "../../types/book/pokemonType";
import {
  IMyPokemonDetails,
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
  pokemon: IMyPokemonDetails
): IAddInMyPokemonListActionType => ({
  type: ADD_IN_MY_POKEMON_LIST,
  payload: pokemon,
});

export const releaseFromMyPokemonListAction = (
  pokemonId: number
): IRemoveFromMyPokemonListActionType => ({
  type: REMOVE_FROM_MY_POKEMON_LIST,
  payload: pokemonId,
});
