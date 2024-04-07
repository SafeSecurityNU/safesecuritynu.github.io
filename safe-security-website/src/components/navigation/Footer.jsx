import { useNavigate } from "react-router-dom";

import { navBarItems } from "../../constants/navigation";

export default function Footer() {
    const navigate = useNavigate();

    return (
        <footer className="bottom-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
            <div className="container mx-auto px-4">
                <div className="flex justify-center items-center">
                    <ul className="flex flex-wrap justify-center flex-row">
                        {navBarItems.map((item, index) => (
                            <li key={index} className="mx-4 mb-4 hover:text-gray-400" onClick={() => {window.scrollTo({ top: 0, left: 0, behavior: "instant" }); navigate(`${item.linkSuffix}`)}}>
                                {item.label}
                            </li>
                        ))}
                        <li>
                            •
                        </li>
                        <li key={98} className="mx-4 mb-4 hover:text-gray-400">
                            <a onClick={() => {window.open('mailto:safesecnu@gmail.com', 'mail'); event.preventDefault()}} href="mailto:safesecnu@gmail.com">Contact</a>
                        </li>
                        <li>
                            •
                        </li>
                        <li key={99} className="mx-4 mb-4 hover:text-gray-400" onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}>
                            Back to Top
                        </li>
                    </ul>
                </div>
                <div className="text-center mt-2">
                    <p>&copy; {new Date().getFullYear()} Safe Security. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
