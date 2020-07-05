import React from "react";

import "./styles.css";

import { FaFacebook, FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer">
      <footer>
        <h5 className="h5-footer">
          Siga nossas redes sociais e acompanhe todas as novidades!
        </h5>
        <div className="box-socialmedias">
          <FaFacebook size="25" /> <AiFillInstagram size="25" />{" "}
          <FaYoutube size="25" />
        </div>
        <span>Copyright 2020 Muda</span>
      </footer>
    </div>
  );
};

export default Footer;
