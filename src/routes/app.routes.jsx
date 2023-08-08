import { Routes, Route } from "react-router-dom"

import { Favorites } from "../pages/app/Favorites"
import { Home } from "../pages/app/Home"
import { Historic } from "../pages/app/Historic"
import { Meal } from "../pages/app/Meal"
import { Order } from "../pages/app/Order"
import { NewOrder } from "../pages/app/NewOrder"
import { Menu } from "../pages/app/Menu"
//import { Profile } from "../pages/Profile"

export function AppRoutes () {
    return (
        <Routes>
            <Route path="/" element = { <Home /> } />
            <Route path="/menu" element = { <Menu /> } />
            <Route path="/historic" element = { <Historic /> } />
            <Route path="/favorites" element = { <Favorites /> } />
            <Route path="/meal/:id" element = { <Meal /> } />
            <Route path="/order/:id" element = { <Order /> } />
            <Route path="/newOrder" element = { <NewOrder /> } />
            {/*<Route path="/profile" element = { <Profile /> } />*/}
        </Routes>
    )
}