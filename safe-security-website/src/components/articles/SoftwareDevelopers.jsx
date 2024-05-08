import TableOfContents from "../text/TableOfContents";
import ContentLevelOne from "../text/ContentLevelOne";
import Body from "../text/Body";
import Section from "../text/Section";
import SubSection from "../text/SubSection";
import ArticleImage from "../text/ArticleImage";

export default function SoftwareDevelopers() {
    return (
        <>
            <TableOfContents>
                <ContentLevelOne text="Security and Privacy Education for Software Developers"/>
                <ContentLevelOne text="Managing Deadlines"/>
                <ContentLevelOne text="Setting Up a Diverse Infrastructure"/>
                <ContentLevelOne text="Utilizing Old vs. New Software Dependencies"/>
                <ContentLevelOne text="Preventing Injection Attacks"/>
                <ContentLevelOne text="Consider Least Information and Least Privilege"/>
            </TableOfContents>
            <Section>Security and Privacy Education for Software Developers</Section>
            <Body>The security aspect of software engineering may often be overlooked by developers. This is because software engineers focus majorly on developing the software features and direct impacts of their projects, so thus security mechanisms are often seen as an add-on burden. This article aims to educate software engineers on how to develop more security programs.</Body>
            <Body>This guide contains important considerations for software developers to ensure satisfactory security practices for their projects.</Body>
            <SubSection>Managing Deadlines</SubSection>
            <Body>Managing deadlines can be a source of project insecurity for software engineers. Sometimes restrictive deadlines may cause developers to make a suboptimal choice, especially given Level of Effort constraints. LOE refers to the amount of work and resources a project requires to be completed. For this reason, it's important to fully take into account these possible points of restriction in which a developer can make inadequate safety design choices.</Body>
            <SubSection>Setting Up a Diverse Infrastructure</SubSection>
            <Body>When setting up cloud resources for existing servers, consider regionality and access control for both program efficiency and security. Some cloud services such as AWS Bucket allow multi-region access to a database, meaning that servers across the globe can access a  single database. While this approach saves time, it has one single point of failure: if the service is down, then all its users will be simultaneously affected.</Body>
            <ArticleImage src=""  />
            <Body>While setting up cloud service for each region can be time-consuming, its traffic regulation abilities will make the system more secure and robust.</Body>
            <SubSection>Utilizing Old vs. New Software Dependencies</SubSection>
            <Body>Software dependencies refer to components that rely on other components to function properly. If a dependency does not function properly or experiences an error, that can compromise the functionality of the entire program.</Body>
            <Body>In cases where developers must choose between implementing a new dependency or continuing with the old one, tight project deadlines may cause the developer to stick with the latter. Though new dependencies may be unfamiliar in terms of LOE, they may offer critical security improvements that the old one lacks. Likewise, implementing new dependencies can save time in cases of future migration.</Body>
            <SubSection>Preventing Injection Attacks</SubSection>
            <Body>Injection attacks are one of the most common cyber attacks on the Internet. These occur when an attack injects harmful code into the user input buffer in order to gain access to the system.</Body>
            <ArticleImage src=""  />
            <Body>One type of injection attack is command injection attack. In this example, the attacker inputs a Unix command line that forwards shell control to the port 4567.</Body>
            <ArticleImage src=""  />
            <Body>Another type of injection is a code injection attack. This attack inputs a segment of code as plain text that will be evaluated by the software application, enabling the attacker to gain control of the program.</Body>
            <ArticleImage src=""  /> 
            <Body>While there exists other forms of injection attacks, it's considered best practice to sanitize user input. For example, this can mean checking that the input only contains the allowed symbols. The above Python program should only allow inputs that contain math symbols.</Body>
            <SubSection>Consider Least Information and Least Privilege</SubSection>
            <Body>Least information refers to the idea that your program should return or display the minimum amount of information. This includes user results and user warnings. For example, if your program looks up the user's phone number, it should only return the user's phone number and nothing else.</Body>
            <Body>Least privilege refers to the idea that your program should assume every user to be a potential attacker. This means ensuring that the user can only enjoy the service by passing necessary checks.</Body>
        </>
    )
}