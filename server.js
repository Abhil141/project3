const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Dummy user database
const users = [
    { username: 'admin', password: 'admin123' },
    { username: 'user', password: 'user123' }
];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve login.html
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/login.html');
});

// Handle login POST request
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        res.json({ success: true });
    } else {
        res.json({ success: false });
    }
});

// Serve dashboard.html
app.get('/dashboard', (req, res) => {
    res.send('Welcome to the dashboard!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
