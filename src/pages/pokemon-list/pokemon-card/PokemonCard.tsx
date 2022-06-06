import React, { FC } from "react";
import { IPokemon } from "../../../redux/interfaces/pokemon/pokemonInterfaces";
import { Button } from "../../../component/button/Button";
import { useHistory } from "react-router-dom";
import "./pokemonCard.scss";
import { ROUTES } from "../../../routes/routeConstants";
import { getPokemonDetails } from "../../../redux/effects/pokemon-effects/pokemonEffects";
import { useDispatch } from "react-redux";

type IProps = IPokemon;

export const PokemonCard: FC<IProps> = ({ name, url }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const getPokemonId = (url: string): string => {
    const urlSplitArray = url.split("/");
    return urlSplitArray[urlSplitArray.length - 2];
  };

  const goToDetails = () => {
    const pokemonId = getPokemonId(url);
    dispatch(getPokemonDetails(pokemonId));
    history.push(ROUTES.POKEMON_DETAILS(pokemonId));
  };

  return (
    <div className="card-wrapper">
      <h1 className="card-title">{name.toUpperCase()}</h1>
      <Button className="btn redirect-details" onClick={goToDetails}>
        Details
      </Button>
    </div>
  );
};
