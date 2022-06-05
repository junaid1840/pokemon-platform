import React, { FC, HTMLAttributes } from "react";
import "./button.scss";

type IProps = HTMLAttributes<HTMLButtonElement>;
export const Button: FC<IProps> = ({ children, ...props }) => {
  return (
    <button className="btn" {...props}>
      {children}
    </button>
  );
};
