const Request = require('request-promise').defaults({
    headers: { 'X-Authorization': require('./atpay-config').apiKey }
});

async function createOrder(customInvoiceId) {
    return await Request('https://atpay.io/api/order/create', {
        json: {
            customInvoiceId,
            value: 1337,
            currency: 'USD',
            ipnUrl: 'https://api.my-app.com/ipn',

            redirectUrls: {
                return: 'https://my-app.com/order/cancel',
                success: 'https://my-app.com/order/success'
            }
        }
    });
}