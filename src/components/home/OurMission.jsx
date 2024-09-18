import React from 'react';

const MissionSection = () => {
    return (
        <div className="flex justify-around items-center text-center w-full pt-40 pb-18">
            <div className="bg-gradient-to-br from-blue-300 to-purple-600 rounded-2xl w-[85%] md:w-[60%] flex justify-center">
                <div className="bg-[#1A1922] rounded-xl m-1 lg:p-20 md:p-15 p-10">
                    <div className="text-center">
                        <h2 className="text-3xl sm:text-5xl lg:text-6xl mb-7 tracking-wide">
                            Our 
                            <span className="bg-gradient-to-r from-[#6529A7] to-[#9EC1F6] text-transparent bg-clip-text">
                                {" "}
                                Mission
                            </span>
                        </h2>
                    </div>
                    <p className="text-xl">
                        Safe Security is Northwestern University's forefront cybersecurity club dedicated to increasing security awareness and accessibility within the Northwestern community. We aim to educate students about common and emerging cybersecurity threats and work hard to ensure that our local communities stay safe online.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default MissionSection;
