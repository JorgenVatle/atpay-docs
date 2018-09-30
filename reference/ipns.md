# IPNs
Whenever a payment is confirmed on our end, we send a copy of the payment details object from the payment processor as
well as a copy of the order object to the URL you specified in the `ipnUrl` field during order creation.

## Example Payload 
<<< snippets/payload/order-ipn.json