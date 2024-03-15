import React from "react";
import style from "./home.module.css";
import { Link } from "react-router-dom";
function Contact() {
  return (
    <section>
      <h4>Contact Me</h4>
      <article id={style.contact}>
        <div>
          <img alt="" />
        </div>
        <div>
          <article>
            <img
              src="https://cdn.worldvectorlogo.com/logos/gmail-icon.svg"
              alt=""
            />
            <a href="mailto:sabukarakal202@gmail.com" target="_blank">
              <h2>sabukarakal2020@gmail.com</h2>
            </a>
          </article>
          <article>
            <img
              src="https://www.iconpacks.net/icons/2/free-icon-linkedin-logo-2430.png"
              alt=""
            />
            <a
              href="https://www.linkedin.com/in/sabukarakal7498984403"
              target="_blank"
            >
              <h2>LinkedIn</h2>
            </a>
          </article>
          <article>
            <img
              src="https://www.iconpacks.net/icons/2/free-icon-whatsapp-logo-4456.png"
              alt=""
            />
            <a href="https://wa.me/7498984403">
              <h2>Whatsapp</h2>
            </a>
          </article>
        </div>
      </article>
    </section>
  );
}

export default Contact;
