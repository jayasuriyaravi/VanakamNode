//creating the server using the express
const express = require("express");
const app = express();

//for all the request the server is responding with this responce  -> because it mathches all the routes with "/"
//order of the routes matters a lot while use() method
// app.use("/", (req, res) => {
//   res.send("iam from the server ");
// });

// app.use("/test", (req, res) => {
//   res.send("iam from the testing route");
// });

// app.get("/home", (req, res) => {
//   res.send("we are from the home");
// });

// //dynamic routing
// app.get("/user/:id", (req, res) => {
//   res.send("the user id is : " + req.params.id);
// });

// // Query parameter route
// app.get("/user", (req, res) => {
//   res.send("the user id is : " + req.query.id + "" + req.query.fellow);
// });

// app.use("/home", (req, res) => {
//   //route hander
// });

//one route can has the multiple request hander
app.use(
  (req, res,next) => {
    res.send("1st handler");
    next();// this function pass the handling to the next handler
  },
  (req, res) => {
    res.send("2nd handler")
  }
);

//listening to the server port no 3031
app.listen(3031, () => {
  console.log("App is connected to the server 3031");
});
