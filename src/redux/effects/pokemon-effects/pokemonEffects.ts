import { Dispatch } from "redux";
import { getPokemonListService } from "../../../services/apiServices/pokemonServices";
import {
  pokemonListAction,
  pokemonListOffsetAction,
} from "../../actions/book/pokemonAction";
import {
  IPokemonListActionType,
  IPokemonListOffsetActionType,
} from "../../types/book/pokemonType";

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
