const express = require('express');
require('dotenv').config();


const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());



// route
app.get('/', (req, res) => {
    res.send('Hello World!')
})


// listen
app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`)
})