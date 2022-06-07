import { fireEvent, render, RenderResult } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import { CatchPokemonModal } from "./catchPokemonModal";
import { store } from "../../../../redux/store";
import ReactModal from "react-modal";

describe("Catch Pokemon Modal - ", () => {
  let component: RenderResult;

  beforeEach(() => {
    const mockSetState = jest.fn();
    ReactModal.setAppElement("body");
    component = render(
      <Provider store={store}>
        <CatchPokemonModal showModal={true} setShowModal={mockSetState} />
      </Provider>
    );
  });

  it("Should render catch pokemon modal when showModal = true", async () => {
    const catchPokemonModal = await component.findByTestId(
      "pokemon-catch-modal"
    );
    expect(catchPokemonModal).toBeInTheDocument();
  });

  it("Should render input field to get pokemon nickname", async () => {
    const nickNameInput = await component.findByTestId(
      "pokemon-nickname-input"
    );
    expect(nickNameInput).toBeInTheDocument();
  });

  it("Should update the value when change the input field", async () => {
    const nickNameInput = (await component.findByTestId(
      "pokemon-nickname-input"
    )) as HTMLInputElement;
    fireEvent.change(nickNameInput, { target: { value: "Junaid Poke" } });
    expect(nickNameInput.value).toEqual("Junaid Poke");
  });

  it("Should close the modal when cancel button is pressed", async () => {
    const catchPokemonModal = await component.findByTestId(
      "pokemon-catch-modal"
    );
    const cancelButton = await component.findByTestId(
      "pokemon-catch-cancel-btn"
    );
    await cancelButton.click();
    expect(catchPokemonModal).toBeInTheDocument();
  });
});
