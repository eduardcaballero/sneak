import React from 'react';
import './styles/_footer.scss';


const Footer = () =>{
    return <footer >
        <div className="footer__container">
            <p>© 2016 - <span>Sneack</span> All Right Reserved</p>
            <div className="social-media">
                <button className="btn-naked" ><img src="/img/facebook.svg" alt="facebook icon"/></button>
                <button className="btn-naked" ><img src="/img/twitter.svg" alt="twitter icon"/></button>
                <button className="btn-naked" ><img src="/img/dribble.svg" alt="dribble icon"/></button>
                <button className="btn-naked" ><img src="/img/google.svg" alt="google icon"/></button>
                <button className="btn-naked" ><img src="/img/youtube.svg" alt="youtube icon"/></button>
            </div>
        </div>
    </footer>
}

export default Footer;