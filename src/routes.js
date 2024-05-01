import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import QuemSomos from "./pages/Quem-somos";

function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/QuemSomos" element={<QuemSomos />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;