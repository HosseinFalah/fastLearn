import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../Layouts/MainLayout";
import { Home, NotFound, Shop, Authentication } from "../Pages/index";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/shop',
                element: <Shop/>
            },
            {
                path: '/auth',
                element: <Authentication/>
            },
            {
                path: '*',
                element: <NotFound/>
            }
        ]
    }
])