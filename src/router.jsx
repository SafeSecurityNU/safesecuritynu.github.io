import { createHashRouter, Navigate } from "react-router-dom";

import App from "./App.jsx";
import HomePage from "./components/pages/HomePage.jsx";
import SafeSecPage from "./components/pages/SafeSecPage.jsx";
import GeneralMeetingsPage from "./components/pages/students/GeneralMeetingsPage.jsx";
import CommunityEventsPage from "./components/pages/students/CommunityEventsPage.jsx";
import WorkshopsPage from "./components/pages/students/WorkshopsPage.jsx";
import InfoHubPage from "./components/pages/InfoHubPage.jsx";
import ArticleTemplate from "./components/infohub/ArticleTemplate.jsx";
import ClinicPage from "./components/pages/clinics/ClinicPage.jsx";
import OurModelPage from "./components/pages/clinics/OurModelPage.jsx";
import CorporatePartnershipsPage from "./components/pages/clinics/CorporatePartnershipsPage.jsx";
import ApplicationPage from "./components/pages/clinics/ApplicationPage.jsx";

const router = createHashRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: "meet-the-board",
                element: <SafeSecPage />,
            },
            {
                path: "students",
                element: <Navigate to="/students/general-meetings" replace={true} />, // Redirect /students to /students/general-meetings
            },
            {
                path: "students/general-meetings",
                element: <GeneralMeetingsPage />,
            },
            {
                path: "students/community-events",
                element: <CommunityEventsPage />,
            },
            {
                path: "students/workshops",
                element: <WorkshopsPage />,
            },
            {
                path: "information-hub",
                element: <InfoHubPage />,
            },
            {
                path: "information-hub/article/:article_id",
                element: <ArticleTemplate />,
            },
            {
                path: "clinic",
                element: <ClinicPage />,
            },
            {
                path: "clinic/our-model",
                element: <OurModelPage />,
            },
            {
                path: "clinic/corporate-partnerships",
                element: <CorporatePartnershipsPage />,
            },
            {
                path: "clinic/application",
                element: <ApplicationPage />,
            },
        ],
    },
]);

export default router;
