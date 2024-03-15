import React from "react";
import style from "./home.module.css";
import { Link } from "react-router-dom";
function About() {

  return (
    <article>
      <h4>About</h4>
      <section id={style.about}>
        <article>
          <h1>Fresher</h1>
          <h2>
            Aspiring JFSD <br />
            Learning and growing <br />
            Full-Stack Development <br />
            Program | JSpiders | <br />
            [JULY 2023] - <br /> [FEBUARY 2024]
          </h2>
        </article>
        <article>
          <h1>Education</h1>
          <h2>
            <li>
              B.Sc-2022 Bharati Vidyapeeth's <br /> DPKM Sangli (64.60%)
            </li>
            <li>
              12<sup>th</sup>-2018 MVHS and Jr College Umadi (51.00%)
            </li>
            <li>
              10 <sup>th</sup>-2016 NKMV Morbagi (67.60%)
            </li>
          </h2>
        </article>
        <div id={style.objective}>
          <h1>Career Objective</h1>
          <h2>
            I'm enthusiastic about supporting the senior team members in
            delivering high-quality software solutions. Eager to apply my Java
            skills and learn from experienced colleagues. I'm committed to
            contributing to collective success while continuously honing my
            development expertise.
          </h2>
        </div>
      </section>
    </article>
  );
}

export default About;
