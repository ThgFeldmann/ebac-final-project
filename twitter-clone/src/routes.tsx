import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

import Login from "./pages/Login";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";

const AppRoutes = createBrowserRouter(
    createRoutesFromElements(
            <>
                <Route path="/" element={<Login />} />
                <Route path="/Home" element={<Home />} />
                <Route path="/SignUp" element={<SignUp />} />
            </>
    )
)

export default AppRoutes