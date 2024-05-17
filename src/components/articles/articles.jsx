import WebDevelopers from "./WebDevelopers";
import TechStartups from "./TechStartups";
import SoftwareDevelopers from "./SoftwareDevelopers";
import SecurityCompromises from "./SecurityCompromises";
import RegularlyWork from "./RegularlyWork";
import MobileUsage from "./MobileUsage";
import MachineLearning from "./MachineLearning";
import InternetOfThings from "./InternetOfThings";
import EverydayWebUsage from "./EverydayWebUsage";

import { Drama } from "lucide-react";
import { Laptop } from "lucide-react";
import { Router } from "lucide-react";
import { BrainCog } from "lucide-react";
import { TabletSmartphone } from "lucide-react";
import { Building2 } from "lucide-react";
import { Binary } from "lucide-react";
import { Boxes } from "lucide-react";
import { LayoutTemplate } from "lucide-react";

export const articlesList = [
    {
        title: "Dealing with Security Compromises for Everyday Internet Users",
        description: "Understand internet scams: what the most common scams are, how to identify a scam, and how to respond if you've fallen victim.",
        publishDate: "May 1st, 2024",
        authors: [
            "Sofia Melendez",
            "Chentao Ye",
            "Lichen Brittany Zhang"
        ],
        contributors: [
            "Chloe Braswell"
        ],
        tags: [
            "Scams",
            "Everyday",
        ],
        icon: <Drama />,
        content: <SecurityCompromises />,
        linkString: "dealing-with-security-compromises-for-everyday-internet-users"
    },
    {
        title: "Educational Security and Privacy Advice for Everyday Web Usage",
        description: "Learn up-to-date strategies for secure web usage, including password best practices, two-factor authentication advice, and tips on how to assess your online environment.",
        publishDate: "May 1st, 2024",
        authors: [
            "Lingtao Kong",
            "Patrick Jiang",
            "Mariam Muchai"
        ],
        contributors: [
            "Chloe Braswell",
            "Theo Maurino"
        ],
        tags: [
            "Web",
            "Everyday",
        ],
        icon: <Laptop />,
        content: <EverydayWebUsage />,
        linkString: "educational-security-and-privacy-advice-for-everyday-web-usage"
    },
    {
        title: "Security and Privacy in the Internet of Things",
        description: "Learn best practices when using Internet of Things devices to protect your personal data and maintain your privacy.",
        publishDate: "May 1st, 2024",
        authors: [
            "Li Kang Tan",
            "Julia Odden",
            "Conor Kotwasinski"
        ],
        contributors: [
            "Chloe Braswell"
        ],
        tags: [
            "IoT",
        ],
        icon: <Router />,
        content: <InternetOfThings />,
        linkString: "security-and-privacy-in-internet-of-things"
    },
    {
        title: "Privacy and Security in Machine Learning and AI",
        description: "Discover how to create a safe and secure pipeline for your Machine Learning needs through best practices alongside data and model protection.",
        publishDate: "May 1st, 2024",
        authors: [
            "Anish Bhardwaj",
            "David Kim",
            "Andrew Huang"
        ],
        tags: [
            "Machine Learning",
            "Artificial Intelligence",
        ],
        icon: <BrainCog />,
        content: <MachineLearning />,
        linkString: "privacy-and-security-machine-learning-and-ai"
    },
    {
        title: "Security and Privacy for Everyday Mobile Usage",
        description: "Get to know the security landscape for mobile devices, including tips for using mobile applications, connecting to the internet, using bluetooth, and using physical devices.",
        publishDate: "May 1st, 2024",
        authors: [
            "Megan Yaur",
            "Stephanie Yaur"
        ],
        contributors: [
            "Ruhama Tesfa"
        ],
        tags: [
            "Mobile",
            "Everyday",
        ],
        icon: <TabletSmartphone />,
        content: <MobileUsage />,
        linkString: "security-and-privacy-for-everyday-mobile-usage"
    },
    // {
    //     title: "Security Advice for Those Who Work Regularly with Technology",
    //     description: "Learn the most critical security and data privacy practices to be followed in an organization along with real-world examples of security problems.",
    //     publishDate: "May 1st, 2024",
    //     authors: [
    //         "Nandipa Siluma",
    //         "Preeti Subbiah"
    //     ],
    //     contributors: [
    //         "Kris Yun"
    //     ],
    //     tags: [
    //         "Organizations",
    //     ],
    //     icon: <Building2 />,
    //     content: <RegularlyWork />,
    //     linkString: "security-advice-for-those-who-work-regularly-with-technology"
    // },
    // {
    //     title: "Security and Privacy Education for Software Developers",
    //     description: "Discover how to meaningfully secure your project as a software developer by applying security principles to your code.",
    //     publishDate: "May 1st, 2024",
    //     authors: [
    //         "Huaxuan Chen"
    //     ],
    //     contributors: [
    //         "Chloe Braswell"
    //     ],
    //     tags: [
    //         "Software Development",
    //     ],
    //     icon: <Binary />,
    //     content: <SoftwareDevelopers />,
    //     linkString: "software-developers"
    // },
    // {
    //     title: "The Privacy and Security Guide for Tech Startups",
    //     description: "Learn the critical steps that early-stage technology-focused startups need to follow to safeguard against external security threats, ensure legal compliance, and avoid fines.",
    //     publishDate: "May 1st, 2024",
    //     authors: [
    //         "Dennis Wu",
    //         "Abenezer Tamene",
    //         "Han Lee"
    //     ],
    //     tags: [
    //         "Startups",
    //     ],
    //     icon: <Boxes />,
    //     content: <TechStartups />,
    //     linkString: "the-privacy-and-security-guide-for-tech-startups"
    // },
    // {
    //     title: "Security and Privacy for Web Developers",
    //     description: "A guide to implementing security and privacy features for individuals who are familiar with how to develop we applications but are unfamiliar with the security concerns of web applications.",
    //     publishDate: "May 1st, 2024",
    //     authors: [
    //         "Maya Lundell",
    //         "Sophie Rollins",
    //         "Mason Naung"
    //     ],
    //     tags: [
    //         "Web",
    //         "Software Development",
    //     ],
    //     icon: <LayoutTemplate />,
    //     content: <WebDevelopers />,
    //     linkString: "security-and-privacy-for-web-developers"
    // },
]