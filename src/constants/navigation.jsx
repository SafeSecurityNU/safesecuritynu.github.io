export const navBarItems = [
    {
        label: "Meet The Board",
        linkSuffix: "/meet-the-board"
    },
    {
        label: "Students",
        linkSuffix: "/students", 
        children: [
            {label: "Students Overview", linkSuffix: "/"},
            {label: "Community Events", linkSuffix: "/community-events"},
            {label: "Workshops", linkSuffix: "/workshops"},
        ],
    },
    {label: "Information Hub", linkSuffix: "/information-hub"},
    {
        label: "Clinic",
        linkSuffix: "/clinic",
        children: [
            {label: "Clinic Overview", linkSuffix: "/"},
            {label: "Our Model", linkSuffix: "/our-model"},
            {label: "Corporate Partnerships", linkSuffix: "/corporate-partnerships"},
            {label: "Application", linkSuffix: "/application"},
        ],
    }
];
