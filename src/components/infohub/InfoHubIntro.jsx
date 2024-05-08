export default function InfoHubIntro() {
    return (
        <div className="flex flex-col items-center mt-6 lg:mt-20 pb-20 border-b border-neutral-800">
            <h1 className="mx-8 text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
                <span className="bg-gradient-to-r from-blue-300 to-purple-800 text-transparent bg-clip-text">
                    Information Hub
                </span>
            </h1>
            <p className="mt-10 text-lg text-center text-neutral-400 max-w-4xl">
                Welcome to Safe Security's informational hub. From elementary students to elderly residents, we hope that our Information Hub has at least one interesting article. Many of our materials have been previously provided to us by Professor Sruti Bhagavatula's class, Computer Science: 396/496, Foundations of Security. During Winter and Spring 2024, we worked to revise these materials to be more accessible through jargon-free language and explanation of complex topics. We invite you to read more about security or attend one of our meetings to discuss current events in cybersecurity. Happy reading!
            </p>
        </div>
    )
}
