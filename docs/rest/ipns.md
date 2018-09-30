# IPNs
Whenever a payment is confirmed on our end, we send a copy of the payment details object from the payment processor as
well as a copy of the order object to the URL you specified in the `ipnUrl` field during order creation.

## Validating The IPN Authenticity
All IPNs come with an `X-Authorization` header. This should match up with your API key. If it doesn't, simply discard
the IPN as it most likely doesn't originate from us.

## Example Payload 
<<< assets/snippets/payload/order-ipn.json

## Order Status Updates
Whenever the `status` of a given order changes, another IPN is sent to your `ipnUrl` with an updated `order` object.

| Status       | Description                                                                                 | Recommended Action                                            |
|--------------|---------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| `created`    | Order was just created and hasn't been paid yet.                                            | N/A                                                           |
| `validating` | Order is still being validated by our systems.                                              | N/A                                                           |
| `pending`    | A payment _request_ has been registered for the order, but funds haven't been received yet. | Do not fulfill the order.                                     |
| `cancelled`  | The payment request was cancelled.                                                          | Do not fulfill the order. Evt. ask the customer to try again. |
| `completed`  | Order has been paid and fraud checks have passed.                                           | Fulfill the order.                                            |
| `refunded`   | The order has been refunded.                                                                | This depends on _your_ refund policy.                         |
| `chargeback` | A chargeback has been received for the order.                                               | Remove or disable any associated items from the order.        |