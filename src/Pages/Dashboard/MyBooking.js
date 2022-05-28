import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyBooking = () => {
    const [booked, setBooked] = useState([]);
    const [user] = useAuthState(auth)

    useEffect( () =>{
        if(user) {
            fetch(`http://localhost:5000/service?customar=${user.email}`)
        .then(res=>res.json())
        .then(data => setBooked(data));
        }
    }, [user])
    return (
        <div>
            <h2>booking: {booked.length}</h2>
            <div class="overflow-x-auto">
  <table class="table w-full">
    
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Price</th>
        <th>Minimum Order Quentity</th>
      </tr>
    </thead>
    <tbody>
      {
          booked.map((a, index) =><tr>
            <th>{index + 1}</th>
            <td>{a.name}</td>
            <td>$ {a.price}</td>
            <td>{a.minimumOrderQuentity}</td>
          </tr>)
      }
      
      
      
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyBooking;
