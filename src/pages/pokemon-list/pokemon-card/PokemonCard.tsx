import React, { FC } from "react";
import { IPokemon } from "../../../redux/interfaces/pokemon/pokemonInterfaces";
import { Button } from "../../../component/button/Button";
import { Link } from "react-router-dom";
import "./pokemonCard.scss";
import { ROUTES } from "../../../routes/routeConstants";

type IProps = IPokemon;

export const PokemonCard: FC<IProps> = ({ name, url }) => {
  const getPokemonId = (url: string): string => {
    const urlSplitArray = url.split("/");
    return urlSplitArray[urlSplitArray.length - 2];
  };

  return (
    <div className="card-wrapper">
      <h1 className="card-title">{name.toUpperCase()}</h1>
      <Link
        to={ROUTES.POKEMON_DETAILS(getPokemonId(url))}
        className="redirect-details"
      >
        <Button>Details</Button>
      </Link>
    </div>
  );
};
