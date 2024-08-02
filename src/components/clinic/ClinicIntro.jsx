import { useNavigate, useLocation, Navigate } from "react-router-dom";

export default function ClinicIntro() {
    const navigate = useNavigate();
    return (
        <div className="flex flex-col items-center mt-20 pb-20 pt-20"> {/* Increased top and bottom padding */}
            <h1 className="mx-8 text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
                <span className="bg-gradient-to-r from-blue-300 to-purple-800 text-transparent bg-clip-text">
                    Safe Security's Cyber Clinic
                </span>
            </h1>
            <br />
            <h2 className="text-xl sm:text-2xl lg:text-2xl text-center tracking-wide pt-2 pb-1">
                A Student-Led Approach to Training, Certification, and Consultation
            </h2>
            <p className="mt-10 text-lg text-center text-neutral-400 max-w-4xl">
            Welcome to Safe Security's Cyber Clinic. Here, student leadership meets secure innovation to strengthen the Chicagoland community's digital infrastructure and cyber hygiene. Safe Security's Cyber Clinic is a student-led organization that provides free security posture analysis to small businesses and non-profit organizations in the Chicagoland area.
            <br />
            <br />
            From ransomware to phishing schemes, cyber criminals are becoming more advanced. For a more secure society to be possible, everyone must take responsibility for their digital security.
            <br />
            <br />
            At Safe Security's Cyber Clinic, we are committed to empowering our community with the knowledge and tools needed to protect against these evolving threats. Our team of dedicated students, guided by business mentors and professors, works closely with local businesses and nonprofits to assess their current security practices and provide actionable recommendations for improvement. We believe that by educating and supporting our community, we can help build a more resilient and secure digital landscape for everyone.

            </p>
            {/* <div className="flex justify-center mt-10">
                <a 
                    className="mx-1 mt-5 w-fit hover:bg-violet-950 rounded-full py-1 px-3 border-[1px] border-violet-400 hover:border-violet-500 text-violet-400 hover:text-violet-500" 
                    onClick={(event) => {window.open('mailto:northwesterncyberclinic@gmail.com', 'mail'); event.preventDefault()}} 
                    href="mailto:northwesterncyberclinic@gmail.com"
                >
                    Contact Us &gt;
                </a>
            </div> */}

            <div className="flex justify-center mt-10">
                <div 
                    className="cursor-pointer mx-2 mt-6 w-fit hover:bg-violet-950 rounded-full py-2 px-4 border-[1px] border-violet-400 hover:border-violet-500 text-violet-400 hover:text-violet-500 text-lg" 
                    onClick={(event) => { window.scrollTo({ top: 0, left: 0, behavior: "instant" }); navigate('/clinic/our-model'); }}
                >
                    Our Model &gt;
                </div>
            </div>
            
        </div>
    )
}
    