import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCart, addToCart, removeFromCart, clearCart } from "../feature/slice/Add_to_cart_slice.js";
import "../styles/Cart.css";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  // Fetch the cart on component load
  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  const handleRemove = (item) => {
    dispatch(removeFromCart(item));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.priceAtAddition * item.quantity, 0);

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item) => (
            <div className="cart-item" key={item.artwork._id}>
              <img src={item.artwork.image} alt={item.artwork.title} className="item-image" />
              <div className="item-details">
                <h3>{item.artwork.title}</h3>
                <p>Price: ${item.priceAtAddition}</p>
                <p>Quantity: {item.quantity}</p>
              </div>
              <div className="item-actions">
                <button onClick={() => handleAddToCart(item.artwork)}>Add</button>
                <button onClick={() => handleRemove(item.artwork)}>Remove</button>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="cart-summary">
        <h3>Total: ${totalPrice.toFixed(2)}</h3>
        <button className="clear-cart-btn" onClick={handleClearCart}>Clear Cart</button>
        <button className="checkout-btn">Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
