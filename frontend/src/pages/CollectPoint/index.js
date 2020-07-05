import React, { useState } from "react";

import { Link } from "react-router-dom";
import Swal from "sweetalert2";

import Header from "../../componentes/Header";

import "./styles.css";

import collectpointImg from "../../assets/collectpoint-img.jpg";

import api from "../../services/api";

const CollectPoint = () => {
  const [formCollectPoint, setFormCollectPoint] = useState({
    name: "",
    email: "",
    cep: "",
    state: "",
    city: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormCollectPoint({
      ...formCollectPoint,
      [e.target.name]: e.target.value,
    });
  };

  const registerCollectPoint = async () => {
    try {
      await api.post("/collect_point", formCollectPoint);
      Swal.fire({
        title: "Ponto de coleta de livros cadastrado conm sucesso!",
        icon: "success",
      });
    } catch (e) {
      console.log(e);
      Swal.fire({
        title: "Erro ao cadastrar. Verifique as informações e tente novamente.",
        icon: "warning",
      });
    }
  };
  return (
    <>
      <Header />
      <main className="box">
        <div className="box-collectpoint">
          <img src={collectpointImg} alt="collectpoint" />
          <div className="box-form">
            <h1 className="header-text">Cadastre o ponto de coleta</h1>

            <label className="label-collectpoint">Nome</label>
            <input
              className="input-collectpoint"
              name="name"
              type="text"
              placeholder="Nome"
              onChange={handleChange}
              value={formCollectPoint.name}
            />
            <label className="label-collectpoint">Email</label>
            <input
              className="input-collectpoint"
              name="email"
              type="text"
              placeholder="Nome"
              onChange={handleChange}
              value={formCollectPoint.email}
            />
            <label className="label-collectpoint" name="cep">
              CEP
            </label>
            <input
              className="input-collectpoint"
              type="text"
              placeholder="CEP"
              name="cep"
              onChange={handleChange}
              value={formCollectPoint.cep}
            />
            <label className="label-collectpoint">Estado</label>
            <input
              className="input-collectpoint"
              name="state"
              type="text"
              placeholder="Estado"
              value={formCollectPoint.state}
              onChange={handleChange}
            />
            <label className="label-collectpoint">Cidade</label>
            <input
              className="input-collectpoint"
              name="city"
              type="string"
              placeholder="Cidade"
              value={formCollectPoint.city}
              onChange={handleChange}
            />
            <label className="label-collectpoint">Endereço</label>
            <input
              className="input-collectpoint"
              name="address"
              type="string"
              placeholder="Endereço"
              value={formCollectPoint.address}
              onChange={handleChange}
            />

            <button
              onClick={() => registerCollectPoint()}
              className="button-collectpoint"
            >
              Cadastrar
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default CollectPoint;
