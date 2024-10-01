import { featuresList } from "../../constants/features";

export default function FeaturesList() {
    return (
        <div id="features" className="relative mt-16 border-b border-neutral-800 py-8"> 
            <div className="text-center">
                <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
                    What 
                    <span className="bg-gradient-to-r from-[#6529A7] to-[#9EC1F6] text-transparent bg-clip-text">
                        {" "}
                        We Do
                    </span>
                </h2>
            </div>
            <div className="flex flex-wrap mt-10 lg:mt-20 justify-center">
                {featuresList.map((feature, index) => (
                    <div key={index} className="w-full sm:w-1/2 lg:w-1/2 px-4">
                        <div className="flex">
                            <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-[#6529A7] justify-center items-center rounded-full">
                                {feature.icon}
                            </div>
                            <div>
                                <h5 className="mt-1 mb-3 text-xl">{feature.text}</h5>
                                <p className="text-md mb-20 text-neutral-400">{feature.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
