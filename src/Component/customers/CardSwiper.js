import React from 'react';
import Star from "../../assets/customers/Star.png"

const CardSwiper = () => {
    return (
        <div className="customers__card">
            <h4 className="customers__card-title">Superb Work!</h4>
            <p className="customers__card-subtitle">“Blessing welcomed ladyship she met humoured sir breeding her. Six
                curiosity day assurance bed necessary.”</p>
            <ul className="customers__menu">
                <li className="customers__list"><img src={Star} alt=""/></li>
                <li className="customers__list"><img src={Star} alt=""/></li>
                <li className="customers__list"><img src={Star} alt=""/></li>
                <li className="customers__list"><img src={Star} alt=""/></li>
                <li className="customers__list"><img src={Star} alt=""/></li>
            </ul>
            <p className="customers__text">Sabo Masties</p>
        </div>
    );
};

export default CardSwiper;