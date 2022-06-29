import React, {useState} from 'react';
import {MdPlayArrow} from "react-icons/md";
import { GiHamburgerMenu } from 'react-icons/gi';
import Logo1 from "../../../assets/header/Rectangle.png";
import Logo2 from "../../../assets/header/image.png";
import Logo3 from "../../../assets/header/Rectangle1.png";
import Logo4 from "../../../assets/header/Vector.png";
import Logo5 from "../../../assets/header/RectangleRight.png";
import Logo6 from "../../../assets/header/RectangleRight11.png";
import Logo7 from "../../../assets/header/RectangleRight22.png";
import Logo8 from "../../../assets/header/RectangleVerticaly.png";
import Logo9 from "../../../assets/header/RectangleGorizontaly.png";
import Burger from "./burgerMenu/Burger";

const Header = () => {

    const [menuActive, setMenuActive] = useState(false)

    return (
        <>
            <header className="header">
                <div className="container">
                    <div className="header__nav">
                        <div className="header__logo">Web.Dev</div>
                        <ul className="header__menu">
                            <li className="header__list">Home</li>
                            <li className="header__list">About</li>
                            <li className="header__list">Testimonials</li>
                            <li className="header__list">Contact</li>
                            <li className="header__list">Sign in</li>
                            <li className="header__list">Sign up</li>
                        </ul>
                        <div className="header__burger" onClick={() => setMenuActive(!menuActive)}></div>
                        <Burger active={menuActive} setActive={setMenuActive}/>
                    </div>
                </div>
                <h1 className="header__title">We Develop
                    <p><span className="header__title-shopify">Shopify</span> sites</p></h1>
                <p className="header__subtitle">Slingback fabric heels. Thin wraparound ankle strap. Squared heel and toe. Pointed toes. Padded
                    insole with geometrical design. </p>
                <div className="header__contact">
                    <button className="header__btn">Contact Us</button>
                    <div className="header__watch">
                        <p className="header__video">Watch Video</p>
                        <MdPlayArrow/>
                    </div>
                </div>
                <img className="header__img-1 img" src={Logo1} alt=""/>
                <img className="header__img-2 img" src={Logo2} alt=""/>
                <img className="header__img-3 img" src={Logo3} alt=""/>
                <img className="header__img-4 img" src={Logo4} alt=""/>
                <img className="header__img-5 img" src={Logo5} alt=""/>
                <img className="header__img-6 img" src={Logo6} alt=""/>
                <img className="header__img-7 img" src={Logo7} alt=""/>
                <img className="header__img-8 img" src={Logo8} alt=""/>
                <img className="header__img-9 img" src={Logo9} alt=""/>
            </header>
        </>
    );
};

export default Header;