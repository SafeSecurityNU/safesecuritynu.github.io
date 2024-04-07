import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

import { navBarItems } from "../../constants/navigation";

export default function NavBar() {
    const navigate = useNavigate();

    const [currentPage, setCurrentPage] = useState("home");
    const location = useLocation();
    useEffect(() => {
        let curPage = "";
        switch (location.pathname) {
            case "/":
                curPage = "Home";
                break;
            case "/safe-security":
                curPage = "Safe Security";
                break;
            case "/information-hub":
                curPage = "Information Hub";
                break;
        }
        setCurrentPage(curPage);
    }, [location]);

    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

    const toggleNavBar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
    };

    return (
        <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80 font-semibold">
                <div className="hidden lg:flex justify-center items-center">
                    <ul className="flex mx-10 space-x-12">
                        {navBarItems.map((item, index) =>
                            currentPage === item.label
                            ? <li key={index} className="bg-gradient-to-r from-blue-300 to-purple-600 hover:from-blue-400 hover:to-purple-700 text-transparent bg-clip-text" onClick={() => {window.scrollTo({ top: 0, left: 0, behavior: "instant" }); navigate(`${item.linkSuffix}`)}}>
                                {item.label}
                            </li>
                            : <li key={index} className="hover:text-gray-400" onClick={() => {window.scrollTo({ top: 0, left: 0, behavior: "instant" }); navigate(`${item.linkSuffix}`)}}>
                                {item.label}
                            </li>
                        )}
                    </ul>
                </div>
                <div className="lg:hidden flex justify-end items-center">
                    <div className="flex flex-col justify-end">
                        <button className="mr-4" onClick={toggleNavBar}>
                            {mobileDrawerOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
                {mobileDrawerOpen && (
                    <div className="fixed right-0 z-20 bg-[#1A1922] border-b border-neutral-700/80 w-full p-7 lg:hidden">
                        <ul className="flex flex-col justify-center items-center">
                            {navBarItems.map((item, index) =>
                                currentPage === item.label
                                ? <li key={index} className="bg-gradient-to-r from-blue-300 to-purple-600 hover:from-blue-400 hover:to-purple-700 text-transparent bg-clip-text" onClick={() => {window.scrollTo({ top: 0, left: 0, behavior: "instant" }); navigate(`${item.linkSuffix}`)}}>
                                    {item.label}
                                </li>
                                : <li key={index} className="hover:text-gray-400" onClick={() => {toggleNavBar(); window.scrollTo({ top: 0, left: 0, behavior: "instant" }); navigate(`${item.linkSuffix}`)}}>
                                    {item.label}
                                </li>
                            )}
                        </ul>
                    </div>
                )}
        </nav>
    );
}