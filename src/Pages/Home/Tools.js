import React, { useEffect, useState } from 'react';
import Service from './Service';

const Tools = () => {
    const [services, setServices] = useState([]);

    useEffect( () =>{
        fetch('tools.json')
        .then(res=> res.json())
        .then(data => setServices(data));
    }, [])
    return (
        <div>
           <h2 className='text-xl text-primary text-center p-4'>Our Product</h2>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
             {
                 services.map(service=><Service
                 key={service._id}
                 service={service}
                 ></Service>)
             }  
           </div> 
        </div>
    );
};

export default Tools;