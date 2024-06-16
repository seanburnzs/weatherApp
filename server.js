const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api-key', (req, res) => {
    res.json({ apiKey: process.env.API_KEY });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
