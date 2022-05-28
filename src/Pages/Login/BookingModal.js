import React from 'react';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';

const BookingModal = ({buy, setBuy}) => {
    const {name, minimumOrderQuentity} = buy;
    const [user, loading] = useAuthState(auth);
    const handleBooking = event =>{
        event.preventDefault();
        
         const booking = {
            buyName:name,
            buy:minimumOrderQuentity,
            customar:user.email,
            customarName:user.namedisplayName,
            phone:event.target.phone.value
        }

        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.success){
                toast(`booking is success, ${name}`)
            }
            else{
                toast(`already booked, ${name}`)
            }
            setBuy(null);
        })
        
    }
    return (
        <div>
            
<label for="my-modal-6" class="btn modal-button">open modal</label>


<input type="checkbox" id="booking-modal-6" class="modal-toggle" />
<div class="modal modal-bottom sm:modal-middle">
  <div class="modal-box">
  <label for="booking-modal-6" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 class="font-bold text-lg text-center text-accent">Booking for: {name}</h3>
    <p>Minimum Order Quentity: {minimumOrderQuentity}</p>
    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>
    
    <input type="text" name="name" disabled value={user?.displayName} class="input input-bordered w-full max-w-xs" />
    <input type="email" name='email' disabled value={user?.email} class="input input-bordered w-full max-w-xs" />
    <input type="text" name="phone" placeholder="Phone Number" class="input input-bordered w-full max-w-xs" />
    <input type="submit" value="submit" class="btn btn-accent w-full max-w-xs" />
    </form>
    
  </div>
</div>
        </div>
    );
};

export default BookingModal;
