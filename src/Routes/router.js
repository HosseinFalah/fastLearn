import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../Layouts/MainLayout";
import AppContainer from "../Containers/AppContainer";
import NotFound from "../Pages/NotFound";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        errorElement: <NotFound/>,
        children: [
            {
                path: '/',
                element: <AppContainer/>
            }
        ]
    }
])