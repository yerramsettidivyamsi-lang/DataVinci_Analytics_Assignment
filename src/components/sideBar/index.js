import './index.css'
import { Link } from "react-router-dom";
import { FaShopify } from "react-icons/fa6";
import { TbDevicesSearch } from "react-icons/tb";
import { FcAbout } from "react-icons/fc";
import { TfiGift } from "react-icons/tfi";
import { IoMailOutline } from "react-icons/io5";


const SideBar = ({isOpen}) => (
  <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <nav>
        <Link to="/about" className='sidebar_links' > <FaShopify className='sidebar_link_icons'/> <p>Shop</p></Link>
        <Link to="" className='sidebar_links' ><TbDevicesSearch className='sidebar_link_icons' /><p>Explore</p></Link>
        <Link to="" className='sidebar_links' > <FcAbout className='sidebar_link_icons' /> <p>About</p></Link>
        <Link to="" className='sidebar_links' > <TfiGift className='sidebar_link_icons' /><p>Rewards</p></Link>
        <Link to="" className='sidebar_links' > <IoMailOutline className='sidebar_link_icons' /><p>Contact</p></Link>
      </nav>
    </div>
)

export default SideBar;