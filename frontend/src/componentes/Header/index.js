import React from "react";

import { Link, NavLink } from "react-router-dom";

import "./styles.css";

const Header = () => {
  const token = localStorage.getItem("token");

  const clearLocalStorage = () => {
    localStorage.removeItem("token");
  };

  return (
    <>
      <div className="navigation">
        <nav>
          <h2 className="muda">MUDA</h2>
          <ul>
            {!token ? (
              <li>
                <NavLink activeClassName="active" to="/login">
                  Entrar
                </NavLink>
              </li>
            ) : null}

            {token ? (
              <li>
                <NavLink activeClassName="active" to="/book">
                  Cadastrar livros
                </NavLink>
              </li>
            ) : null}
            <li>
              <NavLink activeClassName="active" to="/about">
                Sobre o Muda
              </NavLink>
            </li>
            {token ? (
              <li>
                <Link activeClassName="active" to="/login">
                  <button
                    onClick={() => clearLocalStorage()}
                    className="logout"
                  >
                    Sair
                  </button>
                </Link>
              </li>
            ) : null}
          </ul>
        </nav>
      </div>
    </>
  );
};
export default Header;
