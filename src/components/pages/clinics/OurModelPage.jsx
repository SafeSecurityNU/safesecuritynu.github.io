import FeatureCard from '../../home/FeatureCard';
import OurModelIntro from '../../clinic/OurModelIntro';
import Partnerships from '../../../assets/partnerships.png'
import Certification from '../../../assets/Certification.png'
import Application from '../../../assets/Application.png'

export default function OurModelPage() {
    return (
        <>
            <OurModelIntro />
            <FeatureCard side="left" imgSource={Certification} title="Certification" action="The Google Cybersecurity Certificate Program" description="During the Certification process, students participate in small-group briefings while completing the Google Cybersecurity Certificate. By the end of the course, students advance their career by learning how to identify common risks, threats, and vulnerabilities in addition to techniques to mitigate them." />
            <FeatureCard side="right" imgSource={Partnerships} title="Implementation" action="Bringing newfound skills to life" description="During the Implementation phase, students are divided into teams and partnered with a small business. After consulting with representatives, students will present an initial security posture analysis, with the guidance of external experts and internal professors." />
            <FeatureCard side="left" imgSource={Application} title="Application" action="Using the skills developed to better our community" description="During the Application period, students are ideally working in an organization where they can apply their certification and implementation skills while learning about industry standards. Students are encouraged to build upon their Certification knowledge under the guidance of industry professionals." />
        </>
    );
}