import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import "./component.css";
import StripeContainer from './StripeContainer';
import Header from "./Header";

function CheckoutComponent() {
  const cart = useSelector((state) => state.allProducts.cart);
  const [totalPrice, setTotalPrice] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    if (cart.length !== 0) {
      setTotalPrice(
        cart
          .map((item) => item.qty * item.price)
          .reduce((prev, next) => prev + next)
      );
    } else {
      setTotalPrice(0);
    }
  }); // Only re-run the effect if count changes
	const [showItem, setShowItem] = useState(false);
	return (
		<div className='CheckoutComponent'>
            <Header />
			<h1>Total Price</h1>
			{showItem ? (
				<StripeContainer />
			) : (
				<>
					<h3>{Number(totalPrice.toFixed(2))}  $</h3>
					<button className='specialButton' onClick={() => setShowItem(true)}>Purchase</button>
				</>
			)}
		</div>
	);
}

export default CheckoutComponent;