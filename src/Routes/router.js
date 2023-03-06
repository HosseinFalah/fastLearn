import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../Layouts/MainLayout";
import { Home, NotFound, Shop, Login, Register } from "../Pages/index";
import Cart from "../Pages/Cart";

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
                path: '/cart',
                element: <Cart/>
            },
            {
                path: '/auth/login',
                element: <Login/>
            },
            {
                path: '/auth/register',
                element: <Register/>
            },
            {
                path: '*',
                element: <NotFound/>
            }
        ]
    }
])