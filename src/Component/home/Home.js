import React from 'react';
import Header from "./header/Header";
import Specialization from "./specialization/Specialization";
import Portfolio from "./portfolio/Portfolio";
import Customers from "../customers/Customers";
import Pricing from "./Pricing/Pricing";
import Contact from "./contact/contact";



const Home = () => {
    return (
        <>
           <Header/>
            <main>
                <Specialization/>
                <Portfolio/>
                <Customers/>
                <Pricing/>
            </main>
            <Contact/>
        </>
    );
};

export default Home;