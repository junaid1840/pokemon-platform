import {
  ADD_IN_MY_POKEMON_LIST,
  IPokemonStateType,
  POKEMON_DETAILS,
  POKEMON_LIST,
  POKEMON_LIST_OFFSET,
  pokemonActionTypes,
  REMOVE_FROM_MY_POKEMON_LIST,
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
          ...state.myPokemonList,
          [action.payload.id]: action.payload,
        },
      };
    case REMOVE_FROM_MY_POKEMON_LIST:
      delete state.myPokemonList[action.payload];
      return {
        ...state,
      };
    default:
      return state;
  }
};
