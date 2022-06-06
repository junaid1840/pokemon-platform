import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonDetails } from "../../redux/effects/pokemon-effects/pokemonEffects";
import { useParams } from "react-router-dom";
import { AppState } from "../../redux/store";
import "./pokemonDetails.scss";
import { Button } from "../../component/button/Button";
import { addInMyPokemonListAction } from "../../redux/actions/book/pokemonAction";

type IPokemonDetailsParam = {
  id: string;
};

export const PokemonDetails: FC = () => {
  const dispatch = useDispatch();
  const params = useParams<IPokemonDetailsParam>();
  const { pokemonDetails } = useSelector(
    (state: AppState) => state.pokemonReducer
  );

  useEffect(() => {
    dispatch(getPokemonDetails(params.id));
  }, []);

  const catchPokemon = () => dispatch(addInMyPokemonListAction(pokemonDetails));

  return (
    <>
      {pokemonDetails.sprites && (
        <div className="pokemon-details-wrapper">
          <div className="pokemon-image-wrapper">
            {pokemonDetails.sprites.map((imageUrl, index) => (
              <img
                key={`pokemon-image-${index}`}
                src={imageUrl}
                alt="Pokemon-image"
              />
            ))}
          </div>
          <div>
            <div className="pokemon-details">
              <div className="pokemon-moves">
                {pokemonDetails.moves.map((move, index) => (
                  <div key={`pokemon-move-${index}`}>{move.move.name}</div>
                ))}
              </div>
              <div className="pokemon-types">
                {pokemonDetails.types.map((type, index) => (
                  <div key={`pokemon-type-${index}`}>{type.type.name}</div>
                ))}
              </div>
            </div>
            <div className="pokemon-actions">
              <Button className="btn pokemon-catch-btn" onClick={catchPokemon}>
                Catch Pokemon
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
