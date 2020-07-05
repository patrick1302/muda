import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Header from "../../componentes/Header";

import "./styles.css";

import bookImg from "../../assets/book-img.jpg";

import api from "../../services/api";

import "./styles.css";

const Book = () => {
  const [collectPoints, setCollectPoints] = useState([]);
  useEffect(() => {
    const getCollectPoint = async () => {
      try {
        const points = await api.get("/collect_point", {
          headers: { Authorization: token },
        });
        setCollectPoints(points.data);
      } catch (e) {
        console.log(e);
      }
    };
    getCollectPoint();
  }, []);
  const INITIAL_STATE = {
    title: "",
    type: "",
    condition: "",
    collectPoint: "",
  };

  const [formBook, setFormBook] = useState(INITIAL_STATE);

  const handleChange = (e) => {
    setFormBook({ ...formBook, [e.target.name]: e.target.value });
  };
  const token = localStorage.getItem("token");
  console.log(formBook);

  const registerBook = async () => {
    try {
      await api.post(
        "/books",
        { ...formBook },
        {
          headers: { Authorization: token },
        }
      );
      Swal.fire({
        title: "Livro cadastrado com sucesso!",
        icon: "success",
      });
      setFormBook(INITIAL_STATE);
    } catch (e) {
      Swal.fire({
        title: "Erro ao cadastrar o livro.",
        icon: "warning",
      });
      console.log(e);
    }
  };
  return (
    <>
      <Header />
      <main className="box">
        <div className="box-book">
          <img src={bookImg} alt="Book" />

          <div className="box-form">
            <h1 className="header-text">Livros para doação</h1>
            <label className="label-book">Título do livro</label>
            <input
              className="input-book"
              name="title"
              type="text"
              placeholder="Nome"
              onChange={handleChange}
              value={formBook.title}
            />
            <label className="label-book" name="email">
              Tipo do livro
            </label>
            <input
              className="input-book"
              type="text"
              placeholder="Ex: Romance"
              name="type"
              onChange={handleChange}
              value={formBook.type}
            />
            <label className="label-book">Condição do livro</label>
            <input
              className="input-book"
              name="condition"
              type="text"
              placeholder="Ex: Novo, seminovo"
              value={formBook.condition}
              onChange={handleChange}
            />
            <label className="label-book">Escolha o ponto de entrega</label>

            <select name="collectPoint" onChange={handleChange}>
              <option value="null">Selecione um ponto</option>
              {collectPoints.map((point) => (
                <option value={formBook.collect_point} key={point.name}>
                  {point.name}, {point.state}, {point.city}
                </option>
              ))}
            </select>

            <button onClick={() => registerBook()} className="button-book">
              Cadastrar
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default Book;
