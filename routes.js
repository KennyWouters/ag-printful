const express = require('express');
const router = express.Router();
const PrintfulService = require('./PrintfulService');

router.post('/printful/orders', async (req, res) => {
  try {
    const { recipient, items } = req.body;
    const orderData = {
      recipient,
      items
    };

    const result = await PrintfulService.postOrder(orderData);

    res.json(result);
  } catch (error) {
    console.error('Error:', error.response ? error.response.data : error.message);
    res.status(500).send('Failed to post order');
  }
});

module.exports = router;