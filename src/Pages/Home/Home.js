import React from 'react';
import Bannar from './Bannar';
import HomeDelivery from './HomeDelivery';
import Information from './Information';

const Home = () => {
    return (
        <div>
           <Bannar></Bannar> 
           <Information></Information>
           <HomeDelivery></HomeDelivery>
        </div>
    );
};

export default Home;