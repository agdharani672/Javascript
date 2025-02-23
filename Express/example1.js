const express = require("express");

const app = express();

app.get("/", function(req, res) {
    const a = req.query.a;
    const b = req.query.b;
    const sum=parseInt(a)+parseInt(b);
    res.json({ output: sum });
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});