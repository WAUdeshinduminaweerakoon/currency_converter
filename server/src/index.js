const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();

//middle wares
app.use(express.json());
app.use(cors());

//all currences
app.get("/getAllCurrencies",async (req, res)=>{
    const nameURL =`https://openexchangerates.org/api/currencies.json?
    app_id=9db4ee8133ce45a691c87ff9c26cf3b8`;
 
   
    try {
        const namesResponce = await axios.get(nameURL);
        const nameData = namesResponce.data;
    
        return res.json(nameData);
        
    } catch (error) {
        console.log(error)
        
    }
})

//listen to a port
app.listen(5000, ()=>{
    console.log("SERVER STARTED");
})