import React from "react";
import style from "./home.module.css";
function Experience() {
  return (
    <section>
      <h4>Skills</h4>
      <article id={style.experience}>
        <div>
          <h2>Fontend Development</h2>
          <article>
            <img
              src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/html-icon.png"
              alt=""
            />
            <h2>HTML</h2>
          </article>
          <article>
            <img
              src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/css-icon.png"
              alt=""
            />
            <h2>CSS</h2>
          </article>
          <article>
            <img
              src="https://cdn.worldvectorlogo.com/logos/logo-javascript.svg"
              alt="" rel="noreferre"
            />
            <h2>JavaScript</h2>
          </article>
          <article>
            <img src="https://cdn.iconscout.com/icon/free/png-256/free-react-1-282599.png" alt=""/>
            <h2>React Js</h2>
          </article>
        </div>
        <div>
          <h2>Backend Development</h2>
          <article>
            <img
              src="https://www.vectorlogo.zone/logos/java/java-icon.svg"
              alt=""
            />
            <h2>Java</h2>
          </article>
          <article>
            <img
              src="https://www.vectorlogo.zone/logos/hibernate/hibernate-icon.svg"
              alt=""
            />
            <h2>Hibernate</h2>
          </article>
          <article>
            <img
              src="https://www.svgrepo.com/show/354380/spring-icon.svg"
              alt="spring boot"
            />
            <h2>Spring Boot</h2>
          </article>
        </div>
        <div>
          <h2>Database</h2>
          <article>
            <img
              src="https://www.vectorlogo.zone/logos/mysql/mysql-official.svg"
              alt=""
            />
            <h2>MySQL</h2>
          </article>
          <article>
            <img
              src="https://img.icons8.com/?size=50&id=10429&format=png"
              alt=""
            />
            <h2>Oracle SQL</h2>
          </article>
        </div>
      </article>
    </section>
  );
}

export default Experience;
