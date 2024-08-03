export default function FeatureCard({ side, title, action, description, imgSource }) {
    return (
        <>
            {side === "left" ? (
                <div className="relative border-neutral-800 py-24 px-4">
                    <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 gap-4">
                        <img
                            className="customShadow w-[550px] mx-auto my-2 align-middle rounded-2xl"
                            src={imgSource}
                            alt="Feature"
                        />
                        <div className="flex flex-col justify-center">
                            <p className="text-2xl sm:text-4xl lg:text-5xl tracking-wide bg-gradient-to-r from-[#9EC1F6] to-[#6529A7] text-transparent bg-clip-text">
                                {title}
                            </p>
                            <h1 className="md:text-xl sm:text-lg text-lg py-2">
                                {action}
                            </h1>
                            <p className="text-neutral-400">
                                {description}
                            </p>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="relative border-neutral-800 py-24 px-4">
                    <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 gap-4 items-center">
                        <div className="flex flex-col justify-center order-2 md:order-1">
                            <p className="text-2xl sm:text-4xl lg:text-5xl tracking-wide bg-gradient-to-r from-[#6529A7] to-[#9EC1F6] text-transparent bg-clip-text">
                                {title}
                            </p>
                            <h1 className="md:text-xl sm:text-lg text-lg py-2">
                                {action}
                            </h1>
                            <p className="text-neutral-400">
                                {description}
                            </p>
                        </div>
                        <img
                            className="customShadow w-[500px] mx-auto my-2 order-1 md:order-2 rounded-2xl"
                            src={imgSource}
                            alt="Feature"
                        />
                    </div>
                </div>
            )}
        </>
    );
}
