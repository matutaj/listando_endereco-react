import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Provincia } from "./pages/Home"

export function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Provincia />} />
            </Routes>

        </Router>
    )
}