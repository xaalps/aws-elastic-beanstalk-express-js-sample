const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello My New World! \n <br> ANYONE HERE WANT EAT? 有人吃饭么？\n <br> 20220831宣 '));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
