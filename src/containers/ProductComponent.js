import React from "react";
import { Link } from "react-router-dom";
import { connect, useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/actions/productActions";
import Header from "./Header";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();
  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <div className="four wide column" key={id}>
        <div className="ui cards">
          <div className="card">
            <Link to={`/product/${id}`} className="linkacz">
              <div className="image">
                <img src={image} alt={title} />
              </div>
            </Link>
            <div className="content">
              <div className="header">{title}</div>
              <div className="meta price">$ {price}</div>
              <div className="meta">{category}</div>
              <div
                onClick={() => dispatch(addToCart(id))}
                className="ui vertical animated button fluid"
                tabIndex="0"
              >
                <div className="hidden content">
                  <i className="shop icon"></i>
                </div>
                <div className="visible content">Add to Cart</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <>
      <Header />
      {renderList}
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
  };
};

export default connect(null, mapDispatchToProps)(ProductComponent);
