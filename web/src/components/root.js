import { Outlet } from "react-router-dom";
import content from "../_content";
import Navigation from "./navigation/navigation";

function Root() {
    const navItems = content.root.nav

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