import "../src/styles/global.scss";
import { Footer } from "./components/Footer";
import { Card } from "./components/Card";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Cadastrar } from "./pages/Cadastrar";

import { Routes, Route } from "react-router-dom";

import "../src/styles/global.scss";
// import { useEffect } from "react";

export function App() {
  // useEffect(() => {
  //   fetch("http://localhost:4000/user/purchase").then((res) => console.log(res));
  // }, []);
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
