import React from "react";
import style from "./Footer.module.css";

function Footer() {
  return (
    <footer className={`${style.footerDiv} text-white text-center`}>
      <p>
        Made By:
        <a
          className="text-white"
          target="_blank"
          rel="noreferrer"
          href="https://github.com/ankit5577"
        >
          {" "}Ankit5577 🧑🏽‍💻
        </a>
      </p>
    </footer>
  );
}

export default Footer;
