import React from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

const Sidebar = () => {

    return(
        <>
            <h1 className="SidebarHeading">Student Assistant</h1>
            <div className="SidebarLinks">
                <Link className="SidebarLinks" to='/'>Home</Link>
                <Link className="SidebarLinks" to='/assignments'>Assignment</Link>
                <Link className="SidebarLinks" to='/notes'>Notes</Link>
                <Link className="SidebarLinks" to='/notes'>Calendar</Link>
            </div>
        </>
    )
}

export default Sidebar;