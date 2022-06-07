import { render, RenderResult } from "@testing-library/react";
import React from "react";
import { CatchPokemon } from "./CatchPokemon";
import { Provider } from "react-redux";
import { store } from "../../../redux/store";

describe("Catch Pokemon - ", () => {
  let component: RenderResult;
  beforeEach(() => {
    component = render(
      <Provider store={store}>
        <CatchPokemon />
      </Provider>
    );
  });

  it("Should render Initiate pokemon catch button", async () => {
    const initCatchPokemonBtn = await component.findByTestId(
      "init-pokemon-catch-btn"
    );
    expect(initCatchPokemonBtn).toBeInTheDocument();
  });

  it("Should open the modal on clicking the trigger pokemon button", async () => {
    const initCatchPokemonBtn = await component.findByTestId(
      "init-pokemon-catch-btn"
    );
    await initCatchPokemonBtn.click();
    const pokemonModal = await component.findByTestId("pokemon-catch-modal");
    expect(pokemonModal).toBeInTheDocument();
  });
});
