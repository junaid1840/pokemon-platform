import React, { Dispatch, FC, useState } from "react";
import { Modal } from "../../../../component/modal/Modal";
import { Button } from "../../../../component/button/Button";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../../../redux/store";
import { addInMyPokemonListAction } from "../../../../redux/actions/book/pokemonAction";
import { ROUTES } from "../../../../routes/routeConstants";
import { useHistory } from "react-router-dom";

type IProps = {
  showModal: boolean;
  setShowModal: Dispatch<boolean>;
};

export const CatchPokemonModal: FC<IProps> = ({ showModal, setShowModal }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { pokemonDetails } = useSelector(
    (state: AppState) => state.pokemonReducer
  );
  const [nickName, setNickName] = useState("");

  const catchPokemon = () => {
    dispatch(addInMyPokemonListAction({ nickName, ...pokemonDetails }));
    setShowModal(false);
    history.push(ROUTES.MY_POKEMON);
  };
  const closeModal = () => setShowModal(false);
  return (
    <div className="modal">
      <Modal isOpen={showModal} onRequestClose={closeModal}>
        <div className="catch-pokemon-modal" data-testid="pokemon-catch-modal">
          <h1>Pick A Name for Your Pokemon!</h1>
          <div>
            <input
              placeholder="Give me a name..."
              data-testid="pokemon-nickname-input"
              className="pokemon-nickname-input"
              onChange={(e) => setNickName(e.target.value)}
              required={true}
            />
          </div>
          <div className="catch-pokemon-action">
            <Button className="btn pokemon-catch-btn" onClick={catchPokemon}>
              Catch Pokemon
            </Button>
            <Button
              className="btn cancel-btn"
              data-testid="pokemon-catch-cancel-btn"
              onClick={closeModal}
            >
              Cancel
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};
