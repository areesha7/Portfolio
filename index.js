const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the "assets" directory
app.use(express.static(path.join(__dirname, 'assets')));

// Serve the main HTML file on the root URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server on port 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
