import { Route, Routes, Navigate } from "react-router";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Skills />
    </>
  );
}
