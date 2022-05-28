import React, { useState } from 'react';
import BookingModal from './Login/BookingModal';
import PruchaseCurd from './Login/PruchaseCurd';






const Purchase = () => {
  const [buy, setBuy] = useState(null);
  const details = [

    {
    _id: 1,
    name: 'monitor',
    minimumOrderQuentity: '10 pice',
     price: '100'  
    },
    {
    _id: 2,
    name: 'pc case',
    minimumOrderQuentity: '10 pice ',
    price: '100'
    },
    {
    _id: 3,
    name: 'key-board',
    minimumOrderQuentity: '10 pice',
    price: '100'   
    },
    {
    _id: 4,
    name: 'mouse',
    minimumOrderQuentity: '10 pice',
    price: '100'   
    },
    {
    _id: 5,
    name: 'monitor-holder',
    minimumOrderQuentity: '10 pice',
    price: '100'   
    },
    {
    _id: 6,
    name: 'hardware',
    minimumOrderQuentity: '10 pice',
    price: '100'  
    },
];
    
    return (
      <div className='my-28'>
            <div className='text-center'>
            <h3 className='text-primary text-xl font-bold uppercase'>Our Products</h3>
            
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    details?.map(detail =><PruchaseCurd
                    key={detail._id}
                    detail={detail}
                    setBuy={setBuy}
                    ></PruchaseCurd>)
                }
            </div>
             {buy && <BookingModal buy={buy}
             setBuy={setBuy}
             ></BookingModal>}   
        </div>
      
      
    );
};

export default Purchase;