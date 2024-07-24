export default function SafeSecIntro() {
    return (
        <div className="flex flex-col items-center mt-20 pb-40 pt-20"> {/* Increased top and bottom padding */}
            <h1 className="mx-8 text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
                <span className="bg-gradient-to-r from-blue-300 to-purple-800 text-transparent bg-clip-text">
                    Meet the Board
                </span>
            </h1>
            <p className="mt-10 text-lg text-center text-neutral-400 max-w-4xl">
                Safe Security's discussion-to-print model is led by our executive team. Externally, our educational team leads bi-weekly discussions and bi-weekly writing sessions. Our technology team updates the website and hosts intermittent technical trainings. Internally, our Directors of Marketing, Partnerships, and Community Engagement manage our social media presence, finances, and community events respectively.
                <br></br>
                <br></br>
                If you have any questions, please reach out to us below!
            </p>
            <div className="flex justify-center mt-10">
                <a 
                    className="mx-1 mt-5 w-fit hover:bg-violet-950 rounded-full py-1 px-3 border-[1px] border-violet-400 hover:border-violet-500 text-violet-400 hover:text-violet-500" 
                    onClick={(event) => {window.open('mailto:safesecnu@gmail.com', 'mail'); event.preventDefault()}} 
                    href="mailto:safesecnu@gmail.com"
                >
                    Contact Us &gt;
                </a>
            </div>
        </div>
    )
}
