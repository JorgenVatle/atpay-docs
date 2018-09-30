const config = {
    apiKey: 'something-secret', // Your ATPay API Key
};

const Request = require('request-promise').defaults({
    headers: { 'X-Authorization': config.apiKey }
});

async function createOrder(customInvoiceId, valueInCents) {
    return await Request('https://atpay.io/api/order/create', {
        json: {
            customInvoiceId,
            value: valueInCents,
            currency: 'USD',
            ipnUrl: 'https://api.my-app.com/ipn',

            redirectUrls: {
                return: 'https://my-app.com/order/cancel',
                success: 'https://my-app.com/order/success'
            }
        }
    });
}

createOrder('some-invoice-id', 1337).then((paymentUri) => {
    console.log(`Here is your payment URI as requested: ${paymentUri}`);

    // Todo: Redirect customers to the `paymentUri` for payment.

});