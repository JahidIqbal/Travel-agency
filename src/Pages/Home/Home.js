import React from 'react';
import Banner from '../Banner/Banner';
import Choose from '../Choose/Choose';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';


const Home = () => {
    return (
        <div>
            <Banner />

            <Services />
            <Choose />
            <Testimonials />
        </div>
    );
};

export default Home;