import { BrowserRouter } from "react-router-dom";

import { useAuth } from "../hooks/auth";

import { AppRoutes } from "./app.routes";
import { AdminRoutes } from "./admin.routes";
import { AuthRoutes } from "./auth.routes";

export function Routes() {
    const { user } = useAuth();



    return (
        <BrowserRouter>
            {user && user.role === "default" ? <AppRoutes /> : <></>}
            {user && user.role === "admin" ? <AdminRoutes /> : <></>}
            {!user ? <AuthRoutes /> : <></>}
        </BrowserRouter>
    )
}