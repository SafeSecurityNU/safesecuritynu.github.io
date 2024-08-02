import { useNavigate } from "react-router-dom";
import { UsersRound } from "lucide-react";
import { ShieldPlus } from "lucide-react";

export default function CorporatePartnershipsInterest() {

    // const navigate = useNavigate(); // not useful right now -- will be when we create an intake form page

    return (
        <div className="mx-auto flex flex-row justify-center lg:w-[90%] relative pb-20 border-b border-neutral-800">
            <div className="flex flex-wrap mt-5 lg:mt-10 gap-y-10 justify-evenly">
                <div className="w-full lg:w-[45%] mx-3 p-3 rounded-lg hover:bg-neutral-900" onClick={(event) => {window.open('mailto:cyberclinicnu@gmail.com', 'mail'); event.preventDefault()}}>
                    <div className="flex">
                        <div className="flex ml-3 mr-6 mt-2 h-14 w-14 p-2 bg-neutral-900 text-[#6529A7] justify-center items-center rounded-full">
                            <UsersRound />
                        </div>
                        <div>
                            <h5 className="mt-2 mb-2 text-xl">Want to sponsor our clinic or volunteer mentors?</h5>
                            <p className="text-md mb-3 text-neutral-400">For businesses interested in

                            </p>
                            <ul className="list-disc ml-5 mb-3 text-neutral-400">
                                <li>Sponsoring our clinic to continue business operations</li>
                                <li>Volunteering mentors during our Implementation phase</li>
                            </ul>
                            
                            <p className="text-md mb-3 text-neutral-400">Please reach out over email, we're excited to hear from you.</p>
                            {/* <h5 className="mt-1 mb-2 text-md">Published: <span className="text-md p-2 text-neutral-400">date</span></h5>
                            <h5 className="mt-1 mb-2 text-md">Authors: <span className="text-md p-2 text-neutral-400">authors</span></h5> */}
                            <p className="cursor-pointer mx-1 mt-5 mb-3 w-fit hover:bg-violet-950 rounded-full py-1 px-3 border-[1px] border-violet-400 hover:border-violet-500 text-violet-400 hover:text-violet-500"
                                onClick={(event) => {window.open('mailto:cyberclinicnu@gmail.com', 'mail'); event.preventDefault()}}>
                                Contact us &gt;
                            </p>
                        </div>
                    </div>
                </div>

                <div className="w-full lg:w-[45%] mx-3 p-3 rounded-lg hover:bg-neutral-900" onClick={(event) => {window.open('mailto:cyberclinicnu@gmail.com', 'mail'); event.preventDefault()}}>
                    <div className="flex">
                        <div className="flex ml-3 mr-6 mt-2 h-14 w-14 p-2 bg-neutral-900 text-[#6529A7] justify-center items-center rounded-full">
                            <ShieldPlus />
                        </div>
                        <div>
                            <h5 className="mt-2 mb-3 text-xl">Are you a small business or non-profit?</h5>
                            <p className="text-md mb-3 text-neutral-400">We want to contribute to your security effort!<br/>In return, you can</p>
                            <ul className="list-disc ml-5 mb-3 text-neutral-400">
                                <li>Partner with us to receive a free individualized cybersecurity posture analysis and training</li>
                                <li>Provide the next generation of cyber leaders opportunities to refine their skills</li>
                            </ul>
                            
                            <p className="text-md mb-3 text-neutral-400">Please reach out over email, we're excited to hear from you.</p>
                            {/* <h5 className="mt-1 mb-2 text-md">Published: <span className="text-md p-2 text-neutral-400">date</span></h5>
                            <h5 className="mt-1 mb-2 text-md">Authors: <span className="text-md p-2 text-neutral-400">authors</span></h5> */}
                            <p className="cursor-pointer mx-1 mt-5 mb-3 w-fit hover:bg-violet-950 rounded-full py-1 px-3 border-[1px] border-violet-400 hover:border-violet-500 text-violet-400 hover:text-violet-500"
                                onClick={(event) => {window.open('mailto:cyberclinicnu@gmail.com', 'mail'); event.preventDefault()}}>
                                Contact us &gt;
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}