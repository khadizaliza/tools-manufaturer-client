import React from 'react';

const Service = ({service}) => {
    const {name, price, availableQuentity, img, minimumOrderQuentity, description} = service;
    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
            <figure><img className='w-32 h-32' src={img} alt="Tools" /></figure>
        <div class="card-body">
          <h2 class="card-title">Name: {name}</h2>
          <h4>Price: $ {price}</h4>
          <h5>Minimum Order Quentity: {minimumOrderQuentity}</h5>
          <p>Available Quentity: {availableQuentity}</p>
            <p><small>Description: {description}</small></p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary text-white">Purchase</button>
          </div>
        </div>
      </div>
    );
};

export default Service;