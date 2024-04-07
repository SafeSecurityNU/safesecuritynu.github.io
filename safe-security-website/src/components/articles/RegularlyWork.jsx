import TableOfContents from "../text/TableOfContents";
import ContentLevelOne from "../text/ContentLevelOne";
import ContentLevelTwo from "../text/ContentLevelTwo";
import Body from "../text/Body";
import Italics from "../text/Italics";
import Section from "../text/Section";
import SubSection from "../text/SubSection";
import Image from "../text/Image";
import LabeledItem from "../text/LabeledItem";

export default function RegularlyWork() {
    return (
        <>
            <TableOfContents>
                <ContentLevelOne text="Communicate with the IT Department" />
                <ContentLevelOne text="Recognize Phishing Attacks" />
                <ContentLevelOne text="How to sign up and/or sign in to your accounts" />
                <ContentLevelOne text="How to use public wifi networks" />
                <ContentLevelOne text="How to handle data" />
                    <ContentLevelTwo text="Encryption" />
                    <ContentLevelTwo text="Backup" />
                <ContentLevelOne text="How to handle unvetted USB devices" />
                <ContentLevelOne text="How to transfer large sensitive files" />
                    <ContentLevelTwo text="Images" />
                    <ContentLevelTwo text=".images directory" />
                    <ContentLevelTwo text="pre-commit hook" />
                <ContentLevelOne text="References" />
            </TableOfContents>
            <Body>Employees are truly a company's most valuable asset. However, they can also be the weakest link when it comes to an organization's information security and their most significant security vulnerability. Taking cybersecurity requirements lightly can have severe negative impacts and put the company's assets at a high risk of being compromised. Companies can greatly reduce these risks and vulnerabilities by properly educating their employees on computer security and data privacy.</Body>
            <Body>This guide introduces the most critical security and data privacy practices to be followed in an organization along with real-world examples of security problems in an aim of raising awareness about security and privacy risks and empowering individuals with the right skills and technologies.</Body>
            <Section>Communicate with the IT Department</Section>
            <Body>By working closely with the Information Technology department at your organization, employees can better protect themselves and colleagues from cyberattacks. This means immediately reporting suspicious online activity and security warnings on your device to the IT department. This is crucial to mitigating cyber threats quickly and efficiently.</Body>
            <Body>The IT personnel may not be aware of every single security risk that threatens the company. Therefore, they depend on the employees to provide intel on any unusual online activity. If you are working remotely, these practices are even more crucial, given that you may not be connected to the company network and therefore outside the purview of the IT department.</Body>
            <Section>Recognize Phishing Attacks</Section>
            <Body>Phishing is a social engineering tactic that consists of an attacker sending an employee a fraudulent message via email, instant message, or text message, in order to trick the employee into doing “the wrong thing". This can be clicking a bad link that downloads malware onto the device, freezes the system as part of a ransomware attack, or reveals sensitive company information.</Body>
            <Body>What can this type of attack look like?</Body>
            <LabeledItem label="1">Fake Messages from the “Boss"</LabeledItem>
            <Body>In this tactic, a scammer sends a message via email or text message to a user under the guise of the CEO, CFO, or other high-ranking employee. The message contains an urgent request that can potentially put sensitive company information at risk if the user falls for the scam. To make the attack more effective, scammers may use targeted language that is relevant to the business (which, in this case, is referred to as a spear-phishing attack).</Body>
            <Image src="" />
            <Body>The message above is an example of a spear phishing attack. The scammer pretends to be the company director asking for company payment information. One way to recognize the attack is through the contents of the message, which utilizes vague and blunt language.</Body>
            <LabeledItem label="2">Fake Tech Support Messages</LabeledItem>
            <Body>Other phishers will pretend to be the IT department rather than a high-ranking employee in order to get the target to reveal company account credentials. With the login information of certain employees, scammers can steal confidential information.</Body>
            <Body>These attacks generally include a subject or headline that creates a false sense of urgency for the target. The message may instruct the user to click a link to reset their password or provide other account information. By clicking the link, the user will be redirected to a fake site resembling the company one where they may provide that sensitive information.</Body>
            <Image src="" />
            <Body>This is a real-life example of a scam email seemingly sent from Microsoft Service Team. The incorrect spelling in the sender's email address indicates that they have a fake (or spoofed) domain.</Body>
            <LabeledItem label="3">Pop-Up Warnings</LabeledItem>
            <Body>Scammers may trick users with pop-up warnings or windows on your device. The warning may resemble an error message from your device's operating system or antivirus software with a trusted company name. The message in the pop-up will warn you of a security issue and urge you to call a phone number for assistance.</Body>
            <Image src="" />
            <Body>If you get this kind of pop-up window on your computer, don't call the number. Legitimate security warnings and messages will never ask you to call a phone number.</Body>
            <LabeledItem label="4">Fake Social Media Requests</LabeledItem>
            <Body>This type of scam most often occurs on social platforms like LinkedIn, but may also be present in emails and text messages. Fake LinkedIn requests (or similar requests from other platforms) will contain a link to a nefarious site that may potentially infect your device with malware or steal sensitive information. Receiving a social media request often invokes excitement in a user, which makes these attacks particularly effective on sales and finance employees.</Body>
            <Image src="" />
            <Body>These are only a few examples of the types of phishing attacks a person can encounter. Phishing can be difficult to detect, and employees likely won't identify them one-hundred percent of the time.</Body>
            <Body>Although employees may not be able to always identify phishing messages, we can adhere to more hygienic security practices to protect ourselves.  Knowing the common features in phishing scams will allow you to recognize fraudulent messages more easily.</Body>
            <SubSection>Common Features in Phishing Scams</SubSection>
            <LabeledItem label="1">Sender Information Doesn't Seem Legitimate</LabeledItem>
            <Body>Though the contents of a phishing message may seem authentic, the sender's information will never be exactly like the real sender's information. In emails, the sender may have the correct name with an incorrect email address, such as:</Body>
            <Image src="" />
            <Body>Taking five seconds to identify the sender's email address can help you identify cyberthreats before it's too late.</Body>
            <LabeledItem label="2">Poor Spelling and Grammar or Unusual Wording</LabeledItem>
            <Body>Phishing attempts may contain poor spelling and confusing grammar. Likewise, company specific jargon may be incorrect. For example, if a scam message from your boss contains the term “customer" when you know the real sender usually says “client," you should take notice. While cyberattacks continue to improve over time, it's still difficult to entirely mimic a message from another person.</Body>
            <LabeledItem label="3">False Sense of Urgency</LabeledItem>
            <Body>Cybercriminals tend to create panic or a sense of urgency for their target. By doing this, the user's judgment may be clouded, and they will be more likely to fall for the scam.</Body>
            <Body>For example, scammers may escalate a situation by telling a user that their account has been restricted or infected. Generally, phishing messages will encourage users to act immediately (and possibly impulsively) to resolve an issue. If you receive a suspicious message with time-sensitive instructions, you may be the target of a phishing scam.</Body>
            <LabeledItem label="4">Receiving an Attachment From an Unknown Sender</LabeledItem>
            <Body>One telltale sign of a phishing attempt is receiving an attachment from someone you don't know. Clicking attachments allows phishers to distribute malware onto your device, which may enable them to capture your login credentials or other confidential information. If you receive a message with an attachment, DO NOT OPEN IT unless you have confirmed the authenticity of the sender.</Body>
            <SubSection>In case You Suspect an Email is a Phishing Attempt</SubSection>
            <Body>Here are some steps you should consider if you suspect that you have received a phishing email/message.</Body>
            <LabeledItem label="1">Reach out Separately or Just Don't Respond</LabeledItem>
            <Body>In most workplace phishing attacks, you have alternate ways to communicate with the supposed sender. If you are concerned, reach out to them by a different method – phone call or Slack – and see if that is really them. If you do not have another way to verify the information, and you are not certain if it is legitimate, then ‘do nothing' is a valid option.</Body>
            <Body>For example,</Body>
            <Body><Italics>“John, I just received a strange email message that is supposedly from you. Did you just send me something?"</Italics></Body>
            <Body>If it is a social network connection request, it is better to login to the service separately and view the request there rather than clicking the email link.</Body>
            <LabeledItem label="2">When in Doubt Reach Out to the IT Department</LabeledItem>
            <Body>There are other options that your company can do to help. Admin can use email filters and text blockers on company accounts and provide cybersecurity training on an annual basis. If you aren't certain of what tools are available to you, reach out to your company's IT staff or service provider.</Body>
        </>
    )
}