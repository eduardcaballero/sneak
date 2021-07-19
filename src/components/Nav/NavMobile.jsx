import React from 'react';
import { useGalleryContext } from '../../context/GalleryContext'
import './styles/_navMobile.scss';
import { links } from '../../constants';

const NavMobile = ({ search, show, setShow, ...others }) => {
    const { stateGallery, handleActive } = useGalleryContext();

    const isActive = (link) => {
        return stateGallery.active === link;
    }
    const setActive = (e) => {
        const link = e.target.getAttribute('data-link');
        handleActive(link);
        setShow(false)
    }

    return <nav className={`menu__mobile${show ? ' visible' : ''}`} {...others}>
        <ul>
            {search && <li><img className="search" src="/img/search.svg" alt="search" /></li>}

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
        </ul>
    </nav>
}
export default NavMobile;