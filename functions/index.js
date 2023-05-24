const express = require('express');
const axios = require('axios');

const app = express();

// Define routes
app.get('/api/data', async (req, res) => {
  try {
    const response = await axios.get('http://localhost:3010/notes'); // Replace with your JSON data source URL
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start the server
app.listen(process.env.PORT || 3000, () => {
  console.log('Server is running');
});
