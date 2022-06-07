import { render, RenderResult } from "@testing-library/react";
import { Provider } from "react-redux";
import React from "react";
import { store } from "../../redux/store";
import { PokemonList } from "./PokemonList";

describe("Pokemon List - ", () => {
  let component: RenderResult;

  beforeEach(() => {
    component = render(
      <Provider store={store}>
        <PokemonList />
      </Provider>
    );
  });

  it("Should render Pokemon List", async () => {
    const pokemonList = await component.findByTestId("pokemon-list");
    expect(pokemonList).toBeInTheDocument();
  });
});
