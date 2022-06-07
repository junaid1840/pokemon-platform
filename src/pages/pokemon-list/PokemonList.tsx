import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonListEffect } from "../../redux/effects/pokemon-effects/pokemonEffects";
import { AppState } from "../../redux/store";
import "./pokemonList.scss";
import { Button } from "../../component/button/Button";
import { PokemonCard } from "./pokemon-card/PokemonCard";

export const PokemonList: FC = () => {
  const dispatch = useDispatch();
  const { pokemonList, pokemonListOffset } = useSelector(
    (state: AppState) => state.pokemonReducer
  );

  useEffect(() => {
    dispatch(getPokemonListEffect("limit=20&offset=20"));
  }, []);

  const getNextList = () =>
    dispatch(getPokemonListEffect(pokemonListOffset.nextOffset));
  const getPreviousList = () =>
    dispatch(getPokemonListEffect(pokemonListOffset.previousOffset));

  return (
    <>
      <div className="pokemon-list wrapper" data-testid="pokemon-list">
        <h1>All Pokemon List</h1>
        {pokemonList.map((pokemonItem, index) => (
          <PokemonCard key={`pokemon-card-${index}`} {...pokemonItem} />
        ))}
        <div className="btn-action-wrapper">
          {pokemonListOffset.previousOffset !== null && (
            <Button
              onClick={getPreviousList}
              className="btn previous-list-items-btn"
            >
              Previous
            </Button>
          )}
          {pokemonListOffset.nextOffset !== null && (
            <Button onClick={getNextList} className="btn next-list-items-btn">
              Next
            </Button>
          )}
        </div>
      </div>
    </>
  );
};
