const axios = require('axios');
require('dotenv').config();

// console.log(process.env.PRINTFUL_API_KEY); // Debugging line

class PrintfulService {
  static get apiKey() {
    console.log('Printful API Key:', process.env.PRINTFUL_API_KEY); // Debugging line
    return process.env.PRINTFUL_API_KEY;
  }

  static get baseUrl() {
    console.log('Base URL:', 'https://api.printful.com'); // Debugging line
    return 'https://api.printful.com';
  }

  static async getProducts() {
    console.log('Fetching products...'); // Debugging line
    const response = await axios.get(`${this.baseUrl}/products`, {
      headers: {
        'Authorization': `Bearer ${this.apiKey}`
      }
    });
    return response.data;
  }

  static async postOrder(orderData) {
    console.log('Posting order:', orderData); // Debugging line
    const response = await axios.post(`${this.baseUrl}/orders`, orderData, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.apiKey}`
      }
    });
    return response.data;
  }
}

// Call the getProducts method
PrintfulService.getProducts()
    .then(products => console.log(products))
    .catch(error => console.error(error));

module.exports = PrintfulService;