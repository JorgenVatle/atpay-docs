# API Introduction
To get started with using our API, you will need an API key. 
This will be given out by your ATPay account manager. 
If you've lost your key or you need it renewed, please contact 
[merchantsupport@atpay.io](mailto:merchantsupport@atpay.io)

If you don't yet have a merchant account, please view our onboarding information:
- [ATPay Onboarding](/onboarding)

## Base URI
```
https://atpay.io/api
```

## Authentication
All requests to our REST API needs to have an `X-Authorization` header with your API key.
```
X-Authorization: Your-API-Key-Here
```