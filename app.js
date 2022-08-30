const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello My New World!
吃了莫？
20220830 宣
'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
