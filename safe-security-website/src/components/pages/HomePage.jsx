import HomeIntro from "../home/HomeIntro";
import FeaturesList from "../home/FeaturesList";
import FeatureCard from "../home/FeatureCard";

import Lock from "../../assets/lock.jpg";
import Logo from "../../assets/logo.png";
import Teamwork from "../../assets/teamwork.png";

export default function HomePage() {
    return (
        <>
            <HomeIntro />
            <FeaturesList />
            <FeatureCard side="left" imgSource={Lock} title="Information Hub" action="Learn More About Cybersecurity" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
            <FeatureCard side="right" imgSource={Logo} title="Clinics" action="Engage with the Community" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
            <FeatureCard side="left" imgSource={Teamwork} title="External Partnerships" action="Partner with Northwestern Administration and Companies" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
        </>
    )
}