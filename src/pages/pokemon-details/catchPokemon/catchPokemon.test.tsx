import { render } from "@testing-library/react";
import React from "react";
import { CatchPokemon } from "./CatchPokemon";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { Store } from "redux";
import {
  IMyPokemonDetails,
  IPokemonListOffset,
} from "../../../redux/interfaces/pokemon/pokemonInterfaces";

describe("Catch Pokemon - ", () => {
  let store: Store;
  beforeAll(() => {
    const initialState = {
      pokemonList: [],
      pokemonListOffset: {} as IPokemonListOffset,
      myPokemonList: {} as Record<number, IMyPokemonDetails>,
      pokemonDetails: {
        name: "picachu",
      },
    };
    const mockStore = configureStore();
    store = mockStore(initialState);
  });
  test(" test is working  !!!", async () => {
    const component = render(
      <Provider store={store}>
        <CatchPokemon />
      </Provider>
    );
    const input = component.findByTestId("pokemon-nickname-input");
    expect(input).toBeInTheDocument();
  });
});
