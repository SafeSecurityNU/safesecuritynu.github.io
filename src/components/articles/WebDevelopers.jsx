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
import Section from "../text/Section";
import SubSection from "../text/SubSection";
import SubSubSection from "../text/SubSubSection";
import SubSubSubSection from "../text/SubSubSubSection";
import ReferenceItem from "../text/ReferenceItem";
import BulletItem from "../text/BulletItem";
import ArticleImage from "../text/ArticleImage";
import Code from '/src/assets/webdev1.png';
import Code2 from '/src/assets/webdev2.png';
import Code3 from '/src/assets/webdev3.png';
import Code4 from '/src/assets/webdev4.png';
import Code5 from '/src/assets/webdev5.png';
import Code6 from '/src/assets/webdev6.png';
import Code7 from '/src/assets/webdev7.png';
import Code8 from '/src/assets/webdev8.png';
import Code9 from '/src/assets/webdev9.png';
import Code10 from '/src/assets/webdev10.png';
import Code11 from '/src/assets/webdev11.png';
import Code12 from '/src/assets/webdev12.png';
import Code13 from '/src/assets/webdev13.png';
import Code14 from '/src/assets/webdev14.png';

export default function WebDevelopers() {
    return (
        <>
        <TableOfContents>
            <ContentLevelOne text="Security and Privacy for Front-end Web Developers"/>
            <ContentLevelTwo text="What is a Front-end Developer"/>
            <ContentLevelTwo text="General Front-end Security Concerns"/>
            <ContentLevelTwo text="Cross-Site Scripting Attacks (XSS)"/>
            <ContentLevelTwo text="Cross-Site Request Forgery Attacks (CSRF)"/>
            <ContentLevelTwo text="Denial of Service Attacks (DDoS)"/>
            <ContentLevelTwo text="Front-End Resources by Framework/Library"/>
            <ContentLevelOne text="Security and Privacy for Back-end Web Developers"/>
            <ContentLevelTwo text="What is a Back-end Developer"/>
            <ContentLevelTwo text="General Back-end Security Concerns"/>
            <ContentLevelTwo text="Directory Traversal Attack"/>
            <ContentLevelTwo text="Plaintext Credential Access"/>
            <ContentLevelTwo text="SQL Injection"/>
            <ContentLevelTwo text="Back-End Resources by Framework/Library"/>
            <ContentLevelOne text="Security and Privacy for Database Developers"/>
            <ContentLevelOne text="A Developer’s Checklist"/>
            <ContentLevelOne text="References"/>
        </TableOfContents>
        <Section>Front-end</Section>
        <SubSection>What is a Front-end Developer?</SubSection>
        <Body>A front-end web developer builds the interface of a website or app – the aspects that a user will interact with.</Body>
        <Body>Common tasks for a front-end developer:</Body>
        <BulletItem>Improving the user interface to provide a better user experience</BulletItem>
        <BulletItem>Building new interactive features on the website</BulletItem>
        <BulletItem>Using languages such as HTML, CSS, and JavaScript</BulletItem>
        <Body>If you are developing on the front-end, you have likely come into contact with frameworks and libraries that aid in the efficacy of creating web interfaces by providing built-in functionality for things like navigation panels, buttons, and fonts. Some common frameworks and libraries include <Hyperlink href="https://reactjs.org/" text="React"/>, <Hyperlink href="https://angular.io/" text="Angular"/>, <Hyperlink href="https://vuejs.org/" text="Vue.js"/>, <Hyperlink href="https://emberjs.com/" text="Ember.js"/>, and <Hyperlink href="https://jquery.com/" text="jQuery"/>.</Body>
        <SubSection>General Front-end Security Concerns</SubSection>
        <BulletItem><strong>Use of vanilla JavaScript:</strong> JavaScript is an inherently insecure language, and the source code for your web application can likely be accessed by anyone via developer tools (on Safari or Chrome). Malicious attackers often use this to their advantage to find vulnerabilities in web applications and exploit them to steal user information, make illegal transfers, or effectively shut down the site.</BulletItem>
        <BulletItem><strong>Use of third-party APIs and libraries:</strong> Using libraries with unverified security strategies can make your own web application prone to vulnerabilities. <Hyperlink href="https://www.feroot.com/education-center/why-is-javascript-vulnerable/" text="Around 80% of websites on the internet make use of third-party tools"/>, leaving ample room for unexpected security flaws to occur.</BulletItem>
        <BulletItem><strong>Prioritization of design over security:</strong> Many front-end developers overlook the need for security in favor of design because they believe no part of security is their responsibility.</BulletItem>
        <SubSection>Cross-Site Scripting Attacks (XSS)</SubSection>
        <SubSubSection>What is a Cross-Site Scripting attack?</SubSubSection>
        <Body>An XSS attack is a type of attack in which a malicious script is injected into a normal website anywhere where there is a place for a user to input some type of information (such as a contact form).</Body>
        <Body>There are two main types of XSS attacks: stored and reflected. A <strong>stored XSS attack</strong> is when a malicious script is injected (usually via a vulnerable user input field) and then stored onto the web application’s server. This means that now every time the website is accessed, the attacker’s script can run (e.g. accessing the user’s data, stealing their session cookies, etc.).</Body>
        <ArticleImage src="https://i.imgur.com/7VYyn4h.png"/>
        <Body>Stored XSS (<Hyperlink href="https://www.imperva.com/learn/application-security/cross-site-scripting-xss-attacks/" text="source"/>)</Body>
        <Body>A <strong>reflected XSS attack</strong>, the more common of the two, is an attack where the malicious actor coerces a user into sending a request with malicious code; the subsequent response of the request will allow the script to execute in the user’s browser.</Body>
        <ArticleImage src="https://i.imgur.com/c2ggard.png"/>
        <Body>Reflected XSS (<Hyperlink href="https://medium.com/iocscan/reflected-cross-site-scripting-r-xss-b06c3e8d638a" text="source"/>)</Body>
        <Body>Victor Zhou provides a great walkthrough of how an XSS attack may play out <Hyperlink href="https://victorzhou.com/blog/xss/" text="here"/>.</Body>
        <SubSubSection>What makes my website vulnerable?</SubSubSection>
        <Body>Any input field on your website, whether it be a contact form or the URL of the website itself, can be subject to this attack if you do not make any checks within your code to make sure the input is safe.</Body>
        <SubSubSection>How can I prevent Cross-Site Scripting?</SubSubSection>
        <SubSubSubSection>Input Validation</SubSubSubSection>
        <Body>Filter which input is allowed to be submitted to your web application based on the expected type of input. In <Hyperlink href="https://www.w3schools.com/js/js_validation.asp" text="vanilla JavaScript"/>, you can set the type attribute in any field of a form and this will check to make sure the input from the user matches the value of that attribute. If there is any mismatch between the two, a violation will be triggered. Template-driven frameworks such as Angular.js provide type-checking for more complex or customized kinds of input; this can be enabled by setting the type attribute. For more detailed instructions on input validation in Angular, see <Hyperlink href="https://angular.io/guide/form-validation" text="this tutorial"/>.</Body>
        <ArticleImage src="https://i.imgur.com/wJP1s2J.png"/>
        <Body>Example of user view for input validation (<Hyperlink href="https://www.javascripttutorial.net/javascript-dom/javascript-form-validation/" text="source"/>)</Body>
        <SubSubSubSection>Encoding on Output</SubSubSubSection>
        <Body>This applies to cases in which you need to display user input on your web application. Encoding in this context refers to converting the raw user input into a harmless type (such as text) before displaying that output on a web page. This ensures that if a malicious script is injected into an input field, it will be converted into a non-executable type and cannot be run.</Body>
        <Body>There are several ways to do this in JavaScript based on the context of the user input, as shown below:</Body>
        <ArticleImage src="https://i.imgur.com/9Xi7Vw7.png"/>
        <Body>Encoding User Input in Vanilla JS (<Hyperlink href="https://excess-xss.com/#xss-prevention" text="source"/>)</Body>
        <Body>One of the most common ways to encode data is by converting {"<"} and {">"} commonly used in HTML tags into harmless special characters, &lt and &gt. You can do this <Hyperlink href="https://excess-xss.com/#xss-prevention" text="manually in vanilla JavaScript"/> by creating functions to search for and change these characters, and modern frameworks such as Angular.js have this feature enabled by default (see how <Hyperlink href="https://snyk.io/blog/angular-security-best-practices/" text="here"/>).</Body>
        <SubSection>Cross-site Request Forgery Attacks (CSRF)</SubSection>
        <SubSubSubSection>What is a Cross-Site Request Forgery attack</SubSubSubSection>
        <Body>Cross-Site Request Forgery is an attack that tricks a victim into submitting a malicious request on behalf of an attacker, often as a result of social engineering.</Body>
        <Body>Victor Zhou provides a great walkthrough of how this kind of attack may play out <Hyperlink href="https://victorzhou.com/blog/csrf/" text="here"/>.</Body>
        <SubSubSection>What makes my website vulnerable?</SubSubSection>
        <Body>CSRF Attacks can happen to a website where any request made by the user is validated solely using session cookies.</Body>
        <SubSubSection>How can I prevent Cross-Site Request Forgery?</SubSubSection>
        <SubSubSubSection>Anti-CSRF Tokens</SubSubSubSection>
        <Body>Anti-SCRF tokens are tokens given to a user upon each request as a form of validation for their requests. A request will only succeed if the token in the request header matches the token generated by the user session. These tokens can have a custom expiration period; the shorter the expiration period, the more often a new token will have to be generated and the more secure your requests will be.</Body>
        <ArticleImage src="https://i.imgur.com/kSAcYYa.png"/>
        <Body>Anti-CSRF Token process (<Hyperlink href="https://appcheck-ng.com/csrf-cross-site-request-forgery" text="source"/>)</Body>
        <Body>Most modern frameworks have the built-in ability to check that the token was correctly generated and the request is coming from a legitimate user. In Angular, all that is required of the developer is to add HttpClientXsrfModule to the imports of any Angular component; now any time that component sends a request, the token will be generated and the correct CSRF header will be applied to the request for validation to occur. You can find more information on how to implement anti-CSRF tokens in Angular <Hyperlink href="https://www.stackhawk.com/blog/angular-csrf-protection-guide-examples-and-how-to-enable-it/" text="here"/>.</Body>
        <SubSection>Denial of Service Attacks (DoS)</SubSection>
        <SubSubSection>What is a Denial of Service attack?</SubSubSection>
        <Body>A Denial of Service Attack is an attack in which a malicious actor seeks to make a web application unavailable to its users by overwhelming the application’s resources, effectively shutting down the site. While a DoS attack comes from one source, and a Distributed Denial of Service Attack (DDoS) overwhelms the site from multiple sources; this makes it significantly more difficult to stop the attack.</Body>
        <ArticleImage src="https://i.imgur.com/NqSoLjy.png"/>
        <Body>DDoS Attack Visualized (<Hyperlink href="https://www.tek-tools.com/apm/detect-ddos-attack-with-log-analysis" text="source"/>)</Body>
        <Body>An attacker can inject code that allocates an extreme number of objects, change loop counters within functions, create bots to repeatedly upload large files or create large requests - all in an attempt to inundate the site with more than it has the resources for.</Body>
        <Body>You can check out a video of what a simple DoS attack looks like <Hyperlink href="https://www.youtube.com/watch?v=1P239rK9zCk" text="here"/>.</Body>
        <SubSubSection>What makes my website vulnerable?</SubSubSection>
        <Body>A number of vulnerabilities in both the front-end and back-end can increase your chances of a DDoS attack, including:</Body>
        <BulletItem>Cheap hosting providers (with lack of support)</BulletItem>
        <BulletItem>Inadequate resources for network traffic</BulletItem>
        <BulletItem>Lack of user input requirements/file upload requirements</BulletItem>
        <SubSubSection>How can I prevent Denial of Service?</SubSubSection>
        <SubSubSubSection>CAPTCHA</SubSubSubSection>
        <Body>A CAPTCHA test can be used to distinguish a user apart from a bot, as bots are often used to achieve DoS attacks. Often when a user has to submit something like a contact form, CAPTCHAs are used at the end to prevent bots from repeatedly spamming the server with submissions.</Body>
        <ArticleImage src="https://i.imgur.com/XABymXQ.png"/>
        <Body>Implementing CAPTCHA varies from framework to framework, but most documentation for these frameworks provide clear guides on how to enable it. You can find Angular’s <Hyperlink href="https://dev.to/rodrigokamada/adding-the-google-recaptcha-v2-to-an-angular-application-1o7o" text="here"/>.</Body>
        <SubSubSubSection>Limiting File/Request Sizes</SubSubSubSection>
        <Body>As another form of validating input, you can provide requirements for the types and sizes of files that can be uploaded on your site; this way attackers cannot overwhelm your site with large file uploads. Many libraries provide tools for this including <Hyperlink href="https://www.telerik.com/kendo-angular-ui/components/uploads/upload/restrictions/" text="KendoUI"/>, which helps create high-performance interactive web applications. KendoUI is compatible with Angular, React, jQuery, and Vue, and provides the FileRestrictions tool as demonstrated in Angular below:</Body>
        <ArticleImage src="https://i.imgur.com/2qg1BVx.png"/>
        <Body>KendoUI’s FileRestrictions for Angular (<Hyperlink href="https://www.telerik.com/kendo-angular-ui/components/uploads/upload/restrictions/" text="source"/>)</Body>
        <SubSubSection>Front-End Resources by Framework/Library</SubSubSection>
        <Body>Below is a collection of resources for some of the most common frameworks and libraries used by modern front-end web developers.</Body>
        <BulletItem>
        <Hyperlink href="https://www.stackhawk.com/blog/angular-xss-guide-examples-and-prevention/" text="Cross-Site Scripting Prevention" />
        </BulletItem>
        <BulletItem>
            <Hyperlink href="https://www.stackhawk.com/blog/angular-csrf-protection-guide-examples-and-how-to-enable-it/" text="Cross-Site Request Forgery Prevention" />
        </BulletItem>
        <BulletItem>
            <Hyperlink href="https://dev.to/rodrigokamada/adding-the-google-recaptcha-v2-to-an-angular-application-1o7o" text="Denial of Service Prevention (CAPTCHA)" />
        </BulletItem>
        <BulletItem>
            <Hyperlink href="https://www.telerik.com/kendo-angular-ui/components/uploads/fileselect/restrictions/" text="Denial of Service Prevention (File Limiting)" />
        </BulletItem>
        <BulletItem>
            <Hyperlink href="https://www.syncfusion.com/blogs/post/top-5-best-practices-angular-app-security.aspx" text="Angular Best Security Practices" />
        </BulletItem>
        <SubSubSection>React</SubSubSection>
        <BulletItem>
        <Hyperlink href="https://www.stackhawk.com/blog/react-xss-guide-examples-and-prevention/" text="Cross-Site Scripting Prevention" />
      </BulletItem>
      <BulletItem>
        <Hyperlink href="https://www.stackhawk.com/blog/react-csrf-protection-guide-examples-and-how-to-enable-it/" text="Cross-Site Request Forgery Prevention" />
      </BulletItem>
      <BulletItem>
        <Hyperlink href="https://blog.logrocket.com/implement-recaptcha-react-application/" text="Denial of Service Prevention (CAPTCHA)" />
      </BulletItem>
      <BulletItem>
        <Hyperlink href="https://www.telerik.com/kendo-react-ui/components/upload/restrictions/" text="Denial of Service Prevention (File Limiting)" />
      </BulletItem>
      <BulletItem>
        <Hyperlink href="https://www.freecodecamp.org/news/best-practices-for-security-of-your-react-js-application/" text="React Best Security Practices" />
      </BulletItem>
      <SubSubSection>Vue.js</SubSubSection>
      <BulletItem>
        <Hyperlink href="https://www.stackhawk.com/blog/vue-xss-guide-examples-and-prevention/" text="Cross-Site Scripting Prevention" />
      </BulletItem>
      <BulletItem>
        <Hyperlink href="https://www.stackhawk.com/blog/vue-csrf-protection-guide-csrf-examples-and-how-to-enable-protection/" text="Cross-Site Request Forgery Prevention" />
      </BulletItem>
      <BulletItem>
        <Hyperlink href="https://itnext.io/how-to-use-google-recaptcha-with-vuejs-7756244400da" text="Denial of Service Prevention (CAPTCHA)" />
      </BulletItem>
      <BulletItem>
        <Hyperlink href="https://www.telerik.com/kendo-vue-ui/components/upload/restrictions/" text="Denial of Service Prevention (File Limiting)" />
      </BulletItem>
      <BulletItem>
        <Hyperlink href="https://dev-academy.com/vue-security-best-practices/" text="Vue.js Best Security Practices" />
      </BulletItem>
        <SubSubSection>Ember.js</SubSubSection>
        <BulletItem>
        <Hyperlink href="https://gist.github.com/alanpeabody/1c2c23293e3d02b1cee1" text="Ember.js Security Best Practices" />
      </BulletItem>
      <SubSubSection>jQuery</SubSubSection>
      <BulletItem>
        <Hyperlink href="https://resources.infosecinstitute.com/topic/safely-and-wisely-use-jquery/" text="jQuery Security Best Practices" />
      </BulletItem>
      <Section>Back-end</Section>
      <SubSection>What is a Back-end Developer?</SubSection>
      <Body>A back-end web developer builds the engine of a website or app; the component not seen by the user that connects the front-end to the database.</Body>
    <Body>Common tasks for a back-end developer:</Body>
    <BulletItem>Ensuring correct website behavior by implementing business logic</BulletItem>
    <BulletItem>Building and managing the server that hosts the website</BulletItem>
    <BulletItem>Testing and debugging to ensure desired website behavior</BulletItem>
    <Body>Back-end developers must use a wide variety of frameworks and tools due to the range of tasks that comprise back-end development. These frameworks include <Hyperlink href="https://flask.palletsprojects.com/en/2.2.x/" text="Flask"/>, <Hyperlink href="https://dotnet.microsoft.com/en-us/apps/aspnet" text="ASP.NET"/>, <Hyperlink href="https://rubyonrails.org/" text="Ruby on Rails"/>, <Hyperlink href="https://www.djangoproject.com/" text="Django"/>, and <Hyperlink href="https://expressjs.com/" text="ExpressJS"/>.</Body>
    <SubSection>General Back-end Security Concerns</SubSection>
    <Body>OWASP Top 10</Body>
    <Body>The <Hyperlink href="https://owasp.org/www-project-top-ten/" text="OWASP Top 10"/> is a document listing the 10 most critical security risks in web development. As of 2021, the OWASP Top 10 were:</Body>
    <LabeledItem label="1">Broken Access Control</LabeledItem>
    <LabeledItem label="2">Cryptographic Failures</LabeledItem>
    <LabeledItem label="3">Injection</LabeledItem>
    <LabeledItem label="4">Insecure Design</LabeledItem>
    <LabeledItem label="5">Security Misconfiguration</LabeledItem>
    <LabeledItem label="6">Vulnerable and Outdated Components</LabeledItem>
    <LabeledItem label="7">Identification and Authentication Failures</LabeledItem>
    <LabeledItem label="8">Software and Data Integrity Failures</LabeledItem>
    <LabeledItem label="9">Security Logging and Monitoring Failures</LabeledItem>
    <LabeledItem label="10">Server-Side Request Forgery (SSRF)</LabeledItem>
    <SubSection>Directory Traversal Attack</SubSection>
    <SubSubSection>What is a Directory Traversal Attack?</SubSubSection>
    <Body>A Directory Traversal Attack involves accessing files and directories that are stored on the server machine. Here an attacker can manipulate file references in the source code for a web application using the ../ sequence to access parent directories.</Body>
    <Body><Hyperlink href="https://portswigger.net/web-security/file-path-traversal/lab-simple" text="This lab"/> demonstrates a directory traversal attack, and how easy such an attack can be.</Body>
    <SubSubSection>What makes my website vulnerable?</SubSubSection>
    <Body>Directory traversal is due to <Hyperlink href="https://owasp.org/Top10/A01_2021-Broken_Access_Control/" text="broken access control"/>, a vulnerability in which users are able to access data and perform actions outside of the permissions intended for them by the developers. Broken access control is the most critical security risk in the 2021 OWASP Top 10 as 94% of web applications were found to have some form of broken access control.</Body>
    <Body>Specifically, directory traversal occurs when files are accessed using unsanitized user input. For example, in the following JavaScript code, the application returns a user-specified file without checking the validity of the input file:</Body>
    <ArticleImage src={Code}/>
    <Body><Hyperlink href="https://www.w3schools.com/nodejs/nodejs_mysql.asp" text="(Source)"/></Body>
    <Body>Here, if the server hosts some secret file at the path '/wwwroot../../../etc/passwd', a user could access that file by inputting the path '../../../etc/passwd'.</Body>
    <SubSubSection>How can I prevent directory traversal?</SubSubSection>
<SubSubSubSection>Path normalization</SubSubSubSection>
<Body>Sanitize user inputs by normalizing paths before returning files. For example, the above vulnerable code could be modified like so:</Body>
<ArticleImage src={Code2}/>
<Body><Hyperlink href="https://learn.snyk.io/lessons/directory-traversal/javascript/#step-1THWixfbfs2r2ld9J8R9qP" text="(Source)"/></Body>
<Body>In the line path.normalize(filename), the Javascript path.normalize function removes '../' from the input string. Thus, if a user inputs the path '../../../etc/passwd' , the application would return the path '/wwwroot/etc/passwd', which no longer accesses the secret file.</Body>
<SubSection>Plaintext credential access</SubSection>
<SubSubSection>What is plaintext credential access?</SubSubSection>
<Body>Plaintext credential access occurs when a password is stored as plaintext in a source file, allowing an attacker to access accounts used by the server.</Body>
<Body>This type of attack occurs due to <Hyperlink href="https://owasp.org/Top10/A02_2021-Cryptographic_Failures/" text="cryptographic failure"/>, a vulnerability in which sensitive information is exposed due to lack of encryption or weak encryption. Cryptographic failure is the second-most critical vulnerability in the OWASP Top 10.</Body>
<ArticleImage src="https://cheapsslsecurity.com/blog/wp-content/uploads/2022/06/cryptographic-failure-example.png"/>
<Body><Hyperlink href="https://cheapsslsecurity.com/blog/what-are-the-owasp-top-10-vulnerabilities-and-how-to-mitigate-them/" text="(Source)"/></Body>
<Body>This type of attack is demonstrated in <Hyperlink href="https://portswigger.net/web-security/information-disclosure/exploiting/lab-infoleak-via-backup-files" text="this lab activity"/>.</Body>
<SubSubSection>What makes my website vulnerable?</SubSubSection>
<Body>An application is vulnerable when accessing services or accounts using credentials stored as strings in the source code. For example, in the following JavaScript code the server accesses its MySQL database using plaintext credentials:</Body>
<ArticleImage src={Code3}/>
<Body><Hyperlink href="https://www.w3schools.com/nodejs/nodejs_mysql.asp" text="(Source)"/></Body>
<Body>If an attacker were able to access this file, they’d then be able to access the application’s MySQL database using these credentials.</Body>
<SubSubSection>How can I prevent plaintext credential access?</SubSubSection>
<SubSubSubSection>Use environment variables</SubSubSubSection>
<Body>Store all credentials as environment variables in one .env file like so:</Body>
<ArticleImage src={Code4}/>
<Body>These environment variables can then be accessed in source code using helper modules. For example, in JavaScript, the dotenv module can be used to access the .env file:</Body>
<ArticleImage src={Code5}/>
<Body><Hyperlink href="https://stackoverflow.com/questions/45946030/how-to-add-database-environment-variables-to-javascript" text="(Source)"/></Body>
<Body>In this source code, the credentials aren’t directly used; rather, they’re accessed through references to the environment variables in the .env file. Now, if an attacker is able to view the source code for this web application, they would not have access to the actual credentials.</Body>
<SubSubSection>SQL Injection</SubSubSection>
<SubSubSubSection>What is SQL Injection?</SubSubSubSection>
<Body>SQL Injection is an attack in which a user manipulates the server into performing certain actions by entering SQL queries as user input.</Body>
<Body>The SQL Injection attack falls under <Hyperlink href="https://owasp.org/Top10/A03_2021-Injection/" text="the OWASP Injection vulnerability"/>, the third-most critical vulnerability.</Body>
<ArticleImage src="https://knowledge-base.secureflag.com/assets/images/vuln/sql_injection/sql_injection_vulnerability/kb_0.png"/>
<Body><Hyperlink href="https://knowledge-base.secureflag.com/vulnerabilities/sql_injection/sql_injection_vulnerability.html" text="(Source)"/></Body>
<Body>This type of attack is demonstrated in <Hyperlink href="https://portswigger.net/web-security/sql-injection/lab-login-bypass" text="this lab activity"/>.</Body>
<SubSubSection>What makes my website vulnerable?</SubSubSection>
<Body>A website is vulnerable to SQL injection when user inputs are directly inserted into SQL queries without validation or sanitation. For example, let a server check login credentials using the following query:</Body>
<ArticleImage src={Code6}/>
<Body><Hyperlink href="https://planetscale.com/blog/how-to-prevent-sql-injection-attacks-in-node-js" text="(Source)"/></Body>
<Body>If an attacker knew the existence of an account with the username admin, the attacker could bypass the credential check and access the account by logging in with the username admin';--.</Body>
<Body>The server would then execute the query</Body>
<ArticleImage src={Code7}/>
<Body>Here the quote closes the username string, the semicolon terminates the command, and the two dashes comment out the rest of the line. As a result, this query simply returns the account with the username admin regardless of the password entered.</Body>
<SubSubSection>How can I prevent SQL Injection?</SubSubSection>
<SubSubSubSection>Use prepared queries</SubSubSubSection>
<Body>Use prepared queries which use placeholders for user input in query strings. For example, in JavaScript, prepared queries use a question mark as a placeholder:</Body>
<ArticleImage src={Code8}/>
<Body><Hyperlink href="https://planetscale.com/blog/how-to-prevent-sql-injection-attacks-in-node-js" text="(Source)"/></Body>
<Body>Here, the user-supplied username and password are inserted into the query rather than concatenated to the query string. Now, if an attacker were to log in with the username admin';--, the SQL query would be</Body>
<ArticleImage src={Code9}/>
<Body>Here, the entirety of the input username is treated as a string rather than as part of the query. Thus, the query searches for the account with the username admin';--, and the attacker is unable to access the admin account without supplying the correct password.</Body>
<SubSection>Back-End Resources by Framework/Library</SubSection>
<Body>Below is a collection of security resources for commonly-used back-end frameworks.</Body>
<SubSubSection>Flask</SubSubSection>
<BulletItem>
    <Hyperlink href="https://security.openstack.org/guidelines/dg_using-file-paths.html" text="Directory Traversal Prevention" />
</BulletItem>
<BulletItem>
    <Hyperlink href="https://prettyprinted.com/tutorials/automatically_load_environment_variables_in_flask" text="Cryptographic Failure Prevention (Environment Variables)" />
</BulletItem>
<BulletItem>
    <Hyperlink href="https://realpython.com/prevent-python-sql-injection/" text="SQL Injection Prevention" />
</BulletItem>
<BulletItem>
    <Hyperlink href="https://flask.palletsprojects.com/en/2.2.x/security/" text="Flask Best Security Practices" />
</BulletItem>
<SubSubSection>ASP .NET</SubSubSection>
<BulletItem>
    <Hyperlink href="https://infosecwriteups.com/asp-net-core-path-traversal-e2bed792d171" text="Directory Traversal Prevention" />
</BulletItem>
<BulletItem>
    <Hyperlink href="https://learn.microsoft.com/en-us/aspnet/core/host-and-deploy/iis/web-config?view=aspnetcore-7.0" text="Cryptographic Failure Prevention (Environment Variables)" />
</BulletItem>
<BulletItem>
    <Hyperlink href="https://www.stackhawk.com/blog/net-sql-injection-guide-examples-and-prevention/" text="SQL Injection Prevention" />
</BulletItem>
<BulletItem>
    <Hyperlink href="https://learn.microsoft.com/en-us/aspnet/core/security/?view=aspnetcore-7.0" text="ASP .NET Best Security Practices" />
</BulletItem>
<SubSubSection>Ruby on Rails</SubSubSection>
<BulletItem>
    <Hyperlink href="https://www.stackhawk.com/blog/rails-path-traversal-guide-examples-and-prevention/" text="Directory Traversal Prevention" />
</BulletItem>
<BulletItem>
    <Hyperlink href="https://itnext.io/environment-variables-in-ruby-on-rails-17e4934cfd71" text="Cryptographic Failure Prevention (Environment Variables)" />
</BulletItem>
<BulletItem>
    <Hyperlink href="https://www.stackhawk.com/blog/sql-injection-prevention-rails/" text="SQL Injection Prevention" />
</BulletItem>
<BulletItem>
    <Hyperlink href="https://guides.rubyonrails.org/security.html" text="Ruby on Rails Best Security Practices" />
</BulletItem>
<SubSubSection>Django</SubSubSection>
<BulletItem>
    <Hyperlink href="https://www.stackhawk.com/blog/django-path-traversal-guide-examples-and-prevention/#:~:text=Django%20path%20traversal%20or%20directory,(..%2F)%20sequence." text="Directory Traversal Prevention" />
</BulletItem>
<BulletItem>
    <Hyperlink href="https://djangocentral.com/environment-variables-in-django/" text="Cryptographic Failure Prevention (Environment Variables)" />
</BulletItem>
<BulletItem>
    <Hyperlink href="https://www.stackhawk.com/blog/sql-injection-prevention-django/" text="SQL Injection Prevention" />
</BulletItem>
<BulletItem>
    <Hyperlink href="https://docs.djangoproject.com/en/4.1/topics/security/" text="Django Best Security Practices" />
</BulletItem>
<SubSubSection>ExpressJS</SubSubSection>
<BulletItem>
    <Hyperlink href="https://www.stackhawk.com/blog/node-js-path-traversal-guide-examples-and-prevention/" text="Directory Traversal Prevention" />
</BulletItem>
<BulletItem>
    <Hyperlink href="https://www.twilio.com/blog/working-with-environment-variables-in-node-js-html" text="Cryptographic Failure Prevention (Environment Variables)" />
</BulletItem>
<BulletItem>
    <Hyperlink href="https://www.stackhawk.com/blog/node-js-sql-injection-guide-examples-and-prevention/" text="SQL Injection Prevention" />
</BulletItem>
<BulletItem>
    <Hyperlink href="https://expressjs.com/en/advanced/best-practice-security.html" text="ExpressJS Best Security Practices" />
</BulletItem>
<Section>Database</Section>
<SubSection>Who are database developers?</SubSection>
<Body>In most companies, Database developers are mainly back-end software engineers, data analysts, business analysts, SQL administrators, IT managers, etc. Usually, only mega companies such as Google, Meta, Microsoft, etc have database developers who ensure the privacy and security of the database and its availability. Database developers are responsible for creating stable, dependable, and efficient databases in order to provide an organized structure for the storage, access, manipulation, and analysis of data in line with business requirements. At the same time, they must efficiently maintain the databases to ensure that they perform at their highest level of efficiency, productivity, and data availability at all times. The usage of the database must be continuously monitored, including the number of transactions, concurrency levels, and response times. Finally, they must enforce robust security protocols to ensure that data is constantly safe, intact, and consistent. Regular backups of the database must be taken, data archives created, and efficient storage strategies must be planned to enable the company’s operations to scale appropriately.</Body>
<SubSection>General Database Developer Concerns</SubSection>
<Body>The attacks often happen at the front-end (Cross-site scripting) and Back-end (SQL injection) where hackers are able to input codes to alter or make queries to the database. To prevent this, there are some tips for developers to follow when implementing databases to mitigate the risks of a data breach or leak or permanent loss from various attacks.</Body>
<SubSection>How to design a secure database?</SubSection>
<Body>Instead of storing the actual data in a single database, developers can take advantage of the existing technologies that come with the Database systems. The majority of database systems such as MySQL and Oracle Database come with built-in properties such as encryption and masking to make databases more secure and less vulnerable when attacks happen. These tools would store data across different databases and distort or change how data is displayed so that if hackers got access to it, it would be hard for them to gain access to everything in one go.</Body>
<Body>Before we jump into various methods to secure databases, we will group data into two main categories based on how they are utilized.</Body>
<LabeledItem label="1">Normal Data</LabeledItem>
<LabeledItem label="2">Authentication Data</LabeledItem>
<SubSubSection>1. Normal Data</SubSubSection>
<Body>Normal data is what developers need to query, display, or use somewhere in the back or front-end of the web. Examples include Name, Date of Birth, Account balance, etc. These data types make up the majority of the database as they are used to display and make interactive operations with users. Developers would store these data and query it back at some points, which is a two-way query system.</Body>
<SubSubSection>2. Authentication Data</SubSubSection>
<Body>Authentication data, on the other hand, is only for authentication purposes. For example, passwords are used to identify whether the person trying to access the system is in fact the original user. Apart from passwords, digital signatures are used for authenticating virtual or e-signatures in documents. In contrast to normal data, we do not necessarily need to get access to it, but rather just verify it. Thus, we can transform it without the need to figure out a way to get it back but rather have a mechanism to check the original data and the transformed data matches.</Body>
<SubSection>Implementing a secure database for normal data</SubSection>
<SubSubSection>1. Masking</SubSubSection>
<Body>Masking is the process of hiding sensitive or confidential data in a database by replacing it with fictitious but realistic data. This is done to protect the privacy of the original data, especially when it needs to be shared or used for testing purposes.</Body>
<Body>Masking techniques involve altering the data values in a way that preserves the data format and maintains its statistical properties but renders it unusable for identifying individuals or revealing sensitive information. For example, a credit card number may be replaced with a masked value that has the same number of digits but does not contain the actual account information. We can either apply masking at the database level or app level in the back-end. Below is an example of masking each digit in a credit card number in MySQL by applying modulo to the number and adding 2 to it. Apart from this transformed data, we will have a <strong>lookup map</strong> to retrieve the data we replaced.</Body>
<ArticleImage src={Code10}/>
<Body>At the same time, masking can be implemented at the back-end before storing data into the database. Here is a sample Python code to show how it is implemented.</Body>
<ArticleImage src={Code11}/>
<SubSubSection>2. Redaction</SubSubSection>
<Body>Redaction is similar to masking, but instead of replacing it with a fictitious number, we use * to hide some part of the data. E.g. A social security number of 123-45-6789 will be displayed in the table as *--6789 instead. This ensures least privilege so that there is no internal threat where employees misuse their privilege to access these data. The following is an example of how redaction is implemented in MySQL.</Body>
<ArticleImage src={Code12}/>
<SubSubSection>3. Encryption</SubSubSection>
<Body>Encryption is the process of transforming plain text data into ciphertext, which is a scrambled and unreadable form of the original data. This is done to protect sensitive data from unauthorized access or exposure.</Body>
<Body>Encryption can be applied to data at rest (stored in a database) or in transit (being transmitted between systems or over a network). There are several different encryption algorithms and techniques that can be used to encrypt data such as AES-128, RSA, Triple DES, etc. Most database systems come with a built-in encryption called <strong>Transparent Data Encryption</strong> which uses AES-256 encryption algorithm to encrypt data at real-time input/output and data at rest. This is a very useful feature for developers to take advantage of.</Body>
<Body>Here’s an example SQL code for encrypting data.</Body>
<ArticleImage src={Code13}/>
<SubSection>Implementing secure database for authentication data</SubSection>
<Body>Unlike normal data, we do not need to be concerned about retrieving the data that has been altered through different algorithms. This is where <strong>Hashing</strong> comes into use. Hashing is the process of converting a given input or key into a fixed-sized, unique, and deterministic output, called a hash value or hash code. This hash value can be used to index and quickly locate data in a database. Unlike encryption, the hashed value cannot be converted back to the original data. However, the same key always maps to the same value given that the hash table is large enough to prevent hash collision. It is a very effective way to store passwords since no one including the developer who has access to the database cannot see the real password but rather just can authenticate whether the password matches. Here is how to implement password hashing in MySQL</Body>
<ArticleImage src={Code14}/>
<SubSection>Filesystem level encryption</SubSection>
<Body>Apart from the steps mentioned above, we can use file-based encryption to build a more secure database. File-based encryption takes each file and encrypts it regardless of what type of file it is. Since it happens at a file level, we do not need to have a very organized database or the same type of database or format to encrypt it. Below are some advantages of using Filesystem level encryption.</Body>
<SubSubSection>1. Structured/Unstructured Encryption</SubSubSection>
<Body>As databases do not need to be the same type or format, it is easier for developers to use this encryption tool. At the same time, companies do not need to worry when changing/upgrading their database infrastructure since this encryption is at the file level and does not require a new technology to encrypt for new types of database systems thus giving companies flexibility.</Body>
<SubSubSection>2. One size fits all approach</SubSubSection>
<Body>Since this encryption does not require databases to be uniform, companies that use different types of databases at the same time will find it easier to work with this type of encryption. No extra training is needed when a developer from one database team switches to the other team using a different database system.</Body>
<SubSubSection>3. Encryption Key Management</SubSubSection>
<Body>Since each file is encrypted by a unique key, attackers have to decrypt each file as compared to normal encryption where the hackers can get access to the whole system. Thus, this file-based encryption is one of the best practices to protect not only the database but all kinds of files.</Body>
<Body>File-based encryption tools are widely available. Below are some recommended file-based encryption softwares</Body>
<SubSubSection>1. Nordlocker</SubSubSection>
<ArticleImage src="https://i.pcmag.com/imagery/reviews/07dMpnOA3A4Fn2NCZieIvIZ-18.fit_scale.size_760x427.v1591117807.png"/>
<Body>Nordlocker offers file-based encryption software which uses AES-256 algorithm. It offers plans for both personal and business use with prices ranging from $3 to $15 monthly per device. Moreover, it is very convenient to use that users just need to put the file in NordLocker directory to store their files and it will automatically encrypt and decrypt when the user accesses the files. It is compatible with Mac, Windows, and Linux systems and even on smartphones and this is the most recommended software for its affordability and user-friendly interface.</Body>
<SubSubSection>2. AxCrypt</SubSubSection>
<ArticleImage src="https://i.pcmag.com/imagery/reviews/01jciGTh8bUT5wFvORiELjy-10..v1627508527.jpg"/>
<Body>AxCrypt is another file-based encryption software that is easy to use and affordable. Their business plan includes a wide range of services such as editing encrypted files, secure sharing using public-key cryptography, secure file deletion, and online password storage.</Body>
<Section>A Developer's Checklist</Section>
<SubSection>Front-end:</SubSection>
<SubSubSection>XSS Prevention</SubSubSection>
<SubSubSubSection>Validated user input</SubSubSubSection>
<SubSubSubSection>Encoded data on output</SubSubSubSection>
<SubSubSection>CSRF Prevention</SubSubSection>
<SubSubSubSection>Added Anti-CSRF tokens to all components with requests</SubSubSubSection>
<SubSubSection>DoS Prevention</SubSubSection>
<SubSubSubSection>Implemented CAPTCHA on forms</SubSubSubSection>
<SubSubSubSection>Limited file sizes/extensions</SubSubSubSection>
<SubSection>Back-end:</SubSection>
<SubSubSection>Directory Traversal Prevention</SubSubSection>
<SubSubSubSection>Validated user input</SubSubSubSection>
<SubSubSubSection>Normalized file paths</SubSubSubSection>
<SubSubSection>Credential Leakage Prevention</SubSubSection>
<SubSubSubSection>Stored credentials as environment variables in configuration file</SubSubSubSection>
<SubSubSection>SQL Injection Prevention</SubSubSection>
<SubSubSubSection>Used prepared queries</SubSubSubSection>
<SubSection>Database:</SubSection>
<SubSubSection>Normal data</SubSubSection>
<SubSubSubSection>Mask data</SubSubSubSection>
<SubSubSubSection>Redact data</SubSubSubSection>
<SubSubSubSection>Encrypt data</SubSubSubSection>
<SubSubSection>Authentication data</SubSubSection>
<SubSubSubSection>Hash data</SubSubSubSection>
<SubSubSection>Overall, use file-based encryption tools.</SubSubSection>
<References>
    <ReferenceItem label="1">https://www.imperva.com/learn/application-security/cross-site-scripting-xss-attacks</ReferenceItem>
    <ReferenceItem label="2">https://www.securecoding.com/blog/xss-attacks/</ReferenceItem>
    <ReferenceItem label="3">https://angular.io/guide/form-validation</ReferenceItem>
    <ReferenceItem label="4">https://www.w3schools.com/angular/angular_validation.asp</ReferenceItem>
    <ReferenceItem label="5">https://excess-xss.com/#xss-prevention</ReferenceItem>
    <ReferenceItem label="6">https://victorzhou.com/blog/csrf/</ReferenceItem>
    <ReferenceItem label="7">https://victorzhou.com/blog/xss/</ReferenceItem>
    <ReferenceItem label="8">https://www.imperva.com/learn/application-security/csrf-cross-site-request-forgery/</ReferenceItem>
    <ReferenceItem label="9">https://www.feroot.com/education-center/what-is-front-end-security/</ReferenceItem>
    <ReferenceItem label="10">https://www.stackhawk.com/blog/angular-csrf-protection-guide-examples-and-how-to-enable-it/</ReferenceItem>
    <ReferenceItem label="11">https://www.tek-tools.com/apm/detect-ddos-attack-with-log-analysis</ReferenceItem>
    <ReferenceItem label="12">https://owasp.org/www-community/attacks/Denial_of_Service</ReferenceItem>
    <ReferenceItem label="13">https://www.comparitech.com/blog/information-security/ddos-statistics-facts/</ReferenceItem>
    <ReferenceItem label="14">https://www.youtube.com/watch?v=1P239rK9zCk</ReferenceItem>
    <ReferenceItem label="15">https://dev.to/rodrigokamada/adding-the-google-recaptcha-v2-to-an-angular-application-1o7o</ReferenceItem>
    <ReferenceItem label="16">https://simple.wikipedia.org/wiki/CAPTCHA</ReferenceItem>
    <ReferenceItem label="17">https://www.telerik.com/kendo-angular-ui/components/uploads/upload/restrictions/</ReferenceItem>
    <ReferenceItem label="18">https://owasp.org/www-project-top-ten/</ReferenceItem>
    <ReferenceItem label="19">https://owasp.org/Top10/A01_2021-Broken_Access_Control/</ReferenceItem>
    <ReferenceItem label="20">https://portswigger.net/web-security/file-path-traversal/lab-simple</ReferenceItem>
    <ReferenceItem label="21">https://learn.snyk.io/lessons/directory-traversal/javascript/</ReferenceItem>
    <ReferenceItem label="22">https://www.w3schools.com/nodejs/nodejs_mysql.asp</ReferenceItem>
    <ReferenceItem label="23">https://learn.snyk.io/lessons/directory-traversal/javascript/#step-1THWixfbfs2r2ld9J8R9qP</ReferenceItem>
    <ReferenceItem label="24">https://owasp.org/Top10/A02_2021-Cryptographic_Failures/</ReferenceItem>
    <ReferenceItem label="25">https://portswigger.net/web-security/information-disclosure/exploiting/lab-infoleak-via-backup-files</ReferenceItem>
    <ReferenceItem label="26">https://cheapsslsecurity.com/blog/what-are-the-owasp-top-10-vulnerabilities-and-how-to-mitigate-them/</ReferenceItem>
    <ReferenceItem label="27">https://stackoverflow.com/questions/45946030/how-to-add-database-environment-variables-to-javascript</ReferenceItem>
    <ReferenceItem label="28">https://owasp.org/Top10/A03_2021-Injection/</ReferenceItem>
    <ReferenceItem label="29">https://portswigger.net/web-security/sql-injection/lab-login-bypass</ReferenceItem>
    <ReferenceItem label="30">https://knowledge-base.secureflag.com/vulnerabilities/sql_injection/sql_injection_vulnerability.html</ReferenceItem>
    <ReferenceItem label="31">https://planetscale.com/blog/how-to-prevent-sql-injection-attacks-in-node-js</ReferenceItem>
    <ReferenceItem label="32">https://www.ibm.com/topics/database-security#:~:text=the next step-,What is database security%3F,compromised in most data breaches.</ReferenceItem>
    <ReferenceItem label="33">https://www.sumologic.com/blog/what-is-database-security/</ReferenceItem>
    <ReferenceItem label="34">https://www.oracle.com/security/database-security/</ReferenceItem>
    <ReferenceItem label="35">https://backendless.com/database-security-best-practices/</ReferenceItem>
</References>
        </>
    )
}