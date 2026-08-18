import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import App from "../App";
import PageNotFound from "../pages/PageNotFound";
import Inventory from "../pages/Inventory";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <HomePage />
            },
            {
                path: "/inventory",
                element: <Inventory />
            }
        ]
    },
    {
        path: "*",
        element: <PageNotFound />
    }
]);

export default router;