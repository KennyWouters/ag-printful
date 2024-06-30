require('dotenv').config({path: '../../.env'});
const axios = require('axios');


// Define the data to be sent Based on the data sent from the frontend when the user places an order
// This data will be sent to Printful API to create an order
// The data should be in the format specified by the Printful API
// The data should be sent as a JSON object
// The data should include the recipient's name, address, city, state, country, zip, items, and files
// The items should include the variant_id, quantity, and files
// The files should include the URL of the file to be printed
// The variant_id should be the ID of the product variant to be printed
// The quantity should be the number of items to be printed
// The URL should be the URL of the file to be printed

const data = {
    "recipient": {
        "name": "recipients name",
        "address1": "12 address avenue, Bankstown",
        "city": "Sydney",
        "state_code": "NSW",
        "country_code": "AU",
        "zip": "2200"
    },
    "items": [
        {
            "variant_id": 11513,
            "quantity": 1,
            "files": [
                {
                    "url": "http://example.com/files/posters/poster_1.jpg"
                }
            ]
        }
    ]
};


// console.log(process.env.API_KEY);
async function createOrder(data) {
    try {
        // Make the POST request with the defined headers and data
        const response = await axios({
            method: 'post',
            url: 'https://api.printful.com/orders',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.API_KEY}`,
            },
            data: data
        });

        // Log the response data returned by the Printful API
        // This data will include the order ID, status, and other details
        console.log(response.data);
    } catch (error) {
        console.error(error);
        // Log the error
        console.log(error);
    }
}
// Use the createOrder function to create an order

// createOrder(data);

// To be verified, does the function actually send order to Printful API?