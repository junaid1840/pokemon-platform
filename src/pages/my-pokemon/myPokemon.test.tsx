import { render, RenderResult } from "@testing-library/react";
import { Provider } from "react-redux";
import React from "react";
import { store } from "../../redux/store";
import { MyPokemon } from "./MyPokemon";

describe("My Pokemon List - ", () => {
  let component: RenderResult;

  beforeEach(() => {
    component = render(
      <Provider store={store}>
        <MyPokemon />
      </Provider>
    );
  });

  it("Should render my Pokemon List", async () => {
    const myPokemonListWrapper = await component.findByTestId(
      "my-pokemon-list"
    );
    expect(myPokemonListWrapper).toBeInTheDocument();
  });
});
