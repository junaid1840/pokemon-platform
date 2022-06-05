import {
  IPokemonStateType,
  POKEMON_LIST,
  POKEMON_LIST_OFFSET,
  pokemonActionTypes,
} from "../../types/book/pokemonType";
import { IPokemonListOffset } from "../../interfaces/pokemon/pokemonInterfaces";

const initialPokemonState: IPokemonStateType = {
  pokemonList: [],
  pokemonListOffset: {} as IPokemonListOffset,
};

export const pokemonReducer = (
  state = initialPokemonState,
  action: pokemonActionTypes
): IPokemonStateType => {
  switch (action.type) {
    case POKEMON_LIST:
      return {
        ...state,
        pokemonList: action.payload,
      };
    case POKEMON_LIST_OFFSET:
      return {
        ...state,
        pokemonListOffset: action.payload,
      };
    default:
      return state;
  }
};
