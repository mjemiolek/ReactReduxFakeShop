import React, { useEffect, useState } from "react";
import Header from "./Header";
import { connect, useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeOneFromCart,
  removeFromCart,
} from "../redux/actions/productActions";

const CartComponent = () => {
  const cart = useSelector((state) => state.allProducts.cart);
  const [n, setN] = useState(0);
  const [p, setP] = useState(0);
  const dispatch = useDispatch();

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
      <Header />
      <div className="ui container grid">
        <div className="row">
          <div className="ten wide column">
            {cart.map((item) => (
              <React.Fragment key={item.id}>
                <div className="row myBoxClass">
                  <div className="ui grid">
                    <div className="two wide column">
                      <img
                        style={{ maxHeight: 80 }}
                        className="ui fluid image"
                        src={item.image}
                        alt={item.name}
                      />
                    </div>
                    <div className="two wide column center aligned content">
                      <button
                        onClick={() => dispatch(addToCart(item.id))}
                        className="ui compact icon button"
                      >
                        <i className="plus icon"></i>
                      </button>
                      <div>{item.qty}</div>
                      <button
                        onClick={() => {
                          item.qty === 1
                            ? dispatch(removeFromCart(item.id))
                            : dispatch(removeOneFromCart(item.id));
                        }}
                        className="ui compact icon button"
                      >
                        <i className="minus icon"></i>
                      </button>
                    </div>
                    <div className="seven wide column center aligned content">
                      {item.title}
                    </div>
                    <div className="three wide column">
                      {Number((item.price * item.qty).toFixed(2))} $
                    </div>
                    <div className="two wide column center aligned content">
                      <i
                        className="big blue times icon cuorusor"
                        onClick={() => dispatch(removeFromCart(item.id))}
                      ></i>
                    </div>
                  </div>
                </div>
              </React.Fragment>
            ))}
            {cart.length === 0 ? (
              <React.Fragment>
                <div>Przed wyruszeniem w droge nalezy zebrac druzyne</div>
              </React.Fragment>
            ) : (
              <div></div>
            )}
          </div>
          <div className="six wide column">
            <div className="myBigBoxClass">
              <div className="nicePrice center">
                Total Price: {Number(p.toFixed(2))} $
              </div>
              <div className="center">
                <button className="ui positive button">
                  Proceed to checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
    removeOneFromCart: (id) => dispatch(removeOneFromCart(id)),
    removeFromCart: (id) => dispatch(removeFromCart(id)),
  };
};

export default connect(null, mapDispatchToProps)(CartComponent);
