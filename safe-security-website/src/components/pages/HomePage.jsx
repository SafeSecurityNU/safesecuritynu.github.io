import HomeIntro from "../home/HomeIntro";
import FeaturesList from "../home/FeaturesList";
import FeatureCard from "../home/FeatureCard";

import InfoHub from "../../assets/infohub.png";
import Flyer from "../../assets/flyer.png";
import Partnerships from "../../assets/partnerships.png";

export default function HomePage() {
    return (
        <>
            <HomeIntro />
            <FeaturesList />
            <FeatureCard side="left" imgSource={InfoHub} title="Information Hub" action="Learn More About Cybersecurity" description="This Information Hub contains revised editions of materials from Professor Sruti Bhagavatula's Computer Science 396/496: Foundations of Security and abbreviated versions of our weekly discussions. These articles are brought to you by Safe Security's educational team in an effort to provide accessible, diverse, and student-driven content." />
            <FeatureCard side="right" imgSource={Flyer} title="Discuss Current Issues" action="Engage with the Community" description="Join our bi-weekly discussions on ongoing topics in cybersecurity! From Safe Security's initial conception to final launch, we are driven to expand the accessibility to cybersecurity education for everyone and anyone. Whether you're a CS major English student, we invite you participate and learn more. Snacks are often provided!" />
            <FeatureCard side="left" imgSource={Partnerships} title="External Partnerships" action="Connect with Us!" description="Interested in learning more about Safe Security's programs? Whether you represent a security consulting firm, non-profit, software engineering company, local business, or more, we hope to explore a potential partnership to serve our student body. Please reach out!" />
        </>
    )
}