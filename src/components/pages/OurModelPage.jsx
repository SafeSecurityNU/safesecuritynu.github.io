import React from 'react';
import { Link } from 'react-router-dom';
import lostImage from '/src/assets/lostImage.png'; // Adjust the path according to your file structure

export default function OurModelPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white text-gray-800">
            <div className="flex flex-col md:flex-row items-center">
                <img src={lostImage} alt="Lost Image" className="max-w-xs md:max-w-sm lg:max-w-md mb-6 md:mb-0" />
                <div className="text-center md:text-left md:ml-8">
                    <h1 className="text-3xl md:text-5xl font-bold mb-4">Oops! Page in progress.</h1>
                    <p className="text-lg mb-4">
                        It seems like this page is under construction. Let's get you back on track!
                    </p>
                    <p className="text-lg">
                        <Link to="/" className="text-blue-500 hover:underline">Head back</Link> to where you started or jump to the <Link to="/" className="text-blue-500 hover:underline">Home page</Link> to continue exploring.
                    </p>
                </div>
            </div>
        </div>
    );
}
