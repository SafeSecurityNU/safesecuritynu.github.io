import { featuresList } from "../../constants/features";

export default function FeaturesList() {
    return (
        <div id="features" className="relative mt-20 border-b border-neutral-800"> 
            <div className="text-center">
                <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking wide">
                    What 
                    <span className="bg-gradient-to-r from-blue-500 to-blue-800 text-transparent bg-clip-text">
                        {" "}
                        we do
                    </span>
                </h2>
            </div>
            <div className="flex flex-wrap mt-10 lg:mt-20">
                {featuresList.map((feature, index) => (
                    <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
                        <div className="flex">
                            <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-blue-700 justify-center items-center rounded-full">
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
