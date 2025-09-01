import { useContext, useState } from "react";
import "./index.css"

import { RiMenuFold2Line, RiMenuFoldLine } from "react-icons/ri";
import SideBar from "../sideBar";
import { AppContext } from './../../AppContext/appContext';
import { Link } from "react-router-dom";

const Navbar = () => {
    const {isOpen, toogleIsOpen} = useContext(AppContext)

    return (
    <div className="nav_container">
        <button className="nav_button" onClick={toogleIsOpen}>
            {isOpen ? <RiMenuFoldLine className="menu_icon"/> 
            : <RiMenuFold2Line className="menu_icon" />}
        </button>
        <input type="search" className="search_input" placeholder="WHICH MANUKA IS FOR ME?" />

        <nav className="desk_nav_bar">
            <Link to="" className='desk_nav_links' > Shop</Link>
            <Link to="" className='desk_nav_links' > Explore</Link>
        </nav>
         

        <img
        src="https://res.cloudinary.com/dxaugnoxj/image/upload/v1756635568/samples/company_logo_rvklug.png"
        className="nav_logo"
        />
        <nav className="desk_nav_bar">
            <Link to="" className='desk_nav_links' > About</Link>
            <Link to="" className='desk_nav_links' > Rewards</Link>
            <Link to="" className='desk_nav_links' > Contact</Link>
        </nav>
        

        <div className="nav_icons_container">
            <Link to="">
                <img
                src="https://res.cloudinary.com/dxaugnoxj/image/upload/v1756635967/samples/person_bffuhg.png"
                className="nav_icon"
                />
            </Link>
            <Link  to="">
                <img
                src="https://res.cloudinary.com/dxaugnoxj/image/upload/v1756635967/samples/search_h1bnlz.png"
                className="nav_icon"
                />
            </Link>
            <Link to="">
                <img
                src="https://res.cloudinary.com/dxaugnoxj/image/upload/v1756635967/samples/cart_yiem5o.png"
                className="nav_icon"
                />
            </Link>
        </div>
    </div>)
}

export default Navbar;