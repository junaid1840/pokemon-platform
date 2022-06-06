import React, { FC } from "react";
import { IPokemonDetails } from "../../../redux/interfaces/pokemon/pokemonInterfaces";
import { Button } from "../../../component/button/Button";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../routes/routeConstants";
import "./myPokemonCard.scss";
import { useDispatch } from "react-redux";
import { releaseFromMyPokemonListAction } from "../../../redux/actions/book/pokemonAction";

export const MyPokemonCard: FC<IPokemonDetails> = ({ id, sprites, name }) => {
  const dispatch = useDispatch();
  const releasePokemon = () => dispatch(releaseFromMyPokemonListAction(id));
  return (
    <div className="my-pokemon-details">
      <img className="pokemon-thumbnail" src={sprites[0]} alt="pokemon-image" />
      <span>{name}</span>
      <Button onClick={releasePokemon}>Release</Button>
      <Link to={ROUTES.POKEMON_DETAILS(id.toString())}>
        <Button>Details</Button>
      </Link>
    </div>
  );
};
