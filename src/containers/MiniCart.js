import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { connect, useDispatch, useSelector } from "react-redux";
import "./component.css";
import { clearCart } from "../redux/actions/productActions";

const MiniCart = (props) => {
  const [showDropdown, setShowDropdown] = useState(true);
  const [numberOfProducts, setNumberOfProducts] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.allProducts.cart);

  useEffect(() => {
    if (cart.length !== 0) {
      setNumberOfProducts(cart.map((item) => item.qty).reduce((prev, next) => prev + next));
      setTotalPrice(
        cart
          .map((item) => item.qty * item.price)
          .reduce((prev, next) => prev + next)
      );
    } else {
      setNumberOfProducts(0);
      setTotalPrice(0);
    }
    if(props.cartClass === false) {
      setShowDropdown(false);
    } else {
      setShowDropdown(true);
    }
  });

  return (
    <>
    <div className="drop">
      <div>
      <Link to={`/cart`}>
        <span id="showcart_span">
          <i className="big blue shopping cart icon cuorusor">{numberOfProducts}</i>
        </span>
      </Link>
      </div>
      {showDropdown ? (
      <div className={"dropContainer"}>
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
        <div className="nicePrice">Total Price: {Number(totalPrice.toFixed(2))} $</div>
        <hr></hr>
        <div className="ui buttons">
          <button
            onClick={() => {
              dispatch(clearCart());
              setNumberOfProducts(0);
              setTotalPrice(0);
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
      ) : (<div></div>)}
      </div>
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