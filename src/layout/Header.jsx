import React, {useState} from 'react';
import {
    BrowserView,
    MobileView,
} from "react-device-detect";
import Nav,{ NavMobile} from '../components/Nav'
import './styles/_header.scss';

const Header = () => {
    const [showMenu, setShowMenu] = useState(false)

    const toggleMenu = () => {
        setShowMenu(!showMenu)
    }

    return <header >
        <div className="menu">
            <div className="menu__logo">
                <img src="/img/icon.png" alt="logo sneak" />
                <div>
                    <p className="menu__logo-name">SNEAK</p>
                    <p className="menu__logo-slogan">CREATIVE PORTFOLIO</p>
                </div>
            </div>
            <div className="menu__links">
                <MobileView>
                    <img className="menu-icon" onClick={toggleMenu} src="/img/menu-mobile.svg" alt="menu" />
                    <NavMobile search show={showMenu} setShow={setShowMenu}/>
                </MobileView>
                <BrowserView>
                    <Nav search />
                </BrowserView>

            </div>
        </div>
    </header>
}

export default Header;