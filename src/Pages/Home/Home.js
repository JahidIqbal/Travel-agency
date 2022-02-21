import React from 'react';
import Banner from '../Banner/Banner';
import Choose from '../Choose/Choose';
import Eservices from '../Eservices/Eservices';
import Services from '../Services/Services';
import TeamMembers from '../TeamMembers/TeamMembers';
import Testimonials from '../Testimonials/Testimonials';
import UpcomingEvents from '../UpcomingEvents/UpcomingEvents';


const Home = () => {
    return (
        <div>
            <Banner />
            <Services />
            <Choose />
            <Eservices />
            <Testimonials />
            <UpcomingEvents />
            <TeamMembers />

        </div>
    );
};

export default Home;