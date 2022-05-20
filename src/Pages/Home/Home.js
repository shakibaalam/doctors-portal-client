import React from 'react';
import Footer from '../Shared/Footer';
import Appoinment from './Appoinment';
import Banner from './Banner';
import Care from './Care';
import Contact from './Contact';
import Info from './Info';
import Services from './Services';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <Care></Care>
            <Appoinment></Appoinment>
            <Testimonial></Testimonial>
            <Contact></Contact>
            <Footer></Footer>

        </div>
    );
};

export default Home;