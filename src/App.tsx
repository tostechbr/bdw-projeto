import "../src/styles/global.scss";
import { Footer } from "./components/Footer";
import { Card } from "./components/Card";
import { useEffect } from "react";

import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Cadastrar } from "./pages/Cadastrar";

import { Routes, Route } from "react-router-dom";
import axios from "axios";

import "../src/styles/global.scss";

export function App() {
  // const headers = { Authorization: "Bearer " + localStorage.getItem("admin") };

  useEffect(
    () => {
      fetch('http://localhost:5555/', { mode: "no-cors" })
        .then(res => console.log(res))
    }, []
  )
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
      <Routes>
        <Route path="/cadastrar" element={<Cadastrar />} />
      </Routes>

      <Footer />
    </>
  );
}
