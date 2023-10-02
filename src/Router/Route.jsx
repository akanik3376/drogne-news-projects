import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/HomePage/Home";
import MainRoot from "../Root/MainRoot";
import SignIn from "../Pages/SignIn/SignIn";
import SingUp from "../Pages/SingOut/SingUp";

const route = createBrowserRouter([
    {
        path: "/",
        element: <MainRoot></MainRoot>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/signIn",
                element: <SignIn></SignIn>
            },
            {
                path: "/signUp",
                element: <SingUp></SingUp>
            },
        ]
    }
])

export default route;