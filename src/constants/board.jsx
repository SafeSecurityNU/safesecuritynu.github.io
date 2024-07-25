import { Medal, GraduationCap, Laptop, BadgeDollarSign, Instagram, Handshake, BookMarked } from "lucide-react";
import kris from '/src/assets/kris.png';
import chloe from '/src/assets/chloe.jpeg';
import bennett from '/src/assets/bennett.png';
import randy from '/src/assets/randy.jpeg';
import kaylie from '/src/assets/kaylie.jpg';
import maya from '/src/assets/maya.jpg'
import nandan from '/src/assets/nandan.jpeg';
import eric from '/src/assets/eric.jpeg';
import jj from '/src/assets/jj.jpg';
import sruti from '/src/assets/sruti.jpg';

export const boardList = [
    {
        icon: <Medal />,
        name: "Kris Yun",
        position: "President",
        description: "Kris is a Social Policy + Computer Science major interested in the intersection of cybersecurity and policy. Outside of Safe Security, she is involved in WildHacks and works at Shostack + Associates. Kris is excited for the future of Safe Security and meeting new people!",
        imgSrc: kris // Correctly assigned the image
    },
    {
        icon: <GraduationCap />,
        name: "Chloe Braswell",
        position: "Director of Education",
        description: "Chloe is a Computer Science + Economics major. In her free time, she enjoys watching movies and trying new restaurants in downtown Evanston with her friends. She is so excited to be a part of Safe Security and watch our community grow this year!",
        imgSrc: chloe
    },
    {
        icon: <Laptop />,
        name: "Bennett Lindberg",
        position: "Co-Director of Technology",
        description: "Bennett is a Computer Science major interested in systems and programming languages research as well as full-stack application development. While at Northwestern, he has served as a Peer Mentor for various courses, been involved with a startup at the Garage, and engaged in graduate-level research.",
        imgSrc: bennett
    },
    {
        icon: <Laptop />,
        name: "Randy Truong",
        position: "Co-Director of Technology",
        description: "Randy is a Computer Science + Math major. Randy likes coding and sushi, but mostly sushi.",
        imgSrc: randy
    },
    {
        icon: <Instagram />,
        name: "Kaylie Mei",
        position: "Co-Director of Marketing",
        description: "Kaylie is a Computer Science + Statistics major. She is thrilled to be a part of Safe Security and contribute to its mission.",
        imgSrc: kaylie
    },
    {
        icon: <Instagram />,
        name: "Maya Ramaswamy",
        position: "Co-Director of Marketing",
        description: "Maya is a Mechanical Engineering major + Machine Learning and Data Science minor. In her free time, Maya is a part of the Society of Women Engineers (SWE) and The Women’s Network (TWN). She is thrilled to be a part of and see the amazing things to come for Safe Security!",
        imgSrc: maya
    },
    {
        icon: <BadgeDollarSign />,
        name: "Nandan Dhanesh",
        position: "Director of Partnerships",
        description: "Nandan is a Computer Science + Economics major. Aside from Safe Security, Nandan is involved in SASA and Private Equity and Venture Capital. Nandan is a fan of basketball and bodybuilding and sometimes likes to cook.",
        imgSrc: nandan
    },
    {
        icon: <Handshake />,
        name: "Eric Zhang",
        position: "Co-Director of Community Engagement",
        description: "Eric is a Computer Science and Mathematics major who enjoys playing tennis, and has recently taken up playing Pokemon Go.",
        imgSrc: eric
    },
    {
        icon: <Handshake />,
        name: "Janelys Graciano",
        position: "Co-Director of Community Engagement",
        description: "Janelys Graciano is a Computer Science + Data Science Minor. She is an amateur cinephile and a baking enthusiast. Janelys is passionate about advancing the role of women in STEM spaces. She's excited to see the Safe Security community flourish.",
        imgSrc: jj
    },
    {
        icon: <BookMarked />,
        name: "Dr. Sruti Bhagavatula",
        position: "Northwestern University Faculty Advisor",
        description: "Dr. Sruti Bhagavatula is an Assistant Professor of Instruction in Computer Science at Northwestern University. Professor Bhagavatula is an expert in security education and human-centered security and privacy. Her research largely focuses on these topics related to various computing domains and she has also developed various security and privacy courses aimed at broadening security and privacy exposure at Northwestern. We are very grateful for all of her support.",
        imgSrc: sruti
    },
];
