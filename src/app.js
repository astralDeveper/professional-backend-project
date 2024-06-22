import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();


// it is setting up the cors for the client that which client can send data to our backend 
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentialsL: true,
  })
);

// this is used to setup the config for accessing json files form client and setup the limit to save the server from crashing
app.use(
  express.json({
    limit: "16kb",
  })
);

// this is used to access data from url and set the limit for data 
app.use(express.urlencoded({extended:true,limit:"16kb"}))

// sometimes we need to store some files to our server so that will save those files to public folder that we have created 
app.use(express.static("public"))
// this will read the users browser cookie and also write cookie to users brower 
app.use(cookieParser())
export default app;
