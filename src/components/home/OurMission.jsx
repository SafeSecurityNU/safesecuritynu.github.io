import React from 'react';

const MissionSection = () => {
    return (
        <div className="flex justify-around items-center text-center w-full pt-24">
            <div className="bg-gradient-to-br from-blue-300 to-purple-600 rounded-2xl w-[85%] md:w-[60%] flex justify-center">
                <div className="bg-[#1A1922] p-2 rounded-xl m-1 p-10">
                    <div className="text-center">
                        <h2 className="text-3xl sm:text-5xl lg:text-6xl mb-7 tracking-wide">
                            Our 
                            <span className="bg-gradient-to-r from-[#6529A7] to-[#9EC1F6] text-transparent bg-clip-text">
                                {" "}
                                mission
                            </span>
                        </h2>
                    </div>
                    <p className="text-xl">
                        Welcome to Safe Security, Northwestern University's cybersecurity club dedicated to expanding the accessibility to security within the NU community. By participating in this registered student organization (RSO), we hope for students to be able to learn more about cybersecurity, navigate the web safely, and ensure that members of our local communities also stay safe.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default MissionSection;
