import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./page/Dashboard";
import PaginaInicial from "./page/PaginaInicial";
import PaginaBase from "./page/PaginaBase";
import PaginaBaseForm from "./page/PaginaBaseForm";
import Login from "./page/Login";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PaginaBase />}>
                    <Route index element={<PaginaInicial />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                </Route>
                <Route path="/" element={<PaginaBaseForm />}>
                    <Route path="/login" element={<Login />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;