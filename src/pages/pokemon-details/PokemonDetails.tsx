import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../redux/store";
import "./pokemonDetails.scss";
import { useParams } from "react-router-dom";
import { getPokemonDetails } from "../../redux/effects/pokemon-effects/pokemonEffects";
import { CatchPokemon } from "./catchPokemon/CatchPokemon";

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

  return (
    <>
      {pokemonDetails.sprites && (
        <div className="pokemon-details-wrapper">
          <div className="pokemon-image-wrapper">
            {pokemonDetails.sprites.map((imageUrl, index) => (
              <img
                className="pokemon-image"
                key={`pokemon-image-${index}`}
                src={imageUrl}
                alt="Pokemon-image"
              />
            ))}
          </div>
          <div className="pokemon-details-section">
            <h1>{pokemonDetails.name.toUpperCase()}</h1>
            <div className="pokemon-details">
              <div className="pokemon-moves">
                <h3 className="sub-heading">Moves</h3>
                <div className="pokemon-list-items-wrapper">
                  {pokemonDetails.moves.map((move, index) => (
                    <div key={`pokemon-move-${index}`}>{move.move.name}</div>
                  ))}
                </div>
              </div>
              <div className="pokemon-types">
                <h3 className="sub-heading">Types</h3>
                <div className="pokemon-list-items-wrapper">
                  {pokemonDetails.types.map((type, index) => (
                    <div key={`pokemon-type-${index}`}>{type.type.name}</div>
                  ))}
                </div>
              </div>
            </div>
            <hr />
            <div className="pokemon-actions">
              <CatchPokemon />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
