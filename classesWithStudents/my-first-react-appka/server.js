const express = require('express');
const app = express();
const PORT = 5000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
	res.json({ message: 'Welcome to the server!' });
});

app.get('/api/hello', (req, res) => {
	res.json({ message: 'Hello from Express!' });
});

// Start server
app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
