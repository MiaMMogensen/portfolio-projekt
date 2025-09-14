import { Route, Routes, Navigate } from "react-router";
import Home from "./pages/Home";
import Project1 from "./pages/Project1";
import Project2 from "./pages/Project2";
import Project3 from "./pages/Project3";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects/rejsedagbog" element={<Project1 />} />
      <Route path="/projects/zerobuzzbrew" element={<Project2 />} />
      <Route path="/projects/radar" element={<Project3 />} />
    </Routes>
  );
}
