import React, { FC } from "react";
import { IMyPokemonDetails } from "../../../redux/interfaces/pokemon/pokemonInterfaces";
import { Button } from "../../../component/button/Button";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../routes/routeConstants";
import "./myPokemonCard.scss";
import { useDispatch } from "react-redux";
import { releaseFromMyPokemonListAction } from "../../../redux/actions/book/pokemonAction";

export const MyPokemonCard: FC<IMyPokemonDetails> = ({
  id,
  sprites,
  name,
  nickName,
}) => {
  const dispatch = useDispatch();
  const releasePokemon = () => dispatch(releaseFromMyPokemonListAction(id));
  return (
    <div
      className="my-pokemon-details"
      data-testid={`my-pokemon-details-${id}`}
    >
      <img className="pokemon-thumbnail" src={sprites[0]} alt="pokemon-image" />
      <div className="vertical-divider"></div>
      <span className="pokemon-name">{nickName}</span>
      <div className="vertical-divider"></div>
      <span className="pokemon-name">{name}</span>
      <div className="vertical-divider"></div>
      <div className="my-pokemon-action-wrapper">
        <Button className="btn release-pokemon-btn" onClick={releasePokemon}>
          Release
        </Button>
        <Link to={ROUTES.POKEMON_DETAILS(id.toString())}>
          <Button>Details</Button>
        </Link>
      </div>
    </div>
  );
};
