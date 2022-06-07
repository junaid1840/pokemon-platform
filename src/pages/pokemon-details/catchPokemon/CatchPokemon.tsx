import React, { FC, useState } from "react";
import { Button } from "../../../component/button/Button";
import "./catch-pokemon-modal/catchPokemonModal.scss";
import { CatchPokemonModal } from "./catch-pokemon-modal/catchPokemonModal";

export const CatchPokemon: FC = () => {
  const [showModal, setShowModal] = useState(false);
  const triggerPokemonCatch = () => setShowModal(true);
  return (
    <>
      <Button
        className="btn"
        onClick={triggerPokemonCatch}
        data-testid="init-pokemon-catch-btn"
      >
        Initiate Pokemon Catch
      </Button>
      <CatchPokemonModal showModal={showModal} setShowModal={setShowModal} />
    </>
  );
};
