import React from 'react';
import client from '../../images/client.png';
import flags from '../../images/flags.jpg';
import likes from '../../images/likes.png';
import BusinessSummary from './BusinessSummary';

const BusinessSummares = () => {
    const details = [

        {
        _id: 1,
        name: 'Happy Client',
        description: 'Our Client Happy for our Service',
        img: client    
        },
        {
        _id: 2,
        name: 'Country',
        description: '50 Counties Trust Us ',
        img: flags    
        },
        {
        _id: 3,
        name: 'Popular',
        description: 'We are Popular in The World',
        img: likes    
        },
    ];
    // console.log('data', details)
    return (
        <div className='my-28'>
            <div className='text-center'>
            <h3 className='text-primary text-xl font-bold uppercase'>Our Achievement</h3>
            <h2 className='text-4xl'>Trusted Commpany in The World</h2>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    details?.map(summary =><BusinessSummary
                    key={summary._id}
                    summary={summary}
                    ></BusinessSummary>)
                }
            </div>

        </div>
    );
};

export default BusinessSummares;