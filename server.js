require ('dotenv').config();
console.log(process.env.API_KEY);

// 1. Importing express
const express = require('express');

// 2. Creating express instance
const app = express();

// 3. Defining route to manage http requests
app.get('/', (req, res) => {
  res.send('Server up and running guyz!/ Have a nice day and Happy coding! ;). K');
});

// 4. Starting server on a specific port
const port = 3001;
app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
});

