import { combineReducers } from "redux";
import { pokemonReducer } from "./book/pokemonReducer";

export const rootReducer = combineReducers({
  pokemonReducer: pokemonReducer,
});
