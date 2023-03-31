import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../Layouts/MainLayout";
import { Home, NotFound, Shop, Login, Register, Cart, Product, Blogs, Blog, Teacher } from "../Pages/index";

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
                path: '/shop/product/:productName',
                element: <Product/>,
                
            },
            {
                path: '/blogs',
                element: <Blogs/>
            },
            {
                path: '/blog/:blogName',
                element: <Blog/>
            },
            {
                path: '/teacher/:teacherName',
                element: <Teacher/>
            },
            {
                path: '*',
                element: <NotFound/>
            }
        ]
    }
])