import React from "react";

import aboutImg from "../../assets/about-img.jpg";

import Header from "../../componentes/Header";

import "./styles.css";

const About = () => {
  return (
    <>
      <Header />
      <main className="main-about">
        <div className="box-text">
          <img src={aboutImg} alt="About" />
          <div className="text-about">
            <div className="text">
              <h1>Queremos ampliar o acesso e incentivar a leitura!</h1>
            </div>
            <div className="box-rodape">
              <div className="content">
                <div className="content-text">
                  <h3 className="header-rodape">Receba livros para doar</h3>
                  <p className="header-rodape">
                    Apoie nosso projeto! Temos a missão de pré selecionar os
                    livros através da nossa plataforma.
                  </p>
                </div>
              </div>
              <div className="content">
                <div className="content-text">
                  <h3 className="header-rodape">Doe livros</h3>
                  <p className="header-rodape">
                    Para muitas crianças e adolescentes nunca foi possível ter
                    um livro. Precisamos de sua ajuda para amplicar o acesso e
                    mudar a educação no nosso país.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default About;
