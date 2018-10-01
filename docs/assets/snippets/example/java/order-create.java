ATPay instance = new ATPay("123456"); //Build an ATPay Client with the default OkHttpClient (this can be changed if you need a proxy, etc)
try
{
    Order order = Order.builder() //Create a new Object Builder
                        .id("1223") //Set a Unique ID for the order for your records
                        .currency("USD") //Set the currency for the order. Currently only "USD" is supported
                        .failureReturnURL("https://atpay.io/failure") //Set the URL to return to on order cancel/order failure
                        .successReturnURL("https://atpay.io/success") //Set the URL to return to on order success
                        .value(1000) //Set the value of the order in CENTS. So 1$ USD = 100 Cents.
                        .build(); // Build the Order
    String checkoutURL = instance.newOrder(order); //Submit the order to the ATPay API
}
catch (OrderCreationException e)
{
    //Handle Creation Error
}
catch (IOException ex)
{
    //Handle IO Error
}
