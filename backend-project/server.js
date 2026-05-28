const express = require("express");
const cors = require("cors");
const app=express();

app.use(express.json());
app.get("/", (req,res) =>{
res.send("server is running ")
});

const authRoutes = require("./routes/auth");
app.use("/api/auth", authRoutes);

app.listen(5000, ()=>{
console.log("server runnning on port 5000")
});