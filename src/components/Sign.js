import { Client, Account, ID } from "appwrite";

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('66b2699f003e24b1712e');               // Your project ID

const account = new Account(client);

const promise = account.create('[USER_ID]', 'email@example.com', '');

promise.then(function (response) {
    console.log(response); // Success
}, function (error) {
    console.log(error); // Failure
});
