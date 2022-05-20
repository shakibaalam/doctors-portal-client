
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckoutForm = ({ appoinment }) => {
    const { price, patientName, patient, _id } = appoinment;
    const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const elements = useElements();
    const stripe = useStripe();

    useEffect(() => {
        fetch('https://frozen-tor-71174.herokuapp.com/create-payment-intent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ price })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data?.clientSecret) {
                    setClientSecret(data.clientSecret);
                }
            })
    }, [price]);

    const handleSubmit = async e => {
        e.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        setCardError(error?.message || '');

        //confirm card payment
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: patientName,
                        email: patient
                    },
                },
            },
        );
        if (intentError) {
            setCardError(intentError?.message);
            setSuccess('')
        }
        else {
            setCardError('')
            setTransactionId(paymentIntent.id)
            setSuccess('Congrats ! your payment is done');
            console.log(paymentIntent);
            const payment = {
                appoinment: _id,
                transactionId: paymentIntent.id
            };

            fetch(`https://frozen-tor-71174.herokuapp.com/booking/${_id}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);

                })

        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button type="submit" className='btn btn-success btn-sm mt-5 text-white' disabled={!stripe || !clientSecret}>
                Pay
            </button>
            {
                cardError && <p className='text-red-500 mt-3'>{cardError}</p>
            }
            {
                success && <div>
                    <p className='text-success my-3'>{success}</p>
                    <p >Your transaction id : <span className='text-orange-500'>{transactionId}</span></p>
                </div>
            }

        </form>
    );
};

export default CheckoutForm;