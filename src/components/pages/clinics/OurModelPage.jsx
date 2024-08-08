import React from 'react';
import { Link } from 'react-router-dom';
import lostImage from '/src/assets/lostImage.png'; // Adjust the path according to your file structure
import FeatureCard from '../../home/FeatureCard';
import OurModelIntro from '../../clinic/OurModelIntro';
import Partnerships from '../../../assets/partnerships.png'
import Teamwork from '../../../assets/teamwork.png'
import Certification from '../../../assets/Certification.png'
import Application from '../../../assets/Application.png'

// export default function OurModelPage() {
//     return (
//         <div className="flex flex-col items-center justify-center min-h-screen bg-white text-gray-800">
//             <div className="flex flex-col md:flex-row items-center">
//                 <img src={lostImage} alt="Lost Image" className="max-w-xs md:max-w-sm lg:max-w-md mb-6 md:mb-0" />
//                 <div className="text-center md:text-left md:ml-8">
//                     <h1 className="text-3xl md:text-5xl font-bold mb-4">Oops! Page in progress.</h1>
//                     <p className="text-lg mb-4">
//                         It seems like this page is under construction. Let's get you back on track!
//                     </p>
//                     <p className="text-lg">
//                         <Link to="/" className="text-blue-500 hover:underline">Head back</Link> to where you started or jump to the <Link to="/" className="text-blue-500 hover:underline">Home page</Link> to continue exploring.
//                     </p>
//                 </div>
//             </div>
//         </div>
//     );
// }

export default function OurModelPage() {

    return (
        <>
            <OurModelIntro />
            <FeatureCard side="left" imgSource={Certification} title="Certification" action="The Google Cybersecurity Certificate Program" description="During the Certification process, students participate in small-group briefings while completing the Google Cybersecurity Certificate. By the end of the course, students advance their career by learning how to identify common risks, threats, and vulnerabilities in addition to techniques to mitigate them." />
            <FeatureCard side="right" imgSource={Partnerships} title="Implementation" action="Bringing newfound skills to life" description="During the Implementation phase, students are divided into teams and partnered with a small business. After consulting with representatives, students will present an initial security posture analysis, with the guidance of external experts and internal professors." />
            <FeatureCard side="left" imgSource={Application} title="Application" action="Using the skills developed to better our community" description="During the Application period, students are ideally working in an organization where they can apply their certification and implementation skills while learning about industry standards. Students are encouraged to build upon their Certification knowledge under the guidance of industry professionals." />
        </>
    )
}