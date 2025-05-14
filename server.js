// server.js
const express = require('express');
const path = require('path');
const app = express();

// Serve static files (HTML, CSS, JS, images)
app.use(express.static(path.join(__dirname, 'views', 'public')));

// Default route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html', 'public'));
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
