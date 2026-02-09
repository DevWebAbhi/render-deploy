const express = require("express");

const app = express();

app.get("/",(req,res)=>res.send("This is deployed backend"))


app.listen(3500,()=>console.log("Server is running on port 3500"))