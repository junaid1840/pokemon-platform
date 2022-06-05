import React, { FC } from "react";
import { IPokemon } from "../../../redux/interfaces/pokemon/pokemonInterfaces";
import { Button } from "../../../component/button/Button";
import { Link } from "react-router-dom";
import "./pokemonCard.scss";

type IProps = IPokemon;

export const PokemonCard: FC<IProps> = ({ name, url }) => {
  return (
    <div className="card-wrapper">
      <h1 className="card-title">{name.toUpperCase()}</h1>
      <Link to={url} className="redirect-details">
        <Button>Details</Button>
      </Link>
    </div>
  );
};
