import React from 'react';
import {useGalleryContext} from '../../context/GalleryContext'
import './styles/_nav.scss';
import {links} from '../../constants';

const Nav = ({search,...others}) => {
    const {stateGallery, handleActive} = useGalleryContext();

    const isActive = (link) => {
        return stateGallery.active === link;
    }
    const setActive = (e) => {
        const link = e.target.getAttribute('data-link');
        handleActive(link);
    }
      
    return <nav className="menu__desktop" {...others}>
        <ul>
            <li>
                <button data-link={links.ALL} onClick={setActive} className={`${isActive(links.ALL) ? 'active' : ''}`} >All</button>
            </li>
            <li>
                <button data-link={links.BRANDING} onClick={setActive} className={`${isActive(links.BRANDING) ? 'active' : ''}`}>Branding</button>
            </li>
            <li>
                <button data-link={links.WEB} onClick={setActive} className={`${isActive(links.WEB) ? 'active' : ''}`}>Web</button>
            </li>
            <li>
                <button data-link={links.PHOTOGRAPHY} onClick={setActive} className={`${isActive(links.PHOTOGRAPHY) ? 'active' : ''}`}>Photography</button>
            </li>
            <li>
                <button data-link={links.APP} onClick={setActive} className={`${isActive(links.APP) ? 'active' : ''}`}>App</button>
            </li>
            {search && <li><img src="/img/search.svg" alt="search" /></li>}
        </ul>
    </nav>
}
export default Nav;