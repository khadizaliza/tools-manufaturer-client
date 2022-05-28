


const PruchaseCurd = ({detail, setBuy}) => {
  
    
    return (
      <div className="card lg:max-w-lg bg-base-100 shadow-xl gap-4">
        
        <div className="card-body items-center text-center">
          <h2 className="card-title text-accent">Name: {detail.name}</h2>
          <h4>Price: {detail.price}</h4>
          <p>Minimum Order Quentity: {detail.minimumOrderQuentity}</p>
          
          <label for="booking-modal-6" 
       onClick={() => setBuy(detail)}
      class="btn btn-accent text-white uppercase">Buy Now
      </label>
           </div>

      </div> 
    );
};

export default PruchaseCurd;