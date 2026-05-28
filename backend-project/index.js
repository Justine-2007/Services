const express = require("express");
const cors = require("cors");
const session = require("express-session");

const app = express();

app.use(cors());
app.use(express.json());

app.use(session({
    secret: "secret",
    resave: false,
    saveUninitialized: true
}));

app.use("/sparepart", require("./routes/sparepart"));
app.use("/stockin", require("./routes/stockin"));
app.use("/stockout", require("./routes/stockout"));
app.use("/auth", require("./routes/auth"));

app.listen(5000, ()=>{
    console.log("Server Running on Port 5000");
});