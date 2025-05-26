import React from 'react'
import './Navbar.css'
import logo from "../../assets/logo.png"
import search from '../../assets/search_icon.svg'
import Bell from "../../assets/bell_icon.svg"
import profile from '../../assets/profile_img.png'
import dropdown from '../../assets/caret_icon.svg'


const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="navbar-left"><img src={logo} alt="Logo" />
                <ul>
                    <li>
                        Home
                    </li>
                    <li>
                        TV Shows
                    </li>
                    <li>
                        Movies
                    </li>
                    <li>
                        New & Popular
                    </li>
                    <li>
                        My List
                    </li>
                    <li>
                        Browse My Languages
                    </li>
                </ul>
            </div>
            <div className="navbar-right">
                <img src={search} alt="search_icon" className='icons' />
                <p>Children</p>
                <img src={Bell} alt="search_icon" className='icons' />
                <div className="navbar-profile">
                    <img src={profile} alt="search_icon" className='profile' />
                    <img src={dropdown} alt="search_icon" />
                    <div className="dropdown">Sign out of Netflix</div>
                </div>
            </div>
        </div>

    )
}

export default Navbar
