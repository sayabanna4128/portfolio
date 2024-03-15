import React from "react";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sayabanna from "./components/Sayabanna";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Certificates from "./components/Certificates";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Home />
        <Routes>
          <Route element={<Sayabanna />} path="/" />
          <Route element={<About />} path="/about" />
          <Route element={<Projects />} path="/projects" />
          <Route element={<Experience />} path="/experience" />
          <Route element={<Contact />} path="/contact" />
          <Route element={<Certificates/>} path="/certificates" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
