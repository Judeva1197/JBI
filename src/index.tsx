import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./screens/Home";
import { About } from "./screens/About";
import { Contact } from "./screens/Contact";
import { BuildingManagement } from "./screens/BuildingManagement";

const App = () => {
  useEffect(() => {
    const loader = document.getElementById("global-loader");
    if (loader) {
      loader.remove();
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/building-management" element={<BuildingManagement />} />
      </Routes>
    </BrowserRouter>
  );
};

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
