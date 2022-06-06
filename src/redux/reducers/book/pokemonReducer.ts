import {
  IPokemonStateType,
  ADD_IN_MY_POKEMON_LIST,
  POKEMON_DETAILS,
  POKEMON_LIST,
  POKEMON_LIST_OFFSET,
  pokemonActionTypes,
} from "../../types/book/pokemonType";
import {
  IPokemonDetails,
  IPokemonListOffset,
} from "../../interfaces/pokemon/pokemonInterfaces";

const initialPokemonState: IPokemonStateType = {
  pokemonList: [],
  pokemonListOffset: {} as IPokemonListOffset,
  pokemonDetails: {} as IPokemonDetails,
  myPokemonList: {} as Record<number, IPokemonDetails>,
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
    case POKEMON_DETAILS:
      return {
        ...state,
        pokemonDetails: action.payload,
      };
    case ADD_IN_MY_POKEMON_LIST:
      return {
        ...state,
        myPokemonList: {
          [action.payload.id]: action.payload,
        },
      };
    default:
      return state;
  }
};
