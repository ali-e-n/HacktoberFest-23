const express = require('express');
const app = express();
const port = 3001;

app.get('/', (req, res) => {
    res.send('Welcome to Hactoberfest - 23!');
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
