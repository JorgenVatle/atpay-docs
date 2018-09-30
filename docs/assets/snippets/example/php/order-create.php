<?php

class ATPay {

    protected $client;

    public function __construct() {
        $this->client = new GuzzleHttp\Client([
            'base_uri' => 'https://atpay.io/api',
            'headers' => [
                'X-Authorization' => 'super-secret' // Your API key goes here.
            ],
        ]);
    }

    public function createOrder(string $invoiceId, int $valueInCents) {
        $response = $this->client->request('POST', 'order/create', [
            'json' => [
                'customInvoiceId' => $invoiceId,
                'value' => $valueInCents,
                'currency' => 'USD',
                'ipnUrl' => 'https://api.my-app.com/ipn',

                'redirectUrls' => [
                    'return' => 'https://my-app.com/order/cancel',
                    'success' => 'https://my-app.com/order/success',
                ]
            ]
        ]);

        return $response->getBody();
    }
}