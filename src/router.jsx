import { createBrowserRouter } from "react-router-dom";

import App from "./App.jsx";
import HomePage from "./components/pages/HomePage.jsx";
import SafeSecPage from "./components/pages/SafeSecPage.jsx";
import InfoHubPage from "./components/pages/InfoHubPage.jsx";
import ArticleTemplate from "./components/infohub/ArticleTemplate.jsx";

const router = createBrowserRouter([
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
                path: "information-hub",
                element: <InfoHubPage />,
            },
            {
                path: "information-hub/article/:article_id",
                element: <ArticleTemplate />,
            },
        ],
    },
]);

export default router;
