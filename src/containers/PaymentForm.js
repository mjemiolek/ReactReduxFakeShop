import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import axios from "axios"
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";


const CARD_OPTIONS = {
	iconStyle: "solid",
	style: {
		base: {
			iconColor: "#c4f0ff",
			color: "#fff",
			fontWeight: 500,
			fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
			fontSize: "16px",
			fontSmoothing: "antialiased",
			":-webkit-autofill": { color: "#fce883" },
			"::placeholder": { color: "#87bbfd" }
		},
		invalid: {
			iconColor: "#ffc7ee",
			color: "#ffc7ee"
		}
	}
}

export default function PaymentForm() {
    const [success, setSuccess ] = useState(false)
    const stripe = useStripe()
    const elements = useElements()

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


    const handleSubmit = async (e) => {
        e.preventDefault()
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement)
        })


    if(!error) {
        try {
            console.log(totalPrice.toFixed(2)*100);
            const {id} = paymentMethod
            const response = await axios.post("http://localhost:4000/payment", {
                amount: Number(totalPrice.toFixed(2)*100),
                id
            })

            if(response.data.success) {
                console.log("Successful payment")
                setSuccess(true)
            }

        } catch (error) {
            console.log("Error", error)
        }
    } else {
        console.log(error.message)
    }
}

    return (
        <>
        {!success ? 
        <form onSubmit={handleSubmit}>
            <fieldset className="FormGroup">
                <div className="FormRow">
                    <CardElement options={CARD_OPTIONS}/>
                </div>
            </fieldset>
            <button className="specialButton">Pay</button>
        </form>
        :
       <div>
           <h2>You just gave me money and will have nothing in return beacuse I dont have your personal data. Congratulations!</h2>
       </div> 
        }
            
        </>
    )
}
