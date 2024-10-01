import { useNavigate } from "react-router-dom";
import { activitiesList } from "../../constants/activities";

export default function StudentActivities() {
    const navigate = useNavigate();

    return (
        <div className="relative border-b border-neutral-800 py-8"> 
            <div className="text-center">
                <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
                    What Will
                    <span className="bg-gradient-to-r from-[#6529A7] to-[#9EC1F6] text-transparent bg-clip-text">
                        {" "}
                        You Do
                    </span>
                    ?
                </h2>
            </div>
            <div className="flex flex-wrap mt-10 lg:mt-20 justify-center">
                {activitiesList.map((activity, index) => (
                    <div key={index} className="w-full sm:w-1/2 lg:w-1/2 px-4 mb-10">
                        <div className="flex">
                            <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-[#6529A7] justify-center items-center rounded-full">
                                {activity.icon}
                            </div>
                            <div>
                                <h5 className="mt-1 mb-3 text-xl">{activity.text}</h5>
                                <p className="text-md mb-4 text-neutral-400">{activity.description}</p>
                                {activity.button !== null &&
                                    <div 
                                        className="cursor-pointer w-fit hover:bg-violet-950 rounded-full py-1 px-3 border-[1px] border-violet-400 hover:border-violet-500 text-violet-400 hover:text-violet-500" 
                                        onClick={(event) => { window.scrollTo({ top: 0, left: 0, behavior: "instant" }); navigate(activity.buttonUrl); }}
                                    >
                                        {activity.button + " >"}
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
