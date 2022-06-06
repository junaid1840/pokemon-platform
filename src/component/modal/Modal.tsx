import React, { FC, useEffect } from "react";
import ReactModal from "react-modal";
import "./modal.scss";

export const Modal: FC<ReactModal.Props> = ({ children, ...props }) => {
  useEffect(() => {
    ReactModal.setAppElement("#root");
  });
  return (
    <ReactModal {...props} overlayClassName="modal">
      {children}
    </ReactModal>
  );
};
