import "../src/styles/global.scss";
import { Card } from "./components/Card";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";

export function App() {
  return (
    <>
      <Header />
      <Hero />
      <Card />
    </>
  );
}
