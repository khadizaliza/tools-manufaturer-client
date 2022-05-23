import React from 'react';
import homedelivery from '../../images/homedelivery.webp'

const HomeDelivery = () => {
    return (
        <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={ homedelivery} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold text-primary">Free Home Delivery</h1>
            <p className="py-6 m-2">People's in Bangladesh is happy to become member in Bangladesh. Because all the items you can get quickly just ordering without any going out. All the items are now delivered online.One can pay your payments through online payments and cash on delivery systems</p>
            
          </div>
        </div>
      </div>
    );
};

export default HomeDelivery;