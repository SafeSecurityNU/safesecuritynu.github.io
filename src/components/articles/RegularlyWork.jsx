import TableOfContents from "../text/TableOfContents";
import ContentLevelOne from "../text/ContentLevelOne";
import ContentLevelTwo from "../text/ContentLevelTwo";
import Body from "../text/Body";
import Italics from "../text/Italics";
import Section from "../text/Section";
import SubSection from "../text/SubSection";
import ArticleImage from "../text/ArticleImage";
import LabeledItem from "../text/LabeledItem";
import BadEmail from "/src/assets/regularly1.png"
import Hyperlink from "../text/Hyperlink";
import BulletItem from "../text/BulletItem";
import References from "../text/References";
import ReferenceItem from "../text/ReferenceItem";

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
                    <ContentLevelTwo text="ArticleImages" />
                    <ContentLevelTwo text=".ArticleImages directory" />
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
            <ArticleImage src="https://i.imgur.com/xCZVA7R.png" />
            <Body>The message above is an example of a spear phishing attack. The scammer pretends to be the company director asking for company payment information. One way to recognize the attack is through the contents of the message, which utilizes vague and blunt language.</Body>
            <LabeledItem label="2">Fake Tech Support Messages</LabeledItem>
            <Body>Other phishers will pretend to be the IT department rather than a high-ranking employee in order to get the target to reveal company account credentials. With the login information of certain employees, scammers can steal confidential information.</Body>
            <Body>These attacks generally include a subject or headline that creates a false sense of urgency for the target. The message may instruct the user to click a link to reset their password or provide other account information. By clicking the link, the user will be redirected to a fake site resembling the company one where they may provide that sensitive information.</Body>
            <ArticleImage src="https://i.imgur.com/2UJGqAl.png" />
            <Body>This is a real-life example of a scam email seemingly sent from Microsoft Service Team. The incorrect spelling in the sender's email address indicates that they have a fake (or spoofed) domain.</Body>
            <LabeledItem label="3">Pop-Up Warnings</LabeledItem>
            <Body>Scammers may trick users with pop-up warnings or windows on your device. The warning may resemble an error message from your device's operating system or antivirus software with a trusted company name. The message in the pop-up will warn you of a security issue and urge you to call a phone number for assistance.</Body>
            <ArticleImage src="https://i.imgur.com/1un3uPQ.png" />
            <Body>If you get this kind of pop-up window on your computer, don't call the number. Legitimate security warnings and messages will never ask you to call a phone number.</Body>
            <LabeledItem label="4">Fake Social Media Requests</LabeledItem>
            <Body>This type of scam most often occurs on social platforms like LinkedIn, but may also be present in emails and text messages. Fake LinkedIn requests (or similar requests from other platforms) will contain a link to a nefarious site that may potentially infect your device with malware or steal sensitive information. Receiving a social media request often invokes excitement in a user, which makes these attacks particularly effective on sales and finance employees.</Body>
            <ArticleImage src="https://i.imgur.com/pTAc4Qv.png" />
            <Body>These are only a few examples of the types of phishing attacks a person can encounter. Phishing can be difficult to detect, and employees likely won't identify them one-hundred percent of the time.</Body>
            <Body>Although employees may not be able to always identify phishing messages, we can adhere to more hygienic security practices to protect ourselves.  Knowing the common features in phishing scams will allow you to recognize fraudulent messages more easily.</Body>
            <SubSection>Common Features in Phishing Scams</SubSection>
            <LabeledItem label="1">Sender Information Doesn't Seem Legitimate</LabeledItem>
            <Body>Though the contents of a phishing message may seem authentic, the sender's information will never be exactly like the real sender's information. In emails, the sender may have the correct name with an incorrect email address, such as:</Body>
            <ArticleImage src={BadEmail} />
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
            <Section>Accounts</Section>
            <SubSection>Use Complex Passwords and Multi-Factor Authentication (MFA)</SubSection>
            <Body>Simple passwords are easier for hackers to guess and gain access to classified and sensitive company information.</Body>
            <ArticleImage src="https://i.imgur.com/2C4P2FJ.png"/>
            <Body>Passwords must be created strongly and securely using a combination  of upper and lower case letters, numbers, and symbols. These passwords must be 10 or more characters in length. Results from Hive System (see image above) show that a complex password including f numbers, lower and uppercase letters that is 10 characters takes a hacker five years to crack. In comparison, the same combination of length six characters takes only five seconds.</Body>
            <Body>Multi-factor authentication (MFA) is another way of protecting against unauthorized logins. MFA is a multi-step login process that requires users to enter additional information with a password. For example, along with the password, users may be asked to enter a code sent to their email in addition to a password. Other forms of MFA include answering a security question or scanning a fingerprint. Employees should use MFA as an additional security measure. Even if a password is compromised, the attacker will need additional access to log in to that account.</Body>
            <Body>An example of free MFA software is the <Hyperlink href="https://duo.com/product/multi-factor-authentication-mfa/duo-mobile-app" text="Duo Mobile" /> authentication app. Below is a walkthrough of a person logging into Microsoft teams using Duo Mobile authentication:</Body>
            <LabeledItem label="Step 1:">A push notification is sent to your device.</LabeledItem>
            <ArticleImage src="https://i.imgur.com/HtWVFAn.png"/>
            <LabeledItem label="Step 2:">Open the Duo Mobile app on your device and approve the push.</LabeledItem>
            <ArticleImage src="https://i.imgur.com/M8E2AI4.png"/>
            <LabeledItem label="Step 3:">You have successfully logged into your account!</LabeledItem>
            <ArticleImage src="https://i.imgur.com/h8SBtJH.png"/>
            <SubSection>Security questions</SubSection>
            <Body>Most websites that store sensitive information such as your bank will ask users to answer security questions. Some may even go as far as asking users to create unique security questions and answers. To keep your questions and responses secure, treat them like passwords.</Body>
            <Body>Do not use responses that may be found on Google search and/or your social media accounts. For example, responding to the security question “What is the name of your high school?” while having your high school mascot as your Facebook profile picture could lead an attacker to the right answer. A good strategy of encrypting your security questions and answers is to set them as a bunch of random words. For example,</Body>
            <Italics><strong>Question:</strong> What is the name of your high school?</Italics>
            <Italics><strong>Answer:</strong> hcbdhbchjdwhcbuwk</Italics>
            <Italics><strong>Question:</strong> qlciecnkxmmckl</Italics>
            <Italics><strong>Answer:</strong> ihduewbcjdk</Italics>
            <Body>In order to keep track of your passwords and security questions, use a password manager such as <Hyperlink href="https://support.apple.com/en-us/HT211145" text="KeyChain" /> on macs, and <Hyperlink href="https://support.google.com/chrome/answer/95606?hl=en&co=GENIE.Platform%3DDesktop" text="Google password manager" />.</Body>
            <Body>Below are the steps to save your security questions and responses in <Hyperlink href="https://www.lastpass.com/features/autofill/google-chrome" text="Lastpass" />, a password managing software:</Body>
            <LabeledItem label="Step 1:">Click on the LastPass browser extension.</LabeledItem>
            <ArticleImage src="https://i.imgur.com/uWkmGvY.png"/>
            <LabeledItem label="Step 2:">Choose secure note.</LabeledItem>
            <ArticleImage src="https://i.imgur.com/B7sgVAz.png"/>
            <LabeledItem label="Step 3:">Write and save your note securely.</LabeledItem>
            <ArticleImage src="https://i.imgur.com/MAW4R8m.png"/>
            <Body>Alternatively, you can use the Notes app on your iPhone and lock the note with a strong and unique password.</Body>
            <ArticleImage src="https://i.imgur.com/axIWJfq.png"/>
            <Section>Wifi</Section>
            <SubSection>Utilizing Secure Wi-Fi Networks</SubSection>
            <Body>Employees should not be connecting work devices to public Wi-Fi networks. Public Wi-Fi networks are a big security risk due to their open access (you have no idea who is watching and/or intercepting your data since anyone can join) and absence of vital security features. Some public Wi-Fi networks lack transport layer security (TLS). TLS is a type of encryption that encrypts data to ensure that it is unreadable by any attacker who might intercept it.</Body>
            <Body>Attackers can also install a rogue access point on a network’s wired infrastructure without the administrator’s knowledge. Without the administrator’s consent, users are tricked into thinking it is a legitimate Wi-Fi network when they connect. This is known as a “man-in-the-middle attack”.</Body>
            <Body>Network snooping is another common way attackers can steal information from users connected to a public Wi-Fi network. In this case, a hacker uses malicious software on the network to remotely monitor the activity on a third party’s laptop. They gain access to sensitive information such as passwords.</Body>
            <Body>To protect against the dangers of using public Wi-Fi, employees must use virtual private networks (VPNs) when accessing public wifi. A VPN will redirect your internet connection through a private internet server, hide your real IP address, and encrypt your activity. An attacker will not be able to see past the VPN’s encryption protocols. You can read more on how to choose the best VPN <Hyperlink href="https://nordvpn.com/blog/securing-public-wi-fi/" text="here" />.</Body>
            <Body>VPN setup instructions on a <Hyperlink href="https://www.howtogeek.com/134046/how-to-connect-to-a-vpn-in-windows/" text="Windows PC" /> or a <Hyperlink href="https://support.apple.com/guide/mac-help/set-up-a-vpn-connection-on-mac-mchlp2963/mac" text="mac" />.</Body>
            <Body>Organizations can also set up VPN specific to them and their employees. If your company has a specific VPN set up, contact your IT department on how you can access it from your own laptop.</Body>
            <Section>Data</Section>
            <SubSection>Practice Data Encryption and Protection</SubSection>
            <Body>Employees should practice extra caution when sharing sensitive information, even when the recipient of the data is a coworker. Hackers can pose as authoritative figures like government officials or upper management to trick employees into giving them sensitive information such as access credentials. Employees must double check the legitimacy of these requests and encrypt the data before sending it so that the data can only be accessed by authorized recipients using a decryption key. The image below shows data encryption as the second most impactful factor that mitigates the impact and cost of a data leak.</Body>
            <ArticleImage src="https://i.imgur.com/aZPHTsn.png"/>
            <Body><Hyperlink href="https://www.getapp.com/resources/common-encryption-methods/" text="These" /> are our suggested encryption methods that organizations can use.</Body>
            <Body>The image below shows a criteria companies can follow in deciding what type of data to encrypt:</Body>
            <ArticleImage src="https://i.imgur.com/d5Gnw6n.png"/>
            <SubSection>Practice Keeping a Secure Backup of All Critical Data</SubSection>
            <Body>A common cyber attack is a case of ransomware. Ransomware is when an attacker encrypts a victim’s files, systems, and/or networks and keeps them 'hostage' until a ransom has been paid. This attack can lead to a permanent loss of data. Thus it is important employees maintain regular backups of critical data. Data backups can be stored in various formats, including:</Body>
            <BulletItem>Network-attached storage: this uses a separate backup server that is connected to your network. Authorized users can easily access and retrieve these data backups from their workstations and devices.</BulletItem>
            <BulletItem>External hard drives: these devices can be plugged into your computer to create a backup of your data. However, it is important to note that they can be stolen or damaged, and therefore should be kept in a secure location.</BulletItem>
            <BulletItem>Tape drive: this is a popular option for businesses that need to store large amounts of data. Tape drives work by storing data on a reel of tape, which can then be stored in an off-site and climate-controlled backup facility.</BulletItem>
            <BulletItem>Cloud-based backup: this stores your data in the cloud, which is a network of remote servers that are accessed over the internet. This type of backup is considered to be the most reliable as it is not susceptible to physical damage or theft. Examples of cloud servers include <Hyperlink href="https://www.microsoft.com/en-us/microsoft-365/onedrive/download" text="Onedrive" />, <Hyperlink href="https://www.google.com/drive/download/" text="Google drive" />, <Hyperlink href="https://www.icloud.com/iclouddrive" text="iCloud drive" /> etc.</BulletItem>
            <Section>USB</Section>
            <SubSection>Be Cautious With Unvetted USB Devices</SubSection>
            <Body>If you find an unknown USB drive somewhere, don’t plug it in your computer. In fact, it is recommended that all USBs should be treated as if they contain viruses or malware, irrespective of where they come from.</Body>
            <Body>Whether the USB devices come from the store or business-related functions, you should not directly plug them into computers that have access to the company’s computer network. Reason being, cybercriminals will use these devices as a means to distribute spreadable malware or a keylogger to your computer. They could also steal confidential or sensitive information and/or record keystrokes. Attackers use these devices because of their ability to bypass the firewall and other cyber-defences. They will often label these malware infected USBs with things like “HR files” or “Staff Bonuses 2022” as an attempt to entice people into using these devices.</Body>
            <Body>A good practice is to have the IT department double-check all USB devices and scan them for malware before using them with company laptops. This is prudent because the USB could host hidden malware or viruses that cause harm to the company’s systems.</Body>
            <Body>Another good practice is to disable Autorun on your machine. Autorun is a feature that allows Windows to automatically run the startup program when a CD, DVD, or USB device is inserted into a drive. Autorun also automatically shows the contents of the USB device such as an iPod or thumb drive when it is inserted into the computer.</Body>
            <Body>Steps to disable Autorun on Windows laptop:</Body>
            <LabeledItem label="Step 1:">Select the Start menu (Windows icon) on the taskbar.</LabeledItem>
            <ArticleImage src="https://i.imgur.com/74hYxYh.png"/>
            <LabeledItem label="Step 2:">Search for the AutoPlay settings option in the system’s settings.</LabeledItem>
            <ArticleImage src="https://i.imgur.com/M8hTWMO.png"/>
            <LabeledItem label="Step 3:">Toggle the option off to disable Autoplay and Autorun for your computer. Consequently, you will need to open it manually from the File Explorer when you insert a drive.</LabeledItem>
            <ArticleImage src="https://i.imgur.com/ubxN8R3.png"/>
            <LabeledItem label="Step 4:">Select "Take No Action" in the menu below “Removable Drive”. This ensures that Windows does not open a folder or automatically run any files when a removable drive, such as a USB flash drive is inserted.</LabeledItem>
            <ArticleImage src="https://i.imgur.com/Tb8V1xp.png"/>
            <Body>If you suspect that your machine or any machine that you used to plug in a USB drive was compromised, please take the following steps:</Body>
            <LabeledItem label="1">Disconnect the computer from the network</LabeledItem>
            <LabeledItem label="2">Disable the wireless connectivity</LabeledItem>
            <LabeledItem label="3">Contact the IT department for help and further instructions</LabeledItem>
            <Section>Files</Section>
            <SubSection>Sharing Large Files Securely</SubSection>
            <Body>While sending large files as email attachments, you will notice two main limitations. First, the maximum size of email attachments is always limited. For example, you can send attachments of up to 25 MB with Gmail. Second, email isn’t the most secure option to send sensitive files unless an end-to-end encrypted email is used. Most big email providers, like Gmail and Outlook, use TLS (Transport Layer Security) encryption to protect your emails in transit. So, your emails are secure while being sent, provided the recipient’s email service supports TLS. But once they arrive, the security of your messages depends mainly on what encryption the receiving server uses.</Body>
            <Body>So, most email services do not ensure security from start to end, but there are certain methods to send large files securely.</Body>
            <Body>Secure Cloud Storage</Body>
            <Body>The most practical and secure way to send large files is to use secure cloud storage. However, popular cloud storage services, like Google Drive, Microsoft OneDrive, or Dropbox have a couple of drawbacks to note. Most cloud storage services retain the encryption keys to your files, meaning third parties can access them. In addition to this, some cloud services limit the size of files or folders that you can share.</Body>

            <Body>In order to share files of any size and to ensure that only you and other people you authorize can access them, IT and security teams should establish the use of an end-to-end encrypted cloud storage service like Proton Drive.</Body>
            <Body>When using Proton Drive, instead of sending the files by email attachment, you send a link to the receiver, like in this example.</Body>
            <ArticleImage src="https://i.imgur.com/qyS32xI.png"/>
            <Body>The person you’re sending the files to simply has to click Download all to receive the files.</Body>
            <Body>Another easy way to send large files or folders to someone is to use a USB drive. This is done by simply copying the file or folder onto the drive and physically handing it over to them or sending it by secure courier.</Body>
            <Body>But before you do, make sure you have the IT department double-check the USB, encrypt the drive, and protect it with a strong password in case it gets lost.</Body>
            <Section>Images</Section>
            <SubSection>.images directory</SubSection>
            <Body>Keep all images in .images directory of the project root. This allows moving markdown documents across any subdirectories without the need to update links to images.</Body>
            <Body>Regardless of where the markdown page is placed within the repository, all image links are related to the project root as below:</Body>
            <Body>![img](/.images/sample-image.png)</Body>
            <References>
                <ReferenceItem label="1">https://www.ncsc.gov.uk/guidance/phishing</ReferenceItem>
                <ReferenceItem label="2">https://montra.io/phishing-in-the-workplace/</ReferenceItem>
                <ReferenceItem label="3">https://uk.norton.com/blog/privacy/how-you-can-spot-phishing-attempts#:~:text=Phishing attempts are often plagued,re reading a phishing email</ReferenceItem>
                <ReferenceItem label="4">https://sensorstechforum.com/ongoing-linkedin-phishing-attacks-target-how-to-evade/</ReferenceItem>
                <ReferenceItem label="5">https://www.currentware.com/blog/safe-computing-tips/#usb-security</ReferenceItem>
                <ReferenceItem label="6">https://www.wikihow.com/Disable-Autorun-in-Windows</ReferenceItem>
                <ReferenceItem label="7">https://proton.me/blog/send-large-files-securely#:~:text=1.-,Secure cloud storage,all to receive the files</ReferenceItem>
                <ReferenceItem label="8">https://www.quostar.com/blog/business-scam-email-examples/</ReferenceItem>
                <ReferenceItem label="9">https://www.currentware.com/blog/safe-computing-tips/</ReferenceItem>
                <ReferenceItem label="10">https://www.techradar.com/features/backing-up-data-whose-job-is-it-anyway</ReferenceItem>
                <ReferenceItem label="11">https://www.veltecnetworks.com/dont-plug-in-anything-to-unknown-computer-devices/</ReferenceItem>
            </References>



        </>
    )
}