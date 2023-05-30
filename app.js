const express = require("express");
const dbConnect = require("./db/dbconn");

require("dotenv").config();
const port = process.env.Port;

const bodyParser = require('body-parser');


const app = express();
// routes

const userRoute=require('./routes/user')
const staticFIleRoute=require('./routes/staticRoutes')

// cnnect with database
dbConnect();
// json middleware
app.use(express.json())
app.use(bodyParser.urlencoded({extended:false}))



//middlewares for routes
app.use("/user",userRoute) 

// static file serve
app.use("/user",staticFIleRoute)






app.listen(port, () => {
  console.log(`sever is start at http://127.0.0.1:${port}`);
});


