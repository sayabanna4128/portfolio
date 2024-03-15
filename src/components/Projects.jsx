import React from "react";
import style from "./home.module.css";
function Projects() {
  return (
    <section>
      <h4>Projects</h4>
      <article id={style.project}>
        <div>
          <h1>Gym Management System</h1>
        </div>
        <div>
          <h1>Fake News Detector</h1>
        </div>
      </article>
    </section>
  );
}

export default Projects;
