import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import Login from "./pages/Login";
import Equipe from "./pages/Equipe";

function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Equipe" element={<Equipe />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;