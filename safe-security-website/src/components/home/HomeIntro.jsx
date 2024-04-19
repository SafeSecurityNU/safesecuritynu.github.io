import { useNavigate } from "react-router-dom";

export default function HomeIntro() {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center mt-6 lg:mt-20 border-b border-neutral-800">
            <h1 className="mx-8 text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
                <span className="bg-gradient-to-r from-blue-300 to-purple-800 text-transparent bg-clip-text">
                    Accessible security
                </span>
            </h1>
            <h1 className="mx-8 text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
                to protect public infrastructure 
            </h1>
            <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
                Safe Security is committed to expanding the accessibility to cybersecurity within the Northwestern community. By participating in this RSO, we hope for students to be able to learn more about cybersecurity, navigate the web safely, and ensure that members of our local communities also stay safe.
            </p>
            <div className="flex justify-center mt-10 mb-20">
                <p className="mx-1 mt-5 w-fit hover:bg-violet-950 rounded-full py-1 px-3 border-[1px] border-violet-400 hover:border-violet-500 text-violet-400 hover:text-violet-500" onClick={() => {navigate("/safe-security")}}>
                    Learn More &gt;
                </p>
            </div>
        </div>
    )
}
