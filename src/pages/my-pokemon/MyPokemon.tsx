import React, { FC } from "react";
import { useSelector } from "react-redux";
import { AppState } from "../../redux/store";
import { MyPokemonCard } from "./my-pokemon-card/MyPokemonCard";
import "./myPokemon.scss";

export const MyPokemon: FC = () => {
  const { myPokemonList } = useSelector(
    (state: AppState) => state.pokemonReducer
  );

  return (
    <div
      className="wrapper my-pokemon-list-wrapper"
      data-testid="my-pokemon-list"
    >
      <h1>My Pokemon List</h1>
      {Object.values(myPokemonList).map((pokemonItem, index) => (
        <MyPokemonCard key={`pokemon-card-${index}`} {...pokemonItem} />
      ))}
    </div>
  );
};
