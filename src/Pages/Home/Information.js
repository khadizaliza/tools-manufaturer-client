import React from 'react';
import InformationCurd from './InformationCurd';
import clock from '../../images/clock.png'
import location from '../../images/location.png'
import phone from '../../images/phone.png'


const Information = () => {
    return (
        <div >
            <h1 className='text-center px-4 text-primary font-bold m-4 text-xl'>Our Information</h1>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
        <InformationCurd cardTitle="Opening Hours" bgClass="bg-accent" img={clock}></InformationCurd>    
        <InformationCurd cardTitle="Our Locations" bgClass="bg-primary" img={location}></InformationCurd>    
        <InformationCurd cardTitle="Contact Us" bgClass="bg-accent" img={phone}></InformationCurd>    
        </div>
        </div>
    );
};

export default Information;