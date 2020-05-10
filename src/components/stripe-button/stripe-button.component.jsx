import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_P2wsTEzcSqaG01WzR9l3nXvY00hRMI195j';
  const onToken = (token) => {
    console.log(token);
    alert('Payment Successful');
  };

  return (
    <StripeCheckout
      label="BUY NOW"
      name="st. Jouz"
      billingAddress
      shippingAddress
      //   image='https://sendeyo.com/up/d/f3eb2117da'
      image="https://svgshare.com/i/CUz.svg"
      description={`TOTAL: $${price}`}
      amout={priceForStripe}
      panelLabel={`PAY TOTAL: $${price}`}
      token={onToken}
      stripeKey={publishableKey}
      alipay
      bitcoin
      allowRememberMe
    />
  );
};

export default StripeCheckoutButton;
