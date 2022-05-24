import React from 'react';
import Bannar from './Bannar';
import BusinessSummares from './BusinessSummares';

import Footer from './Footer';
import HomeDelivery from './HomeDelivery';
import Information from './Information';
import Tools from './Tools';

const Home = () => {
    return (
        <div>
           <Bannar></Bannar> 
           <Information></Information>
           <HomeDelivery></HomeDelivery>
           <BusinessSummares></BusinessSummares>
           <Tools></Tools>
           <Footer></Footer>
        </div>
    );
};

export default Home;