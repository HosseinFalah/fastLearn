import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../Layouts/MainLayout";
import { Home, NotFound } from "../Pages/index";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        errorElement: <NotFound/>,
        children: [
            {
                path: '/',
                element: <Home/>
            }
        ]
    }
])