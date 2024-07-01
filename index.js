const express = require('express');
const app = express();
const printfulRouter = require('./PrintfulController');
require('dotenv').config();
console.log(process.env.PRINTFUL_API_KEY);

app.use(express.json()); // for parsing application/json
app.use('/printful', printfulRouter);

// other app setup code...

app.listen(3000, () => console.log('Server running on port 3000'));