import React from 'react';
import Bannar from './Bannar';
import Footer from './Footer';
import HomeDelivery from './HomeDelivery';
import Information from './Information';

const Home = () => {
    return (
        <div>
           <Bannar></Bannar> 
           <Information></Information>
           <HomeDelivery></HomeDelivery>
           <Footer></Footer>
        </div>
    );
};

export default Home;