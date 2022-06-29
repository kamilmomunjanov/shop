import React from 'react';
import Logo1 from "../../../assets/portfolio/Rectangle1.png"
import Logo2 from "../../../assets/portfolio/Rectangle2.png"
import Logo3 from "../../../assets/portfolio/Rectangle3.png"
import Logo4 from "../../../assets/portfolio/Rectangle4.png"

const Portfolio = () => {
    return (
        <section className="portfolio">
            <p className="portfolio__subtitle">Our Work</p>
            <h2 className="portfolio__title">Our Portfolio</h2>
            <div className="portfolio__box">
                <div className="portfolio__card">
                    <img className="portfolio__card-img" src={Logo1} alt=""/>
                    <div className="portfolio__text">
                        <h3 className="portfolio__text-title">Fashion Landing page</h3>
                        <p className="portfolio__text-subtitle">View Details</p>
                    </div>
                </div>
                <div style={{marginTop:"55px"}} className="portfolio__card lower">
                    <img className="portfolio__card-img" src={Logo2} alt=""/>
                    <div className="portfolio__text">
                        <h3 className="portfolio__text-title">Health & Fitness</h3>
                        <p className="portfolio__text-subtitle">View Details</p>
                    </div>
                </div>
            </div>
            <div className="portfolio__box">
                <div className="portfolio__card">
                    <img className="portfolio__card-img" src={Logo3} alt=""/>
                    <div className="portfolio__text">
                        <h3 className="portfolio__text-title">Furniture Shop</h3>
                        <p className="portfolio__text-subtitle">View Details</p>
                    </div>
                </div>
                <div style={{marginTop:"55px"}} className="portfolio__card lower">
                    <img className="portfolio__card-img" src={Logo4} alt=""/>
                    <div className="portfolio__text">
                        <h3 className="portfolio__text-title">IT Solution Provider</h3>
                        <p className="portfolio__text-subtitle">View Details</p>
                    </div>
                </div>
            </div>
            <div className="portfolio__button">
                <button className="portfolio__btn" type="button">All Projects</button>
            </div>
        </section>
    );
};

export default Portfolio;