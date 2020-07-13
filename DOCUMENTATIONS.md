# WHEATHER API DOC 
API URL:`https://wheather-api-by-tk.herokuapp.com/api/`  
The API gets wheather condition of a place using the [weatherstack](https://weatherstack.com/quickstart) weather API. It allows for only registered users to access the API. Here is how to access wheather condition of an area:

## USER ENDPOINT
### Registeration of new user
To register as a user, you need to provide `username` and `password`. On successful registeration. Here's how to go about registeration:
`REQUEST METHOD: POST`  
```js
// URL: https://wheather-api-by-tk.herokuapp.com/api/register
// BODY:
{
	"username":"USERNAME_HERE",
	"password":"PASSWORD_HERE"
}
```
On successful registeration, the following will be the response:
```js
{
    "erorred": false,
    "message": {
        "username": "USERNAME_HERE"
    }
}
```
### Login of a registered user
Once you have successfully registered, go ahead and provide same data to login. Only when you login that you can get a `token` which will be used to access the weather API and valid only for 24hours from the time the token is created which will then demand that you login again to obtain another one.  
`REQUEST METHOD: POST`  
```js
// URL: https://wheather-api-by-tk.herokuapp.com/api/login
// BODY:
{
	"username":"USERNAME_HERE",
	"password":"PASSWORD_HERE"
}
```
On successful login, a token will be created and response:
```js
{
    "erorred": false,
    "message": {
        "token": "1594585276290_xs7www00fti",
        "exires_in_days": 1
    }
}
```

## Accessing wheather API
To access the weather API, one must pass two parameters: `location` and access `token` (generated when you logged in). Here's how to go about it:  
`REQUEST METHOD: POST`  
```js
// URL: https://wheather-api-by-tk.herokuapp.com/api/wheather
// BODY:
{
	"token":"1594585276290_xs7www00fti",
	"location":"Nigeria" // enter only city or country names
}
```
On successful verification of access token, the weather API will then fetch the wheather condition and display as thus:
```js
{
    "erorred": false,
    "message": {
        // wheather API in JSON format here 
        // ....
    }
}
```

## ERRORS
Any request to the aforementioned endpoints that results to an error will have the `errored` property of the object returned to be `true`. Meaning there's an error. The `message` property then displays the error message.
e.g:
```js
{
    "erorred": true,
    "message": "Token has expired or is invalid. Login again to obtain a new token"
}
```
Documention on how to setup the app on local machine cab be found on my github repo: https://github.com/tasiukwaplong/weatherAPI/README.md