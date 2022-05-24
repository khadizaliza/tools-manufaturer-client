import React from 'react';

const BusinessSummary = ({summary}) => {
   console.log(summary)
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img className='w-48 h-48 rounded-xl' src={summary.img} alt="Tools" />

        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-accent">{summary.name}</h2>
          <p>{summary.description}</p>
          
        </div>
      </div>
    );
};

export default BusinessSummary;