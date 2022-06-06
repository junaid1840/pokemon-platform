import React, { FC, useState } from "react";
import { Modal } from "../../../component/modal/Modal";
import { Button } from "../../../component/button/Button";
import { addInMyPokemonListAction } from "../../../redux/actions/book/pokemonAction";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../../redux/store";
import "./catchPokemon.scss";

export const CatchPokemon: FC = () => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const { pokemonDetails } = useSelector(
    (state: AppState) => state.pokemonReducer
  );
  const [nickName, setNickName] = useState("");

  const catchPokemon = () => {
    dispatch(addInMyPokemonListAction({ nickName, ...pokemonDetails }));
    setShowModal(false);
  };
  const closeModal = () => setShowModal(false);
  const triggerPokemonCatch = () => setShowModal(true);
  return (
    <>
      <Button className="btn pokemon-catch-btn" onClick={triggerPokemonCatch}>
        Catch Pokemon
      </Button>
      <Modal isOpen={showModal}>
        <div className="catch-pokemon-modal">
          <h1>Pick A Name for Your Pokemon!</h1>
          <div>
            <input
              placeholder="Give me a name..."
              className="pokemon-nickname-input"
              onChange={(e) => setNickName(e.target.value)}
              required={true}
            />
          </div>
          <div className="catch-pokemon-action">
            <Button className="btn pokemon-catch-btn" onClick={catchPokemon}>
              Catch Pokemon
            </Button>
            <Button className="btn cancel-btn" onClick={closeModal}>
              Cancel
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};