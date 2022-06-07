import { render, RenderResult } from "@testing-library/react";
import { store } from "../../../redux/store";
import React from "react";
import { MyPokemonCard } from "./MyPokemonCard";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { IMyPokemonDetails } from "../../../redux/interfaces/pokemon/pokemonInterfaces";

const myPokemonDetails: IMyPokemonDetails = {
  id: 1,
  moves: [],
  name: "Pichachu",
  nickName: "Pichaaa",
  sprites: [],
  types: [],
};
describe("My Pokemon Card - ", () => {
  let component: RenderResult;

  beforeEach(() => {
    component = render(
      <Provider store={store}>
        <MemoryRouter>
          <MyPokemonCard {...myPokemonDetails} />
        </MemoryRouter>
      </Provider>
    );
  });

  it("Should render Pokemon Card", async () => {
    const myPokemonDetailsCard = await component.findByTestId(
      `my-pokemon-details-${myPokemonDetails.id}`
    );
    expect(myPokemonDetailsCard).toBeInTheDocument();
  });
});
