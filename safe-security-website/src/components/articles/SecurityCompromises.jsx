import TableOfContents from "../text/TableOfContents";
import ContentLevelOne from "../text/ContentLevelOne";
import Body from "../text/Body";
import Section from "../text/Section";
import SubSection from "../text/SubSection";
import BulletItem from "../text/BulletItem";
import SubBulletItem from "../text/SubBulletItem";
import Hyperlink from "../text/Hyperlink";
import Italics from "../text/Italics";
import LabeledItem from "../text/LabeledItem";
import ArticleImage from "../text/ArticleImage";

export default function SecurityCompromises() {
    return (
        <>
            <TableOfContents>
                <ContentLevelOne text="Introduction"/>
                <ContentLevelOne text="Types of Social Engineering Scams"/>
                <ContentLevelOne text="Help! I’ve Fallen for a Scam!"/>
                <ContentLevelOne text="Best Practices for Maintaining Device Security"/>
                <ContentLevelOne text="Mini Quiz!"/>
            </TableOfContents> 
            <Section>Introduction</Section>
            <Body>Imagine you receive the following text message:</Body>
            
                <ArticleImage src="https://i.imgur.com/4QTzsOI.png"  />
            
            <Body>Would you click the link? If you're unfamiliar with common internet scams, it's not unlikely that you would. On one hand, <Hyperlink href="https://facts.usps.com/one-day/" text="the United States Postal Services processes and delivers 23.8 million packages a day"/> —almost anyone may expect a delivery like the one described above. In addition, the use of iMessage and the presence of a link means it costs the recipient little energy to simply click the link. </Body>
            <Body> For a moment, let's assume you click the link. You are brought to one of the following webpages: </Body>
            
                <ArticleImage src="https://i.imgur.com/plVELZ8.png"  />
            
            <Body> Which webpage is real? Which one is a scam? </Body>
            <Body><strong>Both</strong> are actually scam websites. By clicking the link and inputting your personal information, you risk compromising both you and your device’s security. The text message represents a common internet scam called <strong>phishing.</strong></Body>
            <Section> Types of Social Engineering Scams </Section>
            <Body> Social engineering is the term used to describe a broad range of malicious online activities achieved through human reaction, including internet scams. It uses psychological manipulation to trick users into making security mistakes or giving away sensitive information.</Body>
            <SubSection> Phishing </SubSection>
            <Body> This internet scam occurs when deceptive text messages are utilized to lure consumers into providing personal or financial information. As one of the most common internet scams, more than 114,700 people fell victim to phishing in 2019 and over $57.8 million dollars (or about $500 per occurrence) were lost across the United States to phishing scams. </Body>
            <Body> Phishing text messages may utilize a variety of methods to get your information, including: </Body>
                <BulletItem> Reporting a false log-in attempt on an account.</BulletItem>
                <BulletItem> Alerting the recipient of suspicious activity.</BulletItem>
                <BulletItem> Claiming an issue with payment information.</BulletItem>
                <BulletItem> Confirming or updating personal information.</BulletItem>
                <BulletItem> Offer the recipient opportunities for money or free goods and services.</BulletItem>
            
                <ArticleImage src="https://i.imgur.com/OKW0fI4.png" />
            
            <SubSection>Spear Phishing</SubSection>
            <Body>Unlike phishing, spear phishing is a personalized scam that targets specific individuals, groups, or organizations for their personal or financial information.</Body>

            <Body>These scams may be sent through emails by someone pretending to be a representative from a company you are connected to. The contents of a spear phishing scam can look similar to phishing text messages.</Body>
            
                <ArticleImage src="https://i.imgur.com/8LXcGnB.jpg" />
            
            <Body>This email from eBay claims the user's account will be suspended unless they provide their account information. Scams like this one create a false sense of <Italics>insecurity</Italics> that calls the user to immediate action, effectively putting the user at risk.</Body>
            <SubSection>Baiting</SubSection>
            <Body>Baiting occurs when scammers utilize false promises to lure users into traps that allow them to steal the user’s personal and financial information or download a malicious program that can compromise their device. These scams appeal to the user’s desires or curiosity by providing offers that are generally too good to be true.</Body>
            <SubSection>Scareware</SubSection>
            <Body>This social engineering tactic scares users into revealing personal information or compromising their device.</Body>
            <Body>A real-life example of scareware is the <strong>Cryxos Trojan Scam</strong>, which became prominent during the COVID-19 pandemic as a majority of the workforce shifted into remote work. The scam displays an alert or notification from a seemingly credible source through a malicious website. It claims the user’s computer has become infected with a virus, has become blocked, or the user’s personal information was stolen. Users are subsequently encouraged to call a provided mobile number to resolve the issue, which grants the scammer the opportunity to <italics>actually</italics> compromise the user’s information or device.</Body>
            
                <ArticleImage src="https://i.imgur.com/W0TQoNS.jpg" />
            
            <SubSection>Business Email Compromise (BEC)</SubSection>
            <Body> This socially-engineered attack occurs when scammers send a user an email pretending to be an executive at their company. The scammer tricks the user into divulging company information.</Body>
            
                <ArticleImage src="https://i.imgur.com/P1Ty1K6.png" />
            
            <Section> Help! I've Fallen for a Scam! </Section>
            <Body>Scams are not always easy to detect. Here is what to do if you end up falling for one.</Body>
            <LabeledItem label="1">Block and report the scammer on your device.</LabeledItem>
            <Body>Reporting scams reduces the likelihood of the same attacker contacting you again; reduces the likelihood of the attacker targeting other people; and increases the likelihood of you recuperating any lost money. After scams are reported, government agencies can create more accurating tracking patterns to help reduce scams in general.</Body>
            <Body>It's easy to block potential scammers and report suspicious emails as scams or phishing. Here is what that would look like through Gmail:</Body>
            
                <ArticleImage src="https://i.imgur.com/ax1G4Gj.png"  style={{ width: '400px', height: 'auto' }}/>
            
            <LabeledItem label="2">Determine if your device was compromised.</LabeledItem>
            <Body>Did you click on a link in the scam? It's possible your device may have been infected with malware, or software designed to damage your device or steal or data.</Body>
            <Body>First, Disconnect from the internet to cut off the connection between your device and the outside world. This helps prevent malware on your computer from communicating with its server.</Body>
            <Body>Second, run a diagnostics scan on your device using antivirus software. This will check your device’s files, programs, and system for signs of malware. If it finds anything suspicious, the software will notify you.</Body>
            
                <ArticleImage src="https://i.imgur.com/5X1cVcA.png" />
            
            <Body>Third, remove the malware from your device. You will be given the option to quarantine or delete infected files. Quarantining files isolates them from the rest of your system and prevents them from causing further harm. Deleting files permanently removes them from your device. If the antivirus software does not automatically remove the malware, it will provide instructions on how to remove it manually. Follow these instructions carefully to ensure that all traces of the malware are removed from your system.</Body>
            <LabeledItem label="3">Determine if there was a data breach.</LabeledItem>
            <Body>According to <Hyperlink href="https://www.ibm.com/topics/data-breach" text="IBM"/>, a data breach is any security incident that results in unauthorized access to confidential information. Most commercial websites will notify you if there was a possible data breach. For example:</Body>
            
                <ArticleImage src="https://i.imgur.com/4QTzsOI.png" />
            
            <Body>Even though the company says data was not compromised, do some investigation. Possible exposed information may include your name, address, email, phone number, order details, or even your credit card information. Remove any credit card details from the site and monitor your financial accounts by reviewing bank statements and recent purchases.</Body>
            
                <ArticleImage src="https://i.imgur.com/IOznQ34.png" />
            
            <LabeledItem label="4">Report fraud to your bank.</LabeledItem>
            <Body>If the scam compromised your financial information, contact your bank's fraud department. Tell them the scam and payment details.</Body>
            <LabeledItem label="5">Report the incident to the appropriate authorities.</LabeledItem>
            <Section>Best Practices to Maintain Device Security</Section>
            <SubSection>Learn how to identify scam messages.</SubSection>
            <LabeledItem label="1">Ensure that the sender name matches the source email for company emails.</LabeledItem>
            
                <ArticleImage src="https://i.imgur.com/sPcjOZl.png" />
            
            <LabeledItem label="2">Look for false email signatures.</LabeledItem>
            <LabeledItem label="3">Never open attachments or links from unknown or suspicious senders.</LabeledItem>
            
                <ArticleImage src="https://i.imgur.com/D6lRUA3.png" />
            
            <SubSection>Learn how to identify scam websites</SubSection>
            <LabeledItem label="1">Compare the domain main to the official company name.</LabeledItem>
	            <SubBulletItem>If they don't match, it's possible that the website is fake. Scammers often use names that are similar to the official URL (like x-paypal.com instead of paypal.com).</SubBulletItem>
            
                <ArticleImage src="https://i.imgur.com/UAUptst.png" />
            
            <LabeledItem label="2">See if the URL has the padlock symbol.</LabeledItem>
                <SubBulletItem>While you shouldn't trust the padlock as a sole means of verification, it may help to check if the site is ingenuine. Unfortunately, some scammers have started to use SSL certificates to fool you into thinking their fake sites are real. If you're unsure about a site, clock on the padlock and read any additional information about the site's security certificate. For example, if a company claims to be registered in the United States but their certificate details show that the site is registered to another country, it's possible the website is fake.</SubBulletItem>
            
                <ArticleImage src="https://i.imgur.com/vNZXh0f.png" />
            
                <ArticleImage src="https://i.imgur.com/Bgqf8yy.png" />
            
            <LabeledItem label="3">Check the domain age with a website like the <Hyperlink href="https://whois.domaintools.com/" text="Whois Lookup Domain Tracker"/>. </LabeledItem>
	            <SubBulletItem>This is the length of time the site has been active. Fake websites rarely stay online for long. Enter the website's URL and you'll be able to see details such as the owner's organization name, country of registration, and age of the domain. Here is an example when searching www.google.com.</SubBulletItem>
            
                <ArticleImage src="https://i.imgur.com/oB9hVGw.png" />
            
                <ArticleImage src="https://i.imgur.com/9Hm9cY1.png" />
            
            <LabeledItem label="4">Don’t open unknown links.</LabeledItem>
	            <SubBulletItem>Always use the official app on your device or search up the official website instead.</SubBulletItem>
            <SubSection>Use secure forms of payment.</SubSection>
            <Body>Apple Pay and PayPal help to prevent data breaches because they allow you to pay without sharing your credit card details with the merchant. These services offer additional layers of security and fraud protection policies that can ensure your data is safe in the event of unauthorized transactions. </Body> 
            <SubSection>Regularly run diagnostic checks on your device.</SubSection>
            <Body>Scanning your device regularly can help maintain security and prevent malware or other online threats. </Body> 
            <SubSection>Utilize security modes.</SubSection>
            <Body>Although email is not always the most secure method of communication, there are generally few alternatives. Maximize your security by utilizing all the email’s features. If you are sending sensitive information over Gmail, turn on Google’s confidential mode by clicking the following button: </Body> 
            
                <ArticleImage src="https://i.imgur.com/uwVwrXD.png" />

            
                <ArticleImage src="https://i.imgur.com/0B3fAsx.png" />
            
            <SubSection>Stay vigilant on public WiFi networks.</SubSection>
            <Body>Have you ever connected to a Wi-Fi network at a coffee shop, an airport, or any public place? There is no free lunch - you could be paying for “free wifi” with your passwords.</Body>
            <LabeledItem label="1">Avoid accessing sensitive information</LabeledItem>
            <Body>while on public WiFi networks. If you're connected to an unsecured network and log into your online bank account, someone with access to the same network could potentially intercept your login credentials and steal your information.</Body>
            <LabeledItem label="2">Regularly update your software and operating system.</LabeledItem>
            <Body>This helps protect you from security vulnerabilities that could be exploited.</Body>
            
                <ArticleImage src="https://i.imgur.com/VgiHzpR.png" />
            
            <LabeledItem label="3">Use a virtual private network (VPN).</LabeledItem>
            <Body>A VPN creates a secure connection between your device and the public network, which makes it more difficult for anyone to access your data.</Body>
            
                <ArticleImage src="https://i.imgur.com/oYu4OZB.png" />
            
            <SubSection>Manage your passwords responsibly.</SubSection>
            <LabeledItem label="1">Use strong and unique passwords.</LabeledItem>
            <Body>It should contain a mix of characters from varying character sets. Avoid easily guessable words or phrases.</Body>
            <LabeledItem label="2">Don't share your passwords.</LabeledItem>
            <Body>Using the same password across multiple websites puts your accounts at risk if it's compromised.</Body>
            <LabeledItem label="3">Change your passwords regularly.</LabeledItem>
            <Body>Even if you have strong and unique passwords, it's a good idea to change them every few months to reduce the risk of your accounts being compromised.</Body>
            <LabeledItem label="4">Enable two-factor authentication.</LabeledItem>
            <Body>This adds an extra layer of security to your online accounts by requiring you to provide a second form of authentication, such as a test message or fingerprint in addition to your passwords.</Body>
            
                <ArticleImage src="https://i.imgur.com/bAfe450.png" />
            
            <Body><strong>If it's too good to be true, it probably is.</strong></Body>
            <Body>If you receive a free or premium offer from an unknown or suspicious sender, ignore it or first determine if it's legitimate. Look for announcements from the company’s website to confirm the deal is genuine.</Body>
            <Section>Mini-Quiz!</Section>
            <Body>Test the knowledge you've gained from this article with the following mini-quizzes. The answer is revealed after each question.</Body>
            <Body><strong>Question 1:</strong> Read the following email. Identify the detail that shows it's a scam.</Body>
            
                <ArticleImage src="https://i.imgur.com/owMpt9r.jpg" />
            
            <Body><strong>Answer to Question 1: </strong>The email requires you to reveal your email and password by clicking a link in order to gain free access to a service that usually costs money. Sounds a little too good to be true!</Body>
            
                <ArticleImage src="https://i.imgur.com/owMpt9r.jpg" />
            
            <Body><strong>Question 2:</strong> Which website is fake?</Body>
            
                <ArticleImage src="https://i.imgur.com/faEDNKs.png" />
            
            <Body><strong>Answer to Question 2:</strong> The left one is undoubtedly fake. The one on the right has a valid SSL certificate (as shown through the padlock symbol next to the URL), but this does not guarantee it's entirely secure. Go to the official website.</Body>
            <Body><strong>Question 3:</strong> Which of the following texts are not phishing messages?</Body>
            
                <ArticleImage src="https://i.imgur.com/OTQ0sAE.png" />
            
            <Body><strong>Answer to Question 3:</strong> Trick question. They're all phishing messages.</Body>
            <Body><strong>Question 4:</strong> What details from the following email indicate that it's a scam?</Body>
            
                <ArticleImage src="https://i.imgur.com/62c3bny.png" />
            
            <Body><strong>Answer to Question 4:</strong> The name does not match the email address and requests that you send your social security number.</Body>
            
                <ArticleImage src="https://i.imgur.com/gR0Kz3S.png" />
            
        </>
    )
}