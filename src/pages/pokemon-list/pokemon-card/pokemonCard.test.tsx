import { render, RenderResult } from "@testing-library/react";
import { store } from "../../../redux/store";
import React from "react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { IPokemon } from "../../../redux/interfaces/pokemon/pokemonInterfaces";
import { PokemonCard } from "./PokemonCard";

const pokemonDetails: IPokemon = {
  name: "Pichachu",
  url: "https://pokemon.com/pokemon/1/",
};
describe("Pokemon Card - ", () => {
  let component: RenderResult;

  beforeEach(() => {
    component = render(
      <Provider store={store}>
        <MemoryRouter>
          <PokemonCard {...pokemonDetails} />
        </MemoryRouter>
      </Provider>
    );
  });

  it("Should render Pokemon Card", async () => {
    const myPokemonDetailsCard = await component.findByTestId(
      `pokemon-card-${pokemonDetails.name}`
    );
    expect(myPokemonDetailsCard).toBeInTheDocument();
  });
});
