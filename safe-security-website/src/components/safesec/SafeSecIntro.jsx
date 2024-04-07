export default function SafeSecIntro() {
    return (
        <div className="flex flex-col items-center mt-6 lg:mt-20 pb-20 border-b border-neutral-800">
            <h1 className="mx-8 text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
                <span className="bg-gradient-to-r from-blue-300 to-purple-800 text-transparent bg-clip-text">
                    Safe Security
                </span>
            </h1>
            <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <div className="flex justify-center mt-10">
                <a className="mx-1 mt-5 w-fit hover:bg-violet-950 rounded-full py-1 px-3 border-[1px] border-violet-400 hover:border-violet-500 text-violet-400 hover:text-violet-500" onClick={() => {window.open('mailto:safesecnu@gmail.com', 'mail'); event.preventDefault()}} href="mailto:safesecnu@gmail.com">
                    Contact Us &gt;
                </a>
            </div>
        </div>
    )
}
