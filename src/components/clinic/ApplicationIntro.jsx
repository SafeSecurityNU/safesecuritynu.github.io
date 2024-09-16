import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function ApplicationIntro() {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center mt-20 pb-20 pt-10"> {/* Increased top and bottom padding */}
            <h1 className="mx-8 text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
                <span className="bg-gradient-to-r from-blue-300 to-purple-800 text-transparent bg-clip-text">
                    Cyber Clinic Application
                </span>
            </h1>

            <br />

            <div className='mt-5 mb-10 p-8 w-[45rem] h-[30rem] border border-neutral-400 shadow-[0_0_18px_rgba(255,255,255,0.5)] rounded-lg'>
                <h2 className="text-xl sm:text-2xl lg:text-3xl text-center tracking-wide pt-2 mt-4 pb-1">
                Become a member of the Chicago area’s premier cybersecurity clinic
                </h2>
                <p className="mt-10 text-lg text-center text-neutral-400 max-w-4xl">
                Are you interested in joining the clinic?
                <br />
                <br />
                Apply to be a clinic member! Gain access to formal training, certification, professional experience, and unique educational opportunities. Grow your professional skills and experience with field work and weekly meetings.

                </p>

                <div className="flex justify-center mt-3">
                    <div 
                        className="cursor-pointer mx-2 mt-6 w-fit hover:bg-violet-950 rounded-full py-2 px-4 border-[1px] border-violet-400 hover:border-violet-500 text-violet-400 hover:text-violet-500 text-lg" 
                        onClick={(event) => { window.open('https://docs.google.com/forms/d/e/1FAIpQLSfPY0edJuy_JYV7TZh4jik86TSR20RJaXR1qSI9j5oWYHnkhg/viewform?usp=sf_link', '_blank', 'noopener,noreferrer'); }}
                    >
                        Apply &gt;
                    </div>
                </div>
            
            </div>

            {/* <div className="w-1/2 h-[0.125rem] bg-neutral-400 mx-auto mt-10" />

            <p className="mt-10 text-lg text-center text-neutral-400 max-w-4xl">
            Need more information? Contact us with any questions you may have about joining!
            </p>

            <div className="flex justify-center mt-2 mb-10">
                <div 
                    className="cursor-pointer mx-2 mt-6 w-fit hover:bg-violet-950 rounded-full py-2 px-4 border-[1px] border-violet-400 hover:border-violet-500 text-violet-400 hover:text-violet-500 text-lg" 
                    onClick={(event) => { window.location.href = 'mailto:theomaurino2026@u.northwestern.edu,krisyun2027@u.northwestern.edu'; }}
                >
                    Contact Us &gt;
                </div>
            </div> */}
            
        </div>
    )
}
