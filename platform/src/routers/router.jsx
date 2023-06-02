import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/login";
import MakerSpace from "../pages/Makerspace";
import Users from "../pages/users";
import Signup from "../pages/signup";
import NotFound from "../pages/Notfound";
import GuestLayout from "../components/GuestLayout";
import DefaultLayout from "../components/DefaultLayout";
import DashBoard from "../pages/DashBoard";
import {Navigate} from "react"


const router = createBrowserRouter([
    {
        path:'/',
        element: <GuestLayout/>,
        children:[
            {
                path:'/login',
                element: <Login/>
            },
            {
                path:'/signup',
                element: <Signup/>
            },
            {
                path:'/makerspace',
                element: <MakerSpace/>
            },
        ]
    },
    {
        path:'/',
        element: <DefaultLayout/>,
        children:[
            {
                path:'/',
                element: <Navigate to="/users"/>
            },
            {
                path:'/users',
                element: <Users/>
            },
            {
                path:'/dashboard',
                element: <DashBoard/>
            },
        ]
    },
    {
        path:'*',
        element: <NotFound/>
    },
])

export default router;