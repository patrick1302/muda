import React, { useState } from "react";

import { Link } from "react-router-dom";
import Swal from "sweetalert2";

import "./styles.css";

import signupImg from "../../assets/signup-img.jpg";

import Header from "../../componentes/Header";

import api from "../../services/api";

const Signup = () => {
  const INITIAL_STATE = {
    name: "",
    email: "",
    password: "",
  };
  const [formSignup, setFormSignup] = useState(INITIAL_STATE);

  const handleChange = (e) => {
    setFormSignup({ ...formSignup, [e.target.name]: e.target.value });
  };
  console.log(formSignup);
  const signup = async () => {
    try {
      await api.post("/donor", formSignup);
      Swal.fire({
        title: "Cadastro feito com sucesso!",
        icon: "success",
      });
      setFormSignup(INITIAL_STATE);
    } catch (e) {
      Swal.fire({
        title: "Erro ao cadastrar. Verifique as informações e tente novamente.",
        icon: "warning",
      });
      console.log(e);
    }
  };
  return (
    <>
      <Header />
      <main className="box">
        <div className="box-signup">
          <img src={signupImg} alt="Signup" />

          <div className="box-form">
            <h1 className="header-text">Seja um Doador!</h1>
            <label className="label-signup">Nome</label>
            <input
              className="input-signup"
              name="name"
              type="text"
              placeholder="Nome"
              onChange={handleChange}
              value={formSignup.name}
            />
            <label className="label-signup" name="email">
              Email
            </label>
            <input
              className="input-signup"
              type="text"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              value={formSignup.email}
            />
            <label className="label-signup" name="password">
              Senha
            </label>
            <input
              className="input-signup"
              name="password"
              type="password"
              placeholder="Senha"
              value={formSignup.password}
              onChange={handleChange}
            />

            <button onClick={() => signup()} className="button-signup">
              Cadastrar
            </button>
            <Link to="/login" className="link-signup">
              Fazer login
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default Signup;
