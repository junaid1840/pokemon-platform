import {
  IPokemonListActionType,
  IPokemonListOffsetActionType,
  POKEMON_LIST,
  POKEMON_LIST_OFFSET,
} from "../../types/book/pokemonType";
import {
  IPokemon,
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
