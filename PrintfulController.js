const express = require('express');
const router = express.Router();
const PrintfulService = require('./PrintfulService');

router.get('/products', async (req, res) => {
  try {
    const products = await PrintfulService.getProducts();
    res.json(products);
  } catch (error) {
    res.status(500).send('Failed to fetch products');
  }
});

router.post('/order', async (req, res) => {
  try {
    const { recipient, items } = req.body;
    console.log('Recipient Data:', recipient); // Debugging line
    console.log('Items Data:', items); // Debugging line
    const orderData = {
      recipient,
      items
    };

    console.log('Order Data:', orderData); // Debugging line

    const result = await PrintfulService.postOrder(orderData);

    res.json(result);
  } catch (error) {
    console.error('Error:', error.response ? error.response.data : error.message);
    res.status(500).send('Failed to post order');
  }
});

module.exports = router;