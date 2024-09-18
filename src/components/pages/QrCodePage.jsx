import HomePage from "./HomePage.jsx";
import { useState } from "react";

export default function QrCodePage() {
    const [popUpShown, setPopUpShown] = useState(true);

    return (
        <>
            <HomePage />
            {popUpShown &&
                <div className="absolute overflow-y-scroll z-[1000] top-0 left-0 w-[80%] min-h-[500px] m-[10%] p-8 bg-red-100 border-8 border-red-400 rounded-2xl text-red-900 font-mono">
                    <h3 className="text-center text-4xl font-extrabold pb-8 animate-pulse underline">
                        Your computer has seven (7) viruses!
                    </h3>
                    <p className="text-xl pb-5">
                        <span className="italic underline text-lime-800">Just kidding!</span> But you should careful when scanning QR codes. Did you know that QR code scams--where adversaries spread harmful QR codes that take users to malicious websites--have been growing in frequency in recent years?
                    </p>
                    <p className="text-xl pb-5">
                        Take a look around you and notice all of the QR codes on the advertising fliers and poster boards on Northwestern's campus. Can you confirm that these QR codes are safe to scan? Think twice or pay the price!
                    </p>
                    <p className="text-xl pb-2">
                        Learn more at the following links: <span className="italic text-slate-600 text-sm">(and check if they're safe to click first!)</span>
                    </p>
                    <ul className="list-disc pl-5 pb-8">
                        <li>
                            <a className="underline hover:font-bold" target="_blank" href="https://consumer.ftc.gov/consumer-alerts/2023/12/scammers-hide-harmful-links-qr-codes-steal-your-information">Federal Trade Commission Consumer Alert</a>
                        </li>
                        <li>
                            <a className="underline hover:font-bold" target="_blank" href="https://www.cnb.com/personal-banking/insights/qr-code-fraud.html">City National Bank Report</a>
                        </li>
                    </ul>
                    <button className="font-extrabold border-4 border-red-400 rounded-full px-6 py-1 hover:bg-red-400 bg-red-200 hover:text-white" onClick={() => setPopUpShown(false)}>
                        Exit
                    </button>
                </div>
            }
        </>
    )
}