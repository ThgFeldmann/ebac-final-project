import { createBrowserRouter } from "react-router-dom";

import Login from "./pages/Login";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Login />
    },
    {
        path: "/Home",
        element: <Home />
    },
    {
        path: "/SignUp",
        element: <SignUp />
    }
])

export default Routes