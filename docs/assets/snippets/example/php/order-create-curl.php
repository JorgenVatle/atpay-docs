<?php

// PHP Version Requirement: 7.0+

function createOrder(string $orderId, int $valueInCents) {
    $apiKey = 'my-secret-api-key'; // Your API key goes here.
    $curl = curl_init();

    curl_setopt_array($curl, [
        CURLOPT_URL => "https://atpay.io/api/order/create",
        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
        CURLOPT_CUSTOMREQUEST => "POST",
        CURLOPT_HTTPHEADER => [
            "Cache-Control: no-cache",
            "Content-Type: application/json",
            "X-Authorization: $apiKey"
        ],
        CURLOPT_POSTFIELDS => json_encode([
            'customInvoiceId' => $orderId,
            'value' => $valueInCents,
            'currency' => 'USD',
            'ipnUrl' => 'https://api.my-app.com/ipn',

            'redirectUrls' => [
                'return' => 'https://my-app.com/order/cancel',
                'success' => 'https://my-app.com/order/success',
            ]
        ]),
    ]);

    return curl_exec($curl);
}