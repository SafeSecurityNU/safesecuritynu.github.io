import TableOfContents from "../text/TableOfContents";
import ContentLevelOne from "../text/ContentLevelOne";
import ContentLevelTwo from "../text/ContentLevelTwo";
import ContentLevelThree from "../text/ContentLevelThree";
import ContentLevelFour from "../text/ContentLevelFour";
import Body from "../text/Body";
import LabeledItem from "../text/LabeledItem";
import Hyperlink from "../text/Hyperlink";
import SubBulletItem from "../text/SubBulletItem";
import References from "../text/References";
import SubSection from "../text/SubSection";
import SubSubSection from "../text/SubSubSection";
import SubSubSubSection from "../text/SubSubSubSection";
import ReferenceItem from "../text/ReferenceItem";
import BulletItem from "../text/BulletItem";
import ArticleImage from "../text/ArticleImage";
import Italics from "../text/Italics";
import StartUpsChart from '/src/assets/StartUpsChart.png';
import StartUpsChart2 from '/src/assets/StartUpsChart2.png';
import StartUpsChart3 from '/src/assets/StartUpsChart3.png';

export default function StartUps() {
    return (
        <>
        <Body>The following document outlines the critical steps that early-stage technology-focused startups need to follow to (1) safeguard against external security threats and (2) ensure legal compliance & avoid fines. We have structured this guide into 4 distinct sections. The presentation version of this guide can be viewed <Hyperlink href="https://docs.google.com/presentation/d/14-oCW4beoxqBe_H7dyoYf4jDbFymFvzkgbXTl1HbHSg/edit?usp=sharing" text="here"/>.</Body>
        <TableOfContents>
            <ContentLevelOne text="Preventing & Mitigating Data Breaches"/>
            <ContentLevelOne text="Securing Your Infrastructure"/>
            <ContentLevelOne text="Writing An Effective Privacy Policy"/>
            <ContentLevelOne text="Educating Your Employees"/>
        </TableOfContents>
        <SubSection>Preventing & Mitigating Data Breaches</SubSection>
        <Body>Data breaches can cost your company a ton of money.</Body>
	    <BulletItem><strong>IBM 2022 Data Breach Report:</strong> "Avg. cost of a data breach in 2022 is 4.35M."</BulletItem>
        <BulletItem><strong>NationWide & UK Government:</strong> "3 out of every 5. small companies have faced at least one data breach in the last two years."</BulletItem>
        <BulletItem><strong>IBM 2022 Data Breach Report:</strong> "60% of data breaches led to an increased price pass on to customers."</BulletItem>
        <Body>Data breaches are very common among small-to-midsize businesses. The following security and privacy measures for data breach prevention are also for <strong>cost mitigation.</strong></Body>
        <ArticleImage src="https://i.imgur.com/SIAC0eq.png" alt="Avg. Cost of Common Data Breaches (Measured in USD millions)" loading="lazy"/>
        <Body>There are 3 main factors that cause data breaches</Body>
        <BulletItem>User-Related</BulletItem>
	    <SubBulletItem>Social engineering, phishing etc.</SubBulletItem>
        <BulletItem>Infrastructure-Related</BulletItem>
	    <SubBulletItem>Cloud misconfiguration, vulnerable third-party tools, etc.</SubBulletItem>
        <BulletItem>Employee-Related</BulletItem>
	    <SubBulletItem>Business email compromise, malicious insider accidental data loss etc.</SubBulletItem>
        <Body>We can prevent and mitigate data breaches through 4 approaches: the user perspective, the incident response perspective, the infrastructure perspective, and the employee perspective. The first two will be covered in this section, while the latter two will be covered in their own dedicated sections.</Body>
        <SubSubSection>How to Prevent & Mitigate Data Breaches (User Perspective)</SubSubSection>
        <Body>This section covers tips for securing user data by protecting their accounts that you can implement into your product or service. We will cover:</Body>
        <LabeledItem label="1">Multi-factor Authentication (MFA) (<Hyperlink href="https://developers.google.com/identity/oauth2/web/guides/overview" test="Google’s Identity API"/>)</LabeledItem>
        <LabeledItem label="2">Good Password Policy</LabeledItem>
        <SubSubSubSection>Multi-factor Authentication</SubSubSubSection>
        <Body>MFA was seen as one of the most convenient ways to protect user accounts. While passwords fail to protect against malicious attacks, MFA provides an extra layer of verification to ensure the identity of the person who tries to log in. MFA can be verified by obtaining information from an extra source like text messages, other devices or email.</Body>
        <SubSubSubSection>Password Policy</SubSubSubSection>
	    <BulletItem>Password Blocking</BulletItem>
        <SubBulletItem>Do not allow users to create passwords like: password, 123456, iloveyou etc.</SubBulletItem>
		<SubBulletItem><Hyperlink href="https://github.com/danielmiessler/SecLists/blob/master/Passwords/Common-Credentials/100k-most-used-passwords-NCSC.txt" text="Password blocking list" /></SubBulletItem>
    	<BulletItem>Guessability over Complexity</BulletItem>
		<SubBulletItem>Password complexity does not always transfer to its security level, but guessability does!!</SubBulletItem>
		<SubBulletItem>Design your password meter with guessability using the <Hyperlink href="https://pgs.ece.cmu.edu/" text="Password Guessability Service"/> (PGS)</SubBulletItem>
	    <BulletItem>Prevent Using Character-based Composition Policy</BulletItem>
		<SubBulletItem>According to this <Hyperlink href="https://www.usenix.org/conference/soups2022/presentation/lee" text="research"/>, limiting certain types of symbols (upper letter, special symbols) in a password does make passwords easier to guess.</SubBulletItem>
        <SubSubSection>How to Prevent & Mitigate Data Breaches (Incident Response)</SubSubSection>
        <Body>What is an <strong>incident response (IR)</strong> plan?</Body>
        <italic>A step-by-step playbook for a company to respond and handle data breaches. Including fixing vulnerabilities, public response etc.</italic>
        <ArticleImage src={StartUpsChart} alt="Recommended chart" loading="lazy"/>
        <Body>Having an IR team can be expensive, but try to come up with and test an IR plan at minimum.</Body>
        <Body>You should aim to include guidelines for the following areas in your IR plan (at a minimum):</Body>
        <BulletItem>Stop Additional Data Loss</BulletItem>
		<SubBulletItem>Put down affected servers, websites or any related services.</SubBulletItem>
	    <BulletItem>Consult with Legal Council</BulletItem>
		<SubBulletItem>Contact your lawyer for further legal actions.</SubBulletItem>
	    <BulletItem>Fix Vulnerability</BulletItem>
		<SubBulletItem>Check your code, website, third-party tools etc.</SubBulletItem>
	    <BulletItem>Notify Appropriate Parties</BulletItem>
		<SubBulletItem>Notify your service providers, related third-party partners.</SubBulletItem>
	    <BulletItem>Send out Data Breach Notification</BulletItem>
		<SubBulletItem>How did it happen?</SubBulletItem>
        <SubBulletItem>Who was affected?</SubBulletItem>
        <SubBulletItem>Necessary measures.</SubBulletItem>
	    <BulletItem>Conserve Evidence</BulletItem>
		<SubBulletItem>Prepare for potential lawsuit</SubBulletItem>
        <SubSubSection>If your company handles sensitive data, you need a Zero Trust Framework</SubSubSection>
        <Body>Treat your data differently, put sensitive data in a more secure environment like zero trust framework.</Body>
        <Body>A zero trust framework essentially realized the idea of <strong>“not trusting anyone”.</strong></Body>
        <Body>For example, if Jane works closely with the sensitive data, a traditional security framework might put Jane’s account on a white list, and everyone on a white list can get access to this special database. However, what if Jane’s account was compromised? (we see how common business email compromise can cause a data breach).</Body>
        <Body>So zero trust framework basically constantly verifies users and devices regardless of their position or role. In a zero trust framework, Jane might have to send her request to the policy admin every 2 hours to maintain access to sensitive data.</Body>
        <ArticleImage src="https://i.imgur.com/gIEjA54.png" alt="" loading="lazy"/>
        <Body>The graph above shows the impact of zero trust frameworks on data breaches (in millions).</Body>
        <SubSection> Securing your Infrastructure</SubSection>
        <SubSubSection>Why should you care?</SubSubSection>
        <Body>Your infrastructure is at the base of your product or service; securing it is a top priority as external threats in this area can cause existential risks. In this section, we will cover how to choose between public and private databases, what to do if you have a custom backend, penetration testing, and XDR tools.</Body>
        <Body>Tech start-up companies often have to make decisions on whether they should set up their own cloud infrastructure or use existing, publicly-documented services like Microsoft Azure, Amazon AWS, or Google Cloud. Since the main focuses of start-ups are generally in product development, marketing, and financing, and not in security, <strong>we recommended that companies make use of existing services.</strong></Body> 
        <Body>According to Servermania <Hyperlink href="https://www.servermania.com/kb/articles/how-much-does-a-server-cost-for-a-small-business/" text="Servermania"/>, the average cost of server rent is $40/month per 160GB of storage. For the same storage, Google firebase costs just over $4. In addition to server storage, companies also have to think about bandwidth and other factors that come with setting up infrastructure. Moreover, as the user base increases, scaling services provided by Firebase or other well-known cloud service providers is much easier as all companies have to do is pay more and add services.</Body>
        <Body>In addition to the <strong>scalability</strong>, public infrastructures provide the flexibility of adding or removing services based on need. Companies can add services like in-app messaging, the ability to push updates, app analytics, etc. Some of the possible features that are included in a well-established cloud service provider are listed below.</Body>
        <ArticleImage src="https://imgur.com/CaPzsjm.png" alt="image alt" loading="lazy"/>
        <Body>Set up cloud services for your company on well-tested publicly documented cloud service providers.</Body>
        <SubSubSection>If your company does use a custom backend infrastructure, we recommend…</SubSubSection>
        <BulletItem>Having a security expert on the team, if feasible, as he/she will help design the product with security and scalability in mind.</BulletItem>
        <BulletItem>Doing regular penetration testing on backend and frontend.</BulletItem>
        <SubSubSection>How to do Penetration Testing</SubSubSection>
        <Body>Penetration testing is an authorized simulated cyberattack on a computer system, performed to evaluate the security of the system.</Body>
        <Body>We recommend the following tools for penetration testing:</Body>
        <BulletItem>Invicti: a web application vulnerability scanner. It’s scalable and can be integrated into workflows. View this <Hyperlink href="https://www.youtube.com/watch?v=osd4a2h1hFY&ab_channel=InvictiSecurity" text="introductory video"/> for more information.</BulletItem>
        <BulletItem>SQLMap: used to find and exploit SQL injection flaws – i.e., when user input can alter the execution of the SQL query. Works with different kinds of Databases like MySQL, Oracle, Microsoft SQL Server. View <Hyperlink href="https://sqlmap.org/" text="documentation"/> and an <Hyperlink href="https://www.youtube.com/watch?v=nVj8MUKkzQk" text="introductory video"/> for more information.</BulletItem>
        <SubSubSection>If you your company handles sensitive information, use an XDR Tool</SubSubSection>
        <Body>XDR (Use Extend Detection and Response) tools are used to monitor threats. If your company handles sensitive information (medical, financial, etc) it’s important to have a tool to track threats and network activities.</Body>
        <Body>XDR Collects and automatically correlates data across multiple security layers, allowing for faster detection of threats and improved investigation/response times. In other words, XDR is a tool to <strong>manage or track activities in your network.</strong></Body>
        <Body>If you need more reasons to use an XDR, the financial impacts are substantial as seen in the table below:</Body>
        <ArticleImage src={StartUpsChart2} alt="Recommended chart" loading="lazy"/>
        <Body>As these tools are more involved, you should definitely do your own further research to select the best option. Our favorite is the <Hyperlink href="https://www.paloaltonetworks.com/cortex/cortex-xdr" text="Palo Alto Networks Cortex XDR" /> (pictured below).</Body>
        <ArticleImage src="https://i.imgur.com/kLcTZSm.png" alt="" loading="lazy"/>
        <SubSection>(3) Writing an Effective Privacy Policy</SubSection>
        <SubSubSection>Why should you care?</SubSubSection>
        <Body>There are substantial fines that your startup could face if found to be in violation of privacy regulations:</Body>
	    <BulletItem>$2,500 for violating CalOPPA</BulletItem>
		<SubBulletItem>CalOPPA requires companies’ websites to feature a conspicuous <strong>privacy policy</strong> stating exactly <strong>what information is collected</strong> and <strong>with whom it is shared</strong>; it also requires the operator of the website or online service to comply with the site’s privacy policy.</SubBulletItem>
	    <BulletItem>$43,000 per child per COPPA violation</BulletItem>
		<SubBulletItem>COPPA imposes certain requirements on operators of websites or online services <strong>directed to children under 13 years of age</strong>, and on operators of other websites or online services that have actual knowledge that they are collecting personal information online from a child under 13 years of age.</SubBulletItem>
	    <BulletItem>€10,000,000 for violating GDPR</BulletItem>
		<SubBulletItem>The main principles of the GDPR are that companies <strong>must only collect data for specific, explicit, and legitimate purposes</strong>, and that the data must be <strong>accurate and up to date, not be retained for a longer period than is required</strong>, and be processed in a way that <strong>ensures appropriate security.</strong></SubBulletItem>
        <SubSubSection>What goes in a Privacy Policy?</SubSubSection>
        <Body>While the contents of a privacy policy should be catered towards the specific industry and business, all privacy policies should have the following content at minimum:</Body>
	    <BulletItem>What data is being collected?</BulletItem>
        <BulletItem>How is the data collected?</BulletItem>
        <BulletItem>What is the purpose of the data collection process?</BulletItem>
        <BulletItem>Who will have access to the data?</BulletItem>
        <BulletItem>How will users get access to their data?</BulletItem>
        <BulletItem>How will users be informed about policy changes?</BulletItem>
        <BulletItem>How is the data protected?</BulletItem>
        <SubSubSection>Privacy Policy Generators</SubSubSection>
        <Body>Ideally, privacy policies should be written by a lawyer. But early-stage startups often do not have the time or the resources to go find a lawyer. As a result, a sufficient <strong>short term solution</strong> is to use a privacy policy generator. Our recommended <strong>free </strong>solutions are below:</Body>
        <BulletItem><Hyperlink href="https://app-privacy-policy-generator.firebaseapp.com/" text="Open Source Solution" /> </BulletItem>
        <BulletItem><Hyperlink href="https://www.shopify.com/tools/policy-generator" text="Shopify" /> </BulletItem>
        <BulletItem><Hyperlink href="https://www.termsfeed.com/privacy-policy-generator/" text="Termsfeed" /> </BulletItem>
        <BulletItem><Hyperlink href="https://termly.io/products/tl/privacy-policy-generator/" text="Termly" /> </BulletItem>
        <body>A screenshot of the Open Source Solution is displayed below:</body>
        <ArticleImage src="https://i.imgur.com/CddjgcY.png" alt="" loading="lazy"/>
        <body><strong>Always</strong> read through the privacy policy that these websites generate to ensure accuracy.</body>
        <SubSubSection>Additional Recommendations</SubSubSection>
        <body>When writing a policy from scratch or modifying a policy provided by a lawyer or generator, please keep in mind the following recommendations:</body>
	    <BulletItem>If your company handles sensitive information (medical, financial, etc), please make sure to add the required information.</BulletItem>
        <BulletItem>Avoid terms that are vague or overly technical. If technical terms are necessary, make sure to clearly define them.</BulletItem>
        <BulletItem>Make sure that the privacy policy is easily accessible by users.</BulletItem>
        <BulletItem>Ensure that the policy has a <Hyperlink href="https://readabilityformulas.com/free-readability-formula-tests.php" text="good readability score"/> </BulletItem>
        <BulletItem>Notify users about updates</BulletItem>
        <SubSection>Educating your Employees</SubSection>
        <SubSubSection>Why should you care?</SubSubSection>
        <body>Training your employees can save your company money.</body>
	    <BulletItem>The average cost of business email compromises is <strong>$4,890,000.</strong></BulletItem>
        <BulletItem>The additional cost in data breaches when remote working is a factor is <strong>$1,000,000.</strong></BulletItem>
        <SubSubSection>How to train your employees</SubSubSection>
        <body>There are many, many things that are important to teach your employees to minimize security and privacy risks. It is up to each company to determine what is most important given the industry, location, and other factors. As a baseline, we recommend that you cover the following concepts at a minimum:</body>
        <BulletItem>Social engineering identification.</BulletItem>
        <BulletItem>Physical security of devices.</BulletItem>
        <BulletItem>Physical security of devices.</BulletItem>
	    <BulletItem>Be careful when syncing data across devices.</BulletItem>
	    <BulletItem>Create a reliable and secure password.</BulletItem>
	    <BulletItem>Identifying suspicious links and attachments from phishing attacks.</BulletItem>
        <body>Developing in-house content or contracting educational training companies can be resource-intensive; our recommended alternative is the use of pre-made videos. Our favorite training video is linked <Hyperlink href="https://www.youtube.com/watch?v=wygwHXYj_TI&ab_channel=BurgiTechnologies" text="here"/>.</body>
        <SubSubSection>Evaluate your employees</SubSubSection>
        <body>After providing educational content for your employees, evaluating their retention of key facts is critical. We recommend using a brief quiz with a required minimum score. An example quiz is listed below that is based on our previously mentioned <Hyperlink href="https://www.youtube.com/watch?v=wygwHXYj_TI&ab_channel=BurgiTechnologies" text="video"/>.</body>
        <ArticleImage src={StartUpsChart3} alt="Recommended chart" loading="lazy"/>
        <SubSection>Conclusion</SubSection>
        <body>Now that you have completed all the required steps to (1) safeguard against external security threats and (2) ensure legal compliance & avoid fines, you can grow your business, stress-free!</body>
        <SubSubSection>References</SubSubSection>
        <BulletItem><Hyperlink href="https://www.crowdstrike.com/cybersecurity-101/zero-trust-security/" text="Zero Trust"/> </BulletItem>
        <BulletItem><Hyperlink href="https://www.bing.com/images/search?view=detailV2&ccid=7Ns6JwDy&id=D0AE4FC0E1AB1B4EACF6BE115BD5765848156B33&thid=OIP.7Ns6JwDyfEqeJD9GEH8iwwHaEK&mediaurl=https%3a%2f%2fwww.paloaltonetworks.com%2fcontent%2fdam%2fpan%2fen_US%2fnorthstar%2fcortex-xdr%2f1-Hero-CloudIdentity-White-1920x1080.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.ecdb3a2700f27c4a9e243f46107f22c3%3frik%3dM2sVSFh21VsRvg%26pid%3dImgRaw%26r%3d0&exph=1080&expw=1920&q=XDR+tool+example&simid=607995768462257067&FORM=IRPRST&ck=EE8E5053C241A03680A6B77FB1F823C9&selectedIndex=8&ajaxhist=0&ajaxserp=0" text="XDR Image"/> </BulletItem>
        <BulletItem><Hyperlink href="https://consumercal.org/about-cfc/cfc-education-foundation/california-online-privacy-protection-act-caloppa-3/" text="CalOPPA"/> </BulletItem>
        <BulletItem><Hyperlink href="https://consumercal.org/about-cfc/cfc-education-foundation/california-online-privacy-protection-act-caloppa-3/" text="CalOPPA"/> </BulletItem>
        <BulletItem><Hyperlink href="https://www.ftc.gov/business-guidance/resources/complying-coppa-frequently-asked-questions" text="COPPA"/> </BulletItem>
        <BulletItem><Hyperlink href="https://gdpr-info.eu/" text="GDPR"/> </BulletItem>
        <BulletItem><Hyperlink href="https://www.ibm.com/reports/data-breach" text="IBM Cost of a Data Breach 2020"/> </BulletItem>
        <BulletItem><Hyperlink href="https://carnegieendowment.org/specialprojects/protectingfinancialstability/timeline" text="Carnegie Endowment for International Peace’s Timeline of Breaches"/> </BulletItem>
        <BulletItem><Hyperlink href="https://developers.google.com/identity/oauth2/web/guides/overview" text="Google Web Authorization"/> </BulletItem>
        <BulletItem><Hyperlink href="https://github.com/danielmiessler/SecLists/blob/master/Passwords/Common-Credentials/100k-most-used-passwords-NCSC.txt" text="List of bad passwords"/> </BulletItem>
        <BulletItem><Hyperlink href="https://pgs.ece.cmu.edu/" text="CMU’s Password Guessability Service"/> </BulletItem>
        <BulletItem><Hyperlink href="https://www.youtube.com/watch?v=ubCNZRNjhyo" text="How to get started with AWS"/> </BulletItem>
        <BulletItem><Hyperlink href="https://www.youtube.com/watch?v=osd4a2h1hFY&ab_channel=InvictiSecurity" text="Intro to Invicti Penetration Testing"/> </BulletItem>
        <BulletItem><Hyperlink href="https://sqlmap.org/" text="SQL Map Documentation"/> </BulletItem>
        <BulletItem><Hyperlink href="https://www.termsfeed.com/blog/fines-no-privacy-policy/" text="Fines for not having a privacy policy"/> </BulletItem>
        <BulletItem><Hyperlink href="https://readabilityformulas.com/free-readability-formula-tests.php" text="Text Readability Tool"/> </BulletItem>
        <SubSubSection>Acknowledgements</SubSubSection>
        <body>This guide was put together as part of Northwestern University’s <Hyperlink href="https://www.mccormick.northwestern.edu/computer-science/academics/courses/descriptions/396-496-13.html" text="COMP_SCI 396-0-5: Security and Privacy Education"/> (Winter Quarter 2023). Thank you to the course’s instructor, <Hyperlink href="https://users.cs.northwestern.edu/~srutib/” text=”Sruti Bhagavatula"/>, for providing us with vital feedback and direction.</body>
        </>
    )
}