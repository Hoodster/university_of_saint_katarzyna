import { Outlet } from "react-router-dom";
import content from "../_content";
import Navigation from "./navigation";

function Root() {
    const navItems = content.root.nav
    console.log(navItems)
    return (
        <>
            <div>
                <Navigation navItems={navItems} />
                <Outlet />
            </div>
        </>
    )
}

export default Root