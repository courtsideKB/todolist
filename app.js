const express = require("express");
const bodyParser = require("body-parser");
const res = require("express/lib/response");

const app = express();

app.get("/", () => {
    res.send("Hello!");
}); 

app.listen(3000, () => {
    console.log("Listening on port 3000");
});