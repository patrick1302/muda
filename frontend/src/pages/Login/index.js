import React, { useState } from "react";

import { Redirect } from "react-router-dom";
import loginImg from "../../assets/login-img.jpg";

import { Link } from "react-router-dom";

import api from "../../services/api";

import Header from "../../componentes/Header";

import Swal from "sweetalert2";

import "./styles.css";

const Login = () => {
  const [formLogin, setFormLogin] = useState({
    email: "",
    password: "",
  });
  const [auth, setAuth] = useState(false);

  const login = async () => {
    try {
      const login = await api.post("/donor/login", formLogin);
      localStorage.setItem("token", login.data.token);
      setAuth(true);
    } catch (e) {
      Swal.fire({
        title: "Erro ao fazer login",
        icon: "warning",
      });
      console.log(e);
    }
  };
  const handleChange = (e) => {
    setFormLogin({ ...formLogin, [e.target.name]: e.target.value });
  };
  if (auth) {
    return <Redirect to="/book" />;
  }
  return (
    <>
      <Header />
      <main className="box">
        <div className="box-login">
          <img src={loginImg} alt="Login" />

          <div className="box-form">
            <label className="label-login">Email</label>
            <input
              className="input-login"
              name="email"
              type="text"
              placeholder="Email"
              onChange={handleChange}
              value={formLogin.email}
            />
            <label className="label-login" name="email">
              Senha
            </label>
            <input
              className="input-login"
              type="password"
              placeholder="Senha"
              name="password"
              onChange={handleChange}
              value={formLogin.password}
            />

            <button onClick={() => login()} className="button-login">
              Entrar
            </button>
            <Link to="/" className="link-login">
              Cadastre-se
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default Login;
