import { useDispatch, useSelector } from "react-redux";

import {
  removeItem,
  updateQuantity
} from "../redux/CartSlice";

function CartItem() {

  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state) => state.cart.cartItems
  );

  const totalItems = cartItems.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  const totalCost = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const increaseQuantity = (item) => {

    dispatch(
      updateQuantity({
        id: item.id,
        quantity: item.quantity + 1
      })
    );
  };

  const decreaseQuantity = (item) => {

    if (item.quantity > 1) {

      dispatch(
        updateQuantity({
          id: item.id,
          quantity: item.quantity - 1
        })
      );
    }
  };

  return (

    <div className="cart-container">

      <h1>Shopping Cart</h1>

      <h2>Total Cart Items: {totalItems}</h2>

      <h2>Total Cost: ₹ {totalCost}</h2>

      {cartItems.map((item) => (

        <div className="cart-card" key={item.id}>

          <img
            src={item.image}
            alt={item.name}
          />

          <div>

            <h2>{item.name}</h2>

            <p>Price: ₹ {item.price}</p>

            <p>Quantity: {item.quantity}</p>

            <div className="quantity-buttons">

              <button
                onClick={() => increaseQuantity(item)}
              >
                +
              </button>

              <button
                onClick={() => decreaseQuantity(item)}
              >
                -
              </button>

            </div>

            <button
              className="delete-btn"
              onClick={() => dispatch(removeItem(item.id))}
            >
              Delete
            </button>

          </div>

        </div>

      ))}

      <button className="checkout-btn">
        Checkout
      </button>

      <button className="continue-btn">
        Continue Shopping
      </button>

    </div>

  )
}

export default CartItem