import React from 'react';
import { useQuery } from 'react-query';
import Loding from '../Home/Shared/Loding';
import UserRow from './UserRow';

const Users = () => {
    const {data: users, isLoading} = useQuery('users', () => fetch('http://localhost:5000/service').then(res=>res.json()))
    if(isLoading){
        return <Loding></Loding>
    }
    return (
        <div>
           <h2> All Users: {users.length}</h2> 
           <div class="overflow-x-auto">
  <table class="table w-full">
    
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
      
      {
       users.map((user)=><UserRow
       key={user._id}
       user={user}
       
       ></UserRow>)   
      }
     
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Users;
