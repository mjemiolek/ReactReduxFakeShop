import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { connect, useDispatch, useSelector } from "react-redux";
import "./component.css";
import { clearCart } from "../redux/actions/productActions";

const MiniCart = () => {
  const [showCart, setShowCart] = useState(false);
  const [n, setN] = useState(0);
  const [p, setP] = useState(0);
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.allProducts.cart);

  useEffect(() => {
    if (cart.length !== 0) {
      setN(cart.map((item) => item.qty).reduce((prev, next) => prev + next));
      setP(
        cart
          .map((item) => item.qty * item.price)
          .reduce((prev, next) => prev + next)
      );
    } else {
      setN(0);
      setP(0);
    }
  }); // Only re-run the effect if count changes

  return (
    <>
      <Link to={`/cart`}>
        <span onMouseEnter={() => setShowCart(true)} id="showcart_span">
          <i className="big blue shopping cart icon cuorusor">{n}</i>
        </span>
      </Link>
      {showCart && (
        <>
          <div
            onMouseLeave={() => setShowCart(false)}
            className="dropContainer"
          >
            {cart.map((item) => (
              <React.Fragment key={item.id}>
                <div className="content miniContainer">
                  <div className="miniImg">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div>{item.qty}x&nbsp;</div>
                  <div className="description">{item.title}</div>
                  <div className="price">
                    {Number((item.price * item.qty).toFixed(2))} $
                  </div>
                </div>
                <hr></hr>
              </React.Fragment>
            ))}
            <div className="nicePrice">
              Total Price: {Number(p.toFixed(2))} $
            </div>
            <hr></hr>
            <div className="ui buttons">
              <button
                onClick={() => {
                  dispatch(clearCart());
                  setN(0);
                  setP(0);
                }}
                className="ui button"
              >
                Clear Cart
              </button>
              <div className="or"></div>
              <Link to={`/cart`}>
                <button className="ui positive button">Checkout</button>
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    clearCart: () => {
      dispatch(clearCart());
    },
  };
};

export default connect(null, mapDispatchToProps)(MiniCart);
