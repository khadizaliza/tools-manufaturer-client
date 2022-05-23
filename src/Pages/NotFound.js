import React from 'react';
import error from '../images/4o4.png'

const NotFound = () => {
    return (
        <div className='items-center justify-center'>
         <h1 className='px-2 text-purple-600 font-bold items-center'>This Page is not working</h1> 
         <img src={error} alt="" />  
        </div>
    );
};

export default NotFound;