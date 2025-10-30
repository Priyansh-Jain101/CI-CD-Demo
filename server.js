import express from "express";
import sum from "./sum.js";

const app = express();
const port = 8080;

app.get("/home", async (req, res)=>{
    res.json({
        msg: "I am the root!"
    });
})

app.get("/getSum/:a/:b", async (req, res)=>{
    const {a,b} = req.params;
    res.json({
        sum: sum(parseInt(a), parseInt(b)) 
    });
})

app.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
})