const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware (if any) - e.g. to handle JSON
app.use(express.json());

// Define a simple route for testing
app.get('/', (req, res) => {
  res.send('Server is running');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
