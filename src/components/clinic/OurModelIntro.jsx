

export default function OurModelIntro() {
    return (
        <div className="flex flex-col items-center mt-10 pb-20 pt-20"> {/* Increased top and bottom padding */}
            <h1 className="mx-8 text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
                <span className="bg-gradient-to-r from-blue-300 to-purple-800 text-transparent bg-clip-text">
                    Our Unique Model
                </span>
            </h1>
            <br />
            <h2 className="text-xl sm:text-2xl lg:text-2xl text-center tracking-wide pt-2 pb-1">
                The NU Cyber Clinic is training the next generation of digital security leaders,<br/>for students and by students.
            </h2>
            <p className="mt-10 text-lg text-center text-neutral-400 max-w-4xl flex flex-col justify-center items-center">
            Our model consists of three phases to facilitate training students with the technical and communication skills needed to verbalize security recommendations at a high and low-level.
            <br />
            <br />
            Certification
            <br />
            Implementation
            <br />
            Application
            <br />
            <br />
            {/* <ul className="list-disc ml-5 text-neutral-400 text-left">
                <li>Certification</li>
                <li>Implementation</li>
                <li>Application</li>
            </ul> */}
                By the end of this three phase process small businesses and non-profits will be provided with essential knowledge about topics like security hardening, phishing attempts, malware, and keeping regular backups.<br /><br />Under our model, the security of Chicagoland cyber ecosystem is improved with each client served. 

            </p>
        </div>
    )
}