import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { navBarItems } from "../../constants/navigation";
import favicon from '/src/assets/safesecurityfavicon.png';

export default function NavBar() {
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState("Home");
    const [currentSubPage, setCurrentSubPage] = useState("None");
    const location = useLocation();
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(null);
    const timeoutRef = useRef(null);

    useEffect(() => {
        if (location.pathname === "/") {
            setCurrentPage("Home");
            setCurrentSubPage("None");
        } else if (location.pathname.startsWith("/meet-the-board")) {
            setCurrentPage("Meet The Board");
            setCurrentSubPage("None");
        } else if (location.pathname.startsWith("/students")) {
            setCurrentPage("Students");
            if (location.pathname.startsWith("/students/community-events")) {
                setCurrentSubPage("Community Events");
            } else if (location.pathname.startsWith("/students/workshops")) {
                setCurrentSubPage("Workshops");
            } else {
                setCurrentSubPage("Students Overview");
            }
        } else if (location.pathname.startsWith("/information-hub")) {
            setCurrentPage("Information Hub");
            setCurrentSubPage("None");
        } else if (location.pathname.startsWith("/clinic")) {
            setCurrentPage("Clinic");
            if (location.pathname.startsWith("/clinic/our-model")) {
                setCurrentSubPage("Our Model");
            } else if (location.pathname.startsWith("/clinic/corporate-partnerships")) {
                setCurrentSubPage("Corporate Partnerships");
            } else if (location.pathname.startsWith("/clinic/application")) {
                setCurrentSubPage("Application");
            } else {
                setCurrentSubPage("Clinic Overview");
            }
        }
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

    const closeMobileDrawer = () => {
        setMobileDrawerOpen(false);
        setDropdownOpen(null);
    };

    return (
        <nav className="bg-[#1A1922] sticky top-0 z-50 backdrop-blur-lg border-b border-neutral-700/80 font-semibold py-2">
            <div className="grid xl:grid-cols-12 grid-cols-2 grid-rows-1">
                <div className="ml-4 col-span-1 col-start-1 xl:col-span-3 xl:col-start-1">
                    <li className="font-bold text-2xl flex gap-2 items-center" onClick={() => navigate("/")}>
                        <img className="h-[50px] -translate-y-1" src={favicon} alt="Safe Security Logo" />
                        <span className="hover:text-gray-400 text-white">
                            SAFE SECURITY
                        </span>
                    </li>
                </div>
                <div className="hidden xl:flex justify-center items-center xl:col-span-6 lg:col-start-4">
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
                                                className="rounded-md text-white text-center absolute left-[-5px] mt-2 bg-[#1A1922] shadow-lg border border-neutral-700/80 overflow-hidden w-[250px]"
                                                onMouseEnter={() => handleDropdownOpen(index)}
                                                onMouseLeave={() => handleDropdownClose()}
                                            >
                                                {item.children.map((child, childIndex) => (
                                                    <li
                                                        key={childIndex}
                                                        className={`dropdown-item hover:bg-slate-700 px-4 py-2 ${
                                                            currentSubPage === child.label
                                                                ? "bg-gradient-to-r from-blue-300 to-purple-600 hover:from-blue-400 hover:to-purple-700 text-transparent bg-clip-text"
                                                                : ""
                                                        }`}
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
                    
                </div>
                <div className="col-span-1 col-start-2 xl:col-span-3 xl:col-start-10 flex justify-end items-center">
                    <div className="h-fit mr-4 group bg-gradient-to-br from-blue-300 to-purple-600 hover:from-white hover:to-white rounded-lg">
                        <button className="text-center group-hover:bg-gradient-to-r group-hover:from-blue-300 group-hover:to-purple-600 text-white group-hover:text-transparent bg-clip-text px-4 py-2" onClick={() => window.location.href = "mailto:safesecnu@gmail.com"}>
                            Contact Us
                        </button>
                    </div>
                    <div className="xl:hidden flex justify-end items-center">
                        <div className="flex flex-col justify-end">
                            <button className="relative z-30 mr-4" onClick={toggleNavBar}>
                                {mobileDrawerOpen ? <X /> : <Menu />}
                            </button>
                        </div>
                    </div>
                </div>
                {mobileDrawerOpen && (
                    <div className="mobile-nav fixed inset-0 z-20 bg-[#1A1922] border-b border-neutral-700/80 w-full h-fit p-7 xl:hidden">
                        <ul className="flex flex-col justify-center items-center space-y-4">
                            {navBarItems.map((item, index) => (
                                <li key={index} className="relative w-fit">
                                    {item.children ? (
                                        <>
                                            <span
                                                className={`block w-full text-center hover:text-gray-400 cursor-pointer ${
                                                    currentPage === item.label
                                                        ? "bg-gradient-to-r from-blue-300 to-purple-600 hover:from-blue-400 hover:to-purple-700 text-transparent bg-clip-text"
                                                        : ""
                                                }`}
                                                onClick={() => {
                                                    setDropdownOpen(dropdownOpen === index ? null : index);
                                                }}
                                            >
                                                {item.label}
                                            </span>
                                            {dropdownOpen === index && (
                                                <ul
                                                    className="mt-2 bg-[#1A1922] shadow-lg border border-neutral-700/80 rounded-md overflow-hidden max-w-[250px]"
                                                    onMouseLeave={() => setDropdownOpen(null)}
                                                >
                                                    {item.children.map((child, childIndex) => (
                                                        <li
                                                            key={childIndex}
                                                            className={`text-center dropdown-item hover:bg-slate-700 px-4 py-2 ${
                                                                currentSubPage === child.label
                                                                    ? "bg-gradient-to-r from-blue-300 to-purple-600 hover:from-blue-400 hover:to-purple-700 text-transparent bg-clip-text"
                                                                    : ""
                                                            }`}
                                                            onClick={() => {
                                                                closeMobileDrawer();
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
                                        <div
                                            className={`w-full text-center hover:text-gray-400 cursor-pointer ${
                                                currentPage === item.label
                                                    ? "bg-gradient-to-r from-blue-300 to-purple-600 hover:from-blue-400 hover:to-purple-700 text-transparent bg-clip-text"
                                                    : ""
                                            }`}
                                            onClick={() => {
                                                if (item.linkSuffix.startsWith("mailto:")) {
                                                    window.location.href = item.linkSuffix;
                                                } else {
                                                    closeMobileDrawer();
                                                    navigate(`${item.linkSuffix}`);
                                                }
                                            }}
                                        >
                                            {item.label}
                                        </div>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
}
