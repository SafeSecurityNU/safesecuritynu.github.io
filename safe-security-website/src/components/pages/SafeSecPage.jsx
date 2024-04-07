import SafeSecIntro from "../safesec/SafeSecIntro";
import FeatureCard from "../home/FeatureCard";
import BoardList from "../safesec/BoardList";

import Logo from "../../assets/logo.png";

export default function AboutPage() {
    return (
        <>
            <SafeSecIntro />
            <FeatureCard side="left" imgSource={Logo} title="Weekly Meetings" action="Collaborative Space to Learn for All Experience Levels" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
            <FeatureCard side="right" imgSource={Logo} title="Security Education" action="Learn, Teach, and Share Cybersecurity Knowledge" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
            <FeatureCard side="left" imgSource={Logo} title="Team Bonding" action="Fun Activities to Boost Engagement" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
            <BoardList />
        </>
    )
}