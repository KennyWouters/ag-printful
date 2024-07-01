const express = require('express');
const { getProducts, createOrder } = require('./printful');

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Printful Integration API');
});

app.get('/products', async (req, res) => {
    try {
        const products = await getProducts();
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.post('/orders', async (req, res) => {
    try {
        const orderData = req.body;
        const order = await createOrder(orderData);
        res.json(order);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

