const axios = require('axios');


// Define the data to be sent
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
console.log('process.env.API_KEY', process.env.API_KEY);
async function createOrder(data) {
    try {
        // Make the POST request with the defined headers and data
        const response = await axios({
            method: 'post',
            url: 'https://api.printful.com/orders',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer UHIQzN4tGcxoEvW9UoZtfN3kfAGb0x4NdfASMwp0`
            },
            data: data
        });

        // Log the response data
        console.log(response.data);
    } catch (error) {
        console.error(error);
        // Log the error
        console.log(error);
    }
}

createOrder(data);