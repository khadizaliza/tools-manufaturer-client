import React from 'react';
import bannar from '../../images/manufacturer-bg.jpg'

const Bannar = () => {
    return (
        <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={bannar} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">Your Trusted Company</h1>
            <p className="py-6">Computers and laptops / notebooks have become a part of our life. Life without a computer is next to impossible in this age of fast growing world of electronics and technology.</p>
            <button className="btn btn-primary uppercase bg-gradient-to-r from-secondary to-primary">Get Started</button>
          </div>
        </div>
      </div>
      
    );
};


export default Bannar;
