import React, { FC, useEffect } from "react";
import ReactModal from "react-modal";
import "./modal.scss";

export const Modal: FC<ReactModal.Props> = ({ children, ...props }) => {
  useEffect(() => {
    ReactModal.setAppElement(".modal");
  });
  return (
    <ReactModal {...props} overlayClassName="modal">
      {children}
    </ReactModal>
  );
};
