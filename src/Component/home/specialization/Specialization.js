import React from 'react';
import Logo1 from "../../../assets/specialization/LOGO.png"
import Logo2 from "../../../assets/specialization/LOGO1.png"
import Logo3 from "../../../assets/specialization/LOGO2.png"
import Logo4 from "../../../assets/specialization/LOGO3.png"
import Logo5 from "../../../assets/specialization/LOGO4.png"
import Group1 from "../../../assets/specialization/Group.png"
import Group2 from "../../../assets/specialization/Group1.png"
import Figma from "../../../assets/specialization/figma.png"
import Php from "../../../assets/specialization/php.png"

const Specialization = () => {
    return (
        <section className="specialization">
            <ul className="specialization__menu">
                <li className="specialization__list"><img className="specialization__image" src={Logo1} alt=""/></li>
                <li className="specialization__list"><img className="specialization__image" src={Logo2} alt=""/></li>
                <li className="specialization__list"><img className="specialization__image" src={Logo3} alt=""/></li>
                <li className="specialization__list"><img className="specialization__image" src={Logo4} alt=""/></li>
                <li className="specialization__list"><img className="specialization__image" src={Logo5} alt=""/></li>
            </ul>
            <p className="specialization__subtitle">What we Do?</p>
            <h2 className="specialization__title">Our Specialization</h2>
                <div className="specialization__squareBox1">
                    <div className="specialization__card">
                        <div className="specialization__card-title">
                            <img src={Group1} alt=""/>
                            <p className="specialization__card-title-subtitle">WebFlow Development</p>
                        </div>
                        <p className="specialization__card-subtitle">Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave
                            law built now. In built table in an rapid blush. Merits behind on afraid or warmly.</p>
                        <button className="specialization__card-btn" type="button">Read More</button>
                    </div>
                    <div className="specialization__card">
                        <div className="specialization__card-title">
                            <img src={Group2} alt=""/>
                            <p className="specialization__card-title-subtitle">Shopify Development</p>
                        </div>
                        <p className="specialization__card-subtitle">Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave
                            law built now. In built table in an rapid blush. Merits behind on afraid or warmly.</p>
                        <button className="specialization__card-btn" type="button">Read More</button>
                    </div>

                </div>
                <div className="specialization__squareBox2">
                    <div className="specialization__card">
                        <div className="specialization__card-title">
                            <img src={Figma} alt=""/>
                            <p className="specialization__card-title-subtitle">Figma Web Designing</p>
                        </div>
                        <p className="specialization__card-subtitle">Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave
                            law built now. In built table in an rapid blush. Merits behind on afraid or warmly.</p>
                        <button className="specialization__card-btn" type="button">Read More</button>
                    </div>
                    <div className="specialization__card">
                        <div className="specialization__card-title">
                            <img src={Php} alt=""/>
                            <p className="specialization__card-title-subtitle">Php Development</p>
                        </div>
                        <p className="specialization__card-subtitle">Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave
                            law built now. In built table in an rapid blush. Merits behind on afraid or warmly.</p>
                        <button className="specialization__card-btn" type="button">Read More</button>
                    </div>
                </div>
            <div className="specialization__more">
                <button className="specialization__btn" type="button">Learn More</button>
            </div>

        </section>
    );
};

export default Specialization;