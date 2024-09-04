let express = require("express");
let app = express();
const port = 5000;
const mongoDB = require("./db");
mongoDB();

app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
})
app.get("/",(req, res)=>{
    res.send("Response send")
})
//using thunder client we can send post request on it
app.use(express.json()) 
app.use("/api",require("./Routes/CreateUsers"))            //user naam d collection bna reha hai database de vich
app.use("/api",require("./Routes/DisplayData"))            //user naam d collection bna reha hai database de vich
app.use("/api",require("./Routes/OrderData"))
app.listen(port, ()=>{
    console.log("Port no. 5000 is in use....")
})

