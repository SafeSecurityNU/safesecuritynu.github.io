import { Outlet } from "react-router-dom";

import NavBar from "./components/navigation/NavBar";
import Footer from "./components/navigation/Footer";

export default function App() {
    return (
        <>
            <NavBar />
            <div className="p-2">
                <Outlet />
            </div>
            <Footer />
        </>
    )
}