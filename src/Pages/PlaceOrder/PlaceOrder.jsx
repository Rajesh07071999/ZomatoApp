import { useContext } from 'react';
import './PlaceOrder.css'
import { StoreContext } from '../../Context/StoreContext';
import { useNavigate } from 'react-router-dom';
function PlaceOrder() {
  const { getTotalCartAmount } = useContext(StoreContext);
  const navigate = useNavigate()
  return (
    <form className='place-order'>
      <div className='place-order-left'>
        <p className='place-title' >Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder='First Name' />
          <input type="text" placeholder='Last Name' />
        </div>
        <input type="email" placeholder='Email Address' />
        <input type="text" placeholder='Street' />
        <div className="multi-fields">
          <input type="text" placeholder='City' />
          <input type="text" placeholder='State' />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder='Zip Code' />
          <input type="text" placeholder='Country' />
        </div>
        <input type="number" placeholder='Phone Number' />
      </div>
      <div className='place-order-right'>
      <div className="cart-total">
          <h2>Cart Totals</h2>
            <b>Subtotal</b>{" "}<b>${getTotalCartAmount()}</b>
            <hr/>
            <b>Delivery Fee</b>{" "}<b>${2}</b>
            <hr/>
            <b>Total</b>{" "}<b>${getTotalCartAmount() + 2}</b>
            <hr/>
        <button onClick={()=>navigate('/')}>PLACE ORDER</button>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder