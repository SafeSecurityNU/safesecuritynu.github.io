import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { navBarItems } from "../../constants/navigation";
import './NavBar.css'; 

export default function NavBar() {
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState("home");
    const location = useLocation();
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(null);
    const timeoutRef = useRef(null);

    useEffect(() => {
        let curPage = "";
        switch (location.pathname) {
            case "/":
                curPage = "Home";
                break;
            case "/meet-the-board":
                curPage = "Meet The Board";
                break;
            case "/students":
            case "/students/general-meetings":
            case "/students/community-events":
            case "/students/workshops":
                curPage = "Students";
                break;
            case "/information-hub":
                curPage = "Information Hub";
                break;
            case "/clinic":
            case "/clinic/our-model":
            case "/clinic/corporate-partnerships":
            case "/clinic/application":
                curPage = "Clinic";
                break;
            default:
                curPage = "";
        }
        setCurrentPage(curPage);
    }, [location]);

    const toggleNavBar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
    };

    const handleDropdownOpen = (index) => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        setDropdownOpen(index);
    };

    const handleDropdownClose = () => {
        timeoutRef.current = setTimeout(() => {
            setDropdownOpen(null);
        }, 200); // Delay to allow moving the mouse to the dropdown
    };

    return (
        <nav className="navbar sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80 font-semibold">
            <div className="container flex justify-between items-center">
                <div className="logo">
                    <img src="/src/assets/safesecurity favicon.png" alt="Safe Security Logo" className="cursor-pointer" onClick={() => navigate("/")} />
                </div>
                <div className="hidden lg:flex justify-center items-center">
                    <ul className="nav-items flex mx-10 space-x-12">
                        {navBarItems.map((item, index) => (
                            <li
                                key={index}
                                className="relative nav-item"
                                onMouseEnter={() => item.children && handleDropdownOpen(index)}
                                onMouseLeave={() => item.children && handleDropdownClose()}
                            >
                                {item.children ? (
                                    <>
                                        <span
                                            className={`hover:text-gray-400 cursor-pointer ${
                                                currentPage === item.label
                                                    ? "bg-gradient-to-r from-blue-300 to-purple-600 hover:from-blue-400 hover:to-purple-700 text-transparent bg-clip-text"
                                                    : ""
                                            }`}
                                            onClick={() => {
                                                window.scrollTo({ top: 0, left: 0, behavior: "instant" });
                                                navigate(`${item.linkSuffix}`);
                                            }}
                                        >
                                            {item.label}
                                        </span>
                                        {dropdownOpen === index && (
                                            <ul
                                                className="dropdown absolute left-0 mt-2 bg-white shadow-lg border border-gray-200"
                                                onMouseEnter={() => handleDropdownOpen(index)}
                                                onMouseLeave={() => handleDropdownClose()}
                                            >
                                                {item.children.map((child, childIndex) => (
                                                    <li
                                                        key={childIndex}
                                                        className="dropdown-item hover:bg-gray-100 px-4 py-2"
                                                        onClick={() => {
                                                            window.scrollTo({
                                                                top: 0,
                                                                left: 0,
                                                                behavior: "instant",
                                                            });
                                                            navigate(`${item.linkSuffix}${child.linkSuffix}`);
                                                        }}
                                                    >
                                                        {child.label}
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </>
                                ) : (
                                    <span
                                        className={`hover:text-gray-400 cursor-pointer ${
                                            currentPage === item.label
                                                ? "bg-gradient-to-r from-blue-300 to-purple-600 hover:from-blue-400 hover:to-purple-700 text-transparent bg-clip-text"
                                                : ""
                                        }`}
                                        onClick={() => {
                                            if (item.linkSuffix.startsWith("mailto:")) {
                                                window.location.href = item.linkSuffix;
                                            } else {
                                                window.scrollTo({ top: 0, left: 0, behavior: "instant" });
                                                navigate(`${item.linkSuffix}`);
                                            }
                                        }}
                                    >
                                        {item.label}
                                    </span>
                                )}
                            </li>
                        ))}
                    </ul>
                    <div className="contact-us">
                        <button className="contact-us-button" onClick={() => window.location.href = "mailto:safesecnu@gmail.com"}>
                            Contact Us
                        </button>
                    </div>
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
                            {navBarItems.map((item, index) => (
                                <li key={index} className="relative">
                                    {item.children ? (
                                        <>
                                            <span
                                                className={`hover:text-gray-400 cursor-pointer ${
                                                    currentPage === item.label
                                                        ? "bg-gradient-to-r from-blue-300 to-purple-600 hover:from-blue-400 hover:to-purple-700 text-transparent bg-clip-text"
                                                        : ""
                                                }`}
                                                onClick={() => handleDropdownOpen(index)}
                                            >
                                                {item.label}
                                            </span>
                                            {dropdownOpen === index && (
                                                <ul
                                                    className="mt-2 bg-white shadow-lg border border-gray-200"
                                                    onMouseEnter={() => handleDropdownOpen(index)}
                                                    onMouseLeave={() => handleDropdownClose()}
                                                >
                                                    {item.children.map((child, childIndex) => (
                                                        <li
                                                            key={childIndex}
                                                            className="hover:bg-gray-100 px-4 py-2"
                                                            onClick={() => {
                                                                toggleNavBar();
                                                                window.scrollTo({
                                                                    top: 0,
                                                                    left: 0,
                                                                    behavior: "instant",
                                                                });
                                                                navigate(`${item.linkSuffix}${child.linkSuffix}`);
                                                            }}
                                                        >
                                                            {child.label}
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </>
                                    ) : (
                                        <span
                                            className={`hover:text-gray-400 cursor-pointer ${
                                                currentPage === item.label
                                                    ? "bg-gradient-to-r from-blue-300 to-purple-600 hover:from-blue-400 hover:to-purple-700 text-transparent bg-clip-text"
                                                    : ""
                                            }`}
                                            onClick={() => {
                                                if (item.linkSuffix.startsWith("mailto:")) {
                                                    window.location.href = item.linkSuffix;
                                                } else {
                                                    toggleNavBar();
                                                    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
                                                    navigate(`${item.linkSuffix}`);
                                                }
                                            }}
                                        >
                                            {item.label}
                                        </span>
                                    )}
                                </li>
                            ))}
                            <li>
                                <button className="contact-us-button-mobile" onClick={() => window.location.href = "mailto:safesecnu@gmail.com"}>
                                    Contact Us
                                </button>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
}
