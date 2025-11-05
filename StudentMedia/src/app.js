//creating the server using the express
const express = require("express");
const app = express();

//for all the request the server is responding with this responce  -> because it mathches all the routes with "/"
//order of the routes matters a lot while use() method 
app.use("/", (req, res) => {
  res.send("iam from the server ");
});

app.use("/test", (req, res) => {
  res.send("iam from the testing route");
});

//listening to the server port no 3031
app.listen(3031, () => {
  console.log("App is connected to the server 3031");
});
