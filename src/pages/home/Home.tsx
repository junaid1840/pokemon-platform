import React, { FC } from "react";
import "./home.scss";
export const Home: FC = () => {
  return (
    <>
      <div className="main-banner">
        <h1 className="main-heading">Welcome to Pokemon platform!</h1>
        <p>Here you can checkout details about pokemon and catch them</p>
      </div>
    </>
  );
};
