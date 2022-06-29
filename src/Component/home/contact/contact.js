import React from 'react';
import Facebook from "../../../assets/footer/facebook.png"
import Twitter from "../../../assets/footer/twitter.png"
import Linkedin from "../../../assets/footer/linkedin.png"
import Btn from "../../../assets/footer/Icon.png"

const Contact = () => {
    return (
        <footer className="footer">
            <h2 className="footer__title">Need a little more
                home to grow?</h2>
            <div className="footer__button">
                <button className="footer__btn" type="button">Contact Us</button>
            </div>
            <div className="container">
                <div className="footer__contactUs">
                    <div className="footer__list">
                        <h4 className="footer__list-title">Web.Dev</h4>
                        <p className="footer__list-subtitle">You’ll find your next home loan valu you prefer.</p>
                        <div className="pricing__list-app">
                            <img style={{cursor:"pointer"}} src={Facebook} alt=""/>
                            <img style={{cursor:"pointer",margin:"0 15px"}} src={Twitter} alt=""/>
                            <img style={{cursor:"pointer"}} src={Linkedin} alt=""/>
                        </div>
                    </div>
                    <ul className="footer__menu">
                        <li className="footer__menu-title">Resources</li>
                        <li className="footer__menu-item">Our Agents</li>
                        <li className="footer__menu-item">Member Stories</li>
                        <li className="footer__menu-item">Video</li>
                        <li className="footer__menu-item">Free trial</li>
                    </ul>
                    <ul style={{marginRight:"15px"}} className="footer__menu">
                        <li className="footer__menu-title">Company</li>
                        <li className="footer__menu-item">Partnerships</li>
                        <li className="footer__menu-item">Terms of use</li>
                        <li className="footer__menu-item">Privacy</li>
                        <li className="footer__menu-item">Sitemap</li>
                    </ul>
                    <div className="footer__touch">
                        <h4 className="footer__touch-title">Get in touch</h4>
                        <form className="footer__touch-form">
                            <input className="footer__touch-input" type="email" value="Enter your mail"/>
                            <button className="footer__touch-btn" type="submit"><img src={Btn} alt=""/></button>
                        </form>
                    </div>
                </div>
                <div className="footer__line"></div>
                <p className="footer__text">Copyright 2021 ©Web.Dev  All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Contact;