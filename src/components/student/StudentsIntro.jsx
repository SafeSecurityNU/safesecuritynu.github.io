export default function StudentsIntro() {
    return (
        <div className="flex flex-col items-center mt-20 py-20"> {/* Increased top and bottom padding */}
            <h1 className="mx-8 text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
                <span className="bg-gradient-to-r from-blue-300 to-purple-800 text-transparent bg-clip-text">
                    Participate as a Student
                </span>
            </h1>
            <p className="mt-10 text-lg text-center text-neutral-400 max-w-4xl">
                Interested in increasing access to understandable cybersecurity information in your communities? Passionate about discussing historical and current cybersecurity threats, mitigation techniques, and best practices? Simply eager to learn more about and engage with cybersecurity? If so, you should join Safe Security!
            </p>
            <p className="mt-10 text-lg italic font-bold text-center text-neutral-200 max-w-4xl">
                The easiest way to get involved is join us at an upcoming meeting! For fall quarter 2024, Safe Security is meeting <span className="bg-gradient-to-r from-blue-300 to-purple-800 text-transparent bg-clip-text">Wednesdays from 7-8 PM in Tech L160.</span> 
            </p>
        </div>
    )
}
