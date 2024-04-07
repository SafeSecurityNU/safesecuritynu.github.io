export default function FeatureCard({side, title, action, description, imgSource}) {
    return (
        <>
            {side == "left"
                ? <div className="relative border-b border-neutral-800 py-16 px-4">
                    <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 gap-8">
                        <img className="w-[500px] mx-auto my-4 align-middle" src={imgSource} />
                        <div className="flex flex-col justify-center al">
                            <p className="text-3xl sm:text-5xl lg:text-6xl tracking wide bg-gradient-to-r from-blue-500 to-purple-800 text-transparent bg-clip-text">
                                {title}
                            </p>
                            <h1 className="md:text-2xl sm:text-1xl text-1xl py-2">
                                {action}
                            </h1>
                            <p>
                                {description}
                            </p>
                        </div>
                    </div>
                </div>
                : <div className="relative border-b border-neutral-800 py-16 px-4">
                    <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 gap-8 items-center">
                        <div className="flex flex-col justify-center order-2 md:order-1">
                            <p className="text-3xl sm:text-5xl lg:text-6xl tracking wide bg-gradient-to-r from-blue-500 to-purple-800 text-transparent bg-clip-text">
                                {title}
                            </p>
                            <h1 className="md:text-2xl sm:text-1xl text-1xl py-2">
                                {action}
                            </h1>
                            <p>
                                {description}
                            </p>
                        </div>
                        <img className="w-full max-w-[500px] mx-auto my-4 order-1 md:order-2 rounded-lg shadow-lg" src={imgSource} />
                    </div>
                </div>
            }
        </>
    )
}
