import React from 'react';

const Burger = ({active, setActive}) => {
    return (
        <div className={active ? "burger active" : "burger"} onClick={() => setActive(false)}>
            <div className="burger__blur"/>
            <div className="burger__content" onClick={e => e.stopPropagation()}>
                <ul className="burger__menu">
                    <li className="burger__list">Home</li>
                    <li className="burger__list">About</li>
                    <li className="burger__list">Testimonials</li>
                    <li className="burger__list">Contact</li>
                    <li className="burger__list">Sign in</li>
                    <li className="burger__list">Sign up</li>
                </ul>
            </div>
        </div>
    );
};

export default Burger;