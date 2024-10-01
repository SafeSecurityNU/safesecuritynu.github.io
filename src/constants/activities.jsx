import { Newspaper } from "lucide-react";
import { MessagesSquare } from "lucide-react";
import { Presentation } from "lucide-react";
import { Podcast } from "lucide-react";

export const activitiesList = [
  {
    icon: <MessagesSquare />,
    text: "Discuss Pertinent Cybersecurity Topics",
    description:
      "We engage in lively discussions as a club about common cybersecurity threats, how to mitigate against these threats, and how to best keep our communities safe.",
    button: null
  },
  {
    icon: <Newspaper />,
    text: "Write Articles to Educate Others",
    description:
      "In order to protect others from cyber threats, we draft and publish educational and accessible articles that can be appreciated by our communities.",
    button: "Read Past Articles",
    buttonUrl: "/information-hub"
  },
  {
    icon: <Presentation />,
    text: "Learn from Technical Workshops",
    description:
      "To equip ourselves with cybersecurity knowledge, Safe Security hosts workshops and educational sessions that dial in on the more technical side of current cybersecurity threats.",
    button: "Learn About Our Workshops",
    buttonUrl: "./workshops"
  },
  {
    icon: <Podcast />,
    text: "Attend Talks with Community Members",
    description:
      "Students receive real-world perspective from leading members in the cybersecurity world through community events with industry professionals.",
    button: "Learn About Our Community Events",
    buttonUrl: "./community-events"
  },
];