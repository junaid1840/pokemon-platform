import { createContext } from "react";
import { iApiResponse } from "../api-manager/apiManagerInterfaces";
import { pokemonActionTypes } from "../../redux/types/book/pokemonType";
import { Dispatch } from "redux";

export interface iGlobalContext {
  showLoader: boolean;
  globalDispatch: (
    effect: (dispatch: Dispatch<pokemonActionTypes>) => Promise<iApiResponse>
  ) => Promise<iApiResponse>;
}

export const GlobalContext = createContext({} as iGlobalContext);
