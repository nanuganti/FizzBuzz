const express = require("express");
const app = express();
const port = 3010;

app.use("/getfizzbuzz", (req, res) => {

    res.send("hello world");
});

app.listen(port, () => {
    console.log("listening on 1010 port");
})

// const processFizzBuzz = require("./helloFizzBuzz");

// const outPut = processFizzBuzz([1, 3, 5, "", 15, "A", 23]);
// console.log(outPut);