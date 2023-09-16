const express = require('express');
require('dotenv').config()
const uploadRoute = require('./controller/routeUpload');

const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());


//the route 
app.use("/api/users" , uploadRoute);


//port connection 
app.listen(PORT, () => {
  console.log(`listening at http://localhost:${PORT}`);
});
