import { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../Context/StoreContext";
import {useNavigate} from 'react-router-dom'

function Cart() {
  const { cartItem, food_list, removeCartItem , getTotalCartAmount } = useContext(StoreContext);
  const navigate = useNavigate()
  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItem[item._id] > 0) {
            return (
              <>
                {" "}
                <div className="cart-items-title cart-items-item" key={index}>
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItem[item._id]}</p>
                  <p>${item.price * cartItem[item._id]}</p>
                  <p onClick={() => removeCartItem(item._id)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="20"
                      height="20"
                      viewBox="0 0 30 30"
                    >
                      <path d="M 14.984375 2.4863281 A 1.0001 1.0001 0 0 0 14 3.5 L 14 4 L 8.5 4 A 1.0001 1.0001 0 0 0 7.4863281 5 L 6 5 A 1.0001 1.0001 0 1 0 6 7 L 24 7 A 1.0001 1.0001 0 1 0 24 5 L 22.513672 5 A 1.0001 1.0001 0 0 0 21.5 4 L 16 4 L 16 3.5 A 1.0001 1.0001 0 0 0 14.984375 2.4863281 z M 6 9 L 7.7929688 24.234375 C 7.9109687 25.241375 8.7633438 26 9.7773438 26 L 20.222656 26 C 21.236656 26 22.088031 25.241375 22.207031 24.234375 L 24 9 L 6 9 z"></path>
                    </svg>
                  </p>
                </div>
                <hr />
              </>
            );
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
            <b>Subtotal</b>{" "}<b>${getTotalCartAmount()}</b>
            <hr/>
            <b>Delivery Fee</b>{" "}<b>${2}</b>
            <hr/>
            <b>Total</b>{" "}<b>${getTotalCartAmount() + 2}</b>
            <hr/>
        <button onClick={()=>navigate('/Order')}>PROCEED TO CHECKOUT</button>

        </div>
        <div className="cart-promocode">
        <div>
          <p>If you have promocode please enter here</p>
          <br/>
          <div className="cart-promocode-input">
            <input type="text" placeholder="Enter Your Promo Code"  /><button>Submit</button>
          </div>
        </div>
      </div>
      </div>
     
    </div>
  );
}

export default Cart;
