import { Routes, Route } from "react-router-dom"

import { Home } from "../pages/admin/Home"
import { New } from "../pages/admin/New"
import { Meal } from "../pages/admin/Meal"
import { Edit } from "../pages/admin/Edit"
import { Menu } from "../pages/app/Menu"
//import { Profile } from "../pages/Profile"

export function AdminRoutes () {
    return (
        <Routes>
            <Route path="/" element = { <Home /> } />
            <Route path="/new" element = { <New /> } />
            <Route path="/menu" element = { <Menu /> } />
            <Route path="/meal/:id" element = { <Meal /> } />
            <Route path="/edit/:id" element = { <Edit /> } />
            {/*<Route path="/profile" element = { <Profile /> } />*/}
        </Routes>
    )
}