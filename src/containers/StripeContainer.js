import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import React from "react"
import PaymentForm from "./PaymentForm"

const PUBLIC_KEY = "pk_test_51Ln0VcLdfPYgxJL0ZvtWAw0VFjaxn8wVyPInkafOm1S3v2WXLmUjjqfMvRRDjiSMUSb6UDWWdSDHgwxPWgfGdFyW00geyPb4MQ"

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer() {
	return (
		<Elements stripe={stripeTestPromise}>
			<PaymentForm />
		</Elements>
	)
}
