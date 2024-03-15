import React from "react";
import style from "./home.module.css";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div>
      <section id={style.nav}>
        <div>
          <h1>
            <Link to={"/"}>Sayabanna Karakal</Link>
          </h1>
        </div>
        <div>
          <ol>
            <li>
              <Link to={"/about"}>About</Link>
            </li>
            <li>
              <Link to={"/projects"}>Projects</Link>
            </li>
            <li>
              <Link to={"/experience"}>Experience</Link>
            </li>
            <li>
              <Link to={"/contact"}>Contact</Link>
            </li>
            <li>
              <Link to={"/certificates"}>Certificates</Link>
            </li>
          </ol>
        </div>
      </section>
    </div>
  );
}

export default Home;
