import { createBrowserRouter } from "react-router-dom";

import HomePage from "./components/HomePage.jsx";

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
                path: "about",
                element: <AboutPage />,
            },
        ],
    },
]);

export default router;
