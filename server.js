const express = require('express');
const path = require('path');

const app = express();
const port = 3000; // You can change this to any port you prefer

const staticFilesDirectory = path.join(__dirname, ''); // Replace 'your_directory' with the name of your directory

// Serve static files
app.use(express.static(staticFilesDirectory));

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
