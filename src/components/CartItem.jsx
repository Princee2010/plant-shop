import { useDispatch, useSelector } from "react-redux";

import {
  removeItem,
  updateQuantity
} from "../redux/CartSlice";

function CartItem() {

  const cartItems = useSelector(
    (state) => state.cart.cartItems
  );

  const dispatch = useDispatch();

  const increaseQty = (item) => {

    dispatch(
      updateQuantity({
        id: item.id,
        quantity: item.quantity + 1
      })
    );
  };

  const decreaseQty = (item) => {

    if (item.quantity > 1) {

      dispatch(
        updateQuantity({
          id: item.id,
          quantity: item.quantity - 1
        })
      );
    }
  };

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-container">

      <h1>Shopping Cart</h1>

      {cartItems.map((item) => (

        <div className="cart-card" key={item.id}>

          <img src={item.image} alt={item.name} />

          <div>

            <h2>{item.name}</h2>

            <p>₹ {item.price}</p>

            <div className="qty-section">

              <button
                onClick={() => decreaseQty(item)}
              >
                -
              </button>

              <span>{item.quantity}</span>

              <button
                onClick={() => increaseQty(item)}
              >
                +
              </button>

            </div>

            <button
              className="remove-btn"
              onClick={() => dispatch(removeItem(item.id))}
            >
              Remove
            </button>

          </div>

        </div>

      ))}

      <h2>Total: ₹ {total}</h2>

    </div>
  );
}

export default CartItem;