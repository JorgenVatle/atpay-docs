---
sidebarDepth: 3
---
# PHP
Accessing the ATPay API through PHP couldn't be simpler. 
Below, you will find examples for communicating with the API through [Guzzle](#guzzle) and [cURL](#curl).

::: tip CHECK YOUR PHP VERSION
The below examples assume you're using PHP v7 or greater. <br>
If you're on an older version, remove the type definitions from the below functions. <br>
If you're below PHP v5.4, replace the `[]` array references with `array()` 
:::

## cURL
Likely the easier option if you don't have a package manager set up for your project.

[PHP cURL Reference](http://php.net/manual/ro/book.curl.php)
### Create Order
<<< docs/assets/snippets/example/php/order-create-curl.php

## Guzzle
A more robust option for applications with Guzzle or a package manager already installed.

[Guzzle Documentation](http://docs.guzzlephp.org/en/stable/index.html)
### Create Order
<<< docs/assets/snippets/example/php/order-create.php