const express = require('express');

const app = express();

// define the port
const port = 3000;

// route for test
app.get('/test', (req, res) => {
    res.json({ message: 'Express is working! Write your full name' });
});

// start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});