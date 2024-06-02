import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Equipe from "./pages/Equipe";
import Analises from "./pages/Analises";
import Contato from "./pages/Contato";
import Cadastro from "./pages/Cadastro";
import Dashboard from "./pages/Dashboard"
import MapaGeral from "./pages/MapaGeral"

function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Equipe" element={<Equipe />} />
                <Route path="/Analises" element={<Analises />} />
                <Route path="/Contato" element={<Contato />} />
                <Route path="/Cadastro" element={<Cadastro />} />
                <Route path="/Dashboard" element={<Dashboard />} />
                <Route path="/MapaGeral" element={<MapaGeral />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;