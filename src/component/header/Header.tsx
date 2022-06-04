import "./header.scss";
import React, { FC } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../routes/routeConstants";

export const Header: FC = () => {
  return (
    <header className="header">
      <div className="logo">Pokemon Platform</div>
      <nav>
        <ul className="nav-list-wrapper">
          <li>
            <Link className="nav-list-item" to={ROUTES.HOME_PAGE}>
              Home
            </Link>
          </li>
          <li>
            <Link className="nav-list-item" to={ROUTES.POKEMON_LIST}>
              Pokemon List
            </Link>
          </li>
          <li>
            <Link className="nav-list-item" to={ROUTES.MY_POKEMON}>
              My Pokemon
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
