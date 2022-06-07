import { Dispatch } from "redux";
import {
  getPokemonDetailsService,
  getPokemonListService,
} from "../../../services/apiServices/pokemonServices";
import {
  pokemonDetailsAction,
  pokemonListAction,
  pokemonListOffsetAction,
} from "../../actions/book/pokemonAction";
import {
  IPokemonDetailsActionType,
  IPokemonListActionType,
  IPokemonListOffsetActionType,
} from "../../types/book/pokemonType";
import { IPokemonDetails } from "../../interfaces/pokemon/pokemonInterfaces";

const getOffsetFromString = (offsetString: string): string =>
  offsetString && offsetString.split("?")[1];

export const getPokemonListEffect =
  (offsetParams: string) =>
  async (
    dispatch: Dispatch<IPokemonListActionType | IPokemonListOffsetActionType>
  ): Promise<void> => {
    const data = await getPokemonListService(offsetParams);
    dispatch(
      pokemonListOffsetAction({
        nextOffset: getOffsetFromString(data.next),
        previousOffset: getOffsetFromString(data.previous),
      })
    );
    dispatch(pokemonListAction(data.results));
  };

export const getPokemonDetails =
  (pokemonId: string) =>
  async (dispatch: Dispatch<IPokemonDetailsActionType>): Promise<void> => {
    const data = await getPokemonDetailsService(pokemonId);
    const formattedData: IPokemonDetails = {
      ...data,
      sprites: [data.sprites.other["official-artwork"].front_default],
    };
    dispatch(pokemonDetailsAction(formattedData));
  };
