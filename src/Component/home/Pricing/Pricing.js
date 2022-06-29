import React from 'react';
import Logo from "../../../assets/pricing/Vector.png"

const Pricing = () => {
    return (
        <section className="pricing">
            <div className="container">
            <p className="pricing__subtitle">Pricing</p>
            <h2 className="pricing__title">Pricing Policy</h2>
            <div className="pricing__price">
                <div className="pricing__card">
                    <div className="pricing__card-top">
                    <p className="pricing__card-title">For Starter</p>
                    <p className="pricing__card-subtitle">$1499</p>
                    </div>
                    <div className="pricing__card-middle">
                    <div className="pricing__card-list">
                        <img src={Logo} alt=""/>
                        <p className="pricing__card-text">Feedback Categorization</p>
                    </div>
                    <div className="pricing__card-list">
                        <img src={Logo} alt=""/>
                        <p className="pricing__card-text">Features prioritization</p>
                    </div>
                    <div className="pricing__card-list">
                        <img src={Logo} alt=""/>
                        <p className="pricing__card-text">Real-time collaboration</p>
                    </div>
                    <div className="pricing__card-list">
                        <img src={Logo} alt=""/>
                        <p className="pricing__card-text">Feedback loop notifications</p>
                    </div>
                    <div className="pricing__card-list">
                        <img src={Logo} alt=""/>
                        <p className="pricing__card-text">Essential dev tools integrations</p>
                    </div>
                    </div>
                    <div className="pricing__button">
                        <button className="pricing__btn" type="button">Request Demo</button>
                    </div>
                </div>
                    <div className="pricing__card">
                        <div className="pricing__card-top">
                        <p className="pricing__card-title">For Starter</p>
                        <p className="pricing__card-subtitle">$1499</p>
                    </div>
                        <div className="pricing__card-middle">
                        <div className="pricing__card-list">
                            <img src={Logo} alt=""/>
                            <p className="pricing__card-text">Feedback Categorization</p>
                        </div>
                        <div className="pricing__card-list">
                            <img src={Logo} alt=""/>
                            <p className="pricing__card-text">Features prioritization</p>
                        </div>
                        <div className="pricing__card-list">
                            <img src={Logo} alt=""/>
                            <p className="pricing__card-text">Real-time collaboration</p>
                        </div>
                        <div className="pricing__card-list">
                            <img src={Logo} alt=""/>
                            <p className="pricing__card-text">Feedback loop notifications</p>
                        </div>
                        <div className="pricing__card-list">
                            <img src={Logo} alt=""/>
                            <p className="pricing__card-text">Essential dev tools integrations</p>
                        </div>
                        </div>
                        <div className="pricing__button">
                            <button className="pricing__btn" type="button">Request Demo</button>
                        </div>
                </div>
                    <div className="pricing__card">
                        <div className="pricing__card-top">
                        <p className="pricing__card-title">For Starter</p>
                        <p className="pricing__card-subtitle">$1499</p>
                        </div>
                        <div className="pricing__card-middle">
                        <div className="pricing__card-list">
                            <img src={Logo} alt=""/>
                            <p className="pricing__card-text">Feedback Categorization</p>
                        </div>
                        <div className="pricing__card-list">
                            <img src={Logo} alt=""/>
                            <p className="pricing__card-text">Feedback loop notifications</p>
                        </div>
                        <div className="pricing__card-list">
                            <img src={Logo} alt=""/>
                            <p className="pricing__card-text">Essential dev tools integrations</p>
                        </div>
                        </div>
                        <div className="pricing__button">
                            <button className="pricing__btn" type="button">Request Demo</button>
                        </div>
                </div>
            </div>
            </div>
        </section>
    );
};

export default Pricing;